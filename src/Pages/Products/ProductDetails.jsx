import { Link, useParams } from "react-router-dom";
import { FiMinus, FiPlus, FiShoppingCart } from "react-icons/fi";
import { useState } from "react";

import allProducts from "../../Data/Products";

function ProductDetails() {

  const { category, slug } = useParams();

  const product = allProducts.find(
    (item) =>
      item.category === category &&
      item.slug === slug
  );

  const [quantity, setQuantity] = useState(1);

  if (!product) {

    return (

      <section className="mt-40 text-center">

        <h1 className="text-4xl font-bold">
          Product Not Found
        </h1>

      </section>

    );

  }

  return (

    <section className="lg:mt-30 mt-20 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        {/* Breadcrumb */}

        <div className="text-sm text-gray-500">

          <Link
            to="/"
            className="hover:text-blue-600"
          >
            Home
          </Link>

          <span className="mx-2">/</span>

          <Link
            to="/products"
            className="hover:text-blue-600"
          >
            Products
          </Link>

          <span className="mx-2">/</span>

          <Link
            to={`/products/${product.category}`}
            className="hover:text-blue-600 capitalize"
          >
            {product.category}
          </Link>

          <span className="mx-2">/</span>

          <span className="text-slate-900 font-medium">
            {product.name}
          </span>

        </div>

        {/* Product */}

        <div className="mt-10 grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Image */}

          <div>

            <div className="rounded-3xl bg-white p-8 border border-gray-100 shadow-sm">

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-130 object-contain"
              />

            </div>

          </div>

          {/* Right */}

          <div>

            <p className="uppercase tracking-[4px] text-blue-600 font-semibold">

              {product.category}

            </p>

            <h1 className="mt-3 text-4xl font-bold text-slate-900">

              {product.name}

            </h1>

            <p className="mt-6 text-gray-600 leading-8">

              {product.description}

            </p>

            {/* Info */}

            <div className="mt-8 space-y-4">

              <div className="flex justify-between border-b pb-3">

                <span className="font-medium">
                  Material
                </span>

                <span>
                  {product.material}
                </span>

              </div>

              <div className="flex justify-between border-b pb-3">

                <span className="font-medium">
                  Finish
                </span>

                <span>
                  {product.finish}
                </span>

              </div>

              <div className="flex justify-between border-b pb-3">

                <span className="font-medium">
                  Size
                </span>

                <span>
                  {product.size}
                </span>

              </div>

              <div className="flex justify-between border-b pb-3">

                <span className="font-medium">
                  SKU
                </span>

                <span>
                  {product.sku}
                </span>

              </div>

            </div>

            {/* Quantity */}

            <div className="mt-10">

              <p className="font-semibold mb-4">
                Quantity
              </p>

              <div className="flex items-center gap-5">

                <div className="flex items-center border rounded-xl overflow-hidden">

                  <button
                    onClick={() =>
                      quantity > 1 &&
                      setQuantity(quantity - 1)
                    }
                    className="px-5 py-3 hover:bg-gray-100"
                  >

                    <FiMinus />

                  </button>

                  <span className="px-6">

                    {quantity}

                  </span>

                  <button
                    onClick={() =>
                      setQuantity(quantity + 1)
                    }
                    className="px-5 py-3 hover:bg-gray-100"
                  >

                    <FiPlus />

                  </button>

                </div>
                                {/* Buttons */}

                <div className="flex flex-wrap gap-4">

                  <button
                    className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition"
                  >

                    <FiShoppingCart />

                    Add To Cart

                  </button>

                  <button
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition"
                  >

                    Request Quote

                  </button>

                </div>

            </div>

          </div>

        </div>

        {/* Specifications */}

        <div className="mt-20 rounded-3xl bg-white p-10 border border-gray-100 shadow-sm">

          <h2 className="text-3xl font-bold text-slate-900">
            Specifications
          </h2>

          <div className="mt-8 grid md:grid-cols-2 gap-6">

            <div className="flex justify-between border-b pb-4">

              <span className="font-semibold">
                Material
              </span>

              <span>
                {product.material}
              </span>

            </div>

            <div className="flex justify-between border-b pb-4">

              <span className="font-semibold">
                Finish
              </span>

              <span>
                {product.finish}
              </span>

            </div>

            <div className="flex justify-between border-b pb-4">

              <span className="font-semibold">
                Size
              </span>

              <span>
                {product.size}
              </span>

            </div>

            <div className="flex justify-between border-b pb-4">

              <span className="font-semibold">
                SKU
              </span>

              <span>
                {product.sku}
              </span>

            </div>

          </div>

        </div>

        {/* Features */}

        <div className="mt-16 rounded-3xl bg-white p-10 border border-gray-100 shadow-sm">

          <h2 className="text-3xl font-bold text-slate-900">
            Features
          </h2>

          <div className="mt-8 grid md:grid-cols-2 gap-5">

            {product.features.map((feature) => (

              <div
                key={feature}
                className="flex items-center gap-3"
              >

                <div className="w-3 h-3 rounded-full bg-blue-600"></div>

                <span>
                  {feature}
                </span>

              </div>

            ))}

          </div>

        </div>

        {/* Related Products */}

        <div className="mt-20">

          <h2 className="text-3xl font-bold text-slate-900 mb-10">
            Related Products
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {allProducts
              .filter(
                (item) =>
                  item.category === product.category &&
                  item.id !== product.id
              )
              .slice(0, 4)
              .map((item) => (

                <Link
                  key={item.id}
                  to={`/products/${item.category}/${item.slug}`}
                  className="group bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all"
                >

                  <div className="overflow-hidden">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-56 w-full object-cover group-hover:scale-110 transition duration-500"
                    />

                  </div>

                  <div className="p-5">

                    <p className="text-xs uppercase tracking-[3px] text-blue-600 font-semibold">
                      {item.material}
                    </p>

                    <h3 className="mt-3 text-xl font-bold text-slate-900">
                      {item.name}
                    </h3>

                  </div>

                </Link>

              ))}

          </div>

        </div>

      </div>
 </div>
    </section>

  );

}

export default ProductDetails;