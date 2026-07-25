import { Link } from "react-router-dom";
import { FiFileText, FiArrowLeft } from "react-icons/fi";
import AnimatedSection from "../components/AnimatedSection";

function TermsConditions() {
  return (
    <main className="min-h-screen bg-[var(--bg)] pt-32 pb-24">
      <section className="max-w-4xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-14">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--accent)]/10 mb-6">
              <FiFileText size={32} className="text-[var(--accent)]" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-[var(--text)]">Terms & Conditions</h1>
            <p className="mt-4 text-[var(--text-secondary)]">Last Updated: January 2025</p>
          </div>
        </AnimatedSection>

        <div className="space-y-8 text-[var(--text-secondary)] leading-7">
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl font-bold text-[var(--text)]">1. Introduction</h2>
            <p>
              These Terms and Conditions govern your use of the Beck Instruments website and the purchase of our
              products. By accessing our website or placing an order, you agree to be bound by these terms.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <h2 className="text-2xl font-bold text-[var(--text)]">2. Products & Orders</h2>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>All product descriptions, specifications, and images are for informational purposes and may vary slightly from the actual product.</li>
              <li>We reserve the right to modify or discontinue products without prior notice.</li>
              <li>Orders are subject to availability and acceptance. We may refuse or cancel orders at our discretion.</li>
              <li>Prices are subject to change without notice. The price at the time of order confirmation will apply.</li>
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h2 className="text-2xl font-bold text-[var(--text)]">3. Payment Terms</h2>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Payment is due at the time of ordering unless alternative payment terms have been agreed in writing.</li>
              <li>We accept major credit cards, bank transfers, and letters of credit for international orders.</li>
              <li>All prices are quoted in USD unless otherwise specified.</li>
              <li>International orders may be subject to customs duties, taxes, and fees imposed by the destination country.</li>
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.25}>
            <h2 className="text-2xl font-bold text-[var(--text)]">4. Shipping & Delivery</h2>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Shipping times are estimates and not guaranteed. We are not liable for delays caused by customs or shipping carriers.</li>
              <li>Risk of loss transfers to the buyer upon delivery to the shipping carrier.</li>
              <li>Buyer is responsible for providing accurate shipping information. Additional charges may apply for incorrect addresses.</li>
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <h2 className="text-2xl font-bold text-[var(--text)]">5. Returns & Refunds</h2>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>We accept returns within 30 days of delivery for defective or incorrect items.</li>
              <li>Products must be returned in their original condition and packaging.</li>
              <li>Custom-manufactured instruments are non-returnable unless defective.</li>
              <li>Refunds will be processed within 10 business days of receiving the returned product.</li>
              <li>Shipping costs for returns are the responsibility of the buyer unless the item is defective.</li>
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.35}>
            <h2 className="text-2xl font-bold text-[var(--text)]">6. Warranty</h2>
            <p>
              Beck Instruments provides a lifetime warranty against manufacturing defects for all standard instruments.
              The warranty covers material defects and workmanship issues under normal use. The warranty does not cover
              damage caused by misuse, improper sterilization, modification, or normal wear and tear.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <h2 className="text-2xl font-bold text-[var(--text)]">7. Limitation of Liability</h2>
            <p>
              Beck Instruments shall not be liable for any indirect, incidental, special, consequential, or punitive
              damages arising from the use or inability to use our products. Our total liability shall not exceed the
              purchase price of the products giving rise to the claim.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.45}>
            <h2 className="text-2xl font-bold text-[var(--text)]">8. Contact Information</h2>
            <p>
              For questions about these Terms & Conditions, please contact us at legal@beckinstruments.com or visit
              our{" "}
              <Link to="/contact" className="text-[var(--accent)] hover:underline">Contact Page</Link>.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-sm">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] hover:underline transition-all"
              >
                <FiArrowLeft size={14} /> Back to Home
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}

export default TermsConditions;

