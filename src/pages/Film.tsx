import { useCallback, useEffect, useRef, useState, type MouseEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle'
import '../styles/pages/film.css'

/**
 * Bliss Collection mat scenes — bespoke cinematic palette per mat.
 * `file` is the transparent-PNG filename in /public/img/products/.
 */
const MAT_SCENES = [
  { id: 'lava',     name: 'Lava',     file: 'black',     tag: 'ground in stillness', bg: '#1a1714', text: '#f3ebdc', dot: '#0c0a08' },
  { id: 'plumeria', name: 'Plumeria', file: 'pink',      tag: 'soften into presence', bg: '#f1e0d5', text: '#3a2820', dot: '#e9c5be' },
  { id: 'mango',    name: 'Mango',    file: 'orange',    tag: 'ignite your practice', bg: '#f9e2cb', text: '#3a1f10', dot: '#e07a30' },
  { id: 'lagoon',   name: 'Lagoon',   file: 'lake-blue', tag: 'flow like water',      bg: '#dfe9e8', text: '#152a36', dot: '#5a9bb4' },
  { id: 'palm',     name: 'Palm',     file: 'green',     tag: 'root and rise',        bg: '#e6eadb', text: '#1c2918', dot: '#2f9b3e' },
  { id: 'pacific',  name: 'Pacific',  file: 'blue',      tag: 'breathe deep',         bg: '#dde7ec', text: '#0f2638', dot: '#5fa6c8' },
] as const

type SceneId = 'intro' | typeof MAT_SCENES[number]['id'] | 'outro'
const SCENE_ORDER: SceneId[] = ['intro', ...MAT_SCENES.map((s) => s.id), 'outro']
const TOTAL = String(MAT_SCENES.length).padStart(2, '0')

/** Per-scene auto-advance dwell time. */
const SCENE_DURATION_MS: Record<SceneId, number> = {
  intro: 2800,
  lava: 3700,
  plumeria: 3700,
  mango: 3700,
  lagoon: 3700,
  palm: 3700,
  pacific: 3700,
  outro: 5500,
}

const WHEEL_THROTTLE_MS = 550

export default function Film() {
  const [sceneIdx, setSceneIdx] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const navigate = useNavigate()
  const lastWheelRef = useRef(0)

  usePageTitle('aloha · the bliss collection · Aloha Fitness')

  useEffect(() => {
    document.body.classList.add('film-mode')
    return () => {
      document.body.classList.remove('film-mode')
    }
  }, [])

  // Auto-advance loop.
  useEffect(() => {
    if (!isPlaying) return
    const currentId = SCENE_ORDER[sceneIdx]
    const t = window.setTimeout(() => {
      setSceneIdx((i) => (i + 1) % SCENE_ORDER.length)
    }, SCENE_DURATION_MS[currentId])
    return () => window.clearTimeout(t)
  }, [sceneIdx, isPlaying])

  const goNext = useCallback(() => {
    setSceneIdx((i) => (i + 1) % SCENE_ORDER.length)
  }, [])

  const goPrev = useCallback(() => {
    setSceneIdx((i) => (i - 1 + SCENE_ORDER.length) % SCENE_ORDER.length)
  }, [])

  const goTo = useCallback((idx: number) => {
    setSceneIdx(idx)
  }, [])

  // Keyboard navigation.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault()
        goNext()
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        goPrev()
      } else if (e.key === ' ') {
        e.preventDefault()
        setIsPlaying((p) => !p)
      } else if (e.key === 'Escape') {
        if (window.opener || window.history.length <= 1) window.close()
        else navigate('/')
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [goNext, goPrev, navigate])

  // Mouse-wheel + trackpad navigation (throttled).
  useEffect(() => {
    function onWheel(e: WheelEvent) {
      e.preventDefault()
      const now = Date.now()
      if (now - lastWheelRef.current < WHEEL_THROTTLE_MS) return
      const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX
      if (Math.abs(delta) < 8) return
      lastWheelRef.current = now
      if (delta > 0) goNext()
      else goPrev()
    }
    window.addEventListener('wheel', onWheel, { passive: false })
    return () => window.removeEventListener('wheel', onWheel)
  }, [goNext, goPrev])

  function handleClose(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    e.stopPropagation()
    if (window.opener || window.history.length <= 1) window.close()
    else navigate('/')
  }

  function handleStageClick(e: MouseEvent<HTMLDivElement>) {
    const target = e.target as HTMLElement
    if (target.closest('.film-close-btn, .film-dot, .film-arrow')) return
    setIsPlaying((p) => !p)
  }

  function handleArrow(e: MouseEvent<HTMLButtonElement>, dir: 'prev' | 'next') {
    e.stopPropagation()
    if (dir === 'next') goNext()
    else goPrev()
  }

  const currentSceneId = SCENE_ORDER[sceneIdx]
  const wrapClass = ['film-stage-wrap', isPlaying ? '' : 'is-paused'].filter(Boolean).join(' ')
  const currentMatIdx = MAT_SCENES.findIndex((s) => s.id === currentSceneId)
  const currentCounter = currentMatIdx >= 0 ? String(currentMatIdx + 1).padStart(2, '0') : null

  return (
    <div className={wrapClass} onClick={handleStageClick}>
      <div className="stage" data-scene={currentSceneId}>
        <div className="bg-layer bg-intro" style={{ background: '#ece4d6' }} />
        {MAT_SCENES.map((s) => (
          <div key={`bg-${s.id}`} className={`bg-layer bg-${s.id}`} style={{ background: s.bg }} />
        ))}
        <div className="bg-layer bg-outro" style={{ background: '#1a1714' }} />

        <div className="intro-mark-pos"><div className="intro-mark-anim">aloha</div></div>
        <div className="intro-sub-pos"><div className="intro-sub-anim">the bliss collection</div></div>

        {MAT_SCENES.map((s) => (
          <div key={`mat-${s.id}`} className="mat-pos">
            <img
              className={`mat-img mat-${s.id}`}
              src={`/img/products/${s.file}.png`}
              alt={`${s.name} yoga mat`}
            />
          </div>
        ))}

        {MAT_SCENES.map((s) => (
          <div key={`name-${s.id}`} className="name-pos">
            <div className={`name-anim name-${s.id}`} style={{ color: s.text }}>
              <span className="dot" style={{ background: s.dot }} />
              <span className="name-text">{s.name}</span>
            </div>
          </div>
        ))}

        {MAT_SCENES.map((s) => (
          <div key={`tag-${s.id}`} className={`tag tag-${s.id}`} style={{ color: s.text }}>
            <span className="tag-line" />
            <span className="tag-text">{s.tag}</span>
          </div>
        ))}

        {currentCounter && (
          <div className={`counter counter-${currentSceneId}`}>
            <span className="num">{currentCounter}</span>
            <span className="sep">/</span>
            <span className="total">{TOTAL}</span>
          </div>
        )}

        <div className="brand-corner">aloha bliss</div>

        <div className="outro-grid">
          {MAT_SCENES.map((s) => (
            <div key={`outro-${s.id}`} className={`outro-mat outro-mat-${s.id}`}>
              <img src={`/img/products/${s.file}.png`} alt={s.name} />
              <div className="outro-label">{s.name}</div>
            </div>
          ))}
        </div>

        <div className="outro-title-pos">
          <div className="outro-title-anim">six grounds · one practice</div>
        </div>

        <div className="outro-brand-pos">
          <div className="outro-brand-anim">
            <div className="mark">aloha bliss</div>
            <div className="sub">find your color</div>
          </div>
        </div>

        <div className="vignette" />
        <div className="grain" />
      </div>

      <button
        type="button"
        className="film-arrow film-arrow-prev"
        aria-label="Previous scene"
        onClick={(e) => handleArrow(e, 'prev')}
      >
        ‹
      </button>
      <button
        type="button"
        className="film-arrow film-arrow-next"
        aria-label="Next scene"
        onClick={(e) => handleArrow(e, 'next')}
      >
        ›
      </button>

      <div className="film-dots" role="tablist" aria-label="Scene navigation">
        {SCENE_ORDER.map((id, i) => (
          <button
            key={id}
            type="button"
            className={i === sceneIdx ? 'film-dot is-active' : 'film-dot'}
            aria-label={`Go to scene ${i + 1}: ${id}`}
            aria-current={i === sceneIdx}
            onClick={(e) => {
              e.stopPropagation()
              goTo(i)
            }}
          />
        ))}
      </div>

      <div className="film-play-indicator" aria-hidden="true">▶</div>

      <Link to="/" className="film-close-btn" aria-label="Close" onClick={handleClose}>
        ×
      </Link>

      <div className="film-controls">
        {isPlaying ? 'click to pause · scroll · arrows' : 'click to play'}
      </div>
    </div>
  )
}
