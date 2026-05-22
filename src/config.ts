/**
 * Central site configuration.
 *
 * Change business details here — class schedule, pricing, promo code, contact
 * info — and every page updates to match. This is the one place to edit them.
 *
 * Not driven by this file (edit directly if they change):
 *   - index.html  — page <title>, social/meta tags, LocalBusiness structured data
 *   - public/sitemap.xml
 */
export const site = {
  name: 'Aloha Fitness',

  location: {
    park: 'Willard Park',
    address: '820 Lazy Trl Dr, Rocklin, CA 95765',
  },

  contact: {
    email: 'support@alohafitness.net',
    phone: '818-261-5325',
    instagram: 'https://www.instagram.com/taniafesta.aloha',
  },

  /** Promotional bar shown above the header (home & free-class pages). */
  promo: {
    code: 'FRIENDS20',
    offer: '20% off',
    detail: 'your monthly membership',
    note: 'Limited time',
  },

  /**
   * Class schedule. Update the times here — the homepage schedule table, the
   * free-class page, and the registration form all read from this.
   * `formValue` is the identifier sent with the registration form; keep it
   * stable (it also appears in the hidden form in index.html).
   */
  schedule: {
    weekday: {
      label: 'Monday & Wednesday',
      shortLabel: 'Mon & Wed',
      time: '8:30 AM',
      type: 'Strength',
      formValue: 'monday_wednesday_strength_830am',
    },
    saturday: {
      label: 'Saturday',
      shortLabel: 'Saturday',
      time: '7:30 AM',
      type: 'Strength',
      formValue: 'saturday_strength_730am',
    },
  },

  /** Pricing — `price`/`was` are USD per month; `was` is the strikethrough price. */
  pricing: {
    coaching: {
      paymentLink: 'https://square.link/u/Gg8ToJIS',
    },
    fullMembership: {
      price: 59,
      was: 99,
      paymentLink: 'https://buy.stripe.com/dR67ww2OIfQIbRKbII',
    },
    saturdayOnly: {
      price: 49,
      was: 59,
      paymentLink: 'https://buy.stripe.com/bIYcQQ892gUM8Fy4gh',
    },
  },
} as const
