import { site } from '../config'

/** Promotional bar shown above the site header. Content comes from `site.promo`. */
export default function PromoBar() {
  return (
    <div className="topbar">
      <span>
        Use code <span className="code">{site.promo.code}</span> for{' '}
        <strong>{site.promo.offer}</strong> {site.promo.detail}
      </span>
      <span className="dot" />
      <span>{site.promo.note}</span>
    </div>
  )
}
