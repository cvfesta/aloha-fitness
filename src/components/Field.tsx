import type { ReactNode } from 'react'

/**
 * Text/email/tel/textarea field with a floating label and a validation
 * message, styled by the `.field` rules in site.css. Always `required`; the
 * parent form toggles `.was-validated` to reveal the error.
 */
type FieldProps = {
  /** Field name — also used as the input `id` for the label association. */
  name: string
  label: string
  /** Message shown when the field is invalid after a submit attempt. */
  error: string
  type?: string
  autoComplete?: string
  spellCheck?: boolean
  /** Render a `<textarea>` instead of an `<input>`. */
  multiline?: boolean
}

export function Field({
  name,
  label,
  error,
  type = 'text',
  autoComplete,
  spellCheck,
  multiline,
}: FieldProps) {
  return (
    <div className="field">
      {multiline ? (
        <textarea name={name} id={name} placeholder=" " required />
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          placeholder=" "
          required
          autoComplete={autoComplete}
          spellCheck={spellCheck}
        />
      )}
      <label htmlFor={name}>{label}</label>
      <div className="invalid-msg">{error}</div>
    </div>
  )
}

type SelectFieldProps = {
  name: string
  label: string
  error: string
  /** Controlled value — needed so the label stays floated once a value is set. */
  value: string
  onChange: (value: string) => void
  /** The `<option>` elements. */
  children: ReactNode
}

/** Select variant of {@link Field}; floats the label once a value is chosen. */
export function SelectField({ name, label, error, value, onChange, children }: SelectFieldProps) {
  return (
    <div className={value ? 'field has-value' : 'field'}>
      <select
        name={name}
        id={name}
        required
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        {children}
      </select>
      <label htmlFor={name}>{label}</label>
      <div className="invalid-msg">{error}</div>
    </div>
  )
}