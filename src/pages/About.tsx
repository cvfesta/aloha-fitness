import { Link } from 'react-router-dom'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import SectionLabel from '../components/SectionLabel'
import { usePageTitle } from '../hooks/usePageTitle'
import '../styles/pages/about.css'

export default function About() {
  usePageTitle('Meet Tania · Aloha Fitness')

  return (
    <>
      <SiteHeader />

      {/* Coach intro */}
      <section className="coach-hero">
        <figure className="coach-photo">
          <img src="/img/coach.png" alt="Tania, coach at Aloha Fitness" />
          <figcaption className="coach-badge">Your coach</figcaption>
        </figure>
        <div className="coach-intro">
          <div className="eyebrow">Meet your coach</div>
          <h1 className="coach-name">Tania</h1>
          <p className="coach-intro-lead">
            Tania is the coach behind Aloha Fitness — and a mom herself. She built it
            for women who want to feel strong again, without the judgment, the fad
            diets, or the all-or-nothing rules.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <SectionLabel>
          Her <em>story</em>
        </SectionLabel>
        <div className="coach-prose">
          <p>
            Tania started Aloha Fitness from a simple frustration: most fitness advice
            isn't built for moms. It assumes spare hours, quiet mornings, and a body
            that hasn't carried and raised children — and real life rarely looks like
            that.
          </p>
          <p>
            So she built something that does. Outdoor classes early enough to finish
            before the day gets loud. Nutrition guidance grounded in science instead of
            guilt. And a group of women who simply get it — no mirrors, no pressure, no
            pretending.
          </p>
        </div>
      </section>

      {/* Approach */}
      <section className="section">
        <SectionLabel>
          Her <em>approach</em>
        </SectionLabel>
        <div className="coach-prose">
          <p>
            Tania's coaching meets you where you actually are — not where a fitness
            magazine says you should be. Coming back after a baby, a long break, or an
            attempt that didn't stick? The plan bends around your body, your schedule,
            and your real life.
          </p>
          <blockquote className="coach-pull">
            "I don't want you chasing someone else's body. I want you strong enough for
            your own life."
          </blockquote>
          <p>
            Expect strength training that builds real, usable power, nutrition advice
            you can actually live with, and steady accountability — the kind that keeps
            you going long after the motivation fades.
          </p>
        </div>
      </section>

      {/* Credentials */}
      <section className="section">
        <SectionLabel>
          Training &amp; <em>credentials</em>
        </SectionLabel>
        <ul className="cred-list">
          <li>Certified Personal Trainer</li>
          <li>Group Fitness Instructor</li>
          <li>Women's Fitness Specialist</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="free-callout">
          <span className="eyebrow-dark">Come meet her in person</span>
          <p className="callout-title">
            Your first class is <span className="ital">free.</span>
          </p>
          <p className="callout-sub">
            The best way to know if it's your thing is to show up once. No pressure —
            just come say hi.
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
