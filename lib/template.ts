export function generateFallbackHtml(name: string, city: string, role: string): string {
  const roleLabel =
    role === "investor"
      ? "Real Estate Investor"
      : role === "broker"
        ? "Licensed Broker"
        : "Licensed Real Estate Agent";

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>${name} — ${roleLabel} in ${city}</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Inter',system-ui,sans-serif;color:#1a1a2e;background:#fff}
.hero{background:linear-gradient(135deg,#0f172a 0%,#1e3a5f 100%);color:#fff;padding:80px 24px;text-align:center}
.hero h1{font-size:2.8rem;margin-bottom:12px;font-weight:800}
.hero p{font-size:1.2rem;opacity:.85;max-width:600px;margin:0 auto}
.badge{display:inline-block;background:rgba(255,255,255,.15);padding:6px 16px;border-radius:20px;font-size:.85rem;margin-bottom:24px}
section{max-width:720px;margin:0 auto;padding:60px 24px}
h2{font-size:1.6rem;margin-bottom:16px;color:#0f172a}
p{line-height:1.7;color:#374151;margin-bottom:16px}
.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:20px;margin-top:24px}
.card{background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:24px;text-align:center}
.card h3{font-size:1.1rem;margin-bottom:8px}
.card p{font-size:.9rem;color:#64748b}
.contact-form{background:#f8fafc;border-radius:16px;padding:40px 24px;margin-top:40px}
.contact-form input,.contact-form textarea{width:100%;padding:14px;border:1px solid #d1d5db;border-radius:8px;font-size:1rem;margin-bottom:12px;font-family:inherit}
.contact-form textarea{height:100px;resize:vertical}
.btn{display:inline-block;background:#2563eb;color:#fff;padding:14px 32px;border:none;border-radius:8px;font-size:1rem;font-weight:600;cursor:pointer;width:100%}
.btn:hover{background:#1d4ed8}
footer{text-align:center;padding:32px;color:#94a3b8;font-size:.85rem;border-top:1px solid #e2e8f0}
</style>
</head>
<body>
<div class="hero">
  <div class="badge">${roleLabel}</div>
  <h1>${name}</h1>
  <p>Your trusted real estate professional in ${city}. Helping buyers, sellers, and investors achieve their property goals.</p>
</div>

<section>
  <h2>About ${city} Real Estate</h2>
  <p>${city} continues to be one of the most dynamic real estate markets. Whether you're looking for your dream home, selling a property, or building an investment portfolio, the ${city} market offers strong opportunities across residential and commercial segments.</p>
  <p>With deep local knowledge and a commitment to results, I help my clients navigate the market with confidence — from first-time homebuyers to seasoned investors.</p>

  <div class="cards">
    <div class="card">
      <h3>Buying</h3>
      <p>Find the perfect property with expert guidance and market insights.</p>
    </div>
    <div class="card">
      <h3>Selling</h3>
      <p>Get top dollar with strategic pricing and targeted marketing.</p>
    </div>
    <div class="card">
      <h3>Investing</h3>
      <p>Data-driven analysis to maximize your real estate returns.</p>
    </div>
  </div>
</section>

<section>
  <h2>Get In Touch</h2>
  <p>Ready to take the next step? Fill out the form below and I'll be in touch within 24 hours.</p>
  <div class="contact-form">
    <input type="text" placeholder="Your Name" required/>
    <input type="email" placeholder="Email Address" required/>
    <input type="tel" placeholder="Phone Number"/>
    <textarea placeholder="Tell me about your real estate goals..."></textarea>
    <button class="btn" type="button" onclick="alert('Thank you! I will be in touch shortly.')">Request a Consultation</button>
  </div>
</section>

<footer>
  &copy; ${new Date().getFullYear()} ${name} — ${roleLabel} in ${city}. Powered by YPNUS.
</footer>
</body>
</html>`;
}
