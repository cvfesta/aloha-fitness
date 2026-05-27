import { useState, type ReactNode } from 'react'
import { Link, useParams } from 'react-router-dom'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import SectionLabel from '../components/SectionLabel'
import { usePageTitle } from '../hooks/usePageTitle'
import { products, type HighlightIcon } from '../data/products'
import { trackEvent, trackOutbound } from '../lib/mixpanel'
import '../styles/pages/products.css'

const HIGHLIGHT_ICONS: Record<HighlightIcon, ReactNode> = {
  /* hand with grip lines — non-slip */
  grip: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 13 V5.5 a 1.5 1.5 0 0 1 3 0 V11" />
      <path d="M12 11 V4.5 a 1.5 1.5 0 0 1 3 0 V11" />
      <path d="M15 11 V6 a 1.5 1.5 0 0 1 3 0 V14 a 6 6 0 0 1 -6 6 a 6 6 0 0 1 -6 -6 V9 a 1.5 1.5 0 0 1 3 0 V13" />
    </svg>
  ),
  /* stacked layers — thick & cushioned */
  cushion: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="6"  width="18" height="5" rx="2.5" />
      <rect x="3" y="13" width="18" height="5" rx="2.5" />
    </svg>
  ),
  /* leaf — eco-friendly */
  eco: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 4 C 11 4, 4 11, 4 20 C 13 20, 20 13, 20 4 Z" />
      <path d="M4 20 L 14 10" />
    </svg>
  ),
  /* droplet with slash — sweat-resistant */
  sweat: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3 C 7 9, 5 12.5, 5 15.5 a 7 7 0 0 0 14 0 C 19 12.5, 17 9, 12 3 Z" />
      <path d="M5 5 L 19 19" opacity="0.85" />
    </svg>
  ),
  /* shoulder bag with strap — lightweight + strap */
  light: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 9 C 8 4.5, 16 4.5, 16 9" />
      <rect x="4" y="9" width="16" height="11" rx="2" />
      <path d="M4 13 L 20 13" opacity="0.5" />
    </svg>
  ),
  /* two people of different heights — for every level (beginner to advanced) */
  levels: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8"  cy="10" r="1.8" />
      <path d="M5.5 20 V14.5 a 2.5 2.5 0 0 1 5 0 V20" />
      <circle cx="16" cy="6"  r="2" />
      <path d="M13.5 20 V10.5 a 2.5 2.5 0 0 1 5 0 V20" />
    </svg>
  ),
}

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>()
  const product = products.find((p) => p.id === slug)

  usePageTitle(
    product ? `${product.name} · Aloha Fitness` : 'Product not found · Aloha Fitness',
  )

  const [colorIndex, setColorIndex] = useState(0)

  if (!product) {
    return (
      <>
        <SiteHeader />
        <main className="product-missing">
          <h1>We couldn't find that product.</h1>
          <p>It may have moved — browse the full shop to find what you're after.</p>
          <Link className="btn-primary-ink" to="/products">
            Back to shop
            <span className="arrow" aria-hidden="true">→</span>
          </Link>
        </main>
        <SiteFooter />
      </>
    )
  }

  const activeColor = product.colors?.[colorIndex]
  const heroImage = activeColor?.image ?? product.image
  const buyUrl = activeColor?.amazonUrl ?? product.amazonUrl
  const isSoldOut = activeColor?.outOfStock === true
  const related = products.filter((p) => p.id !== product.id).slice(0, 3)

  return (
    <>
      <SiteHeader />

      <section className="pd-hero">
        <figure className="pd-photo">
          <img src={heroImage} alt={product.name} />
        </figure>

        <div className="pd-info">
          <div className="eyebrow">{product.tagline}</div>
          <h1 className="pd-name">{product.name}</h1>

          {product.price && <div className="pd-price">{product.price}</div>}

          <p className="pd-summary">{product.description}</p>

          {product.colors && product.colors.length > 0 && (
            <div className="pd-colors">
              <span className="pd-colors-label">
                Color: <strong>{activeColor?.name}</strong>
                {isSoldOut && <span className="pd-soldout-tag">Sold out</span>}
              </span>
              {activeColor?.subtitle && (
                <span className="pd-colors-subtitle">{activeColor.subtitle}</span>
              )}
              <div className="pd-swatches" role="radiogroup" aria-label="Color">
                {product.colors.map((c, i) => {
                  const classes = ['pd-swatch']
                  if (i === colorIndex) classes.push('is-active')
                  if (c.outOfStock) classes.push('is-sold-out')
                  return (
                    <button
                      key={c.name}
                      type="button"
                      role="radio"
                      aria-checked={i === colorIndex}
                      aria-label={c.outOfStock ? `${c.name} (sold out)` : c.name}
                      title={c.outOfStock ? `${c.name} — sold out` : c.name}
                      className={classes.join(' ')}
                      style={{ background: c.swatch }}
                      onClick={() => {
                        setColorIndex(i)
                        trackEvent('Color swatch selected', {
                          product: product.id,
                          color: c.name,
                          sold_out: !!c.outOfStock,
                        })
                      }}
                    />
                  )
                })}
              </div>
            </div>
          )}

          {isSoldOut ? (
            <>
              <button className="btn-primary-ink pd-buy is-disabled" type="button" disabled>
                Sold out — try another color
              </button>
              <p className="pd-buy-note">
                Restocking soon. Pick a different color above to buy now.
              </p>
            </>
          ) : (
            <>
              <a
                className="btn-primary-ink pd-buy"
                href={buyUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                onClick={() =>
                  trackOutbound('Amazon', buyUrl, {
                    location: 'product-detail',
                    product: product.id,
                    color: activeColor?.name,
                  })
                }
              >
                Buy on Amazon
                <span className="arrow" aria-hidden="true">→</span>
              </a>
              <p className="pd-buy-note">
                Opens Amazon in a new tab.
              </p>
            </>
          )}
        </div>
      </section>

      {product.story && product.story.length > 0 && (
        <section className="section">
          <SectionLabel>
            Why we <em>love it</em>
          </SectionLabel>
          <div className="pd-prose">
            {product.story.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>
      )}

      {product.highlights && product.highlights.length > 0 && (
        <section className="section">
          <SectionLabel>
            What it does <em>well</em>
          </SectionLabel>
          <ul className="pd-highlights">
            {product.highlights.map((h) => (
              <li key={h.title} className="pd-highlight">
                {h.icon && HIGHLIGHT_ICONS[h.icon] && (
                  <span className="pd-highlight-icon" aria-hidden="true">
                    {HIGHLIGHT_ICONS[h.icon]}
                  </span>
                )}
                <h3>{h.title}</h3>
                <p>{h.body}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {product.specs && product.specs.length > 0 && (
        <section className="section">
          <SectionLabel>
            The <em>specs</em>
          </SectionLabel>
          <dl className="pd-specs">
            {product.specs.map((s) => (
              <div key={s.label} className="pd-spec-row">
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {related.length > 0 && (
        <section className="section">
          <SectionLabel>
            Other <em>picks</em>
          </SectionLabel>
          <ul className="product-grid">
            {related.map((p) => (
              <li key={p.id} className="product-card">
                <Link className="product-card-link" to={`/products/${p.id}`}>
                  <figure className="product-photo">
                    <img src={p.image} alt={p.name} loading="lazy" />
                  </figure>
                  <div className="product-body">
                    <div className="product-kicker">{p.tagline}</div>
                    <h3 className="product-name">{p.name}</h3>
                    <p className="product-desc">{p.description}</p>
                    <div className="product-cta-row">
                      {p.price && <span className="product-price">{p.price}</span>}
                      <span className="product-buy">
                        See details
                        <span className="arrow" aria-hidden="true">→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="free-callout">
          <span className="eyebrow-dark">Prefer to train in person?</span>
          <p className="callout-title">
            Your first class is <span className="ital">free.</span>
          </p>
          <p className="callout-sub">
            Come meet the community at Willard Park — no pressure, no commitment.
          </p>
          <Link className="btn-callout" to="/free">
            Register for a free class
            <span className="arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
