import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMail, FiLock, FiLogIn, FiAlertCircle } from "react-icons/fi";
import { useAuth } from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    try {
      setLoading(true);
      await login(email, password);
      navigate("/"); // redirect to home after successful login
    } catch (err) {
      // Firebase gives error codes like "auth/wrong-password" — we show a simple message instead
      setError("Failed to log in. Check your email and password.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="min-h-screen bg-[var(--bg)] pt-32 pb-24 flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <p className="inline-block rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/5 px-5 py-1.5 text-xs font-semibold uppercase tracking-[3px] text-[var(--accent)]">
            Welcome Back
          </p>
          <h1 className="mt-5 text-4xl font-extrabold text-[var(--text)] leading-tight">
            Log In
          </h1>
          <p className="mt-3 text-[var(--text-secondary)]">
            Log in to access your account and orders.
          </p>
        </div>

        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 lg:p-10 shadow-sm">
          {error && (
            <div className="mb-6 flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              <FiAlertCircle size={16} />
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-[var(--text)] mb-2">
                Email
              </label>
              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)]" size={18} />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] pl-11 pr-4 py-3 text-[var(--text)] placeholder-[var(--muted)] outline-none transition-all focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/10"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--text)] mb-2">
                Password
              </label>
              <div className="relative">
                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)]" size={18} />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] pl-11 pr-4 py-3 text-[var(--text)] placeholder-[var(--muted)] outline-none transition-all focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/10"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-6 py-3.5 font-semibold text-white transition-all hover:opacity-90 disabled:opacity-50"
            >
              <FiLogIn size={18} />
              {loading ? "Logging in..." : "Log In"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-[var(--text-secondary)]">
            Don't have an account?{" "}
            <Link to="/signup" className="font-semibold text-[var(--accent)] hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
