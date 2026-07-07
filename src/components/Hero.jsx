function Hero() {
  return (
    <section className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <div>

            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              Precision Instruments
            </span>

            <h1 className="mt-3 text-5xl lg:text-5xl font-extrabold leading-tight text-slate-900">
              Premium Surgical &
              <br />
              Dental Instruments
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              High-quality surgical, dental and veterinary instruments
              manufactured with precision and trusted by professionals
              worldwide.
            </p>

            <div className="mt-10 flex gap-5">

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 rounded-xl font-semibold transition">
                Explore Products
              </button>

              <button className="border border-gray-300 px-7 py-4 rounded-xl hover:bg-gray-100 transition">
                Contact Us
              </button>

             
            </div>
<div className="mt-10 flex gap-9 ml-1 flex-wrap">

  <div>
    <h2 className="text-3xl font-bold text-slate-900">
      25+
    </h2>

    <p className="text-gray-500">
      Years Experience
    </p>
  </div>

  <div>
    <h2 className="text-3xl font-bold text-slate-900">
      500+
    </h2>

    <p className="text-gray-500">
      Products
    </p>
  </div>

  <div>
    <h2 className="text-3xl font-bold text-slate-900">
      50+
    </h2>

    <p className="text-gray-500">
      Countries Served
    </p>
  </div>

</div>
          </div>

          {/* Right */}

         <div className="relative h-125 rounded-3xl bg-linear-to-br from-slate-200 to-slate-300 flex items-center justify-center">

  <span className="text-xl text-gray-600">
    Hero Product Image
  </span>

  <div className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-xl p-5">

    <h3 className="font-bold text-lg">
      Trusted Worldwide
    </h3>

    <p className="text-gray-500 text-sm">
      ISO Certified Manufacturer
    </p>

  </div>

</div>

        </div>

      </div>
    </section>
  );
}

export default Hero;