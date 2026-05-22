type FaqItem = { q: string; a: string }

const FAQS: FaqItem[] = [
  {
    q: "I'm new to working out — is this for me?",
    a: "Absolutely. Aloha Fitness is built for moms at every fitness level, and every movement can be scaled to where you are today. You won't be the only beginner, and you always go at your own pace.",
  },
  {
    q: 'What should I bring?',
    a: "A yoga mat, a set of dumbbells (3 or 5 lb is perfect), water, and clothes you can move in. That's it — we'll handle the rest.",
  },
  {
    q: 'Where and when are classes?',
    a: 'We meet outdoors at Willard Park in Rocklin, on weekday and Saturday mornings. Check the schedule above for current class times.',
  },
  {
    q: 'Is the first class really free?',
    a: 'Yes — your first class is completely free, with no commitment. Come once, see how it feels, and decide afterward.',
  },
  {
    q: 'Do I have to commit to a membership?',
    a: 'Not at all. Start with the free class. From there you can join a monthly membership, choose the Saturday-only option, or coach with us online — whatever fits your season.',
  },
  {
    q: "What if I can't make it to class in person?",
    a: 'We offer a 12-week online coaching program — personalized training and science-backed nutrition guidance you can follow from home, on your own schedule.',
  },
]

/** Frequently asked questions, rendered as a native (no-JS) accordion. */
export default function Faq() {
  return (
    <div className="faq-list">
      {FAQS.map((item) => (
        <details className="faq-item" key={item.q}>
          <summary>
            <span>{item.q}</span>
            <span className="faq-marker" aria-hidden="true">
              +
            </span>
          </summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  )
}
