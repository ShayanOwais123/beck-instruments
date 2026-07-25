import { FiStar, FiChevronLeft, FiChevronRight, FiMessageCircle } from "react-icons/fi";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Dr. Ahmed Hassan",
    role: "Chief Surgeon, City Hospital",
    text: "Beck Instruments has been our trusted partner for surgical instruments for over a decade. Their quality is unmatched and their customer service is exceptional.",
    rating: 5,
  },
  {
    name: "Dr. Sarah Khan",
    role: "Dental Surgeon",
    text: "The precision and durability of their dental instruments is outstanding. I recommend Beck to every professional looking for reliable tools.",
    rating: 5,
  },
  {
    name: "Dr. James Wilson",
    role: "Veterinary Specialist",
    text: "We rely on Beck for all our veterinary instruments. The quality is consistent and their range of products covers all our needs.",
    rating: 5,
  },
  {
    name: "Dr. Maria Lopez",
    role: "Lab Director, MedTech Labs",
    text: "Their laboratory instruments offer exceptional precision for our diagnostic needs. Highly recommended for any medical facility.",
    rating: 5,
  },
];

function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="py-24 bg-[var(--bg)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="inline-block rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/5 px-5 py-1.5 text-xs font-semibold uppercase tracking-[3px] text-[var(--accent)]">
            Testimonials
          </p>
          <h2 className="mt-5 text-4xl font-bold text-[var(--text)]">
            What Our Clients Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-[var(--text-secondary)] leading-relaxed">
            Hear from healthcare professionals who trust Beck Instruments
            for their precision instrument needs.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${
                i === current
                  ? "opacity-100 translate-x-0 relative"
                  : "opacity-0 absolute inset-0 translate-x-10 pointer-events-none"
              }`}
            >
              {i === current && (
                <div className="text-center">
                  {/* Quote Icon */}
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--accent)]/10 text-[var(--accent)] mb-8">
                    <FiMessageCircle size={28} />
                  </div>

                  {/* Stars */}
                  <div className="flex justify-center gap-1.5 mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                      <FiStar key={i} className="fill-yellow-400 text-yellow-400" size={20} />
                    ))}
                  </div>

                  {/* Text */}
                  <div className="relative">
                    <p className="text-lg leading-relaxed text-[var(--text-secondary)] max-w-2xl mx-auto italic">
                      &ldquo;{t.text}&rdquo;
                    </p>
                  </div>

                  {/* Avatar */}
                  <div className="mt-8 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-dark)] text-white text-xl font-bold shadow-lg">
                    {t.name.charAt(0)}
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-[var(--text)]">
                    {t.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[var(--accent)]">
                    {t.role}
                  </p>
                </div>
              )}
            </div>
          ))}

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prev}
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)] text-[var(--text-secondary)] transition-all duration-300 hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] active:scale-95"
            >
              <FiChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-[var(--accent)]" : "w-2 bg-[var(--border)] hover:bg-[var(--accent)]/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)] text-[var(--text-secondary)] transition-all duration-300 hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] active:scale-95"
            >
              <FiChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
