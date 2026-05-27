import { useEffect, useRef, useState } from 'react'
import { useTheme, type Theme } from '../hooks/useTheme'
import { trackEvent } from '../lib/mixpanel'

const OPTIONS: { value: Theme; label: string }[] = [
  { value: 'system', label: 'Auto' },
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
]

/**
 * Theme dropdown: Auto (follow OS) / Light / Dark. "Auto" is the default and
 * lets the @media (prefers-color-scheme) rule track OS changes live.
 */
export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)

  // Close on outside click or Escape.
  useEffect(() => {
    if (!open) return
    function onDown(e: MouseEvent) {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false)
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const isDark = resolvedTheme === 'dark'

  return (
    <div className="theme-toggle-wrap" ref={wrapRef}>
      <button
        type="button"
        className="theme-toggle"
        onClick={() => setOpen((v) => !v)}
        aria-label={`Theme: ${theme}. Click to change.`}
        aria-haspopup="menu"
        aria-expanded={open}
        title={`Theme: ${theme === 'system' ? 'Auto' : theme === 'dark' ? 'Dark' : 'Light'}`}
      >
        {isDark ? (
          /* moon — currently dark */
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <path
              d="M16.5 12.5 A7.5 7.5 0 0 1 7.5 3.5 a7.5 7.5 0 1 0 9 9z"
              fill="currentColor"
            />
          </svg>
        ) : (
          /* sun — currently light */
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <circle cx="10" cy="10" r="3.6" fill="currentColor" />
            <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <line x1="10" y1="2.2" x2="10" y2="4.4" />
              <line x1="10" y1="15.6" x2="10" y2="17.8" />
              <line x1="2.2" y1="10" x2="4.4" y2="10" />
              <line x1="15.6" y1="10" x2="17.8" y2="10" />
              <line x1="4.5" y1="4.5" x2="6" y2="6" />
              <line x1="14" y1="14" x2="15.5" y2="15.5" />
              <line x1="4.5" y1="15.5" x2="6" y2="14" />
              <line x1="14" y1="6" x2="15.5" y2="4.5" />
            </g>
          </svg>
        )}
      </button>

      {open && (
        <div className="theme-menu" role="menu">
          {OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              role="menuitemradio"
              aria-checked={theme === opt.value}
              className={theme === opt.value ? 'theme-menu-item is-active' : 'theme-menu-item'}
              onClick={() => {
                setTheme(opt.value)
                trackEvent('Theme changed', { theme: opt.value })
                setOpen(false)
              }}
            >
              <span className="theme-menu-check" aria-hidden="true">
                {theme === opt.value ? '✓' : ''}
              </span>
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
