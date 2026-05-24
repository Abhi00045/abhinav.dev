// 'user-client'
// import React from 'react'


// function Xpirence() {

//     const ExpList= [
//         {
//             id:1,
//             Company:"Geekster",
//             role:"Full Stack Developer- Intern",
//             desc:"Led the development of a high-performance, server-rendered web application using React.js, TypeScript, and RESTful APIs, integrating session storage for chat history and feedback systems to boost interaction accuracy by 15%, while optimizing cross-platform UI with Tailwind CSS, modular components, and MongoDB enhancing scalability, user engagement, and team efficiency through agile collaboration.",
//             from:"Nov. 2024",
//             to:"Jan. 2025"
//         }
//     ]
//   return (
//     <>
//      <section id="Exp" className="p-5 pl-7 m-3.5 bg-white/90 dark:bg-black/15  h-full w-full bg-white-900 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-7 border border-gray-50 inset-0 ">
//       <div className="">
//         <h2 className="text-2xl font-bold mb-6 text-black dark:text-white transition-colors duration-300">
//           Experience
//         </h2>
//           <div className="space-y-2 flex flex-row flex-wrap gap-1.5">
//           {ExpList.map((category, Index) => ( 
//             <div key={Index} className="space-y-3 ">              
//               <div className="flex flex-wrap flex-col items-start gap-3 ">
//                 <h3 className="text-xl font-extralight text-black dark:text-white transition-colors duration-300">
//                 {category.role}
//               </h3>
//               <div className='flex flex-row justify-between gap-3.5 items-center'>
//                 <pre className="text-lg font-light text-black dark:text-white transition-colors duration-300">
//                 {category.Company}
//               </pre>
//               <pre>{category.from} - {category.to}</pre>
//               </div>
//               <p>
//                 {category.desc}
//               </p>
//                   </div>
//               </div>
//           ))}
//         </div>
//       </div>
//     </section>       
//     </>
//   )
// }

// export default Xpirence

'use client'
import React, { useRef, useEffect, useCallback } from 'react'

const ExpList = [
  {
    id: 1,
    Company: 'Geekster',
    role: 'Full Stack Developer — Intern',
    desc: 'Led the development of a high-performance, server-rendered web application using React.js, TypeScript, and RESTful APIs. Integrated session storage for chat history and feedback systems to boost interaction accuracy by 15%. Optimized cross-platform UI with Tailwind CSS, modular components, and MongoDB — enhancing scalability, user engagement, and team efficiency through agile collaboration.',
    from: 'Nov. 2024',
    fromShort: { month: 'Nov', year: '2024' },
    to: 'Jan. 2025',
    toShort: { month: 'Jan', year: '2025' },
  },
  {
    id: 2,
    Company: 'Independent Projects',
    role: 'Frontend Developer — Freelance',
    desc: 'Designed and shipped multiple client-facing web apps using Next.js and Tailwind CSS. Focused on performance optimization, responsive layouts, and clean component architecture. Delivered projects on tight deadlines while maintaining code quality and clear client communication throughout.',
    fromShort: { month: 'Jun', year: '2024' },
    toShort: { month: 'Oct', year: '2024' },
  },
  {
    id: 3,
    Company: 'Various GitHub Projects',
    role: 'Open Source Contributor',
    desc: 'Contributed to several open-source repositories focused on developer tooling and UI component libraries. Submitted pull requests for bug fixes, documentation improvements, and new feature implementations. Gained deep experience in code review workflows and collaborative engineering practices.',
    fromShort: { month: 'Jan', year: '2024' },
    toShort: { month: 'May', year: '2024' },
  },
  {
    id: 4,
    Company: 'Malla Reddy College of Engineering',
    role: 'Backend Developer — Academic Project',
    desc: 'Built a RESTful API backend using Node.js and Express for a college-level project management system. Implemented JWT-based authentication, role-based access control, and integrated MongoDB for persistent storage. Deployed on Google Cloud with CI/CD pipelines configured via GitHub Actions.',
    fromShort: { month: 'Aug', year: '2023' },
    toShort: { month: 'Dec', year: '2023' },
  },
]

