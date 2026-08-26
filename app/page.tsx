const APPLY_URL = "https://tally.so/r/RG2rP4";

const Arrow = () => <span aria-hidden="true">↗</span>;

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <img src="/sfhacks-logo.png" alt="" />
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="SF Hacks mini home">
          <BrandMark />
          <span>SF Hacks</span>
          <span className="nav-divider" />
          <span className="gdg-label">GDG</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#details">Details</a>
          <a className="nav-apply" href={APPLY_URL} target="_blank" rel="noreferrer">
            Apply <Arrow />
          </a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="eyebrow"><span>SF Hacks</span><span className="eyebrow-x">×</span><span>GDG</span></div>
        <h1>
          AI
          <span className="color-word">Hackathon</span>
        </h1>
        <p className="hero-copy">
          SF Hacks brings its builder-first energy to a focused, one-day AI
          hackathon—created with GDG for curious minds across the Bay Area.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href={APPLY_URL} target="_blank" rel="noreferrer">
            Apply to hack <Arrow />
          </a>
          <a className="button button-secondary" href="#details">See the details ↓</a>
        </div>
        <p className="microcopy">Applications are free · All experience levels welcome</p>

        <div className="event-panel" id="details">
          <div className="date-tile">
            <span>OCT</span>
            <strong>02</strong>
            <span>2026</span>
          </div>
          <div className="event-heading">
            <span className="kicker">Friday in San Francisco</span>
            <h2>12 hours. Teams of four. Ship by night.</h2>
          </div>
          <div className="event-meta">
            <div><span>WHEN</span><strong>9:00 AM — 9:00 PM</strong></div>
            <div><span>WHERE</span><strong>San Francisco · Venue TBA</strong></div>
          </div>
          <div className="skyline-mark" aria-hidden="true">
            <i /><i /><i /><i /><i /><i /><i />
          </div>
        </div>
      </section>

      <section className="manifesto shell" id="about">
        <p className="section-label">SMALL BY DESIGN</p>
        <h2>Less ceremony.<br />More making.</h2>
        <p>
          Meet smart people, build in the spirit of SF Hacks, and get hands-on
          support from the GDG community—all in one high-energy day.
        </p>
      </section>

      <section className="pillars shell" aria-label="Event highlights">
        <article>
          <span className="pillar-number">01</span>
          <div className="icon-orbit blue-orbit"><i /></div>
          <h3>Find your people</h3>
          <p>Come with a team or meet collaborators when you arrive.</p>
        </article>
        <article>
          <span className="pillar-number">02</span>
          <div className="icon-stack"><i /><i /><i /></div>
          <h3>Build with support</h3>
          <p>Get practical guidance from engineers, mentors, and community leads.</p>
        </article>
        <article>
          <span className="pillar-number">03</span>
          <div className="icon-spark"><i /><i /><i /><i /></div>
          <h3>Share what shipped</h3>
          <p>Demo your idea, learn from others, and leave with something real.</p>
        </article>
      </section>

      <section className="final-cta shell">
        <BrandMark />
        <p>OCTOBER 02 · SAN FRANCISCO</p>
        <h2>Your next idea<br />starts here.</h2>
        <a className="button button-light" href={APPLY_URL} target="_blank" rel="noreferrer">
          Apply now <Arrow />
        </a>
        <span className="cta-note">Current button opens the SF Hacks updates form.</span>
      </section>

      <footer className="shell">
        <div className="wordmark"><BrandMark /><span>SF Hacks × GDG</span></div>
        <p>Built in San Francisco, for San Francisco.</p>
        <a href="mailto:sfhacksteam@gmail.com">sfhacksteam@gmail.com</a>
      </footer>
    </main>
  );
}
