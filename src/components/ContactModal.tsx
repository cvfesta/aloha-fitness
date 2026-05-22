import { Modal } from 'react-bootstrap'
import { Field } from './Field'
import { useNetlifyForm } from '../hooks/useNetlifyForm'

/** Contact form shown in a modal. Posts to the Netlify `contact` form. */
export default function ContactModal({ show, onHide }: { show: boolean; onHide: () => void }) {
  const { validated, status, handleSubmit, reset } = useNetlifyForm('contact')

  return (
    <Modal show={show} onHide={onHide} onExited={reset} centered>
      <Modal.Header closeButton>
        <Modal.Title as="h1" className="fs-5">
          Get in touch
        </Modal.Title>
      </Modal.Header>

      {status === 'sent' ? (
        <>
          <Modal.Body>
            <p style={{ margin: 0 }}>
              Thanks for reaching out — we'll get back to you as soon as we can.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <button type="button" className="btn-pill-ink" onClick={onHide}>
              Done
            </button>
          </Modal.Footer>
        </>
      ) : (
        <form
          name="contact"
          className={validated ? 'contact was-validated' : 'contact'}
          onSubmit={handleSubmit}
          noValidate
        >
          <Modal.Body>
            <p style={{ position: 'absolute', left: '-9999px' }}>
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </p>
            <Field
              name="firstName"
              label="First name"
              error="Please enter your first name."
              autoComplete="given-name"
              spellCheck
            />
            <Field
              name="lastName"
              label="Last name"
              error="Please enter your last name."
              autoComplete="family-name"
              spellCheck
            />
            <Field
              name="email"
              type="email"
              label="Email address"
              error="Please enter your email."
              autoComplete="email"
              spellCheck
            />
            <Field
              name="message"
              multiline
              label="How can we help you?"
              error="Please enter a message."
            />
            {status === 'error' && (
              <p style={{ color: 'var(--terracotta-deep)', fontSize: '0.85rem', margin: '0.75rem 0 0' }}>
                Something went wrong. Please try again, or email us at support@alohafitness.net.
              </p>
            )}
          </Modal.Body>
          <Modal.Footer>
            <button type="button" className="btn-pill-outline" onClick={onHide}>
              Cancel
            </button>
            <button type="submit" className="btn-pill-ink" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send'}
              <span aria-hidden="true">→</span>
            </button>
          </Modal.Footer>
        </form>
      )}
    </Modal>
  )
}