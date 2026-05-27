import { Link } from 'react-router-dom'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import SectionLabel from '../components/SectionLabel'
import { usePageTitle } from '../hooks/usePageTitle'
import { products } from '../data/products'
import '../styles/pages/products.css'

export default function Products() {
  usePageTitle('Shop · Aloha Fitness')

  return (
    <>
      <SiteHeader />

      <section className="products-hero">
        <div className="eyebrow">Shop our gear</div>
        <h1 className="products-title">
          Picks we <span className="ital">love.</span>
        </h1>
        <p className="products-lead">
          The gear and tools we actually use in class and at home. Every link goes
          straight to Amazon — buy whichever fits your routine.
        </p>
      </section>

      <section className="section">
        <SectionLabel>
          On <em>Amazon</em>
        </SectionLabel>

        <ul className="product-grid">
          {products.map((p) => (
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
