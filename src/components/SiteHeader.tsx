import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

/**
 * Shared site header: the brand lockup on the left and page-specific nav on
 * the right. Pass `children` for a custom right side (the homepage nav); with
 * no children it falls back to a "Back to site" link, which the free-class,
 * privacy, and 404 pages use.
 */
export default function SiteHeader({ children }: { children?: ReactNode }) {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link className="brand" to="/">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="18" cy="18" r="18" fill="#C95A36" />
              <path
                d="M18 26 C 9 19.5, 9 13, 13.5 12 C 16 11.5, 17.5 13, 18 14.5 C 18.5 13, 20 11.5, 22.5 12 C 27 13, 27 19.5, 18 26 Z"
                fill="#FFFCF5"
              />
            </svg>
          </span>
          Aloha Fitness
        </Link>
        {children ?? (
          <Link to="/" className="nav-back">
            ← Back to site
          </Link>
        )}
      </div>
    </header>
  )
}
