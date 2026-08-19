import { Link } from "react-router-dom";
import { FiTrash2, FiMinus, FiPlus, FiShoppingBag, FiArrowLeft } from "react-icons/fi";
import AnimatedSection from "../components/AnimatedSection";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen bg-[var(--bg)] pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center py-24">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[var(--accent)]/10 mb-8">
              <FiShoppingBag size={36} className="text-[var(--accent)]" />
            </div>
            <h1 className="text-3xl font-bold text-[var(--text)]">Your Cart is Empty</h1>
            <p className="mt-4 text-[var(--text-secondary)]">Looks like you haven't added any products yet.</p>
            <Link
              to="/products"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95"
            >
              <FiArrowLeft size={16} /> Browse Products
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--bg)] pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl lg:text-4xl font-extrabold text-[var(--text)]">Shopping Cart</h1>
            <p className="mt-2 text-[var(--text-secondary)]">
              {cartItems.length} item{cartItems.length !== 1 ? "s" : ""} in your cart
            </p>
          </div>
          <button
            onClick={clearCart}
            className="rounded-xl border border-[var(--error)]/20 bg-[var(--error)]/10 px-5 py-3 text-sm font-semibold text-[var(--error)] transition-all hover:bg-[var(--error)]/20 hover:-translate-y-0.5"
          >
            Clear Cart
          </button>
        </div>

        <div className="grid lg:grid-cols-[1fr_380px] gap-10">
          <div className="space-y-5">
            {cartItems.map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 0.05}>
                <div className="flex flex-col sm:flex-row gap-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="shrink-0">
                    <img src={item.image} alt={item.name} className="h-28 w-28 rounded-xl object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[3px] text-[var(--accent)] font-semibold">
                          {item.category}
                        </p>
                        <h3 className="mt-1 text-lg font-bold text-[var(--text)] truncate">{item.name}</h3>
                        <p className="mt-1 text-sm text-[var(--text-secondary)]">
                          ${item.price?.toFixed(2)} each
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="shrink-0 flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] text-[var(--text-secondary)] hover:bg-[var(--error)]/10 hover:text-[var(--error)] transition-all"
                      >
                        <FiTrash2 size={15} />
                      </button>
                    </div>
                    <div className="mt-4 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg)] text-[var(--text-secondary)] hover:bg-[var(--accent)] hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <FiMinus size={14} />
                        </button>
                        <span className="w-10 text-center font-semibold text-[var(--text)]">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg)] text-[var(--text-secondary)] hover:bg-[var(--accent)] hover:text-white transition-all"
                        >
                          <FiPlus size={14} />
                        </button>
                      </div>
                      <span className="font-bold text-[var(--text)]">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="lg:sticky lg:top-28 h-fit">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-sm">
              <h2 className="text-xl font-bold text-[var(--text)]">Order Summary</h2>
              <div className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-[var(--text-secondary)]">Subtotal ({cartItems.length} items)</span>
                  <span className="font-semibold text-[var(--text)]">${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--text-secondary)]">Shipping</span>
                  <span className="font-semibold text-[var(--success)]">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--text-secondary)]">Estimated Delivery</span>
                  <span className="font-semibold text-[var(--text)]">5-7 Business Days</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-[var(--border)]">
                <div className="flex justify-between text-2xl font-bold">
                  <span className="text-[var(--text)]">Total</span>
                  <span className="text-[var(--accent)]">${getCartTotal().toFixed(2)}</span>
                </div>
                <p className="mt-1 text-xs text-[var(--muted)]">Excl. VAT / Import Duties</p>
              </div>
              <button className="mt-8 w-full rounded-xl bg-[var(--accent)] px-6 py-4 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95">
                Proceed to Checkout
              </button>
              <Link
                to="/products"
                className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-[var(--accent)] hover:underline transition-all"
              >
                <FiArrowLeft size={14} /> Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Cart;