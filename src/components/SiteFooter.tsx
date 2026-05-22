import type { ReactNode } from 'react'

/**
 * Shared site footer: copyright on the left, "made with care" mark on the
 * right. Pass `links` to render the middle nav cluster (used on the homepage).
 */
export default function SiteFooter({ links }: { links?: ReactNode }) {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span>© {new Date().getFullYear()} Aloha Fitness</span>
        {links}
        <span className="footer-mark">
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 14 C 2 9.5, 2 5, 5.5 4 C 7 3.7, 7.7 4.5, 8 5.5 C 8.3 4.5, 9 3.7, 10.5 4 C 14 5, 14 9.5, 8 14 Z"
              fill="#C95A36"
            />
          </svg>
          Made with care in Rocklin, CA
        </span>
      </div>
    </footer>
  )
}
