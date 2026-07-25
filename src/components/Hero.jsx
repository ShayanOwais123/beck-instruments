import { Link } from "react-router-dom";
import heroImage from "../assets/Hero/hero2.png";
import heroImage1 from "../assets/Hero/hero1.png";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg)] pt-28 lg:pt-32">
      {/* Background Effects */}
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[var(--accent)]/5 blur-[150px]"></div>
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[var(--secondary)]/5 blur-[150px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/5 px-5 py-2 text-xs font-semibold tracking-wide text-[var(--accent)] shadow-sm animate-fade-in-up">
              <span className="flex h-2 w-2 rounded-full bg-[var(--accent)]"></span>
              Trusted Worldwide Since 1998
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-[1.1] tracking-tight text-[var(--text)]">
              Precision
              <span className="text-[var(--accent)]"> Surgical</span>
              Instruments
              <br />
              <span className="text-[var(--text)]">Built For</span>
              <span className="text-[var(--accent)]"> Professionals</span>
            </h1>

            <p className="mx-auto lg:mx-0 mt-6 max-w-lg text-base leading-relaxed text-[var(--text-secondary)]">
              High-quality surgical, dental and veterinary instruments
              manufactured with German precision and trusted by hospitals,
              clinics and distributors across the globe.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link
                to="/products"
                className="group relative overflow-hidden rounded-xl bg-[var(--accent)] px-8 py-4 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95"
              >
                <span className="relative z-10">Explore Products</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-dark)] to-[var(--accent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </Link>
              <Link
                to="/contact"
                className="rounded-xl border border-[var(--border)] bg-[var(--card)] px-8 py-4 text-sm font-semibold text-[var(--text)] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:text-[var(--accent)] hover:shadow-xl active:scale-95"
              >
                Contact Us
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-4 lg:gap-6 max-w-md mx-auto lg:mx-0">
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <p className="text-2xl lg:text-3xl font-bold text-[var(--accent)]">25+</p>
                <p className="mt-1 text-xs lg:text-sm text-[var(--muted)]">Years Experience</p>
              </div>
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <p className="text-2xl lg:text-3xl font-bold text-[var(--accent)]">500+</p>
                <p className="mt-1 text-xs lg:text-sm text-[var(--muted)]">Premium Products</p>
              </div>
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <p className="text-2xl lg:text-3xl font-bold text-[var(--accent)]">50+</p>
                <p className="mt-1 text-xs lg:text-sm text-[var(--muted)]">Countries Served</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 relative flex items-center justify-center">
            <div className="relative w-full max-w-lg lg:max-w-xl">
              {/* Main Card */}
              <div className="relative flex items-center justify-center rounded-[32px] bg-gradient-to-br from-[var(--accent)]/5 via-[var(--card)] to-[var(--bg)] p-2 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <div className="absolute h-[300px] w-[300px] lg:h-[400px] lg:w-[400px] rounded-full bg-[var(--accent)]/10 blur-[100px]"></div>
                <img
                  src={heroImage}
                  alt="Surgical Instruments"
                  className="relative z-10 h-[300px] sm:h-[350px] lg:h-[420px] w-auto object-contain transition-all duration-700 hover:scale-105"
                />

                {/* Floating Card */}
                <div className="absolute bottom-6 left-6 right-6 z-20 rounded-2xl border border-white/30 bg-[var(--card)]/80 backdrop-blur-xl px-5 py-4 shadow-xl">
                  <p className="text-xs uppercase tracking-[2px] font-semibold text-[var(--accent)]">
                    Certified Manufacturer
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-[var(--text)]">
                    ISO 13485 Certified
                  </h3>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">
                    Premium German Stainless Steel Instruments
                  </p>
                </div>
              </div>

              {/* Floating Image Indicator */}
              <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 z-30 h-20 w-20 lg:h-24 lg:w-24 rounded-2xl border-4 border-[var(--card)] shadow-lg overflow-hidden">
                <img
                  src={heroImage1}
                  alt="Surgical Instruments"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