export default function Xperience() {
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const thumbRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)
  const dragStartY = useRef(0)
  const dragStartScrollTop = useRef(0)
  const scrollTimer = useRef<ReturnType<typeof setInterval> | null>(null)

  const updateThumb = useCallback(() => {
    const area = scrollAreaRef.current
    const thumb = thumbRef.current
    const track = trackRef.current
    if (!area || !thumb || !track) return
    const trackH = track.getBoundingClientRect().height
    const ratio = area.clientHeight / area.scrollHeight
    const thumbH = Math.max(20, Math.floor(trackH * ratio))
    const maxScroll = area.scrollHeight - area.clientHeight
    const scrollRatio = maxScroll > 0 ? area.scrollTop / maxScroll : 0
    const maxTop = trackH - thumbH
    thumb.style.height = thumbH + 'px'
    thumb.style.top = Math.floor(scrollRatio * maxTop) + 'px'
  }, [])

  useEffect(() => {
    setTimeout(updateThumb, 100)
    window.addEventListener('resize', updateThumb)
    return () => window.removeEventListener('resize', updateThumb)
  }, [updateThumb])

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!dragging.current) return
      const area = scrollAreaRef.current
      const thumb = thumbRef.current
      const track = trackRef.current
      if (!area || !thumb || !track) return
      const trackH = track.getBoundingClientRect().height
      const thumbH = thumb.offsetHeight
      const dy = e.clientY - dragStartY.current
      const maxTop = trackH - thumbH
      const scrollRange = area.scrollHeight - area.clientHeight
      area.scrollTop = Math.max(0, Math.min(scrollRange, dragStartScrollTop.current + (dy / maxTop) * scrollRange))
    }
    const onMouseUp = () => {
      dragging.current = false
      if (scrollTimer.current) clearInterval(scrollTimer.current)
    }
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
    }
  }, [])

  const startScroll = (dir: number) => {
    scrollAreaRef.current?.scrollBy({ top: dir * 20 })
    scrollTimer.current = setInterval(() => scrollAreaRef.current?.scrollBy({ top: dir * 20 }), 80)
  }
  const stopScroll = () => { if (scrollTimer.current) clearInterval(scrollTimer.current) }

  const handleThumbMouseDown = (e: React.MouseEvent) => {
    dragging.current = true
    dragStartY.current = e.clientY
    dragStartScrollTop.current = scrollAreaRef.current?.scrollTop ?? 0
    e.preventDefault()
  }

  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === thumbRef.current) return
    const area = scrollAreaRef.current
    const track = trackRef.current
    if (!area || !track) return
    const rect = track.getBoundingClientRect()
    area.scrollTop = ((e.clientY - rect.top) / rect.height) * (area.scrollHeight - area.clientHeight)
  }

  const mono = "'Courier New', Courier, monospace"

  const DateBox = ({ from, to }: { from: { month: string; year: string }; to: { month: string; year: string } }) => (
    <div style={{
      flexShrink: 0, border: '1.5px solid #555', padding: '4px 6px', textAlign: 'center',
      background: '#f0ede0', minWidth: 44, fontFamily: mono,
    }}>
      <div style={{ fontWeight: 700, fontSize: 10, color: '#333' }}>{from.month}</div>
      <div style={{ fontSize: 9, color: '#555' }}>{from.year}</div>
      <div style={{ fontSize: 8, color: '#888', margin: '1px 0' }}>to</div>
      <div style={{ fontWeight: 700, fontSize: 10, color: '#333' }}>{to.month}</div>
      <div style={{ fontSize: 9, color: '#555' }}>{to.year}</div>
    </div>
  )

  return (
    // <div style={{ display: 'flex', justifyContent: 'center', padding: '32px 16px', background: '#f5c6c6', fontFamily: mono }}>
      <div style={{ width: 580, background: '#f5f5dc', border: '1.5px solid #555', boxShadow: '4px 4px 0 #aaa', display: 'flex', flexDirection: 'column' }}>

        {/* Titlebar
        <div style={{ background: '#e8e4d8', borderBottom: '1px solid #aaa', padding: '3px 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
          <div style={{ width: 14, height: 14, border: '1px solid #888', background: '#d4d0c0', fontSize: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>✕</div>
          <span style={{ fontSize: 11, letterSpacing: 1, color: '#333', fontWeight: 700 }}>EXPERIENCE</span>
          <div style={{ width: 14 }} />
        </div> */}

        {/* Body */}
        <div style={{ display: 'flex', flexDirection: 'row', height: 420 }}>

          {/* Scroll area */}
          <div
            ref={scrollAreaRef}
            onScroll={updateThumb}
            style={{ flex: 1, overflowY: 'scroll', scrollbarWidth: 'none', padding: '12px 14px 16px 14px' } as React.CSSProperties}
          >
            {ExpList.map((item, i) => (
              <div key={item.id} style={{
                display: 'flex', flexDirection: 'row', gap: 12,
                paddingBottom: 16, marginBottom: 16,
                borderBottom: i < ExpList.length - 1 ? '1px dashed #bbb' : 'none',
              }}>
                <DateBox from={item.fromShort!} to={item.toShort!} />
                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: 700, fontSize: 13, color: '#111', margin: '0 0 3px', lineHeight: 1.4 }}>{item.role}</p>
                  <p style={{ fontSize: 12, color: '#555', margin: '0 0 6px', fontStyle: 'italic' }}>{item.Company}</p>
                  <p style={{ fontSize: 11.5, color: '#333', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Custom scrollbar */}
          <div style={{ width: 16, background: '#d4d0c0', borderLeft: '1px solid #888', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2px 0', flexShrink: 0, userSelect: 'none' }}>
            <div
              onMouseDown={() => startScroll(-1)}
              onMouseUp={stopScroll}
              style={{ width: 14, height: 14, background: '#c4c0b0', border: '1px solid #888', fontSize: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
            >▲</div>
            <div ref={trackRef} onClick={handleTrackClick} style={{ flex: 1, width: '100%', position: 'relative', margin: '2px 0' }}>
              <div
                ref={thumbRef}
                onMouseDown={handleThumbMouseDown}
                style={{ width: 12, background: '#f0ece0', border: '1px solid #888', position: 'absolute', left: 2, cursor: 'grab', height: 60, top: 0 }}
              />
            </div>
            <div
              onMouseDown={() => startScroll(1)}
              onMouseUp={stopScroll}
              style={{ width: 14, height: 14, background: '#c4c0b0', border: '1px solid #888', fontSize: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
            >▼</div>
          </div>

        </div>
      </div>
    // </div>
  )
}