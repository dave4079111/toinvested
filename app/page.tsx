"use client";

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [role, setRole] = useState("agent");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ siteId: string; url: string } | null>(
    null,
  );

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !city.trim()) return;
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch("/api/generate-site", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), city: city.trim(), role }),
      });
      const data = await res.json();
      setResult(data);
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #fff; }
        .hero {
          background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%);
          color: #fff;
          padding: 80px 24px 60px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 30% 50%, rgba(37,99,235,.15) 0%, transparent 60%);
        }
        .hero-content { position: relative; max-width: 640px; margin: 0 auto; }
        .logo { font-size: 1.1rem; letter-spacing: 6px; text-transform: uppercase; opacity: .7; margin-bottom: 24px; }
        .hero h1 { font-size: 2.6rem; font-weight: 800; line-height: 1.15; margin-bottom: 16px; }
        .hero h1 span { color: #60a5fa; }
        .hero p { font-size: 1.15rem; opacity: .8; line-height: 1.6; }

        .form-section {
          max-width: 480px;
          margin: -40px auto 60px;
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 20px 60px rgba(0,0,0,.12);
          padding: 40px 32px;
          position: relative;
          z-index: 2;
        }
        .form-section h2 { font-size: 1.3rem; margin-bottom: 24px; color: #0f172a; text-align: center; }
        .field { margin-bottom: 16px; }
        .field label { display: block; font-size: .85rem; font-weight: 600; color: #374151; margin-bottom: 6px; }
        .field input, .field select {
          width: 100%;
          padding: 14px 16px;
          border: 1px solid #d1d5db;
          border-radius: 10px;
          font-size: 1rem;
          font-family: inherit;
          background: #f9fafb;
          transition: border-color .2s;
        }
        .field input:focus, .field select:focus {
          outline: none;
          border-color: #2563eb;
          background: #fff;
        }
        .generate-btn {
          width: 100%;
          padding: 16px;
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          color: #fff;
          border: none;
          border-radius: 10px;
          font-size: 1.05rem;
          font-weight: 700;
          cursor: pointer;
          margin-top: 8px;
          transition: transform .15s, box-shadow .15s;
          font-family: inherit;
        }
        .generate-btn:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 8px 24px rgba(37,99,235,.3); }
        .generate-btn:disabled { opacity: .6; cursor: not-allowed; }

        .result-card {
          max-width: 480px;
          margin: 0 auto 60px;
          background: #f0fdf4;
          border: 1px solid #86efac;
          border-radius: 12px;
          padding: 24px;
          text-align: center;
        }
        .result-card h3 { color: #166534; margin-bottom: 8px; }
        .result-card a {
          display: inline-block;
          margin-top: 12px;
          padding: 12px 28px;
          background: #16a34a;
          color: #fff;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: background .2s;
        }
        .result-card a:hover { background: #15803d; }

        .features {
          max-width: 800px;
          margin: 0 auto 60px;
          padding: 0 24px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 24px;
        }
        .feature {
          text-align: center;
          padding: 32px 20px;
          border-radius: 12px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
        }
        .feature .icon { font-size: 2rem; margin-bottom: 12px; }
        .feature h3 { font-size: 1rem; margin-bottom: 8px; color: #0f172a; }
        .feature p { font-size: .9rem; color: #64748b; line-height: 1.5; }

        footer {
          text-align: center;
          padding: 32px;
          color: #94a3b8;
          font-size: .85rem;
          border-top: 1px solid #f1f5f9;
        }

        @media (max-width: 640px) {
          .hero h1 { font-size: 1.8rem; }
          .hero { padding: 60px 20px 50px; }
          .form-section { margin: -30px 16px 40px; padding: 28px 20px; }
        }
      `}</style>

      <div className="hero">
        <div className="hero-content">
          <div className="logo">YPNUS</div>
          <h1>
            Generate a Real Estate Website in <span>60 Seconds</span>
          </h1>
          <p>
            AI-powered landing pages that capture leads. Built for agents,
            brokers, and investors.
          </p>
        </div>
      </div>

      <form className="form-section" onSubmit={handleGenerate}>
        <h2>Build Your Site</h2>
        <div className="field">
          <label>Your Name</label>
          <input
            type="text"
            placeholder="e.g. Sarah Johnson"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="field">
          <label>City / Market</label>
          <input
            type="text"
            placeholder="e.g. Miami, FL"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div className="field">
          <label>I am a...</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="agent">Real Estate Agent</option>
            <option value="broker">Broker</option>
            <option value="investor">Investor</option>
          </select>
        </div>
        <button
          type="submit"
          className="generate-btn"
          disabled={loading || !name.trim() || !city.trim()}
        >
          {loading ? "Generating..." : "Generate My Site →"}
        </button>
      </form>

      {result && (
        <div className="result-card">
          <h3>Your site is live!</h3>
          <p>Your real estate website has been generated and is ready to share.</p>
          <a href={result.url} target="_blank" rel="noopener noreferrer">
            View My Site →
          </a>
        </div>
      )}

      <div className="features">
        <div className="feature">
          <div className="icon">⚡</div>
          <h3>Instant Generation</h3>
          <p>Enter your details and get a complete website in under 60 seconds.</p>
        </div>
        <div className="feature">
          <div className="icon">📱</div>
          <h3>Mobile Responsive</h3>
          <p>Every site looks great on desktop, tablet, and mobile devices.</p>
        </div>
        <div className="feature">
          <div className="icon">📩</div>
          <h3>Lead Capture</h3>
          <p>Built-in contact forms to capture and convert leads automatically.</p>
        </div>
      </div>

      <footer>
        &copy; {new Date().getFullYear()} YPNUS — AI-powered real estate websites.
      </footer>
    </div>
  );
}
