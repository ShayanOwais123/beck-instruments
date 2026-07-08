import { useState, useEffect } from "react";
import {
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiMenu,
  FiX,
  FiChevronDown,
} from "react-icons/fi";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <>
      {/* ================= HEADER ================= */}

      <header className="fixed top-0 left-0 w-full z-50">

        {/* ================= TOP BAR ================= */}

        <div
          className={`hidden lg:flex justify-between items-center bg-slate-900 text-white text-sm px-10 overflow-hidden transition-all duration-500 ${
            isScrolled ? "max-h-0 py-0 opacity-0" : "max-h-20 py-2 opacity-100"
          }`}
        >
          <p>📞 +1 (800) 854-0153</p>

          <div className="flex gap-8">
            <span>Lifetime Warranty</span>
            <span>Premium German Steel</span>
            <span>Worldwide Shipping</span>
          </div>
        </div>

        {/* ================= NAVBAR ================= */}

        <nav
          className={`transition-all duration-300 ${
            isScrolled
              ? "bg-white/80 backdrop-blur-xl shadow-xl"
              : "bg-white"
          }`}
        >
          <div
            className={`max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 transition-all duration-300 ${
              isScrolled ? "py-3" : "py-3"
            }`}
          >

            {/* ================= LOGO ================= */}

            <div className="cursor-pointer select-none">

              <h1
                className={`font-extrabold tracking-tight transition-all duration-300 ${
                  isScrolled ? "text-2xl" : "text-3xl"
                }`}
              >
                Beck
              </h1>

              <p className="uppercase tracking-[4px] text-xs text-gray-500">
                Instruments
              </p>

            </div>

            {/* ================= DESKTOP MENU ================= */}

            <ul className="hidden lg:flex items-center gap-8 text-[15px] font-medium">

              <li className="group cursor-pointer">

                <span>Home</span>

                <div className="h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>

              </li>

              {/* PRODUCTS */}

              <li
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >

                <button className="flex items-center gap-1 cursor-pointer group">

                  Products

                  <FiChevronDown
                    className={`transition duration-300 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />

                </button>

                <div className="h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>

                {isDropdownOpen && (

                  <div className="absolute top-full left-0 pt-5 w-72">

                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6">

                      <ul className="space-y-5">

                        <li className="hover:text-blue-600 transition cursor-pointer">
                          Surgical Instruments
                        </li>

                        <li className="hover:text-blue-600 transition cursor-pointer">
                          Dental Instruments
                        </li>

                        <li className="hover:text-blue-600 transition cursor-pointer">
                          Veterinary Instruments
                        </li>

                        <li className="hover:text-blue-600 transition cursor-pointer">
                          Beauty Instruments
                        </li>

                      </ul>

                    </div>

                  </div>

                )}

              </li>

              <li className="group cursor-pointer">

                <span>Categories</span>

                <div className="h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>

              </li>

              <li className="group cursor-pointer">

                <span>About Us</span>

                <div className="h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>

              </li>

              <li className="group cursor-pointer">

                <span>Contact</span>

                <div className="h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>

              </li>

            </ul>

            {/* ================= RIGHT SIDE ================= */}

            <div className="hidden lg:flex items-center gap-6">

              <button className="text-2xl hover:text-blue-600 transition cursor-pointer">
                <FiSearch />
              </button>

              <button className="text-2xl hover:text-blue-600 transition cursor-pointer">
                <FiUser />
              </button>

              <button className="relative text-2xl hover:text-blue-600 transition cursor-pointer">

                <FiShoppingCart />

                <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center">
                  0
                </span>

              </button>

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl transition cursor-pointer">
                Get Quote
              </button>

            </div>

            {/* MOBILE BUTTON */}

            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden text-3xl"
            >
              <FiMenu />
            </button>

          </div>

        </nav>

      </header>

            {/* ================= OVERLAY ================= */}

      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      {/* ================= MOBILE SIDEBAR ================= */}

      <div
        className={`fixed top-0 right-0 h-screen w-[320px] bg-white z-60 shadow-2xl transition-all duration-500 lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}

        <div className="flex items-center justify-between p-6 border-b">

          <div>

            <h2 className="text-2xl font-bold">
              Beck
            </h2>

            <p className="text-xs tracking-[4px] uppercase text-gray-500">
              Instruments
            </p>

          </div>

          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-3xl hover:text-blue-600 transition cursor-pointer"
          >
            <FiX />
          </button>

        </div>

        {/* Links */}

        <ul className="flex flex-col px-6 py-8 gap-7 text-lg font-medium">

          <li
            onClick={() => setIsMenuOpen(false)}
            className="cursor-pointer hover:text-blue-600 transition"
          >
            Home
          </li>

          {/* Products Dropdown */}

          <li>

            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex justify-between items-center w-full cursor-pointer hover:text-blue-600 transition"
            >
              Products

              <FiChevronDown
                className={`transition duration-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isDropdownOpen && (

              <ul className="pl-4 pt-4 space-y-4 text-base text-gray-600">

                <li className="cursor-pointer hover:text-blue-600">
                  Surgical Instruments
                </li>

                <li className="cursor-pointer hover:text-blue-600">
                  Dental Instruments
                </li>

                <li className="cursor-pointer hover:text-blue-600">
                  Veterinary Instruments
                </li>

                <li className="cursor-pointer hover:text-blue-600">
                  Beauty Instruments
                </li>

              </ul>

            )}

          </li>

          <li
            onClick={() => setIsMenuOpen(false)}
            className="cursor-pointer hover:text-blue-600 transition"
          >
            Categories
          </li>

          <li
            onClick={() => setIsMenuOpen(false)}
            className="cursor-pointer hover:text-blue-600 transition"
          >
            About Us
          </li>

          <li
            onClick={() => setIsMenuOpen(false)}
            className="cursor-pointer hover:text-blue-600 transition"
          >
            Contact
          </li>

        </ul>

        {/* Bottom */}

        <div className="absolute bottom-0 left-0 w-full p-6 border-t">

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition">
            Get Quote
          </button>

        </div>

      </div>
    </>
  );
}

export default Navbar;