import { useState } from "react";
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiCheck } from "react-icons/fi";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="min-h-screen bg-[var(--bg)] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="inline-block rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/5 px-5 py-1.5 text-xs font-semibold uppercase tracking-[3px] text-[var(--accent)]">
            Get In Touch
          </p>
          <h1 className="mt-5 text-4xl lg:text-5xl font-extrabold text-[var(--text)] leading-tight">
            Contact Us
          </h1>
          <p className="mt-5 text-[var(--text-secondary)] leading-relaxed">
            Have a question about our products or need a custom solution? Our team of experts is ready to help you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 lg:p-10 shadow-sm">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[var(--text)] mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--text)] placeholder-[var(--muted)] outline-none transition-all focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/10"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--text)] mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--text)] placeholder-[var(--muted)] outline-none transition-all focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/10"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--text)] mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--text)] placeholder-[var(--muted)] outline-none transition-all focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/10"
                  placeholder="How can we help you?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--text)] mb-2">Message *</label>
                <textarea
                  required
                  rows={5}
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--text)] placeholder-[var(--muted)] outline-none transition-all focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/10 resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent)]/90 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:-translate-y-0.5 active:scale-95 shadow-sm w-full justify-center"
              >
                {submitted ? (
                  <>
                    <FiCheck size={18} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <FiSend size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 lg:p-10 shadow-sm">
              <h2 className="text-2xl font-bold text-[var(--text)] mb-8">Contact Information</h2>
              <div className="space-y-6">
                {[
                  { icon: FiMapPin, label: "Visit Us", value: "Karachi, Pakistan" },
                  { icon: FiPhone, label: "Call Us", value: "+92 300 1234567" },
                  { icon: FiMail, label: "Email Us", value: "info@beckinstruments.com" },
                  { icon: FiClock, label: "Working Hours", value: "Mon - Fri: 9:00 AM - 6:00 PM" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--text)]">{label}</p>
                      <p className="mt-1 text-[var(--text-secondary)]">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 lg:p-10 shadow-sm">
              <h3 className="text-lg font-bold text-[var(--text)] mb-4">Our Location</h3>
              <div className="h-64 rounded-xl bg-[var(--bg)] flex items-center justify-center border border-dashed border-[var(--border)]">
                <div className="text-center">
                  <FiMapPin size={32} className="mx-auto text-[var(--accent)]" />
                  <p className="mt-3 text-sm text-[var(--text-secondary)]">Karachi, Pakistan</p>
                  <p className="text-xs text-[var(--muted)] mt-1">Interactive map placeholder</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
