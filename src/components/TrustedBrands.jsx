function TrustedBrands() {
  const brands = [
    "Hospital A",
    "Medical Group",
    "Dental Care",
    "Health Plus",
    "Surgical Pro",
  ];

  return (
    <section className="py-17 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <p className="text-center text-gray-500 uppercase tracking-[3px] mb-10">
          Trusted by Professionals Worldwide
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {brands.map((brand) => (
            <div
              key={brand}
              className="h-24 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 font-semibold hover:shadow-lg transition duration-350"
            >
              {brand}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TrustedBrands;