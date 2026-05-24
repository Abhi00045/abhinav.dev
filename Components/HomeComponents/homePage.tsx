// // // import React from 'react'
// // // import Aboutme from '../PageComponents/Aboutme'
// // // import Footer from '../PageComponents/Footer'
// // // import { InfoCard } from '../PageComponents/infocard'
// // // import SkillSet from '../PageComponents/SkillSet'
// // // import Projects from '../PageComponents/Projects'
// // // import Blogs from '../PageComponents/Blogs'
// // // import Xpirence from '../PageComponents/Xpirence'

// // // export const HomePage = () => {
// // //   return (
// // //     <>
// // //       <main>
// // //         <Aboutme />
// // //         <InfoCard />
// // //         <Xpirence />
// // //         <SkillSet />
// // //         <Projects />
// // //         <Blogs />
// // //       </main>
// // //       <Footer />
// // //     </>
// // //   )
// // // }
'use client'
import React, { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Aboutme from '../PageComponents/Aboutme'
import { InfoCard } from '../PageComponents/infocard'
import SkillSet from '../PageComponents/SkillSet'
import Projects from '../PageComponents/Projects'
import Blogs from '../PageComponents/Blogs'
import Xpirence from '../PageComponents/Xpirence'

const mono = "'VT323', 'Courier New', Courier, monospace"

// ─── Types ────────────────────────────────────────────────────────────────────
type WindowState = {
  id: string
  label: string
  Component: React.ComponentType
  x: number
  y: number
  zIndex: number
  width: number
  open: boolean
}

// ─── Nav sections (footer) ────────────────────────────────────────────────────
const NAV_SECTIONS = [
  {
    id: 'aboutme',
    label: 'Aboutme',
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="4" width="20" height="24" rx="1" fill="#c8d8e8" stroke="#444" strokeWidth="1.5"/>
        <rect x="9" y="7" width="14" height="10" rx="1" fill="#a8c0d8" stroke="#555" strokeWidth="1"/>
        <circle cx="16" cy="11" r="3" fill="#e8c8a0" stroke="#555" strokeWidth="1"/>
        <rect x="10" y="20" width="12" height="1.5" rx="0.5" fill="#777"/>
        <rect x="11" y="23" width="10" height="1.5" rx="0.5" fill="#999"/>
      </svg>
    ),
  },
  {
    id: 'infocard',
    label: 'InfoCard',
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <rect x="3" y="8" width="26" height="18" rx="1" fill="#fffff0" stroke="#444" strokeWidth="1.5"/>
        <rect x="3" y="8" width="26" height="5" rx="1" fill="#c0d0e8" stroke="#444" strokeWidth="1.5"/>
        <rect x="7" y="17" width="14" height="1.5" rx="0.5" fill="#888"/>
        <rect x="7" y="20" width="10" height="1.5" rx="0.5" fill="#aaa"/>
        <circle cx="23" cy="19.5" r="3.5" fill="#e8d8a0" stroke="#555" strokeWidth="1"/>
      </svg>
    ),
  },
  {
    id: 'xpirence',
    label: 'Expirence',
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="13" width="24" height="15" rx="1" fill="#d4b896" stroke="#444" strokeWidth="1.5"/>
        <rect x="11" y="10" width="10" height="5" rx="1" fill="#c8a870" stroke="#444" strokeWidth="1.5"/>
        <rect x="4" y="19" width="24" height="2" fill="#b89060"/>
        <rect x="14" y="18" width="4" height="4" rx="0.5" fill="#e8d0a8" stroke="#555" strokeWidth="1"/>
      </svg>
    ),
  },
  {
    id: 'skillset',
    label: 'Skills',
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="5" fill="#d0d0d0" stroke="#444" strokeWidth="1.5"/>
        <circle cx="16" cy="16" r="2" fill="#888" stroke="#333" strokeWidth="1"/>
        {[0,45,90,135,180,225,270,315].map((angle, i) => (
          <rect key={i} x="15" y="4" width="2" height="4" rx="1" fill="#b0b0b0" stroke="#555" strokeWidth="0.5"
            transform={`rotate(${angle} 16 16)`} />
        ))}
      </svg>
    ),
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <path d="M3 11 L3 26 L29 26 L29 11 Z" fill="#f0d080" stroke="#444" strokeWidth="1.5"/>
        <path d="M3 11 L3 8 L12 8 L14 11 Z" fill="#e8c060" stroke="#444" strokeWidth="1.5"/>
        <text x="9" y="22" fontSize="8" fill="#7b5800" fontFamily="monospace" fontWeight="bold">&lt;/&gt;</text>
      </svg>
    ),
  },
  {
    id: 'blogs',
    label: 'Writings',
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <rect x="7" y="4" width="18" height="24" rx="1" fill="#f8f0e0" stroke="#444" strokeWidth="1.5"/>
        <rect x="7" y="4" width="3" height="24" rx="0" fill="#c8a0c0" stroke="#444" strokeWidth="1"/>
        <rect x="13" y="9" width="10" height="1.5" rx="0.5" fill="#777"/>
        <rect x="13" y="13" width="10" height="1.5" rx="0.5" fill="#999"/>
        <rect x="13" y="17" width="7" height="1.5" rx="0.5" fill="#999"/>
        <rect x="13" y="21" width="8" height="1.5" rx="0.5" fill="#bbb"/>
      </svg>
    ),
  },
]

// ─── Initial window configs — all start CLOSED ────────────────────────────────
const INITIAL_WINDOWS: WindowState[] = [
  { id: 'aboutme',  label: 'ABOUT ME',   Component: Aboutme,   x: 60,  y: 60,  zIndex: 1, width: 520, open: false },
  { id: 'infocard', label: 'INFO CARD',  Component: InfoCard,  x: 100, y: 80,  zIndex: 2, width: 480, open: false },
  { id: 'xpirence', label: 'EXPERIENCE', Component: Xpirence,  x: 140, y: 100, zIndex: 3, width: 560, open: false },
  { id: 'skillset', label: 'SKILL SET',  Component: SkillSet,  x: 80,  y: 120, zIndex: 4, width: 500, open: false },
  { id: 'projects', label: 'PROJECTS',   Component: Projects,  x: 120, y: 140, zIndex: 5, width: 580, open: false },
  { id: 'blogs',    label: 'WRITINGS',   Component: Blogs,     x: 160, y: 160, zIndex: 6, width: 580, open: false },
]

let globalZ = 10

// ─── Floating Window ──────────────────────────────────────────────────────────
function FloatingWindow({
  win,
  onMove,
  onFocus,
  onClose,
  isTop,
}: {
  win: WindowState
  onMove: (id: string, x: number, y: number) => void
  onFocus: (id: string) => void
  onClose: (id: string) => void
  isTop: boolean
}) {
  const dragging = useRef(false)
  const offset   = useRef({ x: 0, y: 0 })

  const onTitleMouseDown = useCallback((e: React.MouseEvent) => {
    dragging.current = true
    offset.current = { x: e.clientX - win.x, y: e.clientY - win.y }
    onFocus(win.id)

    const onMouseMove = (ev: MouseEvent) => {
      if (!dragging.current) return
      const nx = Math.max(0, ev.clientX - offset.current.x)
      const ny = Math.max(0, ev.clientY - offset.current.y)
      const el = document.getElementById(`win-${win.id}`)
      if (el) { el.style.left = nx + 'px'; el.style.top = ny + 'px' }
    }
    const onMouseUp = (ev: MouseEvent) => {
      dragging.current = false
      const nx = Math.max(0, ev.clientX - offset.current.x)
      const ny = Math.max(0, ev.clientY - offset.current.y)
      onMove(win.id, nx, ny)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    e.preventDefault()
  }, [win, onFocus, onMove])

  const titleBg     = isTop ? '#b8a890' : '#c8bca8'
  const titleBorder = isTop ? '#7a6a50' : '#a09080'
  const winBorder   = isTop ? '#7a6a50' : '#b0a090'
  const shadow      = isTop ? '#5a4a30' : '#a09080'

  return (
    <motion.div
      id={`win-${win.id}`}
      initial={{ scale: 0.85, opacity: 0, y: 30 }}
      animate={{ scale: 1,    opacity: 1, y: 0   }}
      exit={{    scale: 0.85, opacity: 0, y: 20  }}
      transition={{ type: 'spring', stiffness: 320, damping: 28 }}
      style={{
        position: 'absolute',
        left: win.x,
        top: win.y,
        width: win.width,
        boxSizing: 'border-box',
        zIndex: win.zIndex,
        borderTop:    '2px solid #fff8f0',
        borderLeft:   '2px solid #fff8f0',
        borderRight:  `2px solid ${winBorder}`,
        borderBottom: `2px solid ${winBorder}`,
        background: '#f0ebe0',
        boxShadow: `4px 4px 0px ${shadow}`,
        userSelect: 'none',
      }}
      onMouseDown={() => onFocus(win.id)}
    >
      {/* Title bar */}
      <div
        onMouseDown={onTitleMouseDown}
        style={{
          width: '100%',
          boxSizing: 'border-box',
          background: titleBg,
          borderTop:    '1.5px solid #fff8f0',
          borderLeft:   '1.5px solid #fff8f0',
          borderBottom: `1.5px solid ${titleBorder}`,
          borderRight: 'none',
          padding: '4px 6px 4px 8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'grab',
          gap: 8,
        }}
      >
        {/* Grip + label
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, overflow: 'hidden', flex: 1 }}>
          <div style={{ display: 'flex', gap: 2, flexShrink: 0 }}>
            {[0,1,2,3,4,5].map(i => (
              <span key={i} style={{
                width: 2, height: 10,
                background: isTop ? 'rgba(255,248,240,0.6)' : 'rgba(255,248,240,0.3)',
                display: 'block',
              }} />
            ))}
          </div>
          <span style={{
            fontFamily: mono,
            fontSize: 16,
            color: isTop ? '#fff8f0' : 'rgba(255,248,240,0.6)',
            letterSpacing: 2,
            fontWeight: 700,
            textTransform: 'uppercase',
            textShadow: '1px 1px 0 rgba(0,0,0,0.3)',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}>
            {win.label}
          </span>
        </div> */}

        {/* X button — no red, matches theme */}
        <button
          onMouseDown={e => e.stopPropagation()}
          onClick={() => onClose(win.id)}
          title="Close"
          style={{
            width: 20, height: 18,
            flexShrink: 0,
            background: '#d4c5b0',
            borderTop:    '2px solid #fff8f0',
            borderLeft:   '2px solid #fff8f0',
            borderRight:  '2px solid #7a6a50',
            borderBottom: '2px solid #7a6a50',
            fontSize: 12,
            cursor: 'pointer',
            fontFamily: mono,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#2a1a00',
            fontWeight: 700,
            padding: 0,
            boxSizing: 'border-box',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#c8b9a4' }}
          onMouseLeave={e => {
            const b = e.currentTarget
            b.style.background = '#d4c5b0'
            b.style.borderTopColor = '#fff8f0'; b.style.borderLeftColor = '#fff8f0'
            b.style.borderRightColor = '#7a6a50'; b.style.borderBottomColor = '#7a6a50'
          }}
          // onMouseDown={e => {
          //   e.stopPropagation()
          //   const b = e.currentTarget
          //   b.style.borderTopColor = '#7a6a50'; b.style.borderLeftColor = '#7a6a50'
          //   b.style.borderRightColor = '#fff8f0'; b.style.borderBottomColor = '#fff8f0'
          // }}
          onMouseUp={e => {
            const b = e.currentTarget
            b.style.borderTopColor = '#fff8f0'; b.style.borderLeftColor = '#fff8f0'
            b.style.borderRightColor = '#7a6a50'; b.style.borderBottomColor = '#7a6a50'
          }}
        >✕</button>
      </div>

      {/* Content */}
      <div style={{ userSelect: 'text' }}>
        <win.Component />
      </div>
    </motion.div>
  )
}

// ─── HomePage ─────────────────────────────────────────────────────────────────
export const HomePage = () => {
  const [windows, setWindows]   = useState<WindowState[]>(INITIAL_WINDOWS)
  const [active,  setActive]    = useState<string | null>(null)
  const [pressed, setPressed]   = useState<string | null>(null)

  // Focus / bring to front
  const handleFocus = useCallback((id: string) => {
    globalZ++
    setWindows(prev => prev.map(w => w.id === id ? { ...w, zIndex: globalZ } : w))
  }, [])

  // Update position after drag
  const handleMove = useCallback((id: string, x: number, y: number) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, x, y } : w))
  }, [])

  // Close = mark open: false
  const handleClose = useCallback((id: string) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, open: false } : w))
    setActive(prev => prev === id ? null : prev)
  }, [])

  // Footer click: toggle open/close
  const handleNavClick = useCallback((navId: string) => {
    // Map footer ids → window ids
    const map: Record<string, string> = {
      aboutme:  'aboutme',
      infocard: 'infocard',
      xpirence: 'xpirence',
      skillset: 'skillset',
      projects: 'projects',
      blogs:    'blogs',
    }
    const wid = map[navId] ?? navId
    setActive(navId)

    setWindows(prev => {
      const win = prev.find(w => w.id === wid)
      if (!win) return prev

      if (win.open) {
        // Already open → focus it
        globalZ++
        return prev.map(w => w.id === wid ? { ...w, zIndex: globalZ } : w)
      }
      // Open it
      globalZ++
      return prev.map(w => w.id === wid ? { ...w, open: true, zIndex: globalZ } : w)
    })
  }, [])

  const openWindows = windows.filter(w => w.open)
  const topId = [...openWindows].sort((a, b) => b.zIndex - a.zIndex)[0]?.id

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
        *, *::before, *::after { box-sizing: border-box; }

        .retro-footer-bar {
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 9999;
          background: #d4c5b0;
          border-top:    2px solid #fff8f0;
          border-left:   2px solid #fff8f0;
          border-right:  2px solid #7a6a50;
          border-bottom: 2px solid #7a6a50;
          padding: 6px 10px;
          display: flex;
          gap: 2px;
          box-shadow: 4px 4px 0px #5a4a30, inset 1px 1px 0px #e8d8c0;
          font-family: 'VT323', monospace;
        }

        .retro-nav-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          padding: 6px 10px;
          min-width: 72px;
          cursor: pointer;
          background: #d4c5b0;
          border-top:    2px solid #fff8f0;
          border-left:   2px solid #fff8f0;
          border-right:  2px solid #7a6a50;
          border-bottom: 2px solid #7a6a50;
          box-shadow: inset 1px 1px 0px #e8d8c0;
          transition: none;
          user-select: none;
          position: relative;
        }
        .retro-nav-btn:hover { background: #c8baa4; }
        .retro-nav-btn:active,
        .retro-nav-btn.pressed {
          border-top-color:    #7a6a50;
          border-left-color:   #7a6a50;
          border-right-color:  #fff8f0;
          border-bottom-color: #fff8f0;
          box-shadow: inset 1px 1px 2px #5a4a30;
          background: #c0b09c;
        }
        .retro-nav-btn.active-section {
          background: #bfb09a;
          border-top-color:    #7a6a50;
          border-left-color:   #7a6a50;
          border-right-color:  #fff8f0;
          border-bottom-color: #fff8f0;
          box-shadow: inset 2px 2px 3px #5a4a30;
        }
        .retro-nav-btn.active-section::after {
          content: '';
          position: absolute;
          inset: 2px;
          border: 1px dotted #5a4a30;
          pointer-events: none;
        }
        .btn-label {
          font-size: 14px;
          color: #2a1a00;
          letter-spacing: 0.5px;
          line-height: 1;
          text-shadow: 1px 1px 0px rgba(255,255,255,0.4);
        }
        .active-section .btn-label { color: #1a0a00; }
      `}</style>

      {/* ── Desktop canvas ── */}
      <div style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: '#f2c4c4',
        backgroundImage: 'radial-gradient(#d98a8a 1px, transparent 1px)',
        backgroundSize: '12px 12px',
        overflow: 'hidden',
      }}>
        {/* Hint */}
        <div style={{
          position: 'absolute', top: 14, left: 0, right: 0,
          textAlign: 'center', fontFamily: mono, fontSize: 12,
          color: '#a07060', letterSpacing: 2, opacity: 0.5,
          userSelect: 'none', pointerEvents: 'none',
        }}>
          ☼ CLICK BELOW TO OPEN SECTIONS ☼
        </div>

        {/* ── Animated windows ── */}
        <AnimatePresence>
          {openWindows.map(win => (
            <FloatingWindow
              key={win.id}
              win={win}
              onMove={handleMove}
              onFocus={handleFocus}
              onClose={handleClose}
              isTop={win.id === topId}
            />
          ))}
        </AnimatePresence>

        {/* Spacer */}
        <div style={{ height: 100 }} />
      </div>

      {/* ── Retro footer nav (inline, no separate file) ── */}
      <nav className="retro-footer-bar" role="navigation" aria-label="Page sections">
        {NAV_SECTIONS.map(section => {
          const isOpen   = windows.find(w => w.id === section.id)?.open ?? false
          const isActive = active === section.id && isOpen
          return (
            <button
              key={section.id}
              className={`retro-nav-btn ${isActive ? 'active-section' : ''} ${pressed === section.id ? 'pressed' : ''}`}
              onClick={() => handleNavClick(section.id)}
              onMouseDown={() => setPressed(section.id)}
              onMouseUp={() => setPressed(null)}
              onMouseLeave={() => setPressed(null)}
              title={section.label}
              aria-label={section.label}
            >
              {section.icon}
              <span className="btn-label">{section.label}</span>
            </button>
          )
        })}
      </nav>
    </>
  )
}