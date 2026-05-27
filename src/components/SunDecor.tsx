/** Decorative slowly-rotating sun used in the hero of the home and free pages. */
export default function SunDecor() {
  return (
    <svg
      className="sun-decor"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke="var(--sun)" strokeWidth="2.5" strokeLinecap="round">
        <line x1="100" y1="10" x2="100" y2="40" />
        <line x1="100" y1="160" x2="100" y2="190" />
        <line x1="10" y1="100" x2="40" y2="100" />
        <line x1="160" y1="100" x2="190" y2="100" />
        <line x1="36" y1="36" x2="58" y2="58" />
        <line x1="142" y1="142" x2="164" y2="164" />
        <line x1="36" y1="164" x2="58" y2="142" />
        <line x1="142" y1="58" x2="164" y2="36" />
      </g>
      <circle cx="100" cy="100" r="42" fill="var(--sun)" opacity="0.18" />
      <circle cx="100" cy="100" r="32" fill="var(--sun)" />
    </svg>
  )
}
