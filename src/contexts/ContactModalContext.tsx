import { createContext, lazy, Suspense, useContext, useState, type ReactNode } from 'react'

const ContactModal = lazy(() => import('../components/ContactModal'))

type Ctx = { open: () => void }
const ContactModalCtx = createContext<Ctx>({ open: () => {} })

export function useContactModal() {
  return useContext(ContactModalCtx)
}

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [show, setShow] = useState(false)
  return (
    <ContactModalCtx.Provider value={{ open: () => setShow(true) }}>
      {children}
      {show && (
        <Suspense fallback={null}>
          <ContactModal show={show} onHide={() => setShow(false)} />
        </Suspense>
      )}
    </ContactModalCtx.Provider>
  )
}
