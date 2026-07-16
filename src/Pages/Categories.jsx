import { Link } from "react-router-dom";

import surgical from "../assets/Categories/surgical.jpg";
import dental from "../assets/Categories/dental.jpg";
import veterinary from "../assets/Categories/veterinary.jpg";
import beauty from "../assets/Categories/beauty.jpg";
import laboratory from "../assets/Categories/laboratory.jpg";
import allproducts from "../assets/Categories/allproducts.jpg";

function Categories() {
  const categories = [
    {
      title: "Surgical Instruments",
      description: "Precision surgical tools for hospitals and clinics.",
      image: surgical,
      link: "/products/surgical",
    },
    {
      title: "Dental Instruments",
      description: "Professional dental instruments for everyday practice.",
      image: dental,
      link: "/products/dental",
    },
    {
      title: "Veterinary Instruments",
      description: "Reliable instruments designed for animal healthcare.",
      image: veterinary,
      link: "/products/veterinary",
    },
    {
      title: "Beauty Instruments",
      description: "Premium beauty and grooming instruments.",
      image: beauty,
      link: "/products/beauty",
    },
    {
      title: "Laboratory Instruments",
      description: "Quality laboratory tools for accurate testing.",
      image: laboratory,
      link: "/products/laboratory",
    },
    {
      title: "View All Products",
      description: "Browse our complete collection of instruments.",
      image: allproducts,
      link: "/products",
    },
  ];

  return (
    <section className="bg-slate-50 py-24 mt-18">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-14">

          <p className="uppercase tracking-[4px] text-blue-600 font-semibold">
            Categories
          </p>

          <h1 className="mt-3 text-4xl font-bold text-slate-900">
            Explore Our Categories
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Browse our complete range of precision-crafted instruments
            designed for healthcare professionals worldwide.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {categories.map((category) => (

            <Link
              key={category.title}
              to={category.link}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="overflow-hidden">

                <img
                  src={category.image}
                  alt={category.title}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                />

              </div>

              <div className="p-6">

                <h2 className="text-2xl font-bold text-slate-900">
                  {category.title}
                </h2>

                <p className="mt-3 text-gray-600 leading-7">
                  {category.description}
                </p>

                <span className="mt-6 inline-block font-semibold text-blue-600">
                  Explore →
                </span>

              </div>

            </Link>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Categories;