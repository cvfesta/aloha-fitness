import mixpanel from 'mixpanel-browser'

/** Project token. Set VITE_MIXPANEL_TOKEN in your .env to enable tracking. */
const TOKEN = import.meta.env.VITE_MIXPANEL_TOKEN as string | undefined

type Props = Record<string, unknown>

/**
 * Friendly event names per route. Dynamic routes (e.g. /products/:slug) are
 * matched in `pageNameFor`.
 */
const PAGE_EVENT_NAMES: Record<string, string> = {
  '/': 'Homepage',
  '/classes': 'Classes',
  '/about': 'Meet Tania',
  '/products': 'Products list',
  '/free': 'Free class',
  '/free.html': 'Free class',
  '/film': 'Film',
  '/film.html': 'Film',
  '/privacy-policy': 'Privacy Policy',
  '/privacy-policy.html': 'Privacy Policy',
}

function pageNameFor(pathname: string): string {
  if (PAGE_EVENT_NAMES[pathname]) return PAGE_EVENT_NAMES[pathname]
  if (pathname.startsWith('/products/')) return 'Product detail'
  return 'Page View'
}

let initialized = false

export function initMixpanel(): void {
  if (!TOKEN) {
    // Silent in dev; no analytics noise. Set VITE_MIXPANEL_TOKEN to enable.
    return
  }
  mixpanel.init(TOKEN, { debug: false })
  initialized = true
}

export function trackPageView(pathname: string, extra?: Props): void {
  if (!initialized) return
  mixpanel.track(pageNameFor(pathname), { path: pathname, ...extra })
}

/** Generic event tracker. Use for CTAs, engagement, etc. */
export function trackEvent(name: string, props?: Props): void {
  if (!initialized) return
  mixpanel.track(name, props)
}

/** Outbound link click (Amazon, Stripe, Instagram, etc.). */
export function trackOutbound(label: string, url: string, extra?: Props): void {
  if (!initialized) return
  mixpanel.track('Outbound click', { label, url, ...extra })
}
