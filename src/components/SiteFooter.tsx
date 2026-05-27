import { Link } from 'react-router-dom'
import { site } from '../config'
import { useContactModal } from '../contexts/ContactModalContext'
import { trackEvent, trackOutbound } from '../lib/mixpanel'

/**
 * Shared site footer. Same link cluster on every page — no per-page overrides.
 */
export default function SiteFooter() {
  const { open: openContact } = useContactModal()

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span className="footer-copy">
          © {new Date().getFullYear()} Aloha Fitness
          <a
            className="footer-social"
            href={site.contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Aloha Fitness on Instagram"
            onClick={() =>
              trackOutbound('Instagram', site.contact.instagram, { location: 'footer' })
            }
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" stroke="currentColor" strokeWidth="1.8" />
              <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8" />
              <circle cx="17.6" cy="6.4" r="1.3" fill="currentColor" />
            </svg>
          </a>
        </span>
        <div className="footer-links">
          <Link to="/products">Shop</Link>
          <Link to="/classes">Classes</Link>
          <Link to="/about">Coach</Link>
          <Link to="/free">Free Class</Link>
          <button
            type="button"
            className="footer-link-button"
            onClick={() => {
              trackEvent('Contact modal opened', { location: 'footer' })
              openContact()
            }}
          >
            Contact
          </button>
          <Link to="/privacy-policy">Privacy</Link>
        </div>
        <span className="footer-mark">
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 14 C 2 9.5, 2 5, 5.5 4 C 7 3.7, 7.7 4.5, 8 5.5 C 8.3 4.5, 9 3.7, 10.5 4 C 14 5, 14 9.5, 8 14 Z"
              fill="var(--ocean)"
            />
          </svg>
          Made with care in Rocklin, CA
        </span>
      </div>
    </footer>
  )
}
