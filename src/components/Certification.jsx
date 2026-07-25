import {
  FiAward,
  FiShield,
  FiGlobe,
  FiCheckCircle,
} from "react-icons/fi";
import AnimatedSection from "./AnimatedSection";

function Certifications() {
  const certifications = [
    {
      icon: <FiAward size={30} />,
      title: "ISO 13485",
      description: "Certified quality management system for medical devices ensuring patient safety.",
    },
    {
      icon: <FiShield size={30} />,
      title: "CE Certified",
      description: "Products manufactured according to strict European medical device standards.",
    },
    {
      icon: <FiCheckCircle size={30} />,
      title: "Premium Steel",
      description: "Manufactured using surgical grade German stainless steel for maximum durability.",
    },
    {
      icon: <FiGlobe size={30} />,
      title: "Global Export",
      description: "Supplying premium instruments to healthcare facilities across 50+ countries.",
    },
  ];

  return (
    <section className="py-24 bg-[var(--card)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="inline-block rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/5 px-5 py-1.5 text-xs font-semibold uppercase tracking-[3px] text-[var(--accent)]">
            Certifications
          </p>
          <h2 className="mt-5 text-4xl font-bold text-[var(--text)]">
            Built On International Quality Standards
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-[var(--text-secondary)] leading-relaxed">
            Every instrument is manufactured under internationally recognized
            quality standards to ensure safety, precision and long-term reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 0.1}>
              <div className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 text-center transition-all duration-400 hover:-translate-y-2 hover:border-[var(--accent)]/30 hover:shadow-xl">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-[var(--accent)]/10 text-[var(--accent)] transition-all duration-300 group-hover:bg-[var(--accent)] group-hover:text-white group-hover:shadow-lg">
                  {item.icon}
                </div>
                <h3 className="mt-6 text-xl font-bold text-[var(--text)]">
                  {item.title}
                </h3>
                <p className="mt-4 leading-relaxed text-[var(--text-secondary)]">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
