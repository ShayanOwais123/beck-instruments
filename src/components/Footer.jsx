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
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              Beck Instruments
            </h2>

            <p className="mt-6 leading-7">
              Manufacturing premium surgical, dental and veterinary
              instruments with precision and quality trusted worldwide.
            </p>

            <div className="flex gap-4 mt-8">

              <button className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 transition">
                <FiFacebook className="m-auto" />
              </button>

              <button className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 transition">
                <FiInstagram className="m-auto" />
              </button>

              <button className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 transition">
                <FiLinkedin className="m-auto" />
              </button>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Products</li>
              <li className="hover:text-white cursor-pointer">Categories</li>
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              Categories
            </h3>

            <ul className="space-y-4">
              <li>Surgical Instruments</li>
              <li>Dental Instruments</li>
              <li>Veterinary</li>
              <li>Beauty Instruments</li>
              <li>Laboratory</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">
                <FiMapPin className="mt-1" />
                <p>Karachi, Pakistan</p>
              </div>

              <div className="flex gap-3">
                <FiPhone className="mt-1" />
                <p>+92 300 1234567</p>
              </div>

              <div className="flex gap-3">
                <FiMail className="mt-1" />
                <p>info@beckinstruments.com</p>
              </div>

            </div>
          </div>

        </div>

        <div className="border-t border-slate-700 mt-16 pt-8 text-center text-sm text-gray-500">
          © 2026 Beck Instruments. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;