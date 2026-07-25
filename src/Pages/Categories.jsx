import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import surgical from "../assets/Categories/surgical.jpg";
import dental from "../assets/Categories/dental.jpg";
import veterinary from "../assets/Categories/veterinary.jpg";
import beauty from "../assets/Categories/beauty.jpg";
import laboratory from "../assets/Categories/laboratory.jpg";
import allproducts from "../assets/Categories/allproducts.jpg";

function Categories() {
  const categories = [
    { title: "Surgical Instruments", description: "Precision surgical tools for hospitals and clinics worldwide.", image: surgical, link: "/products/surgical" },
    { title: "Dental Instruments", description: "Professional dental instruments for everyday clinical practice.", image: dental, link: "/products/dental" },
    { title: "Veterinary Instruments", description: "Reliable instruments designed for modern animal healthcare.", image: veterinary, link: "/products/veterinary" },
    { title: "Beauty Instruments", description: "Premium beauty and grooming instruments with exceptional finish.", image: beauty, link: "/products/beauty" },
    { title: "Laboratory Instruments", description: "Quality laboratory tools for accurate testing and research.", image: laboratory, link: "/products/laboratory" },
    { title: "View All Products", description: "Browse our complete collection of precision instruments.", image: allproducts, link: "/products" },
  ];

  return (
    <main className="min-h-screen bg-[var(--bg)] pt-32 pb-24">
      <section className="relative pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[var(--accent)]/5 blur-[120px]"></div>
          <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[var(--secondary)]/5 blur-[120px]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="inline-block rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/5 px-5 py-1.5 text-xs font-semibold uppercase tracking-[3px] text-[var(--accent)]">Categories</p>
          <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold text-[var(--text)] leading-tight">Explore Our Categories</h1>
          <p className="mt-4 max-w-2xl mx-auto text-[var(--text-secondary)] leading-relaxed">Browse our complete range of precision-crafted instruments designed for healthcare professionals worldwide.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <AnimatedSection key={category.title} delay={index * 0.1}>
              <Link to={category.link} className="group block overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="overflow-hidden">
                  <img src={category.image} alt={category.title} className="h-64 w-full object-cover transition duration-500 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-[var(--text)]">{category.title}</h2>
                  <p className="mt-3 text-[var(--text-secondary)] leading-7">{category.description}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] group-hover:gap-3 transition-all">
                    Explore Category →
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Categories;
