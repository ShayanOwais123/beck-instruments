import { useState } from "react";
import { Link } from "react-router-dom";
import { FiBox, FiImage, FiSettings } from "react-icons/fi";
import heroImage from "../assets/Hero/hero2.png";
import heroImage1 from "../assets/Hero/hero1.png";
import Instrument3DViewer from "./Instrument3DViewer";

function Hero() {
  const [viewMode, setViewMode] = useState("3d"); // "3d" or "photo"
  const [selectedModel, setSelectedModel] = useState("scalpel"); // "scalpel", "forceps", "scissors"

  return (
    <section className="relative overflow-hidden bg-[var(--bg)] pt-28 lg:pt-32 pb-6">
      {/* Background Neon Glow Effects */}
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[var(--accent)]/10 blur-[150px] pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[var(--secondary)]/10 blur-[150px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-5 py-2 text-xs font-semibold tracking-wide text-[var(--accent)] shadow-lg backdrop-blur-md animate-fade-in-up">
              <span className="flex h-2 w-2 rounded-full bg-[var(--accent)] animate-ping"></span>
              Web3D Interactive Surgical Showroom
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-[1.1] tracking-tight text-[var(--text)]">
              Precision
              <span className="text-[var(--accent)] bg-clip-text"> Surgical</span>
              <br className="hidden sm:inline" />
              Instruments
              <span className="text-[var(--text)]"> Built For</span>
              <span className="text-[var(--accent)]"> Professionals</span>
            </h1>

            <p className="mx-auto lg:mx-0 mt-6 max-w-lg text-base leading-relaxed text-[var(--text-secondary)]">
              High-quality surgical, dental and veterinary instruments
              manufactured with German precision. Experience our immersive, 
              interactive 3D catalog to inspect instruments up close before ordering.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link
                to="/products"
                className="group relative overflow-hidden rounded-xl bg-[var(--accent)] px-8 py-4 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95"
              >
                <span className="relative z-10">Explore Catalog</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-dark)] to-[var(--accent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </Link>
              <Link
                to="/contact"
                className="rounded-xl border border-[var(--border)] bg-[var(--card)] px-8 py-4 text-sm font-semibold text-[var(--text)] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:text-[var(--accent)] hover:shadow-xl active:scale-95"
              >
                Request Custom Design
              </Link>
            </div>

            {/* Stats Grid */}
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

          {/* Right 3D Viewer Card */}
          <div className="order-1 lg:order-2 relative flex flex-col items-center justify-center w-full">
            {/* Mode Switcher Tabs */}
            <div className="mb-3 sm:mb-4 flex items-center gap-1 p-1 sm:p-1.5 glass rounded-2xl shadow-lg z-20 relative">
              <button
                onClick={() => setViewMode("3d")}
                className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-bold transition-all duration-300 ${
                  viewMode === "3d"
                    ? "bg-[var(--accent)] text-white shadow-md shadow-[var(--accent-glow)] scale-105"
                    : "text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/10"
                }`}
              >
                <FiBox size={13} /> 3D Interactive
              </button>
              <button
                onClick={() => setViewMode("photo")}
                className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-bold transition-all duration-300 ${
                  viewMode === "photo"
                    ? "bg-[var(--accent)] text-white shadow-md shadow-[var(--accent-glow)] scale-105"
                    : "text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/10"
                }`}
              >
                <FiImage size={13} /> Studio Photo
              </button>
            </div>

            <div className="relative w-full max-w-xl lg:max-w-2xl">
              {/* Main Card wrapper */}
              <div className="relative rounded-2xl sm:rounded-[32px] border border-[var(--border)] bg-[var(--card)] p-2 sm:p-3.5 shadow-2xl transition-all duration-500 hover:shadow-3xl backdrop-blur-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 via-transparent to-[var(--secondary)]/10 rounded-2xl sm:rounded-[32px] pointer-events-none"></div>

                {viewMode === "3d" ? (
                  <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden flex flex-col items-center justify-center">
                    <Instrument3DViewer
                      modelType={selectedModel}
                      productName={`${selectedModel.toUpperCase()} - VirtuLab`}
                      sku="BK-VIRTUAL-3D"
                      finish="Mirror / Gold Trim"
                    />

                    {/* Enhanced Model Switcher Selector */}
                    <div className="absolute top-12 sm:top-16 left-2.5 right-2.5 sm:left-auto sm:right-4 flex justify-center sm:justify-end gap-1 p-1 bg-black/70 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/15 z-20 shadow-xl overflow-x-auto">
                      {[
                        { id: "scalpel", label: "Scalpel" },
                        { id: "forceps", label: "Forceps" },
                        { id: "scissors", label: "Scissors" },
                        { id: "tweezers", label: "Tweezers" },
                      ].map((m) => (
                        <button
                          key={m.id}
                          onClick={() => setSelectedModel(m.id)}
                          className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl text-[10px] sm:text-[11px] font-bold tracking-wider uppercase transition-all duration-200 ${
                            selectedModel === m.id
                              ? "bg-[var(--accent)] text-white shadow-md shadow-[var(--accent-glow)]"
                              : "text-slate-300 hover:text-white hover:bg-white/10"
                          }`}
                        >
                          {m.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="relative h-[340px] sm:h-[480px] w-full flex items-center justify-center overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-b from-slate-900 via-slate-950 to-black p-4 sm:p-6">
                    <img
                      src={heroImage}
                      alt="Surgical Instruments"
                      className="relative z-10 max-h-[260px] sm:max-h-[380px] w-auto object-contain transition-all duration-700 hover:scale-105 filter drop-shadow-2xl"
                    />
                    
                    {/* Floating Info Overlay */}
                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-20 rounded-xl sm:rounded-2xl border border-white/20 bg-black/60 backdrop-blur-xl px-4 py-3 sm:px-5 sm:py-4 shadow-xl">
                      <p className="text-[10px] sm:text-xs uppercase tracking-[2px] font-bold text-[var(--accent)]">
                        Premium Quality Standard
                      </p>
                      <h3 className="mt-0.5 sm:mt-1 text-xs sm:text-sm font-bold text-white">
                        CE & ISO 13485 Registered Medical German Stainless Steel
                      </h3>
                    </div>
                  </div>
                )}
              </div>

              {/* Floating Image Indicator */}
              <div className="hidden sm:block absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 z-30 h-16 w-16 lg:h-20 lg:w-20 rounded-2xl border-4 border-[var(--card)] shadow-xl overflow-hidden transition-all duration-300 hover:scale-110">
                <img
                  src={heroImage1}
                  alt="Surgical Instruments Detail"
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
