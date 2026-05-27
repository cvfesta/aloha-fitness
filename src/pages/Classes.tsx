import { Link } from 'react-router-dom'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import SunDecor from '../components/SunDecor'
import PromoBar from '../components/PromoBar'
import Faq from '../components/Faq'
import SectionLabel from '../components/SectionLabel'
import HeroStrip from '../components/HeroStrip'
import { usePageTitle } from '../hooks/usePageTitle'
import { useContactModal } from '../contexts/ContactModalContext'
import { site } from '../config'
import { trackEvent, trackOutbound } from '../lib/mixpanel'
import '../styles/pages/home.css'

export default function Classes() {
  const { open: openContact } = useContactModal()

  usePageTitle('Aloha Fitness · Outdoor Strength for Moms in Rocklin, CA')

  return (
    <>
      <PromoBar />

      <SiteHeader />

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

          <HeroStrip
            className="anim anim-5"
            items={[
              { label: 'Where', value: site.location.park },
              { label: 'Best for', value: 'Every level' },
              { label: 'Format', value: 'In-person + online' },
              { label: 'First class', value: 'Free' },
            ]}
          />
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
        <SectionLabel num="01 / 07">
          What we <em>believe</em>
        </SectionLabel>
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

      {/* Meet the coach */}
      <section className="section" id="coach">
        <SectionLabel num="02 / 07">
          Meet <em>Tania</em>
        </SectionLabel>
        <div className="coach-grid">
          <figure className="coach-photo">
            <img src="/img/coach.png" alt="Tania, coach at Aloha Fitness" />
            <figcaption className="coach-badge">Your coach</figcaption>
          </figure>
          <div className="coach-bio">
            <p className="coach-lead">
              Aloha Fitness started with Tania — a mom who believes feeling strong
              shouldn't mean choosing between your goals and your family.
            </p>
            <p>
              She coaches the way she wishes someone had coached her: no judgment, no
              fad diets, no all-or-nothing — just outdoor strength training and
              science-backed nutrition that meet you where you are, with a group of
              moms cheering you on.
            </p>
            <blockquote className="coach-pull">
              "You don't have to be fit to start. You just have to show up."
            </blockquote>
            <ul className="coach-highlights">
              <li>Certified Personal Trainer</li>
              <li>Group Fitness Instructor</li>
              <li>Women's Fitness Specialist</li>
            </ul>
            <Link className="coach-link" to="/about">
              Read Tania's full story
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section" id="pricing">
        <SectionLabel num="03 / 07">
          What we <em>offer</em>
        </SectionLabel>
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
                href={site.pricing.coaching.paymentLink}
                target="_self"
                rel="noopener"
                onClick={() =>
                  trackOutbound('Square', site.pricing.coaching.paymentLink, {
                    plan: 'coaching',
                    location: 'classes-pricing',
                  })
                }
              >
                Get started <span className="arrow">→</span>
              </a>
              <a
                className="btn-card-outline"
                onClick={() => {
                  trackEvent('Contact modal opened', { location: 'classes-coaching' })
                  openContact()
                }}
              >
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
              ${site.pricing.fullMembership.price}
              <span className="unit">/ month</span>
              <span className="strike">${site.pricing.fullMembership.was}</span>
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
                href={site.pricing.fullMembership.paymentLink}
                target="_self"
                rel="noopener"
                onClick={() =>
                  trackOutbound('Stripe', site.pricing.fullMembership.paymentLink, {
                    plan: 'full-membership',
                    price: site.pricing.fullMembership.price,
                    location: 'classes-pricing',
                  })
                }
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
              ${site.pricing.saturdayOnly.price}
              <span className="unit">/ month</span>
              <span className="strike">${site.pricing.saturdayOnly.was}</span>
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
                href={site.pricing.saturdayOnly.paymentLink}
                target="_self"
                rel="noopener"
                onClick={() =>
                  trackOutbound('Stripe', site.pricing.saturdayOnly.paymentLink, {
                    plan: 'saturday-only',
                    price: site.pricing.saturdayOnly.price,
                    location: 'classes-pricing',
                  })
                }
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
        <SectionLabel num="04 / 07">
          Class <em>schedule</em>
        </SectionLabel>
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
                  {site.schedule.weekday.time}{' '}
                  <span className="kind">{site.schedule.weekday.type}</span>
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
                  {site.schedule.weekday.time}{' '}
                  <span className="kind">{site.schedule.weekday.type}</span>
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
                  {site.schedule.saturday.time}{' '}
                  <span className="kind">{site.schedule.saturday.type}</span>
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

      {/* Shop */}
      <section className="section" id="shop">
        <SectionLabel num="05 / 07">
          Shop our <em>gear</em>
        </SectionLabel>
        <div className="shop-teaser">
          <p className="shop-teaser-copy">
            The mats, bands, and tools we actually use in class — handpicked and
            available on Amazon. Browse the full list whenever you want to add a
            piece to your home setup.
          </p>
          <Link className="btn-primary-ink" to="/products">
            See our picks
            <span className="arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq">
        <SectionLabel num="06 / 07">
          Common <em>questions</em>
        </SectionLabel>
        <p className="section-intro">
          A few things moms ask before their first class — here's the short version.
        </p>
        <Faq />
      </section>

      {/* Free callout */}
      <section className="section" style={{ paddingTop: 0 }}>
        <SectionLabel num="07 / 07">
          Try it <em>free</em>
        </SectionLabel>
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

      <SiteFooter />
    </>
  )
}