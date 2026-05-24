// // import React from 'react'
// // import Aboutme from '../PageComponents/Aboutme'
// // import Footer from '../PageComponents/Footer'
// // import { InfoCard } from '../PageComponents/infocard'
// // import SkillSet from '../PageComponents/SkillSet'
// // import Projects from '../PageComponents/Projects'
// // import Blogs from '../PageComponents/Blogs'
// // import Xpirence from '../PageComponents/Xpirence'

// // export const HomePage = () => {
// //   return (
// //     <>
// //       <main>
// //         <Aboutme />
// //         <InfoCard />
// //         <Xpirence />
// //         <SkillSet />
// //         <Projects />
// //         <Blogs />
// //       </main>
// //       <Footer />
// //     </>
// //   )
// // }
'use client'
import React, { useState, useRef, useCallback } from 'react'
import Aboutme from '../PageComponents/Aboutme'
import Footer from '../PageComponents/Footer'
import { InfoCard } from '../PageComponents/infocard'
import SkillSet from '../PageComponents/SkillSet'
import Projects from '../PageComponents/Projects'
import Blogs from '../PageComponents/Blogs'
import Xpirence from '../PageComponents/Xpirence'

type WindowState = {
  id: string
  Component: React.ComponentType
  x: number
  y: number
  zIndex: number
  width: number
}

const INITIAL_WINDOWS: WindowState[] = [
  { id: 'aboutme',  Component: Aboutme,   x: 40,  y: 60,  zIndex: 1, width: 520 },
  { id: 'infocard', Component: InfoCard,  x: 80,  y: 120, zIndex: 2, width: 480 },
  { id: 'xpirence', Component: Xpirence,  x: 120, y: 180, zIndex: 3, width: 560 },
  { id: 'skillset', Component: SkillSet,  x: 160, y: 240, zIndex: 4, width: 500 },
  { id: 'projects', Component: Projects,  x: 200, y: 300, zIndex: 5, width: 580 },
  { id: 'blogs',    Component: Blogs,     x: 240, y: 360, zIndex: 6, width: 580 },
]

let globalZ = 10

function FloatingWindow({
  win,
  onFocus,
}: {
  win: WindowState
  onFocus: (id: string) => void
}) {
  const dragging = useRef(false)
  const offset = useRef({ x: 0, y: 0 })

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    dragging.current = true
    offset.current = { x: e.clientX - win.x, y: e.clientY - win.y }
    onFocus(win.id)

    const onMouseMove = (ev: MouseEvent) => {
      if (!dragging.current) return
      const nx = Math.max(0, ev.clientX - offset.current.x)
      const ny = Math.max(0, ev.clientY - offset.current.y)
      win.x = nx
      win.y = ny
      const el = document.getElementById(`win-${win.id}`)
      if (el) { el.style.left = nx + 'px'; el.style.top = ny + 'px' }
    }

    const onMouseUp = (ev: MouseEvent) => {
      dragging.current = false
      win.x = Math.max(0, ev.clientX - offset.current.x)
      win.y = Math.max(0, ev.clientY - offset.current.y)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    e.preventDefault()
  }, [win, onFocus])

  return (
    <div
      id={`win-${win.id}`}
      onMouseDown={onMouseDown}
      style={{
        position: 'absolute',
        left: win.x,
        top: win.y,
        width: win.width,
        zIndex: win.zIndex,
        cursor: 'grab',
      }}
    >
      <win.Component />
    </div>
  )
}

export const HomePage = () => {
  const [windows, setWindows] = useState(INITIAL_WINDOWS)

  const handleFocus = useCallback((id: string) => {
    globalZ++
    setWindows(prev => prev.map(w => w.id === id ? { ...w, zIndex: globalZ } : w))
  }, [])

  return (
    <>
      <div style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: '#f2c4c4',
        backgroundImage: 'radial-gradient(#d98a8a 1px, transparent 1px)',
        backgroundSize: '12px 12px',
        overflow: 'hidden',
      }}>
        {windows.map(win => (
          <FloatingWindow
            key={win.id}
            win={win}
            onFocus={handleFocus}
          />
        ))}
      </div>
      <Footer />
    </>
  )
}