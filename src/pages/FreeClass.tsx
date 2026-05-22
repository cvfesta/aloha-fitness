import { useEffect, useState } from 'react'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import SunDecor from '../components/SunDecor'
import TermsModal from '../components/TermsModal'
import { Field, SelectField } from '../components/Field'
import { useNetlifyForm } from '../hooks/useNetlifyForm'
import '../styles/pages/free.css'

export default function FreeClass() {
  const { validated, status, handleSubmit } = useNetlifyForm('registration')
  const [session, setSession] = useState('')
  const [termsOpen, setTermsOpen] = useState(false)

  useEffect(() => {
    document.title = 'Register for a free class · Aloha Fitness'
  }, [])

  return (
    <>
      {/* Top marquee bar */}
      <div className="topbar">
        <span>Outdoor &amp; outdoors-adjacent</span>
        <span className="dot" />
        <span>Rocklin, CA</span>
        <span className="dot" />
        <span>Moms welcome — and the only ones invited</span>
      </div>

      {/* Header */}
      <SiteHeader />

      {/* Hero + Form */}
      <section className="hero-wrap">
        {/* Left: editorial hero */}
        <div className="hero-text">
          <SunDecor />

          <div className="eyebrow anim anim-1">Free intro class · Outdoor</div>

          <h1 className="hero-title anim anim-2">
            Strength training,
            <br />
            built for <span className="ital">moms.</span>
          </h1>

          <p className="hero-lead anim anim-3">
            A real workout for real life — outdoors, before the day starts, with the kind of people
            who get it. Bring a mat. We'll handle the rest.
          </p>

          <div className="hero-strip anim anim-4">
            <div className="hero-strip-item">
              <span className="label">Where</span>
              <span className="value">Willard Park</span>
            </div>
            <div className="hero-strip-item">
              <span className="label">Best for</span>
              <span className="value">Every level</span>
            </div>
            <div className="hero-strip-item">
              <span className="label">Duration</span>
              <span className="value">~50 min</span>
            </div>
            <div className="hero-strip-item">
              <span className="label">Cost</span>
              <span className="value">$0</span>
            </div>
          </div>
        </div>

        {/* Right: form card */}
        <div className="form-card anim-form">
          <span className="form-sticker">
            Save your <i>spot</i>
          </span>

          {status === 'sent' ? (
            <>
              <h2>You're in!</h2>
              <p className="form-sub">
                Thanks for registering — we'll text you the details before your class. See you at
                Willard Park.
              </p>
            </>
          ) : (
            <>
              <h2>Register</h2>
              <p className="form-sub">Takes about 30 seconds. We'll text you the details.</p>

              <form
                name="registration"
                className={validated ? 'registration was-validated' : 'registration'}
                onSubmit={handleSubmit}
                noValidate
              >
                <p style={{ position: 'absolute', left: '-9999px' }}>
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>

                <div className="field-row">
                  <Field
                    name="firstName"
                    label="First name"
                    error="Please enter your first name."
                    autoComplete="given-name"
                    spellCheck
                  />
                  <Field
                    name="lastName"
                    label="Last name"
                    error="Please enter your last name."
                    autoComplete="family-name"
                    spellCheck
                  />
                </div>

                <Field
                  name="phoneNumber"
                  type="tel"
                  label="Phone number"
                  error="Please enter a valid phone number."
                  autoComplete="tel"
                />

                <Field
                  name="email"
                  type="email"
                  label="Email address"
                  error="Please enter your email."
                  autoComplete="email"
                  spellCheck
                />

                <SelectField
                  name="trainingSession"
                  label="Which class?"
                  error="Please select a class."
                  value={session}
                  onChange={setSession}
                >
                  <option value="" disabled />
                  <option value="monday_wednesday_strength_830am">
                    Monday &amp; Wednesday — 8:30 AM
                  </option>
                  <option value="saturday_strength_730am">Saturday — 7:30 AM</option>
                </SelectField>

                <label className="terms">
                  <input type="checkbox" required id="termsCheck" />
                  <span>
                    I agree to the{' '}
                    <a onClick={() => setTermsOpen(true)}>terms and conditions</a>
                  </span>
                </label>

                {status === 'error' && (
                  <p style={{ color: 'var(--terracotta-deep)', fontSize: '0.85rem', margin: '0 0 1rem' }}>
                    Something went wrong. Please try again, or text us at 818-261-5325.
                  </p>
                )}

                <button type="submit" className="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Registering…' : 'Register now'}
                  <span className="arrow" aria-hidden="true">
                    →
                  </span>
                </button>
              </form>
            </>
          )}
        </div>
      </section>

      {/* Details: Where / When / Bring */}
      <section className="details">
        <div className="section-label">
          <h3>
            The{' '}
            <em style={{ fontVariationSettings: "'SOFT' 100, 'opsz' 80", color: 'var(--terracotta-deep)' }}>
              essentials
            </em>
          </h3>
          <span className="num">01 / 02</span>
        </div>

        <div className="details-grid">
          {/* WHERE */}
          <article className="detail detail-where">
            <div className="kicker">Where</div>
            <h4 className="title">Willard Park, Rocklin</h4>
            <p className="body">
              We meet on the grass near the main pavilion. Look for the small group of moms doing
              push-ups.
              <br />
              <span className="address">820 Lazy Trl Dr, Rocklin, CA 95765</span>
            </p>
            <div className="map-illustration">
              <svg
                viewBox="0 0 400 150"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="320" cy="35" r="20" fill="#E89A3C" opacity="0.45" />
                <circle cx="320" cy="35" r="12" fill="#E89A3C" />
                <path
                  d="M0 110 Q 80 70, 160 95 T 320 95 T 480 110 L 480 150 L 0 150 Z"
                  fill="#6C8B65"
                  opacity="0.55"
                />
                <path
                  d="M0 125 Q 100 95, 200 115 T 400 115 L 400 150 L 0 150 Z"
                  fill="#6C8B65"
                />
                <path
                  d="M40 145 Q 120 120, 200 130 T 380 110"
                  fill="none"
                  stroke="#F2E9D5"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="2 7"
                />
                <g fill="#4F6B49">
                  <ellipse cx="80" cy="95" rx="10" ry="14" />
                  <ellipse cx="250" cy="98" rx="12" ry="16" />
                  <ellipse cx="350" cy="100" rx="9" ry="13" />
                </g>
                <g stroke="#3C4E36" strokeWidth="2">
                  <line x1="80" y1="108" x2="80" y2="118" />
                  <line x1="250" y1="113" x2="250" y2="123" />
                  <line x1="350" y1="113" x2="350" y2="121" />
                </g>
                <g transform="translate(180, 85)">
                  <path
                    d="M0 0 C -10 -10, -10 -25, 0 -28 C 10 -25, 10 -10, 0 0 Z"
                    fill="#C95A36"
                  />
                  <circle cx="0" cy="-18" r="4.5" fill="#FFFCF5" />
                </g>
              </svg>
            </div>
          </article>

          {/* WHEN */}
          <article className="detail detail-when">
            <div className="kicker">When</div>
            <h4 className="title">Three mornings a week</h4>
            <div className="schedule-list">
              <div className="schedule-row">
                <span className="days">Mon &amp; Wed</span>
                <span className="time">8:30 AM</span>
              </div>
              <div className="schedule-row">
                <span className="days">Saturday</span>
                <span className="time">7:30 AM</span>
              </div>
              <div
                className="schedule-row"
                style={{ background: 'transparent', borderStyle: 'dashed', color: 'var(--ink-soft)' }}
              >
                <span
                  className="days"
                  style={{ color: 'var(--ink-soft)', fontWeight: 500, fontStyle: 'italic' }}
                >
                  Pick whichever fits
                </span>
                <span className="time" style={{ fontSize: '0.95rem', color: 'var(--ink-soft)' }}>
                  ↗
                </span>
              </div>
            </div>
          </article>

          {/* BRING */}
          <article className="detail detail-bring">
            <div className="kicker">Bring</div>
            <h4 className="title">The short list</h4>
            <ul className="bring-list">
              <li className="bring-item">
                <span className="bring-icon" aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="none">
                    <rect x="3" y="6" width="14" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M5 8h10M5 11h10M5 14h10" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                  </svg>
                </span>
                Yoga mat
              </li>
              <li className="bring-item">
                <span className="bring-icon" aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="none">
                    <rect x="2" y="7" width="2.5" height="6" rx="0.8" fill="currentColor" />
                    <rect x="15.5" y="7" width="2.5" height="6" rx="0.8" fill="currentColor" />
                    <rect x="4.5" y="8.5" width="11" height="3" fill="currentColor" />
                  </svg>
                </span>
                Dumbbells (3 or 5 lb)
              </li>
              <li className="bring-item">
                <span className="bring-icon" aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="none">
                    <path
                      d="M8 3h4v2l1 1v10a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 7 16V6l1-1V3z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                    />
                    <path d="M7 10h6" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                </span>
                Water bottle
              </li>
              <li className="bring-item">
                <span className="bring-icon" aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="none">
                    <path
                      d="M6 4l-3 2 2 3 2-1v8h6V8l2 1 2-3-3-2-2 1c-.5.7-1.4 1-2 1s-1.5-.3-2-1l-2-1z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                Clothes you can move in
              </li>
            </ul>
          </article>
        </div>

        {/* Free callout */}
        <div className="free-callout">
          <p className="price-line">
            And it's <span className="ital">free.</span>
          </p>
          <p className="price-sub">
            No catch, no pressure, no "but-actually." Just show up, give it a try, and see if it's
            your thing.
          </p>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />

      <TermsModal show={termsOpen} onHide={() => setTermsOpen(false)} />
    </>
  )
}
