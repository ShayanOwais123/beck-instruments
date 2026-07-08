import AboutImg from "../assets/About/about1.png";
function About() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div className="relative">

            {/* Image Placeholder */}

           <div className="h-130 overflow-hidden rounded-3xl shadow-lg">

  <img
    src={AboutImg}
    alt="About Beck Instruments"
    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
  />

</div>

            {/* Experience Card */}

            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl border border-gray-100 px-6 py-5">

              <h2 className="text-3xl font-bold text-blue-600">
                25+
              </h2>

              <p className="text-gray-500 text-sm">
                Years Experience
              </p>

            </div>

          </div>

          {/* Right */}

          <div>

            <span className="uppercase tracking-[4px] text-blue-600 text-sm font-semibold">
              About Beck Instruments
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900 leading-tight">

              Precision Manufacturing

              <br />

              Since 1998

            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Beck Instruments is committed to manufacturing premium surgical,
              dental and veterinary instruments using high-quality German
              stainless steel. Our products are trusted by hospitals,
              distributors and healthcare professionals worldwide.
            </p>

                        <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>

                <p className="text-gray-700">
                  Premium German Stainless Steel
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>

                <p className="text-gray-700">
                  ISO Certified Manufacturing Standards
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>

                <p className="text-gray-700">
                  Exporting To More Than 50 Countries
                </p>
              </div>

            </div>

            <button className="mt-10 rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold transition-all duration-300 hover:bg-blue-700 hover:-translate-y-1 hover:shadow-xl">

              Learn More

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;