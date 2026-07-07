import {
  FiAward,
  FiShield,
  FiTruck,
  FiCheckCircle,
} from "react-icons/fi";

function WhyChoose() {
  const features = [
    {
      icon: <FiAward size={26} />,
      title: "Premium German Steel",
      text: "Crafted from high-quality stainless steel for maximum durability.",
    },
    {
      icon: <FiShield size={26} />,
      title: "Lifetime Warranty",
      text: "Manufactured with strict quality control and lifetime assurance.",
    },
    {
      icon: <FiTruck size={26} />,
      title: "Worldwide Shipping",
      text: "Fast and secure delivery across the globe.",
    },
    {
      icon: <FiCheckCircle size={26} />,
      title: "ISO Certified",
      text: "Trusted manufacturing standards recognized internationally.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <p className="uppercase tracking-[3px] text-blue-600 font-semibold">
              Why Choose Us
            </p>

            <h2 className="text-4xl font-bold mt-4">
              Trusted By Medical Professionals Worldwide
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Every instrument is engineered with precision,
              ensuring reliability, durability and exceptional
              performance in every procedure.
            </p>

            <div className="mt-6 space-y-4">

              {features.map((feature) => (

                <div
                  key={feature.title}
                  className="flex gap-4 items-start"
                >
                  <div className="bg-blue-600 text-white p-4 rounded-xl">
                    {feature.icon}
                  </div>

                  <div>
                    <h3 className="font-bold text-xl">
                      {feature.title}
                    </h3>

                    <p className="text-gray-600 mt-2">
                      {feature.text}
                    </p>
                  </div>
                </div>

              ))}

            </div>

          </div>

          {/* Right */}

          <div className="h-137.5 rounded-3xl bg-linear-to-br mt-2 from-slate-200 to-slate-300 flex items-center justify-center">

            IMAGE

          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyChoose;