import { Link } from 'react-router-dom'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import SunDecor from '../components/SunDecor'
import { usePageTitle } from '../hooks/usePageTitle'
import { products } from '../data/products'
import { trackEvent, trackOutbound } from '../lib/mixpanel'
import '../styles/pages/landing.css'

const FEATURED_SLUG = 'aloha-bliss-yoga-mat'

export default function Landing() {
  const product = products.find((p) => p.id === FEATURED_SLUG)

  usePageTitle('Aloha Bliss · Premium Yoga Mat for Real Life')

  if (!product) return null

  const detailHref = `/products/${product.id}`
  const inStockColors = product.colors?.filter((c) => !c.outOfStock) ?? []
  const totalColors = product.colors?.length ?? 0

  return (
    <>
      <SiteHeader />

      {/* HERO */}
      <section className="lp-hero">
        <div className="lp-hero-text">
          <SunDecor />

          <div className="eyebrow anim anim-1">Aloha Bliss · Premium Yoga Mat</div>

          <h1 className="lp-hero-title anim anim-2">
            The mat we wanted,
            <br />
            so we <span className="ital">made it.</span>
          </h1>

          <p className="lp-hero-lead anim anim-3">
            Studio-grade grip. A generous 72" × 27" of natural-rubber cushion. Light
            enough to actually carry. The mat we use at the park, in class, and on
            the living-room floor.
          </p>

          <div className="lp-hero-meta anim anim-4">
            {product.price && <span className="lp-price">{product.price}</span>}
            <span className="lp-meta-sep">·</span>
            <span className="lp-meta-bit">Free shipping on Amazon</span>
            {totalColors > 0 && (
              <>
                <span className="lp-meta-sep">·</span>
                <span className="lp-meta-bit">Six grounds</span>
              </>
            )}
          </div>

          {product.colors && product.colors.length > 0 && (
            <div className="lp-color-row anim anim-4">
              {product.colors.map((c) => (
                <span
                  key={c.name}
                  className={c.outOfStock ? 'lp-color-dot is-sold-out' : 'lp-color-dot'}
                  style={{ background: c.swatch }}
                  title={c.outOfStock ? `${c.name} — sold out` : c.name}
                  aria-label={c.outOfStock ? `${c.name} (sold out)` : c.name}
                />
              ))}
            </div>
          )}

          <div className="lp-hero-ctas anim anim-5">
            <Link
              className="btn-primary-ink"
              to={detailHref}
              onClick={() => trackEvent('CTA click', { label: 'See the details', location: 'landing-hero' })}
            >
              See the details
              <span className="arrow" aria-hidden="true">→</span>
            </Link>
            {inStockColors[0] && (
              <a
                className="btn-outline-ink"
                href={inStockColors[0].amazonUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                onClick={() =>
                  trackOutbound('Amazon', inStockColors[0].amazonUrl, {
                    location: 'landing-hero',
                    color: inStockColors[0].name,
                  })
                }
              >
                Buy on Amazon
                <span className="arrow" aria-hidden="true">↗</span>
              </a>
            )}
          </div>

          <Link
            className="lp-film-link anim anim-5"
            to="/film"
            onClick={() => trackEvent('CTA click', { label: 'Watch the film', location: 'landing-hero' })}
          >
            <span className="lp-film-icon" aria-hidden="true">
              <svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.5 2.2 L9.5 6 L3.5 9.8 Z" fill="currentColor" />
              </svg>
            </span>
            Watch the film
            <span className="lp-film-meta">32s · six grounds · one practice</span>
          </Link>
        </div>

        <div className="lp-hero-art anim-art">
          <figure className="lp-product-photo">
            <img src={product.heroImage ?? product.image} alt={product.name} />
          </figure>
          <span className="lp-badge">New · Aloha <i>Bliss</i></span>
        </div>
      </section>

      {/* VALUE STRIP */}
      <section className="lp-values">
        <ul className="lp-values-grid">
          <li>
            <h3>Sweat-tested grip</h3>
            <p>Textured natural rubber holds steady through hot yoga, pilates, and floor work.</p>
          </li>
          <li>
            <h3>Cushion that lasts</h3>
            <p>0.18" of thoughtful padding — kind to knees, wrists, and longer floor sessions.</p>
          </li>
          <li>
            <h3>Rolls light. Travels easy.</h3>
            <p>72" × 27" of room to move, with a carry strap so it actually comes with you.</p>
          </li>
          <li>
            <h3>Eco-friendly rubber</h3>
            <p>Biodegradable natural rubber — no PVC chemistry in your workout.</p>
          </li>
        </ul>
      </section>

      {/* BRAND CREDIBILITY */}
      <section className="lp-brand">
        <div className="lp-brand-text">
          <div className="eyebrow">By Aloha · Rocklin, CA</div>
          <h2 className="lp-brand-title">
            Made by the moms who <span className="ital">use it.</span>
          </h2>
          <p>
            Aloha started as a small outdoor strength community for moms at Willard
            Park. The mat came after — built because the ones we'd been buying never
            quite did the job. Now every member trains on it, and we ship it
            anywhere Amazon goes.
          </p>
          <Link className="lp-brand-link" to="/classes">
            Meet the studio behind the mat
            <span className="arrow" aria-hidden="true">→</span>
          </Link>
        </div>
        <figure className="lp-brand-photo">
          <img src="/img/coach.png" alt="Tania, founder of Aloha" />
        </figure>
      </section>

      {/* FINAL CTA */}
      <section className="lp-final-cta">
        <div className="free-callout">
          <span className="eyebrow-dark">Ready to roll?</span>
          <p className="callout-title">
            One mat. Built to <span className="ital">last.</span>
          </p>
          <p className="callout-sub">
            Get the full breakdown — every spec, every color, every reason we
            stand behind it — then buy in two taps.
          </p>
          <div className="lp-final-ctas">
            <Link
              className="btn-callout"
              to={detailHref}
              onClick={() => trackEvent('CTA click', { label: 'See the details', location: 'landing-final' })}
            >
              See the details
              <span className="arrow" aria-hidden="true">→</span>
            </Link>
            {inStockColors[0] && (
              <a
                className="btn-outline-ink"
                href={inStockColors[0].amazonUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                onClick={() =>
                  trackOutbound('Amazon', inStockColors[0].amazonUrl, {
                    location: 'landing-final',
                    color: inStockColors[0].name,
                  })
                }
              >
                Buy on Amazon
                <span className="arrow" aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
