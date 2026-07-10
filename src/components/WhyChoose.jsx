import whychoose from "../assets/Whychoose/whychoose.jpg";
import {
  FiAward,
  FiShield,
  FiTruck,
  FiCheckCircle,
} from "react-icons/fi";

function WhyChoose() {
  const features = [
    {
      icon: <FiAward size={22} />,
      title: "Premium German Steel",
      text: "Crafted from high-quality stainless steel for maximum durability.",
    },
    {
      icon: <FiShield size={22} />,
      title: "Lifetime Warranty",
      text: "Manufactured with strict quality control and lifetime assurance.",
    },
    {
      icon: <FiTruck size={22} />,
      title: "Worldwide Shipping",
      text: "Fast and secure delivery across the globe.",
    },
    {
      icon: <FiCheckCircle size={22} />,
      title: "ISO Certified",
      text: "Trusted manufacturing standards recognized internationally.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}

          <div>

            <p className="text-sm font-semibold uppercase tracking-[3px] text-blue-600">
              Why Choose Us
            </p>

            <h2 className="mt-3 text-3xl lg:text-4xl font-bold leading-tight text-slate-900">
              Trusted By Medical Professionals Worldwide
            </h2>

            <p className="mt-5 max-w-xl text-[15px] leading-7 text-gray-600">
              Every instrument is engineered with precision, ensuring
              reliability, durability and exceptional performance in every
              procedure. Our manufacturing process follows international
              standards trusted by hospitals and distributors worldwide.
            </p>

            <div className="mt-8 space-y-5">

              {features.map((feature) => (

                <div
                  key={feature.title}
                  className="group flex items-start gap-4"
                >

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">

                    {feature.icon}

                  </div>

                  <div>

                    <h3 className="text-lg font-semibold text-slate-900">
                      {feature.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      {feature.text}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* Right */}

          <div className="group relative overflow-hidden rounded-3xl shadow-lg">

            <img
              src={whychoose}
              alt="Medical Instruments"
              className="h-125 w-full object-cover transition-all duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 via-slate-900/5 to-transparent"></div>

            <div className="absolute bottom-6 left-6 max-w-xs rounded-2xl border border-white/30 bg-white/10 backdrop-blur-md px-5 py-4 shadow-2xl">

  <p className="text-xs uppercase tracking-[2px] text-blue-200 font-semibold">
    Manufacturing Excellence
  </p>

  <h3 className="mt-2 text-xl font-bold text-white">
    25+ Years Experience
  </h3>

  <p className="mt-2 text-sm leading-6 text-white/80">
    Precision-crafted instruments trusted by healthcare professionals worldwide.
  </p>

</div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyChoose;