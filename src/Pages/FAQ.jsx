import { useState } from "react";
import { FiChevronDown, FiHelpCircle } from "react-icons/fi";
import AnimatedSection from "../components/AnimatedSection";

const faqs = [
  {
    question: "What materials do you use for your instruments?",
    answer:
      "All our instruments are manufactured using premium German Stainless Steel, ensuring exceptional durability, corrosion resistance, and precision performance. We also offer instruments in titanium and specialty alloys for specific applications."
  },
  {
    question: "Are your instruments autoclavable and sterilizable?",
    answer:
      "Yes, all our instruments are fully autoclavable and designed to withstand repeated sterilization cycles at temperatures up to 134°C (273°F) without compromising their structural integrity or performance."
  },
  {
    question: "Do you offer custom manufacturing of instruments?",
    answer:
      "Absolutely. We have a dedicated R&D team that works with clients to develop custom instruments tailored to specific surgical procedures, ergonomic requirements, or unique clinical needs. Minimum order quantities may apply."
  },
  {
    question: "What certifications do your products carry?",
    answer:
      "Our manufacturing facility is ISO 13485:2016 certified. Our instruments carry CE marking and comply with relevant FDA regulations. We also provide certificates of conformity and material certificates upon request."
  },
  {
    question: "What is your minimum order quantity (MOQ)?",
    answer:
      "Our standard MOQ is 10 pieces per instrument type. However, for large volume orders and long-term partnerships, we can accommodate lower MOQs. Please contact our sales team for negotiation."
  },
  {
    question: "Do you offer warranty on your instruments?",
    answer:
      "Yes, we offer a comprehensive lifetime warranty against manufacturing defects on all our surgical instruments. This covers material defects and workmanship issues under normal use and proper maintenance conditions."
  },
  {
    question: "What is your shipping and delivery process?",
    answer:
      "We ship worldwide via FedEx, DHL, and UPS. Orders are processed within 3-5 business days. Express shipping is available. We provide full tracking information and handle all customs documentation for international shipments."
  },
  {
    question: "Can I request samples before placing a bulk order?",
    answer:
      "Yes, we provide sample instruments for evaluation. A nominal fee applies for samples, which is fully refundable upon placing a bulk order. Contact our sales team to request samples of specific instruments."
  }
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-[var(--bg)] pt-32 pb-24">
      <section className="max-w-3xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-14">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--accent)]/10 mb-6">
              <FiHelpCircle size={32} className="text-[var(--accent)]" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-[var(--text)]">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-[var(--text-secondary)] max-w-2xl mx-auto">
              Find answers to common questions about our products, manufacturing, shipping, and more.
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <AnimatedSection key={index} delay={index * 0.05}>
              <div
                className={`rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-sm transition-all duration-300 ${
                  openIndex === index ? "shadow-md" : "hover:shadow-md"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="text-lg font-semibold text-[var(--text)]">{faq.question}</span>
                  <FiChevronDown
                    size={20}
                    className={`shrink-0 text-[var(--text-secondary)] transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 text-[var(--text-secondary)] leading-7">{faq.answer}</div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </main>
  );
}

export default FAQ;

