import heroImage from "../assets/Hero/hero2.png";

function Hero() {
  return (
    <section className="relative mt-12 overflow-hidden bg-linear-to-b from-slate-50 via-white to-slate-100">

      {/* Background Blur */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-100 blur-[120px] opacity-40"></div>

      <div className="absolute bottom-0 -right-32 h-96 w-96 rounded-full bg-cyan-100 blur-[120px] opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}

          <div>

            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold tracking-wide text-blue-700 shadow-sm">
              Trusted Worldwide Since 1998
            </div>

            <h1 className="mt-5 text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900">

              Precision
              <span className="text-blue-600"> Surgical </span>
              Instruments

              <br />

              Built For Professionals

            </h1>

            <p className="mt-5 max-w-lg text-base leading-7 text-gray-600">

              High-quality surgical, dental and veterinary instruments
              manufactured with German precision and trusted by hospitals,
              clinics and distributors across the globe.

            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <button className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95 hover:bg-blue-700">

                Explore Products

              </button>

              <button className="rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95 hover:bg-slate-100">

                Contact Us

              </button>

            </div>

            {/* Stats */}

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg">

              <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                <h2 className="text-2xl font-bold text-blue-600">
                  25+
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Years Experience
                </p>

              </div>

              <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                <h2 className="text-2xl font-bold text-blue-600">
                  500+
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Premium Products
                </p>

              </div>

              <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                <h2 className="text-2xl font-bold text-blue-600">
                  50+
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Countries Served
                </p>

              </div>

            </div>

          </div>

          {/* Right */}

                    <div className="relative flex items-center justify-center">

            {/* Main Image Card */}

            <div className="relative flex h-120 w-full items-center justify-center rounded-3xl border border-gray-200 bg-linear-to-br from-blue-50 via-white to-slate-100 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">

              {/* Product Placeholder */}

              <div className="flex h-75 w-75 items-center justify-center rounded-full bg-linear-to-br from-blue-100 to-white shadow-inner p-6">

  <img
    src={heroImage}
    alt="Surgical Instruments"
    className="h-full w-full object-contain"
  />

</div>

              {/* Top Badge */}

              <div className="absolute top-5 left-5 rounded-2xl bg-white/90 backdrop-blur-md border border-gray-100 px-4 py-3 shadow-lg">

                <p className="text-xs text-gray-500">
                  Certified Quality
                </p>

                <h3 className="mt-1 text-lg font-bold text-slate-900">
                  ISO 13485
                </h3>

              </div>

              {/* Bottom Left Card */}

              <div className="absolute bottom-5 left-5 max-w-55 rounded-2xl bg-white/90 backdrop-blur-md border border-gray-100 p-4 shadow-lg">

                <h3 className="text-base font-semibold text-slate-900">
                  Trusted Worldwide
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Hospitals, clinics and distributors across 50+ countries.
                </p>

              </div>

              {/* Bottom Right Card */}

              <div className="absolute bottom-5 right-5 rounded-2xl bg-blue-600 px-5 py-4 text-white shadow-xl">

                <h2 className="text-3xl font-bold">
                  100%
                </h2>

                <p className="mt-1 text-xs text-blue-100">
                  German Stainless Steel
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;