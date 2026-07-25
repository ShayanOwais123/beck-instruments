import { Link } from "react-router-dom";
import { FiShield, FiArrowLeft } from "react-icons/fi";
import AnimatedSection from "../components/AnimatedSection";

function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[var(--bg)] pt-32 pb-24">
      <section className="max-w-4xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-14">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--accent)]/10 mb-6">
              <FiShield size={32} className="text-[var(--accent)]" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-[var(--text)]">Privacy Policy</h1>
            <p className="mt-4 text-[var(--text-secondary)]">Last Updated: January 2025</p>
          </div>
        </AnimatedSection>

        <div className="space-y-8 text-[var(--text-secondary)] leading-7">
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl font-bold text-[var(--text)]">1. Introduction</h2>
            <p>
              Beck Instruments ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you visit our website and
              use our services.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <h2 className="text-2xl font-bold text-[var(--text)]">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Personal Information:</strong> Name, email address, phone number, company name, and billing/shipping address when you place an order or contact us.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and navigation patterns.</li>
              <li><strong>Device Information:</strong> IP address, browser type, operating system, and device type for analytics and security purposes.</li>
              <li><strong>Cookies:</strong> We use cookies and similar tracking technologies to enhance your browsing experience and analyze site traffic.</li>
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h2 className="text-2xl font-bold text-[var(--text)]">3. How We Use Your Information</h2>
            <p>We use the collected information for:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Processing and fulfilling your orders</li>
              <li>Responding to your inquiries and customer support requests</li>
              <li>Sending order confirmations, shipping updates, and invoices</li>
              <li>Improving our website, products, and services</li>
              <li>Complying with legal obligations and regulatory requirements</li>
              <li>Sending marketing communications (with your consent where required)</li>
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.25}>
            <h2 className="text-2xl font-bold text-[var(--text)]">4. Data Protection</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction. This includes
              SSL encryption, secure servers, and regular security audits.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <h2 className="text-2xl font-bold text-[var(--text)]">5. Third-Party Disclosure</h2>
            <p>
              We do not sell, trade, or transfer your personal information to third parties without your consent,
              except to trusted service providers who assist us in operating our website and conducting our
              business, provided they agree to keep your information confidential.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.35}>
            <h2 className="text-2xl font-bold text-[var(--text)]">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Access your personal data held by us</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data (subject to legal obligations)</li>
              <li>Object to processing of your data for marketing purposes</li>
              <li>Request data portability</li>
              <li>Withdraw consent at any time where processing is based on consent</li>
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <h2 className="text-2xl font-bold text-[var(--text)]">7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact us at
              privacy@beckinstruments.com or through our{" "}
              <Link to="/contact" className="text-[var(--accent)] hover:underline">Contact Page</Link>.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.45}>
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

export default PrivacyPolicy;

