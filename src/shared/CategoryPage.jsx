import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { FiFilter, FiX } from "react-icons/fi";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";

const PRODUCTS_PER_PAGE = 6;

function CategoryPage({
  category,
  title,
  collectionTitle,
  description,
  banner,
  filters,
}) {
  const { products: allProducts, loading } = useProducts();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedFinishes, setSelectedFinishes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  function toggleValue(value, list, setList) {
    setCurrentPage(1); // reset to page 1 whenever a filter changes
    setList((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  }

  function clearFilters() {
    setSelectedCategories([]);
    setSelectedMaterials([]);
    setSelectedFinishes([]);
    setCurrentPage(1);
  }

  // Note: filter option labels (e.g. "Stainless Steel") don't always exactly
  // match the raw product data (e.g. "German Stainless Steel"), so we match
  // using "includes" (substring, case-insensitive) instead of strict equality.
  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      if (product.category !== category) return false;

      if (
        selectedCategories.length > 0 &&
        !selectedCategories.some((c) =>
          product.name.toLowerCase().includes(c.toLowerCase())
        )
      ) {
        return false;
      }
      if (
        selectedMaterials.length > 0 &&
        !selectedMaterials.some((m) =>
          (product.material || "").toLowerCase().includes(m.toLowerCase())
        )
      ) {
        return false;
      }
      if (
        selectedFinishes.length > 0 &&
        !selectedFinishes.some((f) =>
          (product.finish || "").toLowerCase().includes(f.toLowerCase())
        )
      ) {
        return false;
      }
      return true;
    });
  }, [category, selectedCategories, selectedMaterials, selectedFinishes]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const paginatedProducts = filteredProducts.slice(
    (safePage - 1) * PRODUCTS_PER_PAGE,
    safePage * PRODUCTS_PER_PAGE
  );

  function goToPage(page) {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const activeFilterCount =
    selectedCategories.length + selectedMaterials.length + selectedFinishes.length;

  return (
    <section className="min-h-screen bg-[var(--bg)] pt-32 pb-24">
      {/* Banner */}
      <div className="relative h-100 overflow-hidden">
        <img src={banner} alt={title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[var(--primary)]/70"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <p className="uppercase tracking-[5px] text-[var(--accent)] font-semibold">
              Premium Collection
            </p>
            <h1 className="mt-4 text-4xl lg:text-6xl font-bold">{title}</h1>
            <p className="mt-5 max-w-2xl mx-auto text-white/70 leading-7">
              {description}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <div className="text-sm text-[var(--muted)]">
          <Link to="/" className="hover:text-[var(--accent)] transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-[var(--accent)] transition-colors">
            Products
          </Link>
          <span className="mx-2">/</span>
          <span className="font-medium text-[var(--text)]">{title}</span>
        </div>

        <div className="mt-10 grid lg:grid-cols-[280px_1fr] gap-10">
          {/* Filters */}
          <aside className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm h-fit sticky top-28">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FiFilter className="text-xl text-[var(--accent)]" />
                <h2 className="text-xl font-bold text-[var(--text)]">Filters</h2>
              </div>
              {activeFilterCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1 text-xs font-semibold text-[var(--accent)] hover:underline"
                >
                  <FiX size={12} /> Clear
                </button>
              )}
            </div>

            {/* Category (matched against product name) */}
            <div className="mt-8">
              <h3 className="font-semibold text-[var(--text)]">Category</h3>
              <div className="mt-4 space-y-3">
                {filters.categories.map((item) => (
                  <label key={item} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(item)}
                      onChange={() =>
                        toggleValue(item, selectedCategories, setSelectedCategories)
                      }
                      className="h-4 w-4 accent-[var(--accent)]"
                    />
                    <span className="text-[var(--text-secondary)]">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Material */}
            <div className="mt-8">
              <h3 className="font-semibold text-[var(--text)]">Material</h3>
              <div className="mt-4 space-y-3">
                {filters.materials.map((item) => (
                  <label key={item} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedMaterials.includes(item)}
                      onChange={() =>
                        toggleValue(item, selectedMaterials, setSelectedMaterials)
                      }
                      className="h-4 w-4 accent-[var(--accent)]"
                    />
                    <span className="text-[var(--text-secondary)]">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Finish */}
            <div className="mt-8">
              <h3 className="font-semibold text-[var(--text)]">Finish</h3>
              <div className="mt-4 space-y-3">
                {filters.finishes.map((item) => (
                  <label key={item} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedFinishes.includes(item)}
                      onChange={() =>
                        toggleValue(item, selectedFinishes, setSelectedFinishes)
                      }
                      className="h-4 w-4 accent-[var(--accent)]"
                    />
                    <span className="text-[var(--text-secondary)]">{item}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Products */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div>
                <h2 className="text-3xl font-bold text-[var(--text)]">{collectionTitle}</h2>
                <p className="mt-2 text-[var(--text-secondary)]">
                  Showing {filteredProducts.length === 0 ? 0 : (safePage - 1) * PRODUCTS_PER_PAGE + 1}
                  {"\u2013"}
                  {Math.min(safePage * PRODUCTS_PER_PAGE, filteredProducts.length)} of{" "}
                  {filteredProducts.length} instruments
                </p>
              </div>
            </div>

            {loading ? (
              <p className="text-[var(--text-secondary)] py-20 text-center">Loading products...</p>
            ) : paginatedProducts.length > 0 ? (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {paginatedProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 rounded-2xl border border-dashed border-[var(--border)]">
                <p className="text-[var(--text-secondary)]">
                  No products match the selected filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-sm font-semibold text-[var(--accent)] hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-14 flex justify-center">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => goToPage(safePage - 1)}
                    disabled={safePage === 1}
                    className="rounded-xl border border-[var(--border)] bg-[var(--card)] px-5 py-3 font-semibold text-[var(--text-secondary)] transition hover:bg-[var(--accent)] hover:text-white disabled:opacity-40 disabled:pointer-events-none"
                  >
                    ← Prev
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => goToPage(page)}
                      className={`h-11 w-11 rounded-xl border font-semibold shadow-sm transition ${
                        page === safePage
                          ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                          : "border-[var(--border)] bg-[var(--card)] text-[var(--text-secondary)] hover:bg-[var(--accent)] hover:text-white"
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    onClick={() => goToPage(safePage + 1)}
                    disabled={safePage === totalPages}
                    className="rounded-xl border border-[var(--border)] bg-[var(--card)] px-5 py-3 font-semibold text-[var(--text-secondary)] transition hover:bg-[var(--accent)] hover:text-white disabled:opacity-40 disabled:pointer-events-none"
                  >
                    Next →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategoryPage;