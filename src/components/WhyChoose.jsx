import whychoose from "../assets/Whychoose/whychoose.jpg";
import {
  FiAward,
  FiShield,
  FiTruck,
  FiCheckCircle,
} from "react-icons/fi";
import AnimatedSection from "./AnimatedSection";

function WhyChoose() {
  const features = [
    {
      icon: <FiAward size={22} />,
      title: "Premium German Steel",
      text: "Crafted from high-quality stainless steel for maximum durability and precision.",
    },
    {
      icon: <FiShield size={22} />,
      title: "Lifetime Warranty",
      text: "Manufactured with strict quality control and lifetime assurance on all products.",
    },
    {
      icon: <FiTruck size={22} />,
      title: "Worldwide Shipping",
      text: "Fast and secure delivery across the globe with reliable logistics partners.",
    },
    {
      icon: <FiCheckCircle size={22} />,
      title: "ISO Certified",
      text: "Trusted manufacturing standards recognized internationally by healthcare authorities.",
    },
  ];

  return (
    <section className="py-24 bg-[var(--card)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <AnimatedSection>
            <p className="inline-block rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/5 px-5 py-1.5 text-xs font-semibold uppercase tracking-[3px] text-[var(--accent)]">
              Why Choose Us
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-[var(--text)]">
              Trusted By Medical Professionals Worldwide
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-[var(--text-secondary)]">
              Every instrument is engineered with precision, ensuring
              reliability, durability and exceptional performance in every
              procedure. Our manufacturing process follows international
              standards trusted by hospitals and distributors worldwide.
            </p>

            <div className="mt-10 space-y-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group flex items-start gap-5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--accent)] text-white shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--text)]">
                      {feature.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-secondary)]">
                      {feature.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Right */}
          <AnimatedSection delay={0.2}>
            <div className="group relative overflow-hidden rounded-[32px] shadow-xl">
              <img
                src={whychoose}
                alt="Medical Instruments"
                className="h-[550px] w-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 max-w-xs rounded-2xl border border-white/30 bg-white/10 backdrop-blur-xl px-6 py-5 shadow-2xl">
                <p className="text-xs uppercase tracking-[2px] font-semibold text-[var(--accent)]">
                  Manufacturing Excellence
                </p>
                <h3 className="mt-2 text-xl font-bold text-white">
                  25+ Years Experience
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">
                  Precision-crafted instruments trusted by healthcare professionals worldwide.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
