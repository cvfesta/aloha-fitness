import { useCallback, useEffect, useState } from 'react'

export type Theme = 'system' | 'light' | 'dark'
export type ResolvedTheme = 'light' | 'dark'

const STORAGE_KEY = 'aloha-theme'

/** Read the stored theme preference, defaulting to 'system' if absent/invalid. */
function readStoredTheme(): Theme {
  if (typeof window === 'undefined') return 'system'
  const raw = window.localStorage.getItem(STORAGE_KEY)
  if (raw === 'light' || raw === 'dark' || raw === 'system') return raw
  return 'system'
}

/** What the OS currently prefers. */
function systemTheme(): ResolvedTheme {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

/**
 * Manage the site's theme preference. Returns the chosen value, the effective
 * (resolved) value, and a setter that persists to localStorage and updates the
 * `data-theme` attribute on <html> so CSS variable overrides take effect.
 *
 * 'system' removes the attribute so the `@media (prefers-color-scheme: dark)`
 * rule wins. 'light' / 'dark' set the attribute explicitly, overriding the OS.
 */
export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() => readStoredTheme())
  const [resolved, setResolved] = useState<ResolvedTheme>(() =>
    readStoredTheme() === 'system' ? systemTheme() : (readStoredTheme() as ResolvedTheme),
  )

  // Apply the current theme to <html>.
  useEffect(() => {
    const root = document.documentElement
    if (theme === 'system') {
      root.removeAttribute('data-theme')
      setResolved(systemTheme())
    } else {
      root.setAttribute('data-theme', theme)
      setResolved(theme)
    }
  }, [theme])

  // Re-resolve when the OS preference changes (only matters in 'system' mode).
  useEffect(() => {
    if (theme !== 'system') return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => setResolved(mq.matches ? 'dark' : 'light')
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [theme])

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next)
    if (next === 'system') window.localStorage.removeItem(STORAGE_KEY)
    else window.localStorage.setItem(STORAGE_KEY, next)
  }, [])

  return { theme, resolvedTheme: resolved, setTheme }
}
