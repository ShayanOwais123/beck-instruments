import { Link } from "react-router-dom";
import React from "react";
import { FiArrowRight, FiPhone } from "react-icons/fi";

function CTA() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[var(--accent-dark)] via-[var(--accent)] to-[var(--secondary)]">
      {/* Dynamic Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-white/20 blur-[120px]"></div>
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[var(--secondary)]/30 blur-[120px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-5 py-1.5 text-xs font-bold uppercase tracking-[3px] text-white shadow-lg">
            Ready to Upgrade Your Clinic?
          </span>
          <h2 className="mt-6 text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Ready to Partner With Beck Instruments?
          </h2>
          <p className="mt-6 text-white/90 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Contact our engineering and procurement team today for custom specifications, catalog downloads, or bulk hospital quotations.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2.5 rounded-2xl bg-white px-8 py-4 text-sm font-bold text-[var(--accent-dark)] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl active:scale-95"
            >
              <span>Request Custom Quotation</span>
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={18} />
            </Link>
            <a
              href="tel:+923001234567"
              className="group inline-flex items-center gap-2.5 rounded-2xl border border-white/40 bg-white/10 backdrop-blur-xl px-8 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 hover:shadow-2xl active:scale-95"
            >
              <FiPhone size={18} />
              <span>Direct Support Call</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
