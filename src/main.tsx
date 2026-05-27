import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/site.css'
import App from './App'
import { ContactModalProvider } from './contexts/ContactModalContext'
import { initMixpanel } from './lib/mixpanel'

initMixpanel()

const root = document.getElementById('root')
if (!root) throw new Error('Root element #root not found')

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <ContactModalProvider>
        <App />
      </ContactModalProvider>
    </BrowserRouter>
  </StrictMode>,
)
