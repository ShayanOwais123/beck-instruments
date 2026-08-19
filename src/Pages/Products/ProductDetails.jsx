import { Link, useParams } from "react-router-dom";
import { FiMinus, FiPlus, FiShoppingCart, FiCheck, FiBox, FiImage, FiShare2, FiShield, FiTruck, FiRefreshCw, FiAward } from "react-icons/fi";
import { useState } from "react";
import { useProducts } from "../../Hooks/useProducts";
import { useCart } from "../../context/CartContext";
import Instrument3DViewer from "../../components/Instrument3DViewer";
import confetti from "canvas-confetti";

function ProductDetails() {
  const { category, slug } = useParams();
  const { products: allProducts, loading } = useProducts();
  const product = allProducts.find((item) => item.category === category && item.slug === slug);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [activeTab, setActiveTab] = useState("3d"); // "3d" or "gallery"
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const { addToCart } = useCart();

  // Reset selected image when product changes
  const activeImage = selectedImage || (product?.image);
  const gallery = product?.gallery && product.gallery.length > 0 ? product.gallery : [product?.image];
  const currentSize = selectedSize || (product?.sizes && product.sizes[0]) || "Standard";

  function handleAddToCart() {
    addToCart({ ...product, selectedSize: currentSize }, quantity);
    setAdded(true);

    // Trigger rewarding micro-animation
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#3b82f6", "#10b981", "#6366f1"],
      });
    } catch {
      // Confetti fallback silent
    }

    setTimeout(() => setAdded(false), 2000);
  }

  function handleShare() {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-[var(--bg)] pt-32 pb-24 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-[var(--accent)] border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-[var(--text-secondary)] font-medium">Loading instrument specifications...</p>
        </div>
      </main>
    );
  }

  if (!product) {
    return (
      <section className="min-h-screen bg-[var(--bg)] pt-40 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-[var(--text)]">Product Not Found</h1>
          <p className="mt-3 text-[var(--text-secondary)]">The requested instrument could not be located in our surgical catalog.</p>
          <Link to="/products" className="inline-block mt-6 px-6 py-3 rounded-xl bg-[var(--accent)] text-white font-medium hover:opacity-90 transition">
            Back to Products Catalog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[var(--bg)] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="text-sm text-[var(--muted)] flex flex-wrap items-center gap-1.5 mb-8">
          <Link to="/" className="hover:text-[var(--accent)] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-[var(--accent)] transition-colors">Products</Link>
          <span>/</span>
          <Link to={"/products/" + product.category} className="hover:text-[var(--accent)] transition-colors capitalize">
            {product.category}
          </Link>
          <span>/</span>
          <span className="font-semibold text-[var(--text)]">{product.name}</span>
        </nav>

        {/* Main Grid: Left 3D/Gallery Viewer | Right Specifications & Cart */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Interactive 3D Viewer & Multi-Angle Gallery */}
          <div className="lg:col-span-7 space-y-4">
            {/* View Mode Switch Tabs */}
            <div className="flex items-center justify-between bg-[var(--card)] p-1.5 rounded-2xl border border-[var(--border)] shadow-sm">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab("3d")}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    activeTab === "3d"
                      ? "bg-[var(--accent)] text-white shadow-md"
                      : "text-[var(--text-secondary)] hover:text-[var(--text)] hover:bg-[var(--accent)]/10"
                  }`}
                >
                  <FiBox className="text-base" />
                  <span>3D Interactive Model</span>
                  <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-white/20 ml-1">360°</span>
                </button>

                <button
                  onClick={() => setActiveTab("gallery")}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    activeTab === "gallery"
                      ? "bg-[var(--accent)] text-white shadow-md"
                      : "text-[var(--text-secondary)] hover:text-[var(--text)] hover:bg-[var(--accent)]/10"
                  }`}
                >
                  <FiImage className="text-base" />
                  <span>Photo Gallery ({gallery.length})</span>
                </button>
              </div>

              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)] hover:text-[var(--accent)] px-3 py-2 rounded-lg hover:bg-[var(--accent)]/10 transition mr-1"
                title="Copy Product Link"
              >
                <FiShare2 />
                <span className="hidden sm:inline">{copiedLink ? "Copied!" : "Share"}</span>
              </button>
            </div>

            {/* Display Stage */}
            {activeTab === "3d" ? (
              <div className="relative">
                <Instrument3DViewer
                  modelType={product.modelType || "scalpel"}
                  productName={product.name}
                  sku={product.sku}
                  finish={product.finish}
                />
              </div>
            ) : (
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-sm relative overflow-hidden flex items-center justify-center min-h-[500px]">
                <img
                  src={activeImage}
                  alt={product.name}
                  className="w-full max-h-[460px] object-contain transition-all duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full border border-white/10">
                  Ultra-HD Studio Photograph
                </div>
              </div>
            )}

            {/* Thumbnail Multi-Angle Bar */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2 pt-1">
              {gallery.map((imgSrc, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedImage(imgSrc);
                    setActiveTab("gallery");
                  }}
                  className={`relative w-20 h-20 rounded-xl border-2 overflow-hidden shrink-0 bg-[var(--card)] transition-all ${
                    activeTab === "gallery" && activeImage === imgSrc
                      ? "border-[var(--accent)] shadow-md scale-105"
                      : "border-[var(--border)] hover:border-[var(--accent)]/50 opacity-80 hover:opacity-100"
                  }`}
                >
                  <img src={imgSrc} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                  <span className="absolute bottom-1 right-1 text-[9px] bg-black/70 text-white font-mono px-1 rounded">
                    #{idx + 1}
                  </span>
                </button>
              ))}

              {/* Quick switch to 3D Button in thumbnail list */}
              <button
                onClick={() => setActiveTab("3d")}
                className={`w-20 h-20 rounded-xl border-2 shrink-0 flex flex-col items-center justify-center gap-1 text-xs font-semibold transition-all ${
                  activeTab === "3d"
                    ? "border-[var(--accent)] bg-[var(--accent)]/15 text-[var(--accent)] shadow-md"
                    : "border-dashed border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text)] hover:border-[var(--accent)]"
                }`}
              >
                <FiBox className="text-xl" />
                <span className="text-[10px]">3D View</span>
              </button>
            </div>

            {/* Quality & Trust Badges */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl border border-[var(--border)] bg-[var(--card)] flex items-center gap-3">
                <FiAward className="text-xl text-[var(--accent)] shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-[var(--text)]">ISO 13485:2016</h4>
                  <p className="text-[10px] text-[var(--text-secondary)]">Medical Grade Certified</p>
                </div>
              </div>
              <div className="p-3.5 rounded-xl border border-[var(--border)] bg-[var(--card)] flex items-center gap-3">
                <FiShield className="text-xl text-[var(--accent)] shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-[var(--text)]">CE Marked</h4>
                  <p className="text-[10px] text-[var(--text-secondary)]">European Standard Compliant</p>
                </div>
              </div>
              <div className="p-3.5 rounded-xl border border-[var(--border)] bg-[var(--card)] flex items-center gap-3">
                <FiTruck className="text-xl text-[var(--accent)] shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-[var(--text)]">Global Shipping</h4>
                  <p className="text-[10px] text-[var(--text-secondary)]">Sterile Sealed Dispatch</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Product Info, Material, Options, Pricing, Add To Cart */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="uppercase tracking-[3px] text-[var(--accent)] font-bold text-xs bg-[var(--accent)]/10 px-3 py-1 rounded-full">
                  {product.category}
                </span>
                <span className="text-xs font-mono text-[var(--text-secondary)]">{product.sku}</span>
              </div>

              <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[var(--text)] tracking-tight">
                {product.name}
              </h1>

              <div className="mt-4 flex items-baseline gap-3">
                <p className="text-4xl font-black text-[var(--accent)]">${product.price?.toFixed(2)}</p>
                <span className="text-xs text-[var(--text-secondary)]">/ Unit (Excl. VAT / Duties)</span>
              </div>

              <p className="mt-4 text-[var(--text-secondary)] leading-relaxed text-sm sm:text-base">
                {product.description}
              </p>
            </div>

            {/* Size / Variant Selector */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="space-y-2">
                <label className="text-xs font-bold text-[var(--text)] uppercase tracking-wider">
                  Select Size / Specification:
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                        currentSize === s
                          ? "bg-[var(--accent)] text-white border-[var(--accent)] shadow-md"
                          : "border-[var(--border)] bg-[var(--card)] text-[var(--text)] hover:border-[var(--accent)]/50"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Technical Specifications Table */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--text)]">
                Technical Specifications
              </h3>
              <div className="space-y-2.5 text-xs sm:text-sm">
                {[
                  { label: "Material Composition", value: product.material },
                  { label: "Surface Finish", value: product.finish },
                  { label: "Sterilization Mode", value: "Autoclavable up to 134°C (273°F)" },
                  { label: "Selected Size", value: currentSize },
                  { label: "Item SKU", value: product.sku },
                ].map((obj) => (
                  <div key={obj.label} className="flex justify-between border-b border-[var(--border)]/60 pb-2">
                    <span className="text-[var(--text-secondary)]">{obj.label}</span>
                    <span className="font-semibold text-[var(--text)] text-right">{obj.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantity Selector & Action Buttons */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--text)]">Order Quantity</span>
                <span className="text-xs text-emerald-600 font-medium">In Stock • Ready to Dispatch</span>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center border border-[var(--border)] bg-[var(--card)] rounded-xl overflow-hidden shadow-sm">
                  <button
                    onClick={() => {
                      if (quantity > 1) setQuantity(quantity - 1);
                    }}
                    className="px-4 py-3 text-[var(--text-secondary)] hover:bg-[var(--accent)]/10 hover:text-[var(--text)] transition"
                    aria-label="Decrease Quantity"
                  >
                    <FiMinus />
                  </button>
                  <span className="px-5 text-[var(--text)] font-bold text-sm">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-3 text-[var(--text-secondary)] hover:bg-[var(--accent)]/10 hover:text-[var(--text)] transition"
                    aria-label="Increase Quantity"
                  >
                    <FiPlus />
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="flex-1 min-w-[200px] flex items-center justify-center gap-3 bg-[var(--accent)] hover:bg-[var(--accent)]/90 text-white px-8 py-3.5 rounded-xl font-bold transition-all hover:-translate-y-0.5 active:scale-95 shadow-lg shadow-[var(--accent)]/25"
                >
                  {added ? <FiCheck className="text-xl animate-bounce" /> : <FiShoppingCart className="text-lg" />}
                  <span>{added ? "Added to Cart!" : `Add to Cart • $${(product.price * quantity).toFixed(2)}`}</span>
                </button>
              </div>

              <div className="flex gap-3 pt-1">
                <Link
                  to="/contact"
                  className="flex-1 text-center border border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent)] text-[var(--text)] py-3 rounded-xl text-xs font-semibold transition"
                >
                  Request Bulk B2B Pricing
                </Link>
                <Link
                  to="/cart"
                  className="flex-1 text-center bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 text-white py-3 rounded-xl text-xs font-semibold transition shadow-sm"
                >
                  View Cart & Checkout
                </Link>
              </div>
            </div>

            {/* Key Clinical Features Grid */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
              <h2 className="text-base font-bold text-[var(--text)]">Clinical & Engineering Highlights</h2>
              <div className="mt-4 grid sm:grid-cols-2 gap-3">
                {product.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-[var(--accent)] shrink-0 mt-1.5"></div>
                    <span className="text-xs text-[var(--text-secondary)] leading-tight">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Grid */}
        <div className="mt-24 border-t border-[var(--border)] pt-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xs uppercase tracking-[3px] text-[var(--accent)] font-bold">Recommended Instruments</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text)] mt-1">Related in this Specialty</h2>
            </div>
            <Link to={"/products/" + product.category} className="text-sm font-semibold text-[var(--accent)] hover:underline">
              View All {product.category} →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allProducts
              .filter((item) => item.category === product.category && item.id !== product.id)
              .slice(0, 4)
              .map((item) => (
                <Link
                  key={item.id}
                  to={"/products/" + item.category + "/" + item.slug}
                  className="group bg-[var(--card)] rounded-2xl border border-[var(--border)] shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1.5 transition-all flex flex-col justify-between"
                >
                  <div className="overflow-hidden bg-slate-950/20 p-6 flex items-center justify-center h-52 relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="max-h-40 w-auto object-contain group-hover:scale-110 transition duration-500"
                    />
                    <span className="absolute top-3 right-3 text-[10px] font-mono bg-black/60 text-white px-2 py-0.5 rounded-full backdrop-blur-md">
                      3D Ready
                    </span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-[2px] text-[var(--accent)] font-bold">{item.material}</p>
                      <h3 className="mt-2 text-base font-bold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors line-clamp-1">
                        {item.name}
                      </h3>
                    </div>
                    <div className="mt-4 flex items-center justify-between border-t border-[var(--border)]/60 pt-3">
                      <span className="font-extrabold text-sm text-[var(--accent)]">${item.price?.toFixed(2)}</span>
                      <span className="text-xs font-medium text-[var(--text-secondary)] group-hover:text-[var(--text)]">
                        Explore →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;