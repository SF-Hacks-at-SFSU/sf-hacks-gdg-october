const APPLY_URL = "https://tally.so/r/RG2rP4";

const FAQS = [
  ["What is a hackathon?", "A short build sprint where people team up and turn ideas into working projects."],
  ["Can beginners participate?", "Yes. No hackathon experience is required."],
  ["Do I need to know how to code?", "No. All skill levels and backgrounds are welcome."],
  ["Are travel costs covered?", "No. We are not able to reimburse travel costs."],
  ["Can I work solo?", "Yes. You can build alone or join a team of up to four."],
  ["Who will be there?", "Builders, mentors, organizers, and community partners."],
  ["Is there a theme?", "Yes. We’ll reveal it closer to the event."],
  ["Where can I find project ideas?", "Browse past hackathon projects on Devpost for inspiration."],
  ["How should I prepare?", "Bring an idea, your laptop, a charger, and an open mind."],
  ["Is there a code of conduct?", "Yes. Everyone must follow the MLH Code of Conduct."],
  ["Will there be other activities?", "Expect short workshops, mentor sessions, and demos."],
  ["How can I contact the team?", "Email sfhacksteam@gmail.com."],
] as const;

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <img src="/sfhacks-logo.png" alt="" />
    </span>
  );
}

function GdgMark() {
  return (
    <span className="gdg-mark" role="img" aria-label="Google Developer Groups">
      <img src="/gdg-logo.png" alt="" />
    </span>
  );
}

function CampusMap() {
  return (
    <section className="campus-map shell" aria-labelledby="campus-map-title">
      <div className="map-heading">
        <div>
          <p className="section-label">THE VENUE</p>
          <h2 id="campus-map-title">Find Annex 1.</h2>
        </div>
        <p>Northwest campus<br />at North State Drive</p>
      </div>
      <div className="google-map">
        <iframe
          title="Google Maps location for San Francisco State University Annex 1"
          src="https://www.google.com/maps?q=San+Francisco+State+University+Annex+1&output=embed"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="SF Hacks mini home">
          <BrandMark />
          <span className="nav-divider" />
          <GdgMark />
        </a>

        <div className="nav-links">
          <a href="#details">Details</a>
          <a href="#faqs">FAQs</a>
          <a className="nav-apply" href={APPLY_URL} target="_blank" rel="noreferrer">
            Apply
          </a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="eyebrow"><span>SF Hacks</span><span className="eyebrow-x">×</span><span>GDG</span></div>
        <h1>
          <span className="title-ai">AI</span>
          <span>Hackathon</span>
        </h1>
        <p className="hero-copy">
          One day. One team. Build with AI.
        </p>
        <div className="hero-facts" aria-label="Event date, time, and location">
          <span><small>Date</small><strong>Oct 02</strong></span>
          <span><small>Hours</small><strong>9 AM to 7 PM</strong></span>
          <span><small>Place</small><strong>San Francisco State University, Annex 1</strong></span>
        </div>
        <div className="hero-actions">
          <a className="button button-primary" href={APPLY_URL} target="_blank" rel="noreferrer">
            Apply to hack
          </a>
          <a className="button button-secondary" href="#details">See the details</a>
        </div>
        <p className="microcopy"><span className="status-dot" />Applications open <span>·</span> Free to attend</p>

        <div className="event-panel" id="details">
          <div className="date-tile">
            <span>OCT</span>
            <strong>02</strong>
            <span>2026</span>
          </div>
          <div className="event-heading">
            <span className="kicker">Friday in San Francisco</span>
            <h2>10 hours. Build. Ship.</h2>
          </div>
          <div className="event-meta">
            <div><span>WHEN</span><strong>9:00 AM — 7:00 PM</strong></div>
            <div><span>WHERE</span><strong>San Francisco State University, Annex 1</strong></div>
          </div>
        </div>
      </section>

      <CampusMap />

      <section className="faq shell" id="faqs">
        <div className="faq-intro">
          <p className="section-label">NEED TO KNOW</p>
          <h2>FAQs</h2>
        </div>
        <div className="faq-list">
          {FAQS.map(([question, answer], index) => (
            <details key={question}>
              <summary>
                <span className="faq-number">{String(index + 1).padStart(2, "0")}</span>
                <span>{question}</span>
              </summary>
              <p>
                {question === "Is there a code of conduct?" ? (
                  <>Yes. Everyone must follow the <a href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md" target="_blank" rel="noreferrer">MLH Code of Conduct</a>.</>
                ) : question === "How can I contact the team?" ? (
                  <>Email <a href="mailto:sfhacksteam@gmail.com">sfhacksteam@gmail.com</a>.</>
                ) : answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-cta shell">
        <h2>Build<br />with us.</h2>
        <a className="button button-light" href={APPLY_URL} target="_blank" rel="noreferrer">
          Apply now
        </a>
      </section>

      <footer className="shell">
        <div className="wordmark"><BrandMark /><span>SF Hacks × GDG</span></div>
        <p>San Francisco · 2026</p>
        <a href="mailto:sfhacksteam@gmail.com">sfhacksteam@gmail.com</a>
      </footer>
    </main>
  );
}
