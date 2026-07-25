import { Link } from "react-router-dom";
import { FiShoppingCart, FiEye } from "react-icons/fi";
import { useCart } from "../context/CartContext";

function ProductCard({ product, index = 0 }) {
  const { addToCart } = useCart();

  return (
    <div
      className="group animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
        {/* Image Container */}
        <div className="relative overflow-hidden">
          <Link to={`/products/${product.category}/${product.slug}`}>
            <img
              src={product.image}
              alt={product.name}
              className="h-64 w-full object-cover transition-all duration-700 group-hover:scale-110"
            />
          </Link>

          {/* Overlay Actions */}
          <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/40 opacity-0 transition-all duration-400 group-hover:opacity-100">
            <Link
              to={`/products/${product.category}/${product.slug}`}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg transition-all duration-300 hover:bg-[var(--accent)] hover:text-white hover:scale-110"
            >
              <FiEye size={18} />
            </Link>
            <button
              onClick={() => addToCart(product)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg transition-all duration-300 hover:bg-[var(--accent)] hover:text-white hover:scale-110"
            >
              <FiShoppingCart size={18} />
            </button>
          </div>

          {/* Category Badge */}
          <span className="absolute left-4 top-4 rounded-full bg-[var(--accent)]/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white shadow-md backdrop-blur-sm">
            {product.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-[11px] font-semibold uppercase tracking-[3px] text-[var(--accent)]">
            {product.material}
          </p>
          <Link
            to={`/products/${product.category}/${product.slug}`}
            className="mt-2 block text-xl font-bold text-[var(--text)] transition-colors hover:text-[var(--accent)]"
          >
            {product.name}
          </Link>
          <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
            {product.shortDescription}
          </p>

          {/* Features */}
          <div className="mt-4 flex flex-wrap gap-2">
            {product.features.slice(0, 2).map((feature) => (
              <span
                key={feature}
                className="rounded-full bg-[var(--accent)]/5 px-3 py-1 text-[11px] font-medium text-[var(--accent)]"
              >
                {feature}
              </span>
            ))}
            {product.features.length > 2 && (
              <span className="rounded-full bg-[var(--border)] px-3 py-1 text-[11px] font-medium text-[var(--muted)]">
                +{product.features.length - 2}
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="mt-6 flex items-center justify-between border-t border-[var(--border)] pt-4">
            <Link
              to={`/products/${product.category}/${product.slug}`}
              className="group/link flex items-center gap-2 text-sm font-semibold text-[var(--accent)] transition-all duration-300 hover:gap-3"
            >
              View Details
              <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                →
              </span>
            </Link>
            <button
              onClick={() => addToCart(product)}
              className="flex items-center gap-2 rounded-xl bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[var(--accent-dark)] hover:shadow-md active:scale-95"
            >
              <FiShoppingCart size={15} />
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
