import logo2 from "../assets/Brands/logo2.webp";
import logo1 from "../assets/Brands/logo1.webp";
import logo3 from "../assets/Brands/logo3.svg";
import logo4 from "../assets/Brands/logo4.webp";
import logo5 from "../assets/Brands/logo5.webp";
import SectionHeading from "./SectionHeading";

function TrustedBrands() {
  const brands = [logo1, logo2, logo3, logo4, logo5];

  return (
    <section className="py-24 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          subtitle="Trusted By"
          title="Trusted By Professionals Worldwide"
          description="Hospitals, clinics and distributors rely on our precision instruments for quality, durability and performance."
        />

        {/* Premium Marquee Slider with edge fades */}
        <div className="mt-14 marquee-container py-4">
          <div className="logo-track">
            {[...brands, ...brands, ...brands].map((logo, index) => (
              <div key={index} className="logo-item">
                <img
                  src={logo}
                  alt={`Partner Brand ${(index % brands.length) + 1}`}
                  className="h-10 lg:h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustedBrands;
