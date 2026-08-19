import { useState } from "react";
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiCheck, FiAlertCircle } from "react-icons/fi";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
 
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      // Save the message into a "messages" collection in Firestore
      await addDoc(collection(db, "messages"), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
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
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--text)] placeholder-[var(--muted)] outline-none transition-all focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/10"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--text)] mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--text)] placeholder-[var(--muted)] outline-none transition-all focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/10"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--text)] mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--text)] placeholder-[var(--muted)] outline-none transition-all focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/10"
                  placeholder="How can we help you?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--text)] mb-2">Message *</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--text)] placeholder-[var(--muted)] outline-none transition-all focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/10 resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>
              {error && (
                <div className="flex items-center gap-2 rounded-xl border border-[var(--error)]/20 bg-[var(--error)]/10 px-4 py-3 text-sm text-[var(--error)]">
                  <FiAlertCircle size={16} />
                  {error}
                </div>
              )}
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent)]/90 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:-translate-y-0.5 active:scale-95 shadow-sm w-full justify-center disabled:opacity-50"
              >
                {submitted ? (
                  <>
                    <FiCheck size={18} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <FiSend size={18} />
                    {loading ? "Sending..." : "Send Message"}
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
              <div className="h-64 rounded-xl overflow-hidden border border-[var(--border)]">
                <iframe
                  title="Beck Instruments Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.6828193595!2d66.88567999999999!3d25.193389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1692376890000!5m2!1sen!2s"
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
 
        </div>
      </div>
    </section>
  );
}
 
export default Contact;