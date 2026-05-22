import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import '../styles/pages/not-found.css'

export default function NotFound() {
  useEffect(() => {
    document.title = 'Page Not Found · Aloha Fitness'
  }, [])

  return (
    <>
      {/* Header */}
      <SiteHeader />

      <main className="notfound">
        <p className="notfound-code">
          4<span className="ital">0</span>4
        </p>
        <h1>This page wandered off.</h1>
        <p>
          The page you're looking for doesn't exist — but the workout is still on. Head back and
          find your class.
        </p>
        <Link className="btn-primary-ink" to="/">
          Back to home
          <span className="arrow" aria-hidden="true">
            →
          </span>
        </Link>
      </main>

      {/* Footer */}
      <SiteFooter />
    </>
  )
}