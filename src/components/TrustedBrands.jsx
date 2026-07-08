function TrustedBrands() {
  const brands = [
    "Hospital A",
    "Medical Group",
    "Dental Care",
    "Health Plus",
    "Surgical Pro",
  ];

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

        {/* Logos */}

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {brands.map((brand) => (

            <div
              key={brand}
              className="group flex h-24 items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              <span className="text-gray-500 font-semibold transition-colors duration-300 group-hover:text-slate-900">
                {brand}
              </span>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default TrustedBrands;