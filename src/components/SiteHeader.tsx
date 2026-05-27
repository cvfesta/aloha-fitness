import { Link } from 'react-router-dom'
import MainNav from './MainNav'

/**
 * Shared site header: brand mark on the left, primary nav on the right.
 * No props — every page gets the same nav (orientation is by the nav itself,
 * not by per-page "back" links).
 */
export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link className="brand" to="/">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="18" cy="18" r="18" fill="var(--ocean)" />
              <path
                d="M18 26 C 9 19.5, 9 13, 13.5 12 C 16 11.5, 17.5 13, 18 14.5 C 18.5 13, 20 11.5, 22.5 12 C 27 13, 27 19.5, 18 26 Z"
                fill="#fff"
              />
            </svg>
          </span>
          Aloha Fitness
        </Link>
        <MainNav />
      </div>
    </header>
  )
}
