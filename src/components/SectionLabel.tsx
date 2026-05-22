import type { ReactNode } from 'react'

type SectionLabelProps = {
  /** Heading content — typically text with an <em> emphasis. */
  children: ReactNode
  /** Optional "01 / 06" progress marker. */
  num?: string
  /** Heading level — defaults to h2. */
  as?: 'h2' | 'h3'
}

/** The section heading row: a heading with an optional "XX / YY" marker. */
export default function SectionLabel({ children, num, as = 'h2' }: SectionLabelProps) {
  const Heading = as
  return (
    <div className="section-label">
      <Heading>{children}</Heading>
      {num ? <span className="num">{num}</span> : null}
    </div>
  )
}
