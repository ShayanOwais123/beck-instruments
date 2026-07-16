import { Link } from "react-router-dom";
import { FiFilter } from "react-icons/fi";
import allProducts from "../data/products";

function CategoryPage({
  category,
  title,
  collectionTitle,
  description,
  banner,
  filters,
}) {

  const products = allProducts.filter(
    (product) => product.category === category
  );

  return (

    <section className="lg:mt-30 mt-20 bg-slate-50">

      {/* Banner */}

      <div className="relative h-100 overflow-hidden">

        <img
          src={banner}
          alt={title}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-slate-900/65"></div>

        <div className="absolute inset-0 flex items-center justify-center">

          <div className="text-center text-white px-6">

            <p className="uppercase tracking-[5px] text-blue-300 font-semibold">
              Premium Collection
            </p>

            <h1 className="mt-4 text-4xl lg:text-6xl font-bold">
              {title}
            </h1>

            <p className="mt-5 max-w-2xl mx-auto text-gray-200 leading-7">
              {description}
            </p>

          </div>

        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        {/* Breadcrumb */}

        <div className="text-sm text-gray-500">

          <Link
            to="/"
            className="hover:text-blue-600 transition"
          >
            Home
          </Link>

          <span className="mx-2">/</span>

          <Link
            to="/products"
            className="hover:text-blue-600 transition"
          >
            Products
          </Link>

          <span className="mx-2">/</span>

          <span className="font-medium text-slate-900">
            {title}
          </span>

        </div>

        <div className="mt-10 grid lg:grid-cols-[280px_1fr] gap-10">

          {/* Filters */}

          <aside className="rounded-3xl bg-white p-8 shadow-sm border border-gray-100 h-fit sticky top-28">

            <div className="flex items-center gap-3">

              <FiFilter className="text-xl text-blue-600" />

              <h2 className="text-xl font-bold">
                Filters
              </h2>

            </div>

            {/* Category */}

            <div className="mt-8">

              <h3 className="font-semibold text-slate-900">
                Category
              </h3>

              <div className="mt-4 space-y-3">

                {filters.categories.map((item) => (

                  <label
                    key={item}
                    className="flex items-center gap-3 cursor-pointer"
                  >

                    <input type="checkbox" />

                    <span>{item}</span>

                  </label>

                ))}

              </div>

            </div>

            {/* Material */}

            <div className="mt-8">

              <h3 className="font-semibold text-slate-900">
                Material
              </h3>

              <div className="mt-4 space-y-3">

                {filters.materials.map((item) => (

                  <label
                    key={item}
                    className="flex items-center gap-3 cursor-pointer"
                  >

                    <input type="checkbox" />

                    <span>{item}</span>

                  </label>

                ))}

              </div>

            </div>

            {/* Finish */}

            <div className="mt-8">

              <h3 className="font-semibold text-slate-900">
                Finish
              </h3>

              <div className="mt-4 space-y-3">

                {filters.finishes.map((item) => (

                  <label
                    key={item}
                    className="flex items-center gap-3 cursor-pointer"
                  >

                    <input type="checkbox" />

                    <span>{item}</span>

                  </label>

                ))}

              </div>

            </div>

          </aside>

          {/* Products */}

          <div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">

              <div>

                <h2 className="text-3xl font-bold text-slate-900">
                  {collectionTitle}
                </h2>

                <p className="mt-2 text-gray-600">
                  Showing {products.length} premium instruments
                </p>

              </div>

            </div>
                        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">

              {products.map((product) => (

                <Link
                  key={product.id}
                  to={`/products/${product.category}/${product.slug}`}
                  className="group overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >

                  <div className="overflow-hidden">

                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                    />

                  </div>

                  <div className="p-6">

                    <p className="text-xs uppercase tracking-[3px] text-blue-600 font-semibold">
                      {product.material}
                    </p>

                    <h3 className="mt-3 text-2xl font-bold text-slate-900">
                      {product.name}
                    </h3>

                    <p className="mt-3 text-gray-600 leading-7">
                      {product.shortDescription}
                    </p>

                    <div className="mt-6 flex items-center justify-between">

                      <span className="text-blue-600 font-semibold group-hover:translate-x-1 transition-all">
                        View Details →
                      </span>

                    </div>

                  </div>

                </Link>

              ))}

            </div>

            {/* Pagination */}

            <div className="mt-14 flex justify-center">

              <div className="flex items-center gap-3">

                <button className="h-11 w-11 rounded-xl border border-gray-200 bg-white font-semibold text-blue-600 shadow-sm transition hover:bg-blue-600 hover:text-white">
                  1
                </button>

                <button className="h-11 w-11 rounded-xl border border-gray-200 bg-white font-semibold transition hover:bg-blue-600 hover:text-white">
                  2
                </button>

                <button className="h-11 w-11 rounded-xl border border-gray-200 bg-white font-semibold transition hover:bg-blue-600 hover:text-white">
                  3
                </button>

                <button className="rounded-xl border border-gray-200 bg-white px-5 py-3 font-semibold transition hover:bg-blue-600 hover:text-white">
                  Next →
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}

export default CategoryPage;