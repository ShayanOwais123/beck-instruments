function FeaturedCategories() {
  const categories = [
    {
      title: "Surgical Instruments",
      description: "Precision surgical tools",
    },
    {
      title: "Dental Instruments",
      description: "Professional dental equipment",
    },
    {
      title: "Veterinary",
      description: "Animal healthcare instruments",
    },
    {
      title: "Beauty Instruments",
      description: "Professional beauty tools",
    },
    {
      title: "Laboratory",
      description: "Lab testing equipment",
    },
    {
      title: "View All",
      description: "Explore complete catalog",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-blue-600 font-semibold uppercase tracking-[3px]">
            Categories
          </p>

          <h2 className="text-4xl font-bold mt-3 text-slate-900">
            Browse Our Product Categories
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Explore our complete range of premium instruments designed for
            healthcare professionals worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-400 hover:-translate-y-2 cursor-pointer"
            >
              {/* Image Placeholder */}
              <div className="h-50 rounded-xl bg-gray-200 mb-6 flex items-center justify-center">
                Image
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                {category.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {category.description}
              </p>

              <button className="mt-6 text-blue-600 font-semibold hover:underline">
                Explore →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedCategories;