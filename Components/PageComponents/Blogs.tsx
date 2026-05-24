// 'use-client'

// export  function Blogs(){

//     const blogList =[
//         {
//             Title:"Part 1: Docker with Node.js & Express.js - The Complete Beginner's Guide",
//             desc:"A beginner-friendly guide demonstrating how to containerize a Node.js and Express.js application using Docker. Showcases image creation, container management, and workflow automation for consistent app deployment.",
//             image:"https://i.pinimg.com/736x/5b/46/6b/5b466b71e1cc4b9cf6ff3361c0e976c3.jpg",
//             link:"https://medium.com/@rajidiabhinavreddy/docker-with-node-js-express-js-a-complete-beginners-guide-part-1-d5cd0ae90b7f"
//         },
//     ]

//     return(
//     <>
//     <div className="p-3 m-2">
//   <h1 className="text-3xl font-bold mb-6 text-black dark:text-white transition-colors duration-300">
//     Writings
//   </h1>

//   <div id="main-section" className="flex flex-col gap-6 w-full">
//     {blogList.map((blog, index) => (
//       <a
//         key={index}
//         href={blog.link || "#"}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="flex flex-col md:flex-row items-center md:items-start justify-between gap-4 p-4 rounded-2xl bg-white/90 dark:bg-black/15 backdrop-blur-md border border-gray-200 dark:border-gray-700 transition-transform duration-300 hover:scale-[1.02] hover:border-white"
//       >
//         {/* Left Image */}
//         <div className="flex-shrink-0">
//           <img
//             src={blog.image}
//             alt={blog.Title}
//             className="w-64 h-40 md:w-72 md:h-44 object-cover rounded-2xl shadow-md"
//           />
//         </div>

//         {/* Right Content */}
//         <div className="flex flex-col gap-3 w-full md:w-2/3 text-center md:text-left">
//           <h2 className="font-semibold text-xl text-blue-400">{blog.Title}</h2>
//           <p className="text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300">
//             {blog.desc}
//           </p>
//         </div>
//       </a>
//     ))}
//   </div>
// </div>

//     </>
//     )
// }

'use client'
import React, { useRef, useEffect, useCallback, useState } from 'react'

export const projectList = [
  {
            id: 4,
            name:"Part 1: Docker with Node.js & Express.js - The Complete Beginner's Guide",
            desc:"A beginner-friendly guide demonstrating how to containerize a Node.js and Express.js application using Docker. Showcases image creation, container management, and workflow automation for consistent app deployment.",
            image:"https://i.pinimg.com/736x/5b/46/6b/5b466b71e1cc4b9cf6ff3361c0e976c3.jpg",
            source:"https://medium.com/@rajidiabhinavreddy/docker-with-node-js-express-js-a-complete-beginners-guide-part-1-d5cd0ae90b7f"
        },
//         id: 4,
//     image: 'https://i.pinimg.com/736x/f6/7f/00/f67f00b4e4419e56e2d46d0f4d5d00ac.jpg',
//     name: 'AfterHours — Personal Journal Book',
//     desc: 'A full-stack personal journal platform built with Next.js and Supabase. Enables users to securely log daily entries, manage past reflections, and maintain a private digital diary with real-time cloud sync and OAuth authentication.',
//     source: 'https://github.com/Abhi00045/Afterhours.git',
//     liveLink: 'https://afterhours-loukkdf8v-abhi00045s-projects.vercel.app/',
]

const mono = "'Courier New', Courier, monospace"

