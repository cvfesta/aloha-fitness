import mixpanel from 'mixpanel-browser'

const TOKEN = '34b0b2e5a4bf295cff378e99aa7f115f'

const PAGE_EVENT_NAMES: Record<string, string> = {
  '/': 'Homepage',
  '/about': 'Meet Tania',
  '/free': 'Free class',
  '/free.html': 'Free class',
  '/privacy-policy': 'Privacy Policy',
  '/privacy-policy.html': 'Privacy Policy',
}

export function initMixpanel(): void {
  mixpanel.init(TOKEN, { debug: false })
}

export function trackPageView(pathname: string): void {
  const eventName = PAGE_EVENT_NAMES[pathname] ?? 'Page View'
  mixpanel.track(eventName, { path: pathname })
}
