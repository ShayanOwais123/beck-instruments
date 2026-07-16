import { Link } from "react-router-dom";

import surgical from "../../assets/Categories/surgical.jpg";
import dental from "../../assets/Categories/dental.jpg";
import veterinary from "../../assets/Categories/veterinary.jpg";
import beauty from "../../assets/Categories/beauty.jpg";
import laboratory from '../../assets/Categories/laboratory.jpg';

function Products() {
  const categories = [
    {
      title: "Surgical Instruments",
      description:
        "Precision surgical instruments manufactured for hospitals, clinics and healthcare professionals worldwide.",
      image: surgical,
      link: "/products/surgical",
    },
    {
      title: "Dental Instruments",
      description:
        "Professional dental instruments designed for accuracy, durability and everyday clinical use.",
      image: dental,
      link: "/products/dental",
    },
    {
      title: "Veterinary Instruments",
      description:
        "Reliable veterinary instruments engineered for modern animal healthcare procedures.",
      image: veterinary,
      link: "/products/veterinary",
    },
    {
      title: "Beauty Instruments",
      description:
        "Premium beauty and cosmetic instruments crafted with exceptional finishing and precision.",
      image: beauty,
      link: "/products/beauty",
    },
    {
      title: "Laboratory Instruments",
      description:
        "High-quality laboratory instruments for research, diagnostics and scientific testing.",
      image: laboratory,
      link: "/products/laboratory",
    },
  ];

  return (
    <section className="bg-slate-50 pt-32 pb-24 mt-10">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-[4px] text-blue-600 font-semibold">
            Our Products
          </p>

          <h1 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900">
            Premium Medical Instruments
          </h1>

          <p className="mt-6 text-gray-600 leading-8">
            Discover our complete range of precision-crafted medical
            instruments designed for hospitals, clinics, laboratories and
            healthcare professionals around the world.
          </p>

        </div>

        {/* Categories */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {categories.map((item) => (

            <Link
              key={item.title}
              to={item.link}
              className="group overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              <div className="p-7">

                <h2 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition">
                  {item.title}
                </h2>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.description}
                </p>

                <div className="mt-7 flex items-center justify-between">

                  <span className="font-semibold text-blue-600">
                    View Collection
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    →
                  </div>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Products;