import { Link } from "react-router-dom";
import { useState } from "react";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiSend,
  FiArrowUp,
} from "react-icons/fi";

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[var(--primary)] text-gray-300">
      {/* Newsletter Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)]/10 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[3px] text-[var(--accent)]">
                Newsletter
              </p>
              <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-white">
                Stay Updated With Our Latest Products
              </h2>
              <p className="mt-4 text-gray-400 leading-relaxed max-w-lg">
                Subscribe to our newsletter and be the first to know about new
                instrument launches, industry insights, and exclusive offers.
              </p>
            </div>
            <div className="lg:justify-self-end w-full max-w-md">
              <form onSubmit={handleSubscribe} className="relative">
                <div className="flex gap-3">
                  <div className="relative flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full rounded-xl border border-gray-700 bg-gray-800/50 px-5 py-4 pl-12 text-sm text-white placeholder-gray-500 outline-none transition-all duration-200 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20"
                      required
                    />
                    <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                  </div>
                  <button
                    type="submit"
                    className="flex items-center gap-2 rounded-xl bg-[var(--accent)] px-6 py-4 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[var(--accent-dark)] hover:shadow-md active:scale-95"
                  >
                    <FiSend size={16} />
                    Subscribe
                  </button>
                </div>
                {subscribed && (
                  <p className="mt-3 text-sm text-green-400 animate-fade-in">
                    ✓ Successfully subscribed! Thank you.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Company */}
            <div>
              <Link to="/" className="inline-block">
                <h2 className="text-3xl font-extrabold text-white tracking-tight">
                  Beck
                </h2>
                <p className="uppercase tracking-[4px] text-xs text-gray-500 mt-1">
                  Instruments
                </p>
              </Link>
              <p className="mt-6 leading-7 text-gray-400">
                Manufacturing premium surgical, dental, laboratory and veterinary
                instruments with world-class precision trusted by healthcare
                professionals worldwide.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-700 bg-gray-800/50 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
                >
                  <FiFacebook size={16} />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-700 bg-gray-800/50 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
                >
                  <FiInstagram size={16} />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-700 bg-gray-800/50 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
                >
                  <FiLinkedin size={16} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3.5">
                {[
                  { path: "/", label: "Home" },
                  { path: "/products", label: "Products" },
                  { path: "/categories", label: "Categories" },
                  { path: "/about", label: "About Us" },
                  { path: "/contact", label: "Contact" },
                  { path: "/faq", label: "FAQ" },
                ].map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="transition-colors duration-200 hover:text-[var(--accent)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">
                Categories
              </h3>
              <ul className="space-y-3.5">
                {[
                  { path: "/products/surgical", label: "Surgical Instruments" },
                  { path: "/products/dental", label: "Dental Instruments" },
                  { path: "/products/veterinary", label: "Veterinary Instruments" },
                  { path: "/products/beauty", label: "Beauty Instruments" },
                  { path: "/products/laboratory", label: "Laboratory Instruments" },
                ].map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="transition-colors duration-200 hover:text-[var(--accent)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">
                Contact
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-800 text-[var(--accent)]">
                    <FiMapPin size={16} />
                  </div>
                  <div>
                    <p className="font-medium text-white text-sm">Address</p>
                    <p className="mt-0.5 text-sm text-gray-400">
                      Karachi, Pakistan
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-800 text-[var(--accent)]">
                    <FiPhone size={16} />
                  </div>
                  <div>
                    <p className="font-medium text-white text-sm">Phone</p>
                    <p className="mt-0.5 text-sm text-gray-400">
                      +92 300 1234567
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-800 text-[var(--accent)]">
                    <FiMail size={16} />
                  </div>
                  <div>
                    <p className="font-medium text-white text-sm">Email</p>
                    <p className="mt-0.5 text-sm text-gray-400">
                      info@beckinstruments.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Beck Instruments. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link
              to="/privacy-policy"
              className="text-gray-500 hover:text-[var(--accent)] transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-700">|</span>
            <Link
              to="/terms-conditions"
              className="text-gray-500 hover:text-[var(--accent)] transition-colors"
            >
              Terms & Conditions
            </Link>
            <span className="text-gray-700">|</span>
            <Link
              to="/shipping-delivery"
              className="text-gray-500 hover:text-[var(--accent)] transition-colors"
            >
              Shipping
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-40 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent)] text-white shadow-lg transition-all duration-300 hover:bg-[var(--accent-dark)] hover:-translate-y-1 hover:shadow-xl active:scale-95"
        aria-label="Scroll to top"
      >
        <FiArrowUp size={20} />
      </button>
    </footer>
  );
}

export default Footer;
