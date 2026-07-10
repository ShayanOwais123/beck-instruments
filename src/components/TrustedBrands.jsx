import logo2 from "../assets/Brands/logo2.webp";
import logo1 from "../assets/Brands/logo1.webp";
import logo3 from "../assets/Brands/logo3.svg";
import logo4 from "../assets/Brands/logo4.webp";
import logo5 from "../assets/Brands/logo5.webp";

function TrustedBrands() {
  const brands = [logo1, logo2, logo3, logo4, logo5];

  return (
    <section className="py-20 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[4px] text-blue-600">
            Trusted By
          </p>

          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-slate-900">
            Trusted By Professionals Worldwide
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-600 leading-7">
            Hospitals, clinics and distributors rely on our precision
            instruments for quality, durability and performance.
          </p>

        </div>

        {/* Logo Slider */}

        <div className="mt-14 overflow-hidden">

          <div className="logo-track">

            {[...brands, ...brands].map((logo, index) => (

              <div
                key={index}
                className="logo-item"
              >
                <img
                  src={logo}
                  alt={`Brand ${index}`}
                  className="h-14 w-auto object-contain"
                />
              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default TrustedBrands;