import { Link, useParams } from "react-router-dom";
import { FiMinus, FiPlus, FiShoppingCart, FiCheck } from "react-icons/fi";
import { useState } from "react";
import { useProducts } from "../../Hooks/useProducts";
import { useCart } from "../../context/CartContext";

function ProductDetails() {
  const { category, slug } = useParams();
  const { products: allProducts, loading } = useProducts();
  const product = allProducts.find((item) => item.category === category && item.slug === slug);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  function handleAddToCart() {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-[var(--bg)] pt-32 pb-24 flex items-center justify-center">
        <p className="text-[var(--text-secondary)]">Loading product...</p>
      </main>
    );
  }

  if (!product) {
    return (
      <section className="min-h-screen bg-[var(--bg)] pt-40 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-[var(--text)]">Product Not Found</h1>
          <Link to="/products" className="inline-block mt-6 text-[var(--accent)] hover:underline">Back to Products</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[var(--bg)] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="text-sm text-[var(--muted)] flex flex-wrap items-center gap-1">
          <Link to="/" className="hover:text-[var(--accent)] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-[var(--accent)] transition-colors">Products</Link>
          <span>/</span>
          <Link to={"/products/" + product.category} className="hover:text-[var(--accent)] transition-colors capitalize">{product.category}</Link>
          <span>/</span>
          <span className="font-medium text-[var(--text)]">{product.name}</span>
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-12 items-start">
          <div className="lg:sticky lg:top-28">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-sm">
              <img src={product.image} alt={product.name} className="w-full h-[500px] object-contain" />
            </div>
          </div>

          <div>
            <p className="uppercase tracking-[4px] text-[var(--accent)] font-semibold text-sm">{product.category}</p>
            <h1 className="mt-3 text-4xl font-bold text-[var(--text)]">{product.name}</h1>
            <p className="mt-4 text-3xl font-extrabold text-[var(--accent)]">${product.price?.toFixed(2)}</p>
            <p className="mt-6 text-[var(--text-secondary)] leading-8">{product.description}</p>

            <div className="mt-8 space-y-4">
              {[
                {label:"Material",value:product.material},
                {label:"Finish",value:product.finish},
                {label:"Sizes",value:(product.sizes||[]).join(", ")},
                {label:"SKU",value:product.sku}
              ].map(function(obj){return (
                <div key={obj.label} className="flex justify-between border-b border-[var(--border)] pb-3">
                  <span className="font-medium text-[var(--text)]">{obj.label}</span>
                  <span className="text-[var(--text-secondary)]">{obj.value}</span>
                </div>
              )})}
            </div>

            <div className="mt-10">
              <p className="font-semibold text-[var(--text)] mb-4">Quantity</p>
              <div className="flex flex-wrap items-center gap-5">
                <div className="flex items-center border border-[var(--border)] rounded-xl overflow-hidden">
                  <button onClick={function(){if(quantity>1)setQuantity(quantity-1)}} className="px-5 py-3 text-[var(--text-secondary)] hover:bg-[var(--accent)]/10 transition"><FiMinus /></button>
                  <span className="px-6 text-[var(--text)] font-medium">{quantity}</span>
                  <button onClick={function(){setQuantity(quantity+1)}} className="px-5 py-3 text-[var(--text-secondary)] hover:bg-[var(--accent)]/10 transition"><FiPlus /></button>
                </div>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={handleAddToCart}
                    className="flex items-center gap-3 bg-[var(--accent)] hover:bg-[var(--accent)]/90 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:-translate-y-0.5 active:scale-95 shadow-sm"
                  >
                    {added ? <FiCheck /> : <FiShoppingCart />} {added ? "Added!" : "Add To Cart"}
                  </button>
                  <button className="border-2 border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white px-8 py-4 rounded-xl font-semibold transition-all hover:-translate-y-0.5 active:scale-95">Request Quote</button>
                </div>
              </div>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[var(--text)]">Key Features</h2>
              <div className="mt-6 grid md:grid-cols-2 gap-4">
                {product.features.map(function(feature){return (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] shrink-0"></div>
                    <span className="text-[var(--text-secondary)]">{feature}</span>
                  </div>
                )})}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-[var(--text)] mb-10">Related Products</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allProducts.filter(function(item){return item.category===product.category&&item.id!==product.id}).slice(0,4).map(function(item){return (
              <Link key={item.id} to={"/products/"+item.category+"/"+item.slug} className="group bg-[var(--card)] rounded-2xl border border-[var(--border)] shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all">
                <div className="overflow-hidden">
                  <img src={item.image} alt={item.name} className="h-56 w-full object-cover group-hover:scale-110 transition duration-500" />
                </div>
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[3px] text-[var(--accent)] font-semibold">{item.material}</p>
                  <h3 className="mt-3 text-xl font-bold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">{item.name}</h3>
                </div>
              </Link>
            )})}
          </div>
        </div>
      </div>
    </section>
  );
}
export default ProductDetails;