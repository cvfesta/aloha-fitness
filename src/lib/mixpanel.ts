import mixpanel from 'mixpanel-browser'

const TOKEN = '34b0b2e5a4bf295cff378e99aa7f115f'

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

export function initMixpanel(): void {
  mixpanel.init(TOKEN, { debug: false })
}

export function trackPageView(pathname: string, extra?: Props): void {
  mixpanel.track(pageNameFor(pathname), { path: pathname, ...extra })
}

/** Generic event tracker. Use for CTAs, engagement, etc. */
export function trackEvent(name: string, props?: Props): void {
  mixpanel.track(name, props)
}

/** Outbound link click (Amazon, Stripe, Instagram, etc.). */
export function trackOutbound(label: string, url: string, extra?: Props): void {
  mixpanel.track('Outbound click', { label, url, ...extra })
}
