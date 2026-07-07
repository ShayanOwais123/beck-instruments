import {
  FiPenTool,
  FiSettings,
  FiCheckCircle,
  FiTruck,
} from "react-icons/fi";

function ManufacturingProcess() {
  const steps = [
    {
      icon: <FiPenTool size={28} />,
      title: "Design",
      text: "Every instrument starts with precision engineering and detailed design.",
    },
    {
      icon: <FiSettings size={28} />,
      title: "Manufacturing",
      text: "Produced using premium stainless steel with advanced machinery.",
    },
    {
      icon: <FiCheckCircle size={28} />,
      title: "Quality Inspection",
      text: "Every product undergoes strict quality checks before packaging.",
    },
    {
      icon: <FiTruck size={28} />,
      title: "Worldwide Delivery",
      text: "Secure packaging and fast international shipping.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[3px] text-blue-600 font-semibold">
            Our Process
          </p>

          <h2 className="text-4xl font-bold mt-4">
            How We Manufacture Excellence
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Every instrument passes through a carefully controlled production
            process to ensure exceptional quality and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative bg-slate-50 rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-6">
                {step.icon}
              </div>

              <span className="absolute top-6 right-6 text-5xl font-extrabold text-slate-200">
                0{index + 1}
              </span>

              <h3 className="text-xl font-bold">
                {step.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {step.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default ManufacturingProcess;