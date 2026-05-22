import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import FreeClass from './pages/FreeClass'
import PrivacyPolicy from './pages/PrivacyPolicy'
import NotFound from './pages/NotFound'
import { trackPageView } from './lib/mixpanel'

export default function App() {
  const location = useLocation()
  useEffect(() => {
    trackPageView(location.pathname)
  }, [location.pathname])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/free" element={<FreeClass />} />
      <Route path="/free.html" element={<FreeClass />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/privacy-policy.html" element={<PrivacyPolicy />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
