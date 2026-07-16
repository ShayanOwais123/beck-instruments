import { Link } from "react-router-dom";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">

        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}

          <div>

            <Link to="/" className="inline-block">

              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Beck
              </h2>

              <p className="uppercase tracking-[4px] text-xs text-slate-500 mt-1">
                Instruments
              </p>

            </Link>

            <p className="mt-6 leading-7 text-slate-400">
              Manufacturing premium surgical, dental, laboratory and veterinary
              instruments with world-class precision trusted by healthcare
              professionals worldwide.
            </p>

            <div className="mt-8 flex items-center gap-4">

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >
                <FiFacebook size={18} />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 transition-all duration-300 hover:-translate-y-1 hover:border-pink-500 hover:bg-pink-600 hover:text-white"
              >
                <FiInstagram size={18} />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-700 hover:text-white"
              >
                <FiLinkedin size={18} />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-7">
              Quick Links
            </h3>

            <ul className="space-y-4">

              <li>
                <Link
                  to="/"
                  className="transition hover:text-blue-400"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="transition hover:text-blue-400"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  to="/categories"
                  className="transition hover:text-blue-400"
                >
                  Categories
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="transition hover:text-blue-400"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="transition hover:text-blue-400"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Categories */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-7">
              Categories
            </h3>

            <ul className="space-y-4">

              <li>
                <Link
                  to="/products/surgical"
                  className="transition hover:text-blue-400"
                >
                  Surgical Instruments
                </Link>
              </li>

              <li>
                <Link
                  to="/products/dental"
                  className="transition hover:text-blue-400"
                >
                  Dental Instruments
                </Link>
              </li>

              <li>
                <Link
                  to="/products/veterinary"
                  className="transition hover:text-blue-400"
                >
                  Veterinary Instruments
                </Link>
              </li>

              <li>
                <Link
                  to="/products/beauty"
                  className="transition hover:text-blue-400"
                >
                  Beauty Instruments
                </Link>
              </li>

              <li>
                <Link
                  to="/products/laboratory"
                  className="transition hover:text-blue-400"
                >
                  Laboratory Instruments
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-7">
              Contact
            </h3>

            <div className="space-y-6">

              <div className="flex items-start gap-4">

                <div className="rounded-xl bg-slate-900 p-3 text-blue-400">
                  <FiMapPin size={18} />
                </div>

                <div>
                  <p className="font-medium text-white">
                    Address
                  </p>

                  <p className="mt-1 text-slate-400">
                    Karachi, Pakistan
                  </p>
                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="rounded-xl bg-slate-900 p-3 text-blue-400">
                  <FiPhone size={18} />
                </div>

                <div>
                  <p className="font-medium text-white">
                    Phone
                  </p>

                  <p className="mt-1 text-slate-400">
                    +92 300 1234567
                  </p>
                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="rounded-xl bg-slate-900 p-3 text-blue-400">
                  <FiMail size={18} />
                </div>

                <div>
                  <p className="font-medium text-white">
                    Email
                  </p>

                  <p className="mt-1 text-slate-400">
                    info@beckinstruments.com
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

        <div className="mt-16 border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">

          <p>
            © 2026 Beck Instruments. All Rights Reserved.
          </p>

          <div className="flex gap-6">

            <Link
              to="/"
              className="hover:text-blue-400 transition"
            >
              Privacy Policy
            </Link>

            <Link
              to="/"
              className="hover:text-blue-400 transition"
            >
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;