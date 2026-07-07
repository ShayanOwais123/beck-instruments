import {
  FiAward,
  FiShield,
  FiGlobe,
  FiCheckCircle,
} from "react-icons/fi";

function Certifications() {
  const certifications = [
    {
      icon: <FiAward size={30} />,
      title: "ISO 13485",
      description: "Certified quality management system for medical devices.",
    },
    {
      icon: <FiShield size={30} />,
      title: "CE Certified",
      description: "Products manufactured according to European standards.",
    },
    {
      icon: <FiCheckCircle size={30} />,
      title: "Premium Steel",
      description: "Manufactured using surgical grade stainless steel.",
    },
    {
      icon: <FiGlobe size={30} />,
      title: "Global Export",
      description: "Supplying instruments to customers worldwide.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[3px] text-blue-600 font-semibold">
            Certifications
          </p>

          <h2 className="text-4xl font-bold mt-4">
            Built On International Quality Standards
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Every instrument is manufactured under internationally recognized
            quality standards to ensure safety, precision and long-term reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {certifications.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl border border-gray-200 p-8 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-400"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-600 text-white flex items-center justify-center">
                {item.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;