import { useState } from 'react'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import SunDecor from '../components/SunDecor'
import PromoBar from '../components/PromoBar'
import TermsModal from '../components/TermsModal'
import SectionLabel from '../components/SectionLabel'
import HeroStrip from '../components/HeroStrip'
import { Field, SelectField } from '../components/Field'
import { useNetlifyForm } from '../hooks/useNetlifyForm'
import { usePageTitle } from '../hooks/usePageTitle'
import { site } from '../config'
import '../styles/pages/free.css'

export default function FreeClass() {
  const { validated, status, handleSubmit } = useNetlifyForm('registration')
  const [session, setSession] = useState('')
  const [termsOpen, setTermsOpen] = useState(false)

  usePageTitle('Register for a free class · Aloha Fitness')

  return (
    <>
      <PromoBar />

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

          <HeroStrip
            className="anim anim-4"
            items={[
              { label: 'Where', value: site.location.park },
              { label: 'Best for', value: 'Every level' },
              { label: 'Duration', value: '~50 min' },
              { label: 'Cost', value: '$0' },
            ]}
          />
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
                  <option value={site.schedule.weekday.formValue}>
                    {site.schedule.weekday.label} — {site.schedule.weekday.time}
                  </option>
                  <option value={site.schedule.saturday.formValue}>
                    {site.schedule.saturday.label} — {site.schedule.saturday.time}
                  </option>
                </SelectField>

                <label className="terms">
                  <input type="checkbox" required id="termsCheck" />
                  <span>
                    I agree to the{' '}
                    <a onClick={() => setTermsOpen(true)}>terms and conditions</a>
                  </span>
                </label>

                {status === 'error' && (
                  <p style={{ color: 'var(--ocean-deep)', fontSize: '0.85rem', margin: '0 0 1rem' }}>
                    Something went wrong. Please try again, or text us at {site.contact.phone}.
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
        <SectionLabel as="h3" num="01 / 02">
          The <em>essentials</em>
        </SectionLabel>

        <div className="details-grid">
          {/* WHERE */}
          <article className="detail detail-where">
            <div className="kicker">Where</div>
            <h4 className="title">{site.location.park}, Rocklin</h4>
            <p className="body">
              We meet on the grass near the main pavilion. Look for the small group of moms doing
              push-ups.
              <br />
              <span className="address">{site.location.address}</span>
            </p>
            <div className="map-embed">
              <iframe
                title={`Map of ${site.location.park}, Rocklin`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  `${site.location.park}, Rocklin CA`,
                )}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </article>

          {/* WHEN */}
          <article className="detail detail-when">
            <div className="kicker">When</div>
            <h4 className="title">Three mornings a week</h4>
            <div className="schedule-list">
              <div className="schedule-row">
                <span className="days">{site.schedule.weekday.shortLabel}</span>
                <span className="time">{site.schedule.weekday.time}</span>
              </div>
              <div className="schedule-row">
                <span className="days">{site.schedule.saturday.shortLabel}</span>
                <span className="time">{site.schedule.saturday.time}</span>
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
