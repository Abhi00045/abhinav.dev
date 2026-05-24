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
import React, { useState, useRef, useCallback } from 'react'

const mono = "'Courier New', Courier, monospace"

const blogList = [
  {
    id: 1,
    name: "Part 1: Docker with Node.js & Express.js - The Complete Beginner's Guide",
    desc: "A beginner-friendly guide demonstrating how to containerize a Node.js and Express.js application using Docker. Showcases image creation, container management, and workflow automation for consistent app deployment.",
    image: "https://i.pinimg.com/736x/5b/46/6b/5b466b71e1cc4b9cf6ff3361c0e976c3.jpg",
    source: "https://medium.com/@rajidiabhinavreddy/docker-with-node-js-express-js-a-complete-beginners-guide-part-1-d5cd0ae90b7f",
    date: "12 May 2025",
  },
  {
    id: 2,
    name: "Part 2: Docker Volumes, Networks & Multi-Container Apps",
    desc: "Deep dive into Docker Volumes for persistent storage, custom networks for container communication, and orchestrating multi-container setups with Docker Compose for real-world applications.",
    image: "https://i.pinimg.com/736x/5b/46/6b/5b466b71e1cc4b9cf6ff3361c0e976c3.jpg",
    source: "https://medium.com/@rajidiabhinavreddy",
    date: "3 Jun 2025",
  },
]

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

  const handleThumbMouseDown = (e: React.MouseEvent) => {
    dragging.current = true
    dragStartY.current = e.clientY
    dragStartScrollTop.current = scrollAreaRef.current?.scrollTop ?? 0
    e.preventDefault()
    const onMouseMove = (ev: MouseEvent) => {
      if (!dragging.current) return
      const track = trackRef.current
      const area = scrollAreaRef.current
      const thumb = thumbRef.current
      if (!track || !area || !thumb) return
      const trackH = track.getBoundingClientRect().height
      const thumbH = thumb.offsetHeight
      const dy = ev.clientY - dragStartY.current
      const sr = area.scrollHeight - area.clientHeight
      area.scrollTop = Math.max(0, Math.min(sr, dragStartScrollTop.current + (dy / (trackH - thumbH)) * sr))
    }
    const onMouseUp = () => {
      dragging.current = false
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
  }

  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === thumbRef.current) return
    const area = scrollAreaRef.current
    const track = trackRef.current
    if (!area || !track) return
    const rect = track.getBoundingClientRect()
    area.scrollTop = ((e.clientY - rect.top) / rect.height) * (area.scrollHeight - area.clientHeight)
  }

  const startScroll = (dir: number) => {
    scrollAreaRef.current?.scrollBy({ top: dir * 22 })
    scrollTimer.current = setInterval(() => scrollAreaRef.current?.scrollBy({ top: dir * 22 }), 80)
  }
  const stopScroll = () => { if (scrollTimer.current) clearInterval(scrollTimer.current) }

  if (!visible) return null

  const sbBtn: React.CSSProperties = {
    width: 16, height: 16, background: '#c4c0b0', border: '1px solid #888',
    fontSize: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
    flexShrink: 0,
  }

  return (
    <>
      <style>{`
        .blog-row {
          display: flex;
          flex-direction: row;
          gap: 0;
          padding: 12px;
          border-bottom: 1px solid #ddd;
          align-items: flex-start;
          text-decoration: none;
          color: inherit;
          transition: background 0.12s;
        }
        .blog-row:hover {
          background: #ede8d8;
        }
        .blog-row:last-child {
          border-bottom: none;
        }
        .blog-img {
          width: 150px;
          height: 100px;
          object-fit: cover;
          flex-shrink: 0;
          border: 1px solid #bbb;
        }
        .blog-content {
          flex: 1;
          padding-left: 14px;
          display: flex;
          flex-direction: column;
          gap: 5px;
          min-width: 0;
        }
        .blog-title {
          font-family: ${mono};
          font-size: 13px;
          font-weight: 700;
          color: #111;
          line-height: 1.4;
        }
        .blog-desc {
          font-family: ${mono};
          font-size: 11px;
          color: #555;
          line-height: 1.55;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .blog-date {
          font-family: ${mono};
          font-size: 10px;
          color: #999;
        }
        .blog-read-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          margin-top: 4px;
          padding: 3px 10px;
          font-family: ${mono};
          font-size: 11px;
          color: #555;
          background: #e8e4d8;
          border: 1px solid #888;
          cursor: pointer;
          text-decoration: none;
          width: fit-content;
          transition: background 0.1s;
        }
        .blog-read-btn:hover {
          background: #d8d0c0;
          color: #222;
        }
        @media (max-width: 500px) {
          .blog-row {
            flex-direction: column;
          }
          .blog-img {
            width: 100%;
            height: 140px;
          }
          .blog-content {
            padding-left: 0;
            padding-top: 10px;
          }
        }
      `}</style>

      <div style={{
        width: '100%',
        background: '#f5f5dc',
        border: '1.5px solid #555',
        boxShadow: '4px 4px 0 #aaa',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: mono,
      }}>

        {/* Titlebar
        <div style={{
          background: '#f0ede0',
          borderBottom: '1px solid #aaa',
          padding: '5px 10px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexShrink: 0,
        }}>
          <span style={{
            fontFamily: 'Georgia, serif',
            fontWeight: 900,
            fontSize: 15,
            letterSpacing: 2,
            color: '#111',
            textTransform: 'uppercase',
          }}>
            ✍ Writings
          </span>
          <button
            onClick={() => setVisible(false)}
            style={{
              width: 18, height: 16,
              background: '#e8a0a0',
              border: '1px solid #7a0000',
              fontSize: 9,
              cursor: 'pointer',
              fontFamily: mono,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#5a0000',
              fontWeight: 700,
            }}
          >✕</button>
        </div> */}

        {/* Body with custom scrollbar */}
        <div style={{ display: 'flex', flexDirection: 'row', maxHeight: 420 }}>

          {/* Scroll area */}
          <div
            ref={scrollAreaRef}
            onScroll={updateThumb}
            style={{ flex: 1, overflowY: 'scroll', scrollbarWidth: 'none' } as React.CSSProperties}
          >
            {blogList.map((blog) => (
              <a
                key={blog.id}
                href={blog.source}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-row"
              >
                <img src={blog.image} alt={blog.name} className="blog-img" />
                <div className="blog-content">
                  <div className="blog-title">{blog.name}</div>
                  <div className="blog-desc">{blog.desc}</div>
                  <div className="blog-date">{blog.date}</div>
                  <span className="blog-read-btn">🔗 Read Article</span>
                </div>
              </a>
            ))}
          </div>

          {/* Custom scrollbar */}
          <div style={{
            width: 18, background: '#d4d0c0', borderLeft: '1px solid #888',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            padding: '2px 0', flexShrink: 0, userSelect: 'none',
          }}>
            <div style={sbBtn} onMouseDown={() => startScroll(-1)} onMouseUp={stopScroll}>▲</div>
            <div
              ref={trackRef}
              onClick={handleTrackClick}
              style={{ flex: 1, width: '100%', position: 'relative', margin: '2px 0' }}
            >
              <div
                ref={thumbRef}
                onMouseDown={handleThumbMouseDown}
                style={{
                  width: 13, background: '#f0e8a0', border: '1px solid #888',
                  position: 'absolute', left: 2, cursor: 'grab', height: 70, top: 0,
                }}
              />
            </div>
            <div style={sbBtn} onMouseDown={() => startScroll(1)} onMouseUp={stopScroll}>▼</div>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          borderTop: '1px solid #aaa',
          padding: '4px 10px',
          fontSize: 10,
          color: '#888',
          fontFamily: mono,
          background: '#f0ede0',
          display: 'flex',
          justifyContent: 'space-between',
        }}>
          <span>{blogList.length} items</span>
          {/* <span>☼ NEWSROOM</span> */}
        </div>
      </div>
    </>
  )
}