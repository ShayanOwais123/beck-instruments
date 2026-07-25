import { Link } from "react-router-dom";
import {
  FiAward,
  FiTarget,
  FiEye,
  FiShield,
  FiUsers,
  FiGlobe,
  FiArrowRight,
} from "react-icons/fi";
import AboutSection from "../components/About";
import WhyChoose from "../components/WhyChoose";
import ManufacturingProcess from "../components/ManufacturingProcess";
import Certification from "../components/Certification";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import AnimatedSection from "../components/AnimatedSection";

const timeline = [
  { year: "1998", title: "Founded", description: "Beck Instruments was established with a vision to manufacture premium surgical instruments." },
  { year: "2005", title: "ISO Certification", description: "Achieved ISO 13485 certification for medical device quality management systems." },
  { year: "2012", title: "Global Expansion", description: "Expanded operations to export instruments to over 30 countries worldwide." },
  { year: "2018", title: "25 Years Milestone", description: "Celebrated 25 years of manufacturing excellence and trusted partnerships." },
  { year: "2024", title: "Industry Leader", description: "Now serving 50+ countries with 500+ premium instrument products." },
];

const values = [
  { icon: <FiAward size={24} />, title: "Quality First", description: "Every instrument meets rigorous quality standards." },
  { icon: <FiShield size={24} />, title: "Integrity", description: "We conduct business with honesty and transparency." },
  { icon: <FiUsers size={24} />, title: "Customer Focus", description: "Our customers are at the heart of everything we do." },
  { icon: <FiGlobe size={24} />, title: "Global Reach", description: "Serving healthcare professionals across the globe." },
];

const stats = [
  { number: "25+", label: "Years Experience" },
  { number: "500+", label: "Premium Products" },
  { number: "50+", label: "Countries Served" },
  { number: "10K+", label: "Happy Clients" },
];

function About() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 lg:pb-28 overflow-hidden bg-gradient-to-br from-[var(--primary)] via-[var(--primary-dark)] to-[var(--primary)]">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[var(--accent)]/10 blur-[120px]"></div>
          <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[var(--secondary)]/10 blur-[120px]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="inline-block rounded-full border border-white/20 bg-white/10 px-5 py-1.5 text-xs font-semibold uppercase tracking-[3px] text-[var(--accent)] backdrop-blur-sm">About Us</p>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">Our Story of Precision</h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-white/70 leading-relaxed">For over 25 years, Beck Instruments has been crafting precision surgical instruments trusted by healthcare professionals across the globe.</p>
          <div className="mt-8 flex justify-center gap-4">
            <Link to="/products" className="inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95">
              Explore Products <FiArrowRight size={16} />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl border-2 border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 hover:shadow-xl active:scale-95">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-16 bg-[var(--card)] border-y border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <p className="text-3xl lg:text-4xl font-bold text-[var(--accent)]">{stat.number}</p>
                  <p className="mt-2 text-sm text-[var(--muted)]">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-[var(--bg)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <AnimatedSection>
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-10 shadow-sm h-full">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--accent)]/10 text-[var(--accent)] mb-6"><FiTarget size={28} /></div>
                <h3 className="text-2xl font-bold text-[var(--text)]">Our Mission</h3>
                <p className="mt-4 leading-relaxed text-[var(--text-secondary)]">To manufacture and deliver the highest quality surgical, dental, veterinary, and laboratory instruments that meet the evolving needs of healthcare professionals worldwide.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-10 shadow-sm h-full">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--accent)]/10 text-[var(--accent)] mb-6"><FiEye size={28} /></div>
                <h3 className="text-2xl font-bold text-[var(--text)]">Our Vision</h3>
                <p className="mt-4 leading-relaxed text-[var(--text-secondary)]">To be the most trusted name in precision medical instruments globally, setting the standard for quality, innovation, and customer satisfaction.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[var(--card)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="inline-block rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/5 px-5 py-1.5 text-xs font-semibold uppercase tracking-[3px] text-[var(--accent)]">Our Journey</p>
            <h2 className="mt-5 text-4xl font-bold text-[var(--text)]">Our Milestones</h2>
            <p className="mt-4 max-w-2xl mx-auto text-[var(--text-secondary)] leading-relaxed">From our founding in 1998 to becoming a global leader in precision instruments.</p>
          </div>
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent)]/30 via-[var(--accent)]/10 to-transparent"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => {
                const isEven = index % 2 === 0;
                const rowClass = isEven ? "" : "md:flex-row-reverse";
                const contentClass = isEven ? "md:pr-12 md:text-right" : "md:pl-12";
                return (
                  <AnimatedSection key={item.year} delay={index * 0.1}>
                    <div className={"relative flex md:flex-row flex-col items-start gap-8 md:gap-0 " + rowClass}>
                      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10 flex h-4 w-4 items-center justify-center">
                        <div className="h-4 w-4 rounded-full border-2 border-[var(--accent)] bg-[var(--card)]"></div>
                      </div>
                      <div className={"ml-16 md:ml-0 md:w-[calc(50%-2rem)] " + contentClass}>
                        <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-6 shadow-sm">
                          <span className="text-sm font-bold text-[var(--accent)]">{item.year}</span>
                          <h3 className="mt-2 text-xl font-bold text-[var(--text)]">{item.title}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{item.description}</p>
                        </div>
                      </div>
                      <div className="hidden md:block md:w-[calc(50%-2rem)]"></div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-24 bg-[var(--bg)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="inline-block rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/5 px-5 py-1.5 text-xs font-semibold uppercase tracking-[3px] text-[var(--accent)]">Our Values</p>
            <h2 className="mt-5 text-4xl font-bold text-[var(--text)]">What Drives Us</h2>
            <p className="mt-4 max-w-2xl mx-auto text-[var(--text-secondary)] leading-relaxed">The principles that guide every instrument we manufacture and every relationship we build.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <div className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[var(--accent)]/30 hover:shadow-xl">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--accent)]/10 text-[var(--accent)] transition-all duration-300 group-hover:bg-[var(--accent)] group-hover:text-white">{value.icon}</div>
                  <h3 className="mt-6 text-xl font-bold text-[var(--text)]">{value.title}</h3>
                  <p className="mt-3 leading-relaxed text-[var(--text-secondary)]">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <AboutSection />
      <WhyChoose />
      <ManufacturingProcess />
      <Certification />
      <Testimonials />
      <CTA />
    </>
  );
}

export default About;
