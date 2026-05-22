/**
 * Submit a form to Netlify Forms from the React SPA.
 *
 * Netlify detects forms by scanning the built HTML at deploy time — the hidden
 * static <form> elements in index.html register the `contact` and `registration`
 * form names. At runtime the React forms POST url-encoded data back to the site
 * so Netlify can capture the submission.
 */
export async function submitNetlifyForm(
  formName: string,
  data: Record<string, string>,
): Promise<void> {
  const body = new URLSearchParams({ 'form-name': formName, ...data })
  const response = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
  })
  if (!response.ok) {
    throw new Error(`Form submission failed (${response.status})`)
  }
}

/** Collect a form's named fields into a plain string record for submission. */
export function formValues(form: HTMLFormElement): Record<string, string> {
  const entries: Record<string, string> = {}
  new FormData(form).forEach((value, key) => {
    entries[key] = typeof value === 'string' ? value : ''
  })
  return entries
}
