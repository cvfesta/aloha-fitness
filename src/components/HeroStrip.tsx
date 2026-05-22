type HeroStripItem = { label: string; value: string }

type HeroStripProps = {
  items: HeroStripItem[]
  /** Extra classes (e.g. entry-animation classes) appended to `hero-strip`. */
  className?: string
}

/** The hero stat strip — a row of label / value pairs. */
export default function HeroStrip({ items, className }: HeroStripProps) {
  return (
    <div className={className ? `hero-strip ${className}` : 'hero-strip'}>
      {items.map((item) => (
        <div className="hero-strip-item" key={item.label}>
          <span className="label">{item.label}</span>
          <span className="value">{item.value}</span>
        </div>
      ))}
    </div>
  )
}
