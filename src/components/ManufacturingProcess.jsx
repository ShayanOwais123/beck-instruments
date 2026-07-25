import {
  FiPenTool,
  FiSettings,
  FiCheckCircle,
  FiTruck,
} from "react-icons/fi";
import AnimatedSection from "./AnimatedSection";

function ManufacturingProcess() {
  const steps = [
    {
      icon: <FiPenTool size={28} />,
      title: "Design",
      text: "Every instrument starts with precision engineering and detailed design using CAD technology.",
    },
    {
      icon: <FiSettings size={28} />,
      title: "Manufacturing",
      text: "Produced using premium German stainless steel with advanced CNC machinery.",
    },
    {
      icon: <FiCheckCircle size={28} />,
      title: "Quality Inspection",
      text: "Every product undergoes strict quality checks and testing before packaging.",
    },
    {
      icon: <FiTruck size={28} />,
      title: "Worldwide Delivery",
      text: "Secure packaging and fast international shipping to over 50 countries.",
    },
  ];

  return (
    <section className="py-24 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="inline-block rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/5 px-5 py-1.5 text-xs font-semibold uppercase tracking-[3px] text-[var(--accent)]">
            Our Process
          </p>
          <h2 className="mt-5 text-4xl font-bold text-[var(--text)]">
            How We Manufacture Excellence
          </h2>
          <p className="mt-4 text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            Every instrument passes through a carefully controlled production
            process to ensure exceptional quality and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <AnimatedSection key={step.title} delay={index * 0.1}>
              <div className="group relative rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--accent)] text-white shadow-sm transition-all duration-300 group-hover:shadow-md">
                  {step.icon}
                </div>
                <span className="absolute top-6 right-6 text-5xl font-extrabold text-[var(--border)] select-none">
                  0{index + 1}
                </span>
                <h3 className="mt-6 text-xl font-bold text-[var(--text)]">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-[var(--text-secondary)]">
                  {step.text}
                </p>
                {/* Progress Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-[var(--accent)]/30 to-transparent"></div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ManufacturingProcess;
