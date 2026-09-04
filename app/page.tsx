const APPLY_URL = "https://app.sfhacks.io/";

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

function Chevron() {
  return (
    <svg className="chevron" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <div className="nav-wrap shell">
        <nav className="nav" aria-label="Main navigation">
          <a className="wordmark" href="#top" aria-label="SF Hacks × GDG home">
            <BrandMark />
            <span className="nav-divider" />
            <GdgMark />
          </a>
          <div className="nav-links">
            <a href="#details">Details</a>
            <a href="#venue">Venue</a>
            <a href="#faqs">FAQ</a>
            <a className="nav-apply" href={APPLY_URL} target="_blank" rel="noreferrer">
              Apply
            </a>
          </div>
        </nav>
      </div>

      <div className="column" id="top">
        <section className="hero">
          <p className="hero-by">SF Hacks and Google Developer Groups present</p>
          <h1>AI Hackathon</h1>
          <p className="lede">
            One day. One team. Build with AI. Ten hours to turn an idea into something that works,
            alongside other builders, mentors, and the GDG community in San Francisco.
          </p>
          <div className="actions">
            <a className="button button-primary" href={APPLY_URL} target="_blank" rel="noreferrer">
              Apply to hack
            </a>
            <a className="button button-secondary" href="#details">See the details</a>
          </div>
          <p className="note">Free to attend. Applications are open.</p>
        </section>

        <section className="card facts" id="details" aria-label="Event date, time, and location">
          <div className="fact">
            <span className="tag tag-blue">Date</span>
            <div>
              <strong>Friday, Oct 02, 2026</strong>
              <p>A single day, so plan to stay for all of it.</p>
            </div>
          </div>
          <div className="fact">
            <span className="tag tag-green">Hours</span>
            <div>
              <strong>9 AM to 7 PM</strong>
              <p>Ten hours to build, with demos at the end of the day.</p>
            </div>
          </div>
          <div className="fact">
            <span className="tag tag-red">Place</span>
            <div>
              <strong>San Francisco State University, Annex 1</strong>
              <p>1600 Holloway Ave, San Francisco.</p>
            </div>
          </div>
          <div className="fact">
            <span className="tag tag-yellow">Teams</span>
            <div>
              <strong>Solo or up to four</strong>
              <p>Join with friends or find teammates at the event.</p>
            </div>
          </div>
        </section>

        <section className="venue" id="venue" aria-labelledby="venue-title">
          <h2 id="venue-title">Find Annex 1</h2>
          <p className="section-copy">
            Annex 1 is on the north side of the SF State campus. Open the map in your maps app for
            walking, transit, or driving directions.
          </p>
          <div className="card map-card">
            <iframe
              title="Google Maps location for San Francisco State University Annex 1"
              src="https://www.google.com/maps?q=San+Francisco+State+University+Annex+1&z=17&output=embed"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="map-links" aria-label="Open location in a maps app">
            <a href="https://www.google.com/maps/search/?api=1&query=San+Francisco+State+University+Annex+1" target="_blank" rel="noreferrer">Open in Google Maps</a>
            <a href="https://maps.apple.com/?q=Annex+1%2C+San+Francisco+State+University" target="_blank" rel="noreferrer">Open in Apple Maps</a>
          </div>
        </section>

        <section className="faq" id="faqs" aria-labelledby="faq-title">
          <h2 id="faq-title">Questions</h2>
          <p className="section-copy">Anything else, email us and we’ll get back to you.</p>
          <div className="card faq-list">
            {FAQS.map(([question, answer]) => (
              <details key={question}>
                <summary>
                  <span>{question}</span>
                  <Chevron />
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

        <section className="final" aria-labelledby="final-title">
          <h2 id="final-title">Build with us on Oct 2.</h2>
          <div className="actions">
            <a className="button button-primary" href={APPLY_URL} target="_blank" rel="noreferrer">
              Apply now
            </a>
          </div>
        </section>
      </div>

      <footer className="shell">
        <div className="wordmark"><BrandMark /><span>SF Hacks × GDG</span></div>
        <p>San Francisco, 2026</p>
        <a href="mailto:sfhacksteam@gmail.com">sfhacksteam@gmail.com</a>
      </footer>
    </main>
  );
}
