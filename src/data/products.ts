/**
 * Product catalog — items featured on the /products page.
 *
 * Each product gets its own detail page at /products/<id>. The `id` is the URL
 * slug, so keep it lowercase-kebab and stable. To add a new product, append an
 * entry below and drop its images into `public/img/products/`.
 */
export type ColorVariant = {
  /** Display name — poetic / brand name, e.g. "Lava". */
  name: string
  /** Optional plain-language descriptor shown under the brand name, e.g. "deep volcanic black". */
  subtitle?: string
  /** CSS color for the swatch dot, e.g. "#1E231D" or "linear-gradient(...)". */
  swatch: string
  /** Image shown when this color is selected. */
  image: string
  /** Amazon URL for this specific color/variant. */
  amazonUrl: string
  /** Mark true to show the swatch as sold out and disable the buy button. */
  outOfStock?: boolean
}

export type Product = {
  /** Stable kebab slug — also the /products/:slug URL. */
  id: string
  name: string
  /** Short tagline shown under the name on cards and the detail hero. */
  tagline: string
  /** 1–3 sentence summary for the listing card. */
  description: string
  /** Default image (used on listing card; also fallback if no colors). */
  image: string
  /** Optional alternate image used by the landing hero (e.g. an all-colors shot). */
  heroImage?: string
  /** Default outbound link (used if no color is selected). */
  amazonUrl: string
  /** Optional price string (e.g. "$39.99") — shown only if set. */
  price?: string
  /** Color variants. If present, the detail page shows a swatch picker. */
  colors?: ColorVariant[]
  /** Extra images shown as thumbnails on the detail page. */
  gallery?: string[]
  /** Brand story / why-we-love-it paragraph(s) on the detail page. */
  story?: string[]
  /** Feature cards on the detail page. */
  highlights?: { title: string; body: string }[]
  /** Spec rows on the detail page (label → value). */
  specs?: { label: string; value: string }[]
}

export const products: Product[] = [
  {
    id: 'aloha-bliss-yoga-mat',
    name: 'Aloha Bliss Premium Yoga Mat',
    tagline: 'Eco-friendly · 72" × 27"',
    description:
      'Our go-to mat — a generous 72" × 27" of natural-rubber cushion that grips when you sweat, supports knees and wrists, and rolls up light with a carry strap.',
    image: '/img/products/black.png',
    heroImage: '/img/products/all-colors-top.png',
    amazonUrl: 'https://a.co/d/03PJmce1',
    price: '$120',
    // Ordered to match the campaign film: Lava → Plumeria → Mango → Lagoon → Palm → Pacific.
    colors: [
      {
        name: 'Lava',
        subtitle: 'Deep volcanic black',
        swatch: '#1E231D',
        image: '/img/products/black.png',
        amazonUrl: 'https://a.co/d/03PJmce1',
      },
      {
        name: 'Plumeria',
        subtitle: 'Blush pink',
        swatch: '#E89AB6',
        image: '/img/products/pink.png',
        amazonUrl: 'https://a.co/d/03PJmce1',
        outOfStock: true,
      },
      {
        name: 'Mango',
        subtitle: 'Sun orange',
        swatch: '#E89A3C',
        image: '/img/products/orange.png',
        amazonUrl: 'https://a.co/d/03PJmce1',
        outOfStock: true,
      },
      {
        name: 'Lagoon',
        subtitle: 'Bright tropical blue',
        swatch: '#5B7FA6',
        image: '/img/products/lake-blue.png',
        amazonUrl: 'https://a.co/d/08wPxq2P',
      },
      {
        name: 'Palm',
        subtitle: 'Soft sage green',
        swatch: '#6C8B65',
        image: '/img/products/green.png',
        amazonUrl: 'https://a.co/d/03PJmce1',
        outOfStock: true,
      },
      {
        name: 'Pacific',
        subtitle: 'Deep ocean blue',
        swatch: '#3D5F9E',
        image: '/img/products/blue.png',
        amazonUrl: 'https://a.co/d/03PJmce1',
        outOfStock: true,
      },
    ],
    story: [
      "We picked this one because it's the mat we keep coming back to — at the park, at home, in the studio. It's thick enough that knees and wrists thank you, sticky enough to hold a downward dog through a sweaty class, and light enough to actually carry.",
      "And because it's made from biodegradable natural rubber instead of PVC, you're not bringing the chemistry set into your workout.",
    ],
    highlights: [
      {
        title: 'Non-slip grip',
        body: 'Textured surface holds steady through yoga, pilates, hot yoga, and stretching — even when things get sweaty.',
      },
      {
        title: 'Thick & cushioned',
        body: 'A generous 0.18" of padding for joint and spine support during long floor sessions.',
      },
      {
        title: 'Eco-friendly',
        body: 'Biodegradable natural rubber — safe for you, gentler on the planet than PVC mats.',
      },
      {
        title: 'Sweat-resistant',
        body: 'Resists moisture and odor. Wipe clean with a warm damp cloth and it goes back in the bag.',
      },
      {
        title: 'Lightweight + strap',
        body: 'Rolls up tight and travels with the included carrying strap. Easy to grab on the way out the door.',
      },
      {
        title: 'For every level',
        body: 'Works whether you\'re brand-new to yoga or deep into a daily practice.',
      },
    ],
    specs: [
      { label: 'Dimensions', value: '73" L × 27" W × 0.18" thick' },
      { label: 'Weight', value: '7.05 lb' },
      { label: 'Material', value: 'PU + natural rubber' },
      { label: 'Care', value: 'Hand wash; wipe with warm damp cloth' },
      { label: 'Brand', value: 'Aloha' },
    ],
  },
]