export default function Blogs() {
  const [visible, setVisible] = useState(true)
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
    const sr = maxScroll > 0 ? area.scrollTop / maxScroll : 0
    thumb.style.height = thumbH + 'px'
    thumb.style.top = Math.floor(sr * (trackH - thumbH)) + 'px'
  }, [])

  useEffect(() => {
    setTimeout(updateThumb, 150)
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
      const sr = area.scrollHeight - area.clientHeight
      area.scrollTop = Math.max(0, Math.min(sr, dragStartScrollTop.current + (dy / (trackH - thumbH)) * sr))
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
    scrollAreaRef.current?.scrollBy({ top: dir * 22 })
    scrollTimer.current = setInterval(() => scrollAreaRef.current?.scrollBy({ top: dir * 22 }), 80)
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

  if (!visible) return null

  const s = {
    btn: {
      padding: '3px 8px', border: '1px solid #888', background: '#e8e4d8',
      fontSize: 11, cursor: 'pointer', fontFamily: mono, display: 'flex', alignItems: 'center', gap: 5,
    } as React.CSSProperties,
    sbBtn: {
      width: 16, height: 16, background: '#c4c0b0', border: '1px solid #888',
      fontSize: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
    } as React.CSSProperties,
  }

  return (
    // <div style={{ display: 'flex', justifyContent: 'center', padding: '32px 16px', background: '#f5c6c6', fontFamily: mono }}>
      <div style={{ width: 580, background: '#f5f5dc', border: '1.5px solid #555', boxShadow: '4px 4px 0 #aaa', display: 'flex', flexDirection: 'column' }}>

        {/* Titlebar */}
        <div style={{ background: '#f0ede0', borderBottom: '1px solid #aaa', padding: '5px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <button style={s.btn} onClick={() => setVisible(false)}>✕</button>
            {/* <button style={s.btn}>🔔 Get the newsletter</button> */}
          </div>
          <span style={{ fontFamily: 'Georgia, serif', fontWeight: 900, fontSize: 16, letterSpacing: 2, color: '#111' }}>Writings</span>
        </div>

        {/* Body */}
        <div style={{ display: 'flex', flexDirection: 'row', height: 460 }}>

          <div
            ref={scrollAreaRef}
            onScroll={updateThumb}
            style={{ flex: 1, overflowY: 'scroll', scrollbarWidth: 'none' } as React.CSSProperties}
          >
            {projectList.map((project, i) => (
              <div key={project.id} style={{
                display: 'flex', flexDirection: 'row', gap: 0, padding: '14px 14px',
                borderBottom: i < projectList.length - 1 ? '1px solid #ccc' : 'none',
                alignItems: 'flex-start',
              }}>
                <img
                  src={project.image}
                  alt={project.name}
                  style={{ width: 160, height: 105, objectFit: 'cover', flexShrink: 0, border: '1px solid #aaa' }}
                />
                <div style={{ flex: 1, paddingLeft: 16, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#111', lineHeight: 1.35, fontFamily: mono }}>{project.name}</div>
                  <div style={{ fontSize: 11.5, color: '#444', lineHeight: 1.6, fontFamily: mono }}>{project.desc}</div>
                  <div style={{ display: 'flex', gap: 10, marginTop: 4 }}>
                    {project.source && (
                      <a href={project.source} target="_blank" rel="noopener noreferrer"
                        style={{ fontSize: 11, color: '#555', textDecoration: 'none', border: '1px solid #888', padding: '2px 7px', background: '#e8e4d8', fontFamily: mono }}>
                        &#128279; GitHub
                      </a>
                    )}
                    {/* {project.liveLink?.trim() && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                        style={{ fontSize: 11, color: '#555', textDecoration: 'none', border: '1px solid #888', padding: '2px 7px', background: '#e8e4d8', fontFamily: mono }}>
                        &#10140; Live
                      </a>
                    )} */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Custom scrollbar */}
          <div style={{ width: 18, background: '#d4d0c0', borderLeft: '1px solid #888', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2px 0', flexShrink: 0, userSelect: 'none' }}>
            <div style={s.sbBtn} onMouseDown={() => startScroll(-1)} onMouseUp={stopScroll}>▲</div>
            <div ref={trackRef} onClick={handleTrackClick} style={{ flex: 1, width: '100%', position: 'relative', margin: '2px 0' }}>
              <div
                ref={thumbRef}
                onMouseDown={handleThumbMouseDown}
                style={{ width: 13, background: '#f0e8a0', border: '1px solid #888', position: 'absolute', left: 2, cursor: 'grab', height: 70, top: 0 }}
              />
            </div>
            <div style={s.sbBtn} onMouseDown={() => startScroll(1)} onMouseUp={stopScroll}>▼</div>
          </div>

        </div>

        {/* Footer */}
        <div style={{ borderTop: '1px solid #aaa', padding: '4px 10px', fontSize: 11, color: '#666', fontFamily: mono, background: '#f0ede0' }}>
          {projectList.length} items
        </div>
      </div>
    // </div>
  )
}
