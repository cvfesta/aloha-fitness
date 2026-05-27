import { useState } from 'react'
import type { FormEvent } from 'react'
import { submitNetlifyForm, formValues } from '../lib/netlify'
import { trackEvent } from './../lib/mixpanel'

export type SubmitStatus = 'idle' | 'sending' | 'sent' | 'error'

/**
 * State for a Netlify-backed form: native HTML5 validation gating, a submit
 * handler that posts to Netlify, and request status tracking.
 *
 * `validated` drives the `.was-validated` class so site.css reveals field
 * errors only after the first submit attempt.
 */
export function useNetlifyForm(formName: string) {
  const [validated, setValidated] = useState(false)
  const [status, setStatus] = useState<SubmitStatus>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.checkValidity()) {
      setValidated(true)
      trackEvent('Form validation failed', { form: formName })
      return
    }
    setValidated(true)
    setStatus('sending')
    trackEvent('Form submit attempted', { form: formName })
    try {
      await submitNetlifyForm(formName, formValues(form))
      setStatus('sent')
      trackEvent('Form submitted', { form: formName })
    } catch {
      setStatus('error')
      trackEvent('Form submit error', { form: formName })
    }
  }

  /** Return the form to its initial state — used when a modal reopens. */
  function reset() {
    setValidated(false)
    setStatus('idle')
  }

  return { validated, status, handleSubmit, reset }
}