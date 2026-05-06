import { SiteGenerator } from './site-generator';

const expertise = [
  {
    title: 'Website Design Expert',
    description:
      'Premium real estate and finance websites with visual hierarchy, fast-loading sections, and trust-building design.',
  },
  {
    title: 'SEO Expert',
    description:
      'Local search architecture, keyword-focused pages, schema-ready content, and technical foundations for organic growth.',
  },
  {
    title: 'Conversion Expert',
    description:
      'Landing pages, lead magnets, forms, and calls to action engineered to turn qualified visitors into booked conversations.',
  },
  {
    title: 'Marketing Expert',
    description:
      'Campaign strategy, positioning, offers, nurture flows, and channel plans for real estate, lending, and brokerage brands.',
  },
  {
    title: 'Coding Expert',
    description:
      'Production-ready implementation with clean components, responsive layouts, analytics hooks, and maintainable code.',
  },
  {
    title: 'Leads Expert',
    description:
      'Lead capture funnels, CRM-friendly handoffs, follow-up triggers, and high-intent inquiry paths.',
  },
  {
    title: 'Developer Expert',
    description:
      'Modern app architecture, API integrations, deployment support, and performance-minded engineering.',
  },
  {
    title: 'Writing & Design Expert',
    description:
      'Persuasive copy, brand messaging, UX writing, and polished content design for online credibility.',
  },
  {
    title: 'Real Estate Expert',
    description:
      'Property, buyer, seller, investor, and agent-focused website strategy built around market trust.',
  },
  {
    title: 'Lending Expert',
    description:
      'Mortgage and lending funnels that explain products clearly, reduce friction, and encourage pre-qualification.',
  },
  {
    title: 'Broker Expert',
    description:
      'Brokerage positioning, recruiting pages, agent enablement, and lead-generation systems for growing teams.',
  },
];

const outcomes = [
  'SEO-ready pages for local real estate and lending searches',
  'Lead-focused calls to action above the fold and throughout the page',
  'Conversion copy for buyers, sellers, borrowers, brokers, and investors',
  'Fast, responsive design that works across mobile, tablet, and desktop',
];

const process = [
  {
    step: '01',
    title: 'Clarify the offer',
    text: 'Define the audience, market, trust signals, and primary conversion goal before designing a page.',
  },
  {
    step: '02',
    title: 'Design the funnel',
    text: 'Map the visitor path from search intent to persuasive content, proof, and a low-friction lead form.',
  },
  {
    step: '03',
    title: 'Launch and optimize',
    text: 'Ship clean code, connect tracking, review behavior, and iterate copy and sections for stronger results.',
  },
];

export default function Home() {
  return (
    <div className="site-shell">
      <header className="nav" aria-label="Main navigation">
        <a className="brand" href="#">
          <span className="brand-mark">TI</span>
          <span>ToInvested Growth Studio</span>
        </a>
        <nav className="nav-links" aria-label="Page sections">
          <a href="#expertise">Expertise</a>
          <a href="#process">Process</a>
          <a href="#offer">Offer</a>
          <a href="#consultation">Generator</a>
        </nav>
        <a className="nav-cta" href="#consultation">
          Build my site
        </a>
      </header>

      <main>
        <section className="hero section">
          <div>
            <p className="eyebrow">Real estate, lending, and broker growth partner</p>
            <h1>
              Build a website that <span className="accent-text">attracts</span>, persuades, and
              converts leads.
            </h1>
            <p className="hero-copy">
              A complete digital-growth studio combining website design, SEO, conversion strategy,
              marketing, coding, lead generation, online writing, real estate, lending, and broker
              expertise.
            </p>
            <div className="hero-actions" aria-label="Primary calls to action">
              <a className="button primary" href="#consultation">
                Generate a website concept
              </a>
              <a className="button secondary" href="#expertise">
                Explore expertise
              </a>
            </div>
            <div className="trust-row" aria-label="Service highlights">
              <div className="trust-card">
                <strong>11</strong>
                <span>Expert disciplines in one growth system</span>
              </div>
              <div className="trust-card">
                <strong>SEO</strong>
                <span>Search structure for local demand</span>
              </div>
              <div className="trust-card">
                <strong>24/7</strong>
                <span>Always-on online lead capture</span>
              </div>
            </div>
          </div>

          <aside className="hero-panel" aria-label="Lead generation snapshot">
            <div className="score-card">
              <p>Website opportunity score</p>
              <div className="score-value">94</div>
              <strong>Ready for conversion-focused growth</strong>
              <div className="score-list">
                <span>Local SEO landing pages</span>
                <span>Proof-driven offer sections</span>
                <span>Mobile-first lead paths</span>
              </div>
            </div>
            <div className="panel-grid">
              <div className="insight-card">
                <strong>3.2x</strong>
                <span>More CTA visibility across key sections</span>
              </div>
              <div className="insight-card">
                <strong>5</strong>
                <span>Lead magnets for buyers, sellers, and borrowers</span>
              </div>
            </div>
          </aside>
        </section>

        <section className="section" aria-label="Business outcomes">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Strategy first</p>
              <h2>One expert team for design, traffic, trust, and lead flow.</h2>
            </div>
            <p>
              Most websites fail because design, SEO, copy, code, and sales follow-up are handled
              in silos. This service brings those disciplines together for professionals who need
              a website that looks credible, ranks locally, communicates value, and generates
              serious inquiries.
            </p>
          </div>
          <div className="panel-grid">
            {outcomes.map((outcome) => (
              <article className="insight-card" key={outcome}>
                <strong>+</strong>
                <span>{outcome}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="expertise">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Expertise stack</p>
              <h2>Everything your growth website needs.</h2>
            </div>
            <p>
              Choose a focused landing page or a full website system for real estate, mortgage,
              lending, brokerage, and investment services.
            </p>
          </div>
          <div className="expert-grid">
            {expertise.map((item, index) => (
              <article className="expert-card" key={item.title}>
                <span className="expert-number">{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="expert-tag">Included</span>
              </article>
            ))}
          </div>
        </section>

        <section className="process" id="process">
          <div className="process-inner">
            <div>
              <p className="eyebrow">How it works</p>
              <h2>A clear path from idea to lead engine.</h2>
              <p>
                Every section is planned around the audience, search intent, proof, and next action
                your business needs most.
              </p>
            </div>
            <div className="process-steps">
              {process.map((item) => (
                <article className="process-step" key={item.step}>
                  <span>{item.step}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section offer" id="offer">
          <article className="offer-card">
            <p className="eyebrow">Built for search and trust</p>
            <h2>Rank for the services your market is already looking for.</h2>
            <p>
              The website system can target high-intent terms for real estate professionals,
              lenders, developers, brokers, agents, investors, buyers, sellers, and borrowers.
            </p>
            <ul className="offer-list">
              <li>Real estate website design and local SEO pages</li>
              <li>Mortgage and lending landing pages with clear next steps</li>
              <li>Brokerage marketing, recruiting, and agent enablement funnels</li>
              <li>Conversion copywriting, analytics hooks, and clean production code</li>
            </ul>
          </article>
          <SiteGenerator />
        </section>

        <section className="section" id="consultation">
          <div className="cta-band">
            <div>
              <p className="eyebrow">Ready for a smarter website?</p>
              <h2>Turn your expertise into a lead-generating online presence.</h2>
              <p>
                Start with a focused brief, then turn the strongest positioning, SEO terms, and
                conversion paths into a website that supports growth.
              </p>
            </div>
            <a className="button" href="#offer">
              Create my concept
            </a>
          </div>
        </section>
      </main>

      <footer className="section footer">
        <span>Copyright 2026 ToInvested Growth Studio</span>
        <span>Website design | SEO | Leads | Real estate | Lending | Broker growth</span>
      </footer>
    </div>
  );
}
