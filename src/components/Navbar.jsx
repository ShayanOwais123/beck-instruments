import { useState } from "react";
import {
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiMenu,
  FiX,
} from "react-icons/fi";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:flex bg-slate-900 text-white px-8 py-2 justify-between items-center text-sm">
        <p>Call Us: +1 (800) 854-0153</p>

        <div className="flex gap-6">
          <span>Lifetime Warranty</span>
          <span>Premium German Steel</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-sm relative z-40">
  <div className="max-w-7xl mx-auto flex items-center justify-between px-5 lg:px-8 py-5 -mb-5">
        {/* Logo */}
       <div className="cursor-pointer">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
           Beck
        </h1>

       <p className="text-sm uppercase tracking-[5px] text-gray-500">
          Instruments
        </p>
        </div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-7 font-medium text-gray-700">
          <li className="group w-fit cursor-pointer">
            <span>Home</span>
            <div className="h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
          </li>

         <li
  className="relative group cursor-pointer"
  onMouseEnter={() => setIsDropdownOpen(true)}
  onMouseLeave={() => setIsDropdownOpen(false)}
>
  <span>Products</span>

  <div className="h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>

  {isDropdownOpen && (
    
    <div className="absolute top-full left-0 pt-2 w-64 z-50">
   <div className="bg-white rounded-xl shadow-xl border p-4">
      <ul className="space-y-5">
        <li className="hover:text-blue-600 cursor-pointer">
          Surgical Instruments
        </li>

        <li className="hover:text-blue-600 cursor-pointer">
          Dental Instruments
        </li>

        <li className="hover:text-blue-600 cursor-pointer">
          Veterinary Instruments
        </li>

        <li className="hover:text-blue-600 cursor-pointer">
          Beauty Instruments
        </li>
      </ul>
    </div>
    </div>
  )}

</li>

          <li className="group w-fit cursor-pointer">
            <span>Categories</span>
            <div className="h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
          </li>

          <li className="group w-fit cursor-pointer">
            <span>About Us</span>
            <div className="h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
          </li>

          <li className="group w-fit cursor-pointer">
            <span>Contact</span>
            <div className="h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
          </li>
        </ul>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <button className="text-2xl text-gray-700 hover:text-blue-600 transition cursor-pointer">
            <FiSearch />
          </button>

          <button className="text-2xl text-gray-700 hover:text-blue-600 transition cursor-pointer">
            <FiUser />
          </button>

          <button className="relative text-2xl text-gray-700 hover:text-blue-600 transition cursor-pointer">
            <FiShoppingCart />

            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
              0
            </span>
          </button>

          <button className="bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-all duration-300 cursor-pointer">
            Get Quote
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="lg:hidden text-3xl cursor-pointer"
        >
          <FiMenu />
        </button>
        </div>
      </nav>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold">Menu</h2>

          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-3xl cursor-pointer"
          >
            <FiX />
          </button>
        </div>

        {/* Sidebar Links */}
        <ul className="flex flex-col p-6 gap-6 text-lg font-medium">
          <li className="group w-fit cursor-pointer">
            <span>Home</span>
            <div className="h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
          </li>
          <li className="group w-fit cursor-pointer">
            <span>Products</span>
            <div className="h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
          </li>
          <li className="group w-fit cursor-pointer">
            <span>Categories</span>
            <div className="h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
          </li>
          <li className="group w-fit cursor-pointer">
            <span>About Us</span>
            <div className="h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
          </li>
          <li className="group w-fit cursor-pointer">
            <span>Contact</span>
            <div className="h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;