import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContactModal } from '../contexts/ContactModalContext'

/**
 * Primary site navigation, rendered on the right side of SiteHeader on every
 * page. Mobile-collapsible. The Contact link opens the app-level contact modal
 * via context, so this component doesn't need any props.
 */
export default function MainNav() {
  const [open, setOpen] = useState(false)
  const { open: openContact } = useContactModal()

  function close() {
    setOpen(false)
  }

  function onContactClick() {
    close()
    openContact()
  }

  return (
    <>
      <button
        className="nav-toggle"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
      </button>
      <nav className={open ? 'nav-links open' : 'nav-links'}>
        <Link to="/products" onClick={close}>
          Shop
        </Link>
        <Link to="/classes" onClick={close}>
          Classes
        </Link>
        <Link to="/free" className="cta" onClick={close}>
          Free Class
        </Link>
        <a onClick={onContactClick}>Contact</a>
      </nav>
    </>
  )
}
