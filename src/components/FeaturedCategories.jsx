import { Link } from "react-router-dom";
import surgical from "../assets/Categories/surgical.jpg";
import dental from "../assets/Categories/dental.jpg";
import veterinary from "../assets/Categories/veterinary.jpg";
import beauty from "../assets/Categories/beauty.jpg";
import laboratory from "../assets/Categories/laboratory.jpg";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";

function FeaturedCategories() {
  const categories = [
    {
      title: "Surgical Instruments",
      description: "Precision surgical tools for hospitals and clinics.",
      image: surgical,
      link: "/products/surgical",
    },
    {
      title: "Dental Instruments",
      description: "Professional dental equipment for everyday practice.",
      image: dental,
      link: "/products/dental",
    },
    {
      title: "Veterinary Instruments",
      description: "Animal healthcare instruments for modern clinics.",
      image: veterinary,
      link: "/products/veterinary",
    },
    {
      title: "Beauty Instruments",
      description: "Professional beauty tools for salons and professionals.",
      image: beauty,
      link: "/products/beauty",
    },
    {
      title: "Laboratory Instruments",
      description: "Lab testing equipment for research and diagnostics.",
      image: laboratory,
      link: "/products/laboratory",
    },
    {
      title: "View All Products",
      description: "Explore our complete catalog of premium instruments.",
      image: surgical,
      link: "/products",
    },
  ];

  return (
    <section className="py-24 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          subtitle="Categories"
          title="Browse Our Product Categories"
          description="Explore our complete range of premium instruments designed for healthcare professionals worldwide."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <AnimatedSection key={category.title} delay={index * 0.1}>
              <Link
                to={category.link}
                className="group block overflow-hidden rounded-[20px] border border-[var(--border)] bg-[var(--card)] shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[var(--accent)]/30 hover:shadow-xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-bold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                    {category.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-[var(--text-secondary)]">
                    {category.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 font-semibold text-[var(--accent)] transition-all duration-300 group-hover:gap-4">
                    Explore Collection
                    <span className="text-lg">→</span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedCategories;
