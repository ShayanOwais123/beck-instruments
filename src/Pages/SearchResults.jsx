import { Link, useSearchParams } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";

function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = (searchParams.get("q") || "").trim().toLowerCase();
  const { products: allProducts, loading } = useProducts();

  const results = query
    ? allProducts.filter((product) => {
        const haystack = [
          product.name,
          product.category,
          product.material,
          product.finish,
          product.shortDescription,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();
        return haystack.includes(query);
      })
    : [];

  return (
    <main className="min-h-screen bg-[var(--bg)] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <p className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/5 px-5 py-1.5 text-xs font-semibold uppercase tracking-[3px] text-[var(--accent)]">
            <FiSearch size={12} /> Search Results
          </p>
          <h1 className="mt-5 text-3xl lg:text-4xl font-extrabold text-[var(--text)]">
            {query ? `Results for "${query}"` : "Search our products"}
          </h1>
          <p className="mt-3 text-[var(--text-secondary)]">
            {results.length} product{results.length !== 1 ? "s" : ""} found
          </p>
        </div>

        {loading ? (
          <p className="text-[var(--text-secondary)] py-20 text-center">Loading...</p>
        ) : results.length > 0 ? (
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {results.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[var(--accent)]/10 mb-8">
              <FiSearch size={36} className="text-[var(--accent)]" />
            </div>
            <h2 className="text-2xl font-bold text-[var(--text)]">No products found</h2>
            <p className="mt-3 text-[var(--text-secondary)]">
              Try a different keyword, or browse our full catalog.
            </p>
            <Link
              to="/products"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95"
            >
              Browse Products
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}

export default SearchResults;