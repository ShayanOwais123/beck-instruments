import { Link } from "react-router-dom";
import { FiHome, FiArrowLeft } from "react-icons/fi";

function NotFound() {
  return (
    <section className="min-h-screen bg-[var(--bg)] flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-[var(--accent)]/10 mb-8">
          <span className="text-6xl font-extrabold text-[var(--accent)]">404</span>
        </div>
        <h1 className="text-4xl lg:text-5xl font-extrabold text-[var(--text)] leading-tight">Page Not Found</h1>
        <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">The page you are looking for doesn&apos;t exist or has been moved. Let us help you find what you need.</p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/" className="inline-flex items-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent)]/90 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:-translate-y-1 active:scale-95 shadow-sm">
            <FiHome size={18} />Back to Home
          </Link>
          <button onClick={() => window.history.back()} className="inline-flex items-center gap-2 border border-[var(--border)] text-[var(--text)] hover:bg-[var(--card)] px-8 py-4 rounded-xl font-semibold transition-all hover:-translate-y-1 active:scale-95">
            <FiArrowLeft size={18} />Go Back
          </button>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
