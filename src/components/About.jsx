import { Link } from "react-router-dom";
import AboutImg from "../assets/About/about1.png";
import { FiAward, FiShield, FiGlobe, FiCheckCircle } from "react-icons/fi";

function About() {
  const highlights = [
    {
      icon: <FiAward size={20} />,
      title: "Premium German Stainless Steel",
    },
    {
      icon: <FiShield size={20} />,
      title: "ISO Certified Manufacturing Standards",
    },
    {
      icon: <FiGlobe size={20} />,
      title: "Exporting To More Than 50 Countries",
    },
    {
      icon: <FiCheckCircle size={20} />,
      title: "Lifetime Warranty on All Products",
    },
  ];

  return (
    <section className="py-24 bg-[var(--card)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-[32px] shadow-xl">
              <img
                src={AboutImg}
                alt="About Beck Instruments"
                className="h-[500px] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/20 to-transparent"></div>
            </div>
            {/* Experience Card */}
            <div className="absolute -bottom-6 -right-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] px-6 py-5 shadow-xl">
              <p className="text-3xl font-bold text-[var(--accent)]">25+</p>
              <p className="mt-1 text-sm text-[var(--muted)]">Years Experience</p>
            </div>
            {/* Decorative Element */}
            <div className="absolute -top-4 -left-4 h-24 w-24 rounded-2xl bg-[var(--accent)]/10 -z-10"></div>
          </div>

          {/* Right - Content */}
          <div>
            <p className="inline-block rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/5 px-5 py-1.5 text-xs font-semibold uppercase tracking-[3px] text-[var(--accent)]">
              About Beck Instruments
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-[var(--text)]">
              Precision Manufacturing
              <br />
              Since 1998
            </h2>
            <p className="mt-6 leading-relaxed text-[var(--text-secondary)]">
              Beck Instruments is committed to manufacturing premium surgical,
              dental and veterinary instruments using high-quality German
              stainless steel. Our products are trusted by hospitals,
              distributors and healthcare professionals worldwide.
            </p>

            <div className="mt-8 space-y-4">
              {highlights.map((item) => (
                <div key={item.title} className="flex items-center gap-4 group">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] transition-all duration-300 group-hover:bg-[var(--accent)] group-hover:text-white">
                    {item.icon}
                  </div>
                  <p className="text-[var(--text-secondary)] group-hover:text-[var(--text)] transition-colors">{item.title}</p>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--accent-dark)] hover:shadow-xl active:scale-95"
            >
              Learn More About Us
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
