import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import SunDecor from '../components/SunDecor'
import ContactModal from '../components/ContactModal'
import '../styles/pages/home.css'

export default function Home() {
  const [navOpen, setNavOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

  useEffect(() => {
    document.title = 'Aloha Fitness · Outdoor Strength for Moms in Rocklin, CA'
  }, [])

  function openContact() {
    setNavOpen(false)
    setContactOpen(true)
  }

  return (
    <>
      {/* Top promo bar */}
      <div className="topbar">
        <span>
          Use code <span className="code">FRIENDS20</span> for <strong>20% off</strong> your
          monthly membership
        </span>
        <span className="dot" />
        <span>Limited time</span>
      </div>

      {/* Header */}
      <SiteHeader>
        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={navOpen}
          onClick={() => setNavOpen((open) => !open)}
        >
          <span />
        </button>
        <nav className={navOpen ? 'nav-links open' : 'nav-links'}>
          <Link to="/free" className="cta" onClick={() => setNavOpen(false)}>
            Free Class
          </Link>
          <a href="#pricing" onClick={() => setNavOpen(false)}>
            Pricing
          </a>
          <a href="#schedule" onClick={() => setNavOpen(false)}>
            Schedule
          </a>
          <a onClick={openContact}>Contact</a>
        </nav>
      </SiteHeader>

      {/* Hero */}
      <section className="hero-wrap">
        <div className="hero-text">
          <SunDecor />

          <div className="eyebrow anim anim-1">Outdoor strength · Rocklin, CA</div>

          <h1 className="hero-title anim anim-2">
            Be healthy,
            <br />
            be <span className="ital">happy.</span>
          </h1>

          <p className="hero-lead anim anim-3">
            A fitness community and nutrition program built for moms — outdoor classes, online
            coaching, and the kind of accountability that actually sticks.
          </p>

          <div className="hero-ctas anim anim-4">
            <Link className="btn-primary-ink" to="/free">
              Start with a free class
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </Link>
            <a className="btn-outline-ink" href="#pricing">
              See pricing
            </a>
          </div>

          <div className="hero-strip anim anim-5">
            <div className="hero-strip-item">
              <span className="label">Where</span>
              <span className="value">Willard Park</span>
            </div>
            <div className="hero-strip-item">
              <span className="label">Best for</span>
              <span className="value">Every level</span>
            </div>
            <div className="hero-strip-item">
              <span className="label">Format</span>
              <span className="value">In-person + online</span>
            </div>
            <div className="hero-strip-item">
              <span className="label">First class</span>
              <span className="value">Free</span>
            </div>
          </div>
        </div>

        <div className="hero-art anim-art">
          <img
            className="hero-art-img"
            src="/img/indexHero.jpg"
            alt="Aloha Fitness outdoor class at Willard Park"
            width={1200}
            height={1080}
          />
        </div>
      </section>

      {/* About */}
      <section className="section" id="about">
        <div className="section-label">
          <h2>
            What we <em>believe</em>
          </h2>
          <span className="num">01 / 04</span>
        </div>
        <div className="about-grid">
          <div>
            <p>
              At Aloha Fitness we believe health is wealth. We're dedicated to helping moms reach
              their fitness and nutrition goals through science-backed recommendations and
              personalized support — because every body, schedule, and season of motherhood is
              different.
            </p>
            <p>
              Whether you're looking to lose weight, build strength, or simply feel better in your
              skin again, we'll meet you where you are and build a routine that actually fits the
              rest of your life.
            </p>
          </div>
          <div>
            <p className="about-pull">
              A real workout for real life — designed by a mom, for <em>moms</em>.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section" id="pricing">
        <div className="section-label">
          <h2>
            What we <em>offer</em>
          </h2>
          <span className="num">02 / 04</span>
        </div>
        <p className="section-intro">
          In-person outdoor classes, online coaching, or a single drop-in — pick the shape that
          fits this season. You can always start small and grow into more.
        </p>

        <div className="pricing-grid">
          {/* Online Coaching */}
          <article className="price-card">
            <span className="price-kicker">Online coaching</span>
            <h3>12-week coaching program</h3>
            <div className="price-line">
              12<span className="unit">weeks</span>
            </div>
            <p className="price-body">
              Personalized training and nutritional guidance — no gym, no trainer required. Built
              around your goals, schedule, and pantry.
            </p>
            <div className="price-cta-row">
              <a
                className="btn-card"
                href="https://square.link/u/Gg8ToJIS"
                target="_self"
                rel="noopener"
              >
                Get started <span className="arrow">→</span>
              </a>
              <a className="btn-card-outline" onClick={openContact}>
                Contact for info
              </a>
            </div>
          </article>

          {/* Full monthly membership */}
          <article className="price-card featured">
            <span className="price-deal-tag">Limited time · 40% off</span>
            <span className="price-kicker">In-person workouts</span>
            <h3>Full monthly membership</h3>
            <div className="price-line">
              $59<span className="unit">/ month</span>
              <span className="strike">$99</span>
            </div>
            <span className="price-frequency">
              <span className="dot" />3 sessions / week
            </span>
            <p className="price-body">
              Outdoor strength training designed for moms of all fitness levels. Mon, Wed, &amp;
              Sat mornings — bring a mat, we'll handle the rest.
            </p>
            <div className="price-cta-row">
              <a
                className="btn-card"
                href="https://buy.stripe.com/dR67ww2OIfQIbRKbII"
                target="_self"
                rel="noopener"
              >
                Join the membership <span className="arrow">→</span>
              </a>
              <a className="see-schedule" href="#schedule">
                See schedule ↓
              </a>
            </div>
          </article>

          {/* Saturday-only membership */}
          <article className="price-card">
            <span className="price-deal-tag">Limited time · 17% off</span>
            <span className="price-kicker">Saturdays only</span>
            <h3>Saturday-only membership</h3>
            <div className="price-line">
              $49<span className="unit">/ month</span>
              <span className="strike">$59</span>
            </div>
            <span className="price-frequency">
              <span className="dot" />1 session / week
            </span>
            <p className="price-body">
              Outdoor strength training, Saturday mornings at Willard Park. Just the Saturday class
              — no weekday commitment.
            </p>
            <div className="price-cta-row">
              <a
                className="btn-card"
                href="https://buy.stripe.com/bIYcQQ892gUM8Fy4gh"
                target="_self"
                rel="noopener"
              >
                Join Saturdays <span className="arrow">→</span>
              </a>
              <a className="see-schedule" href="#schedule">
                See schedule ↓
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* Schedule */}
      <section className="section" id="schedule">
        <div className="section-label">
          <h2>
            Class <em>schedule</em>
          </h2>
          <span className="num">03 / 04</span>
        </div>
        <p className="section-intro">
          A morning class to kickstart your day. Pick whichever fits — and skip the ones that
          don't.
        </p>

        <div className="schedule-card">
          <p className="schedule-legend">
            <span>
              <span className="swatch s-mem" />
              Full membership
            </span>
            <span>
              <span className="swatch s-drop" />
              Saturday-only membership
            </span>
          </p>
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Day</th>
                <th>Morning</th>
                <th>Afternoon</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  Monday <span className="schedule-tag tag-membership">Full</span>
                </th>
                <td>
                  9:00 AM <span className="kind">Strength</span>
                </td>
                <td className="empty">—</td>
              </tr>
              <tr>
                <th scope="row">Tuesday</th>
                <td className="empty">—</td>
                <td className="empty">—</td>
              </tr>
              <tr>
                <th scope="row">
                  Wednesday <span className="schedule-tag tag-membership">Full</span>
                </th>
                <td>
                  9:00 AM <span className="kind">Strength</span>
                </td>
                <td className="empty">—</td>
              </tr>
              <tr>
                <th scope="row">Thursday</th>
                <td className="empty">—</td>
                <td className="empty">—</td>
              </tr>
              <tr>
                <th scope="row">Friday</th>
                <td className="empty">—</td>
                <td className="empty">—</td>
              </tr>
              <tr>
                <th scope="row">
                  Saturday <span className="schedule-tag tag-membership">Full</span>{' '}
                  <span className="schedule-tag tag-dropin">Saturday-only</span>
                </th>
                <td>
                  7:30 AM <span className="kind">Strength</span>
                </td>
                <td className="empty">—</td>
              </tr>
            </tbody>
          </table>
          <p className="schedule-caption">
            All times listed in Pacific Time (PT). Saturday is included in the Full membership and
            is also available as a Saturday-only membership.
          </p>
        </div>
      </section>

      {/* Free callout */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-label">
          <h2>
            Try it <em>free</em>
          </h2>
          <span className="num">04 / 04</span>
        </div>
        <div className="free-callout">
          <span className="eyebrow-dark">Your first class is on us</span>
          <p className="callout-title">
            Come once. Decide <span className="ital">after.</span>
          </p>
          <p className="callout-sub">
            No catch, no pressure, no "but-actually." Just show up at Willard Park, give it a try,
            and see if it's your thing.
          </p>
          <Link className="btn-callout" to="/free">
            Register for a free class
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter
        links={
          <div className="footer-links">
            <Link to="/">Home</Link>
            <a href="#pricing">Pricing</a>
            <a href="#schedule">Schedule</a>
            <a onClick={openContact}>Contact</a>
            <Link to="/privacy-policy">Privacy</Link>
          </div>
        }
      />

      <ContactModal show={contactOpen} onHide={() => setContactOpen(false)} />
    </>
  )
}