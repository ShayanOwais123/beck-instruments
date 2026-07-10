import heroImage from "../assets/Hero/hero2.png";

function Hero() {
  return (
    <section className="relative mt-10 overflow-hidden bg-linear-to-b from-slate-50 via-white to-slate-100">

      {/* Background Blur */}

      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-100 blur-[120px] opacity-40"></div>

      <div className="absolute bottom-0 -right-32 h-96 w-96 rounded-full bg-cyan-100 blur-[120px] opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 lg:pt-28 pb-16 lg:pb-20">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}

          <div className="order-2 lg:order-1 text-center lg:text-left">

            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-[11px] lg:text-xs font-semibold tracking-wide text-blue-700 shadow-sm">

              Trusted Worldwide Since 1998

            </div>

            <h1 className="mt-5 text-3xl sm:text-4xl lg:text-[52px] font-extrabold leading-tight text-slate-900">

              Precision

              <span className="text-blue-600">
                {" "}Surgical{" "}
              </span>

              Instruments

              <br />

              Built For Professionals

            </h1>

            <p className="mx-auto lg:mx-0 mt-5 max-w-lg text-[16px] lg:text-base leading-8 text-gray-600">

              High-quality surgical, dental and veterinary instruments
              manufactured with German precision and trusted by hospitals,
              clinics and distributors across the globe.

            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">

              <button className="rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl active:scale-95">

                Explore Products

              </button>

              <button className="rounded-xl border border-gray-300 bg-white px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-slate-100 hover:shadow-xl active:scale-95">

                Contact Us

              </button>

            </div>

            {/* Stats */}

            <div className="mt-10 grid grid-cols-3 gap-5 lg:gap-4 max-w-lg mx-auto lg:mx-0">

              <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                <h2 className="text-xl lg:text-2xl font-bold text-blue-600">
                  25+
                </h2>

                <p className="mt-1 text-xs lg:text-sm text-gray-500">
                  Years Experience
                </p>

              </div>

              <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                <h2 className="text-xl lg:text-2xl font-bold text-blue-600">
                  500+
                </h2>

                <p className="mt-1 text-xs lg:text-sm text-gray-500">
                  Premium Products
                </p>

              </div>

              <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                <h2 className="text-xl lg:text-2xl font-bold text-blue-600">
                  50+
                </h2>

                <p className="mt-1 text-xs lg:text-sm text-gray-500">
                  Countries Served
                </p>

              </div>

            </div>

          </div>

          {/* Right */}



<div className="order-1 lg:order-2 relative flex items-center justify-center">

  <div className="relative w-full max-w-140">

    {/* Main Card */}

    <div className="relative flex h-105 sm:h-125 lg:h-130 items-center justify-center rounded-3xl bg-linear-to-br from-blue-50 via-white to-slate-100 shadow-xl overflow-hidden hover:-translate-y-3 transition transform duration-500">

      {/* Background Glow */}

      <div className="absolute h-80 w-80 rounded-full bg-blue-100 blur-3xl opacity-60"></div>

      {/* Product */}

      <img
        src={heroImage}
        alt="Surgical Instruments"
        className="relative z-10 h-75 sm:h-95 lg:h-100 w-auto object-contain transition duration-500 hover:scale-105"
      />

      {/* Glass Card */}

      <div className="absolute bottom-6 left-6 z-20 rounded-2xl border border-white/30 bg-white/20 backdrop-blur-xl px-5 py-4 shadow-xl">

        <p className="text-xs uppercase tracking-[2px] text-blue-600 font-semibold">
          Certified Manufacturer
        </p>

        <h3 className="mt-1 text-lg font-bold text-slate-900">
          ISO 13485 Certified
        </h3>

        <p className="mt-2 text-sm text-slate-600">
          Premium German Stainless Steel Instruments
        </p>

      </div>

    </div>

  </div>

</div>

        </div>

      </div>

    </section>
  );
}

export default Hero;