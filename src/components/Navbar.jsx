import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiMenu,
  FiX,
  FiChevronDown,
  FiSun,
  FiMoon,
  FiPhone,
  FiMail,
  FiArrowRight,
  FiLogOut,
} from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const { darkMode, toggleDarkMode } = useTheme();
  const { getCartCount } = useCart();
  const { currentUser, logout } = useAuth();
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  async function handleLogout() {
    try {
      await logout();
      setIsAccountOpen(false);
    } catch (err) {
      console.error("Failed to log out:", err);
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const cartCount = getCartCount();

  const navLinks = [
    { path: "/", label: "Home" },
    {
      label: "Products",
      dropdown: [
        { path: "/products/surgical", label: "Surgical Instruments" },
        { path: "/products/dental", label: "Dental Instruments" },
        { path: "/products/veterinary", label: "Veterinary Instruments" },
        { path: "/products/beauty", label: "Beauty Instruments" },
        { path: "/products/laboratory", label: "Laboratory Instruments" },
        { path: "/products", label: "All Products" },
      ],
    },
    { path: "/categories", label: "Categories" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50">
        {/* Top Bar */}
        <div
          className={`hidden lg:flex items-center justify-between bg-[var(--primary)] text-white text-sm px-8 overflow-hidden transition-all duration-500 ${
            isScrolled ? "max-h-0 py-0 opacity-0" : "max-h-12 py-2.5 opacity-100"
          }`}
        >
          <div className="flex items-center gap-6">
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-[var(--accent)] transition-colors">
              <FiPhone size={13} />
              <span>+1 (800) 854-0153</span>
            </a>
            <a href="mailto:info@beckinstruments.com" className="flex items-center gap-2 hover:text-[var(--accent)] transition-colors">
              <FiMail size={13} />
              <span>info@beckinstruments.com</span>
            </a>
          </div>
          <div className="flex items-center gap-6 text-xs font-medium">
            <span>✓ Lifetime Warranty</span>
            <span className="w-px h-4 bg-white/20"></span>
            <span>✓ Premium German Steel</span>
            <span className="w-px h-4 bg-white/20"></span>
            <span>✓ Worldwide Shipping</span>
          </div>
        </div>

        {/* Navbar */}
        <nav
          className={`transition-all duration-300 ${
            isScrolled
              ? "glass shadow-lg"
              : "bg-[var(--card)]"
          }`}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 py-3 lg:py-4">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <div className="select-none">
                <h1 className="text-2xl lg:text-3xl font-extrabold tracking-tight text-[var(--text)]">
                  Beck
                </h1>
                <p className="text-[10px] lg:text-xs uppercase tracking-[4px] text-[var(--muted)]">
                  Instruments
                </p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-1 text-[14px] font-medium">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <li
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <button className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/5 transition-all duration-200 group">
                      {link.label}
                      <FiChevronDown
                        size={14}
                        className={`transition-all duration-300 ${
                          isDropdownOpen ? "rotate-180" : ""
                        } group-hover:text-[var(--accent)]`}
                      />
                    </button>

                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 pt-2 w-64">
                        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-2 shadow-2xl">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              className="group/dropdown flex items-center justify-between rounded-xl px-4 py-3 text-sm transition-all duration-200 hover:bg-[var(--accent)]/5 hover:text-[var(--accent)]"
                            >
                              <span>{item.label}</span>
                              <FiArrowRight
                                size={14}
                                className="opacity-0 -translate-x-2 transition-all duration-200 group-hover/dropdown:opacity-100 group-hover/dropdown:translate-x-0"
                              />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                ) : (
                  <li key={link.path}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `px-4 py-2.5 rounded-xl transition-all duration-200 ${
                          isActive
                            ? "text-[var(--accent)] bg-[var(--accent)]/5 font-semibold"
                            : "text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/5"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                )
              )}
            </ul>

            {/* Right Side */}
            <div className="flex items-center gap-2 lg:gap-3">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="hidden lg:flex h-10 w-10 items-center justify-center rounded-xl text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/5 transition-all duration-200"
              >
                <FiSearch size={18} />
              </button>

              <button
                onClick={toggleDarkMode}
                className="hidden lg:flex h-10 w-10 items-center justify-center rounded-xl text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/5 transition-all duration-200"
                aria-label="Toggle theme"
              >
                {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
              </button>

              {currentUser ? (
                <div
                  className="relative hidden lg:block"
                  onMouseEnter={() => setIsAccountOpen(true)}
                  onMouseLeave={() => setIsAccountOpen(false)}
                >
                  <button className="flex h-10 w-10 items-center justify-center rounded-xl text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/5 transition-all duration-200">
                    <FiUser size={18} />
                  </button>

                  {isAccountOpen && (
                    <div className="absolute top-full right-0 pt-2 w-56">
                      <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-2 shadow-2xl">
                        <div className="px-4 py-3 text-sm text-[var(--text-secondary)] truncate border-b border-[var(--border)] mb-1">
                          {currentUser.email}
                        </div>
                        <button
                          onClick={handleLogout}
                          className="flex w-full items-center gap-2 rounded-xl px-4 py-3 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/5 transition-all duration-200"
                        >
                          <FiLogOut size={16} />
                          Log Out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to="/login"
                  className="hidden lg:flex h-10 w-10 items-center justify-center rounded-xl text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/5 transition-all duration-200"
                >
                  <FiUser size={18} />
                </Link>
              )}

              <Link
                to="/cart"
                className="relative flex h-10 w-10 items-center justify-center rounded-xl text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/5 transition-all duration-200"
              >
                <FiShoppingCart size={18} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--accent)] text-[10px] font-bold text-white shadow-sm">
                    {cartCount > 9 ? "9+" : cartCount}
                  </span>
                )}
              </Link>

              <Link
                to="/contact"
                className="hidden lg:flex items-center gap-2 rounded-xl bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[var(--accent-dark)] hover:shadow-md active:scale-95"
              >
                Get Quote
              </Link>

              <button
                onClick={() => setIsMenuOpen(true)}
                className="lg:hidden flex h-10 w-10 items-center justify-center rounded-xl text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/5 transition-all duration-200"
              >
                <FiMenu size={22} />
              </button>
            </div>
          </div>

          {/* Search Bar */}
          {isSearchOpen && (
            <div className="border-t border-[var(--border)] bg-[var(--card)] px-6 lg:px-8 py-4">
              <div className="max-w-3xl mx-auto relative">
                <input
                  type="text"
                  placeholder="Search instruments, categories, materials..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-5 py-3.5 pl-12 text-sm text-[var(--text)] placeholder-[var(--muted)] outline-none transition-all duration-200 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/10"
                  autoFocus
                />
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)]" size={16} />
                <button
                  onClick={() => {
                    setIsSearchOpen(false);
                    setSearchQuery("");
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--muted)] hover:text-[var(--text)] transition-colors text-sm font-medium"
                >
                  Esc
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-[340px] bg-[var(--card)] z-50 shadow-2xl transition-all duration-500 lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-[var(--border)]">
          <div>
            <h2 className="text-2xl font-extrabold text-[var(--text)]">Beck</h2>
            <p className="text-[10px] uppercase tracking-[4px] text-[var(--muted)]">Instruments</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/5 transition-all"
            >
              {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/5 transition-all"
            >
              <FiX size={20} />
            </button>
          </div>
        </div>

        <ul className="flex flex-col p-4 gap-1 text-base font-medium">
          <li>
            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center rounded-xl px-4 py-3 transition-all ${
                  isActive
                    ? "text-[var(--accent)] bg-[var(--accent)]/5 font-semibold"
                    : "text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/5"
                }`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <button
              onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
              className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/5 transition-all"
            >
              Products
              <FiChevronDown
                className={`transition-all duration-300 ${
                  isMobileDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isMobileDropdownOpen && (
              <ul className="ml-4 mt-1 space-y-1 border-l-2 border-[var(--border)] pl-4">
                {[
                  { path: "/products/surgical", label: "Surgical Instruments" },
                  { path: "/products/dental", label: "Dental Instruments" },
                  { path: "/products/veterinary", label: "Veterinary Instruments" },
                  { path: "/products/beauty", label: "Beauty Instruments" },
                  { path: "/products/laboratory", label: "Laboratory Instruments" },
                  { path: "/products", label: "All Products" },
                ].map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="block rounded-lg px-4 py-2.5 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/5 transition-all"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {[
            { path: "/categories", label: "Categories" },
            { path: "/about", label: "About Us" },
            { path: "/contact", label: "Contact" },
            { path: "/faq", label: "FAQ" },
          ].map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center rounded-xl px-4 py-3 transition-all ${
                    isActive
                      ? "text-[var(--accent)] bg-[var(--accent)]/5 font-semibold"
                      : "text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/5"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="absolute bottom-0 left-0 w-full p-6 border-t border-[var(--border)]">
          <div className="flex flex-col gap-3">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/5 transition-all"
            >
              <FiPhone size={16} />
              +1 (800) 854-0153
            </a>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[var(--accent-dark)] active:scale-95"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
