import surgical from "../assets/Categories/surgical.jpg";
import dental from "../assets/Categories/dental.jpg";
import veterinary from "../assets/Categories/veterinary.jpg";
import beauty from "../assets/Categories/beauty.jpg";
import laboratory from "../assets/Categories/laboratory.jpg";

function FeaturedCategories() {
  const categories = [
    {
      title: "Surgical Instruments",
      description: "Precision surgical tools",
      image: surgical,
    },
    {
      title: "Dental Instruments",
      description: "Professional dental equipment",
      image: dental,
    },
    {
      title: "Veterinary",
      description: "Animal healthcare instruments",
      image: veterinary,
    },
    {
      title: "Beauty Instruments",
      description: "Professional beauty tools",
      image: beauty,
    },
    {
      title: "Laboratory",
      description: "Lab testing equipment",
      image: laboratory,
    },
    {
      title: "View All",
      description: "Explore complete catalog",
      image: surgical,
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center mb-14">

          <p className="text-sm font-semibold uppercase tracking-[4px] text-blue-600">
            Categories
          </p>

          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-slate-900">
            Browse Our Product Categories
          </h2>

          <p className="mt-4 max-w-2xl mx-auto leading-7 text-gray-600">
            Explore our complete range of premium instruments designed for
            healthcare professionals worldwide.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {categories.map((category) => (

            <div
              key={category.title}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
            >

              {/* Image */}

              <div className="overflow-hidden">

                <img
                  src={category.image}
                  alt={category.title}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-104"
                />

              </div>

              {/* Content */}

              <div className="p-7">

                <h3 className="text-xl font-bold text-slate-900">
                  {category.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {category.description}
                </p>

                <button className="mt-6 flex items-center gap-2 font-semibold text-blue-600 transition-all duration-300 group-hover:gap-4">
                  Explore
                  <span>→</span>
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturedCategories;