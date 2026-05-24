

// import React from 'react'

// export function InfoCard() {
//   return (<>
//     <div className='flex flex-col gap-1.5 p-5 pl-7 m-3.5  h-full w-full bg-white-900 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-7 border border-gray-50 inset-0bg-white/90 dark:bg-black/15'>
//       <h2 className=" text-2xl font-bold mb-6 ">
//           About me
//         </h2>
//         <p>My name is Abhinav Reddy Rajid, and I’m a software engineer and full-stack developer from Hyderabad. I build scalable, high-performance applications and platforms with a passion for great design, speed, and reliability.</p>
//     <p>
//         Completed my Graduation in Malla-reddy collage of engineering (2021-2025)
// I specialize in the MERN stack and work extensively with modern technologies like Next.js, Clerk, google Cloud.
//     </p>

// <p>I’m deeply motivated to get into Tech and constantly challenge myself with complex projects. My goal is to build Responsive Applications that are both functional and beautifully designed.</p>

// <p>Outside of coding, I love playing football ⚽, diving into the world of tech innovation, and occasionally watching shows like The Walking Dead and One piece ☠. 
//     </p>
//     </div>
//     </>
//   )
// }
 import React, { useRef, useEffect, useCallback } from 'react'

export function InfoCard() {
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const thumbRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)
  const dragStartY = useRef(0)
  const dragStartScrollTop = useRef(0)

  const updateThumb = useCallback(() => {
    const area = scrollAreaRef.current
    const thumb = thumbRef.current
    const track = trackRef.current
    if (!area || !thumb || !track) return
    const trackH = track.getBoundingClientRect().height
    const ratio = area.clientHeight / area.scrollHeight
    const thumbH = Math.max(20, Math.floor(trackH * ratio))
    const scrollRatio = area.scrollTop / (area.scrollHeight - area.clientHeight)
    const maxTop = trackH - thumbH
    thumb.style.height = thumbH + 'px'
    thumb.style.top = Math.floor(scrollRatio * maxTop) + 'px'
  }, [])

  useEffect(() => {
    updateThumb()
    window.addEventListener('resize', updateThumb)
    return () => window.removeEventListener('resize', updateThumb)
  }, [updateThumb])

  const scroll = (dir: number) => scrollAreaRef.current?.scrollBy({ top: dir * 60 })

  const handleThumbMouseDown = (e: React.MouseEvent) => {
    dragging.current = true
    dragStartY.current = e.clientY
    dragStartScrollTop.current = scrollAreaRef.current?.scrollTop ?? 0
    e.preventDefault()
  }

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
    const onMouseUp = () => { dragging.current = false }
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
    }
  }, [])

  const trackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === thumbRef.current) return
    const area = scrollAreaRef.current
    const track = trackRef.current
    if (!area || !track) return
    const rect = track.getBoundingClientRect()
    const clickY = e.clientY - rect.top
    const trackH = rect.height
    area.scrollTop = (clickY / trackH) * (area.scrollHeight - area.clientHeight)
  }

  const s: Record<string, React.CSSProperties> = {
    // outer: { display:'flex', justifyContent:'center', padding:'32px 16px', background:'#f5c6c6', fontFamily:'Arial,Helvetica,sans-serif' },
    window: { width:430, background:'#fff', border:'1.5px solid #555', boxShadow:'4px 4px 0 #aaa', display:'flex', flexDirection:'column' },
    titlebar: { background:'#e8e4d8', borderBottom:'1px solid #aaa', padding:'4px 8px', display:'flex', justifyContent:'space-between', alignItems:'center', flexShrink:0 },
    winbtn: { width:14, height:14, border:'1px solid #888', background:'#d4d0c0', fontSize:9, display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer' },
    body: { display:'flex', flexDirection:'row', height:520 },
    scrollArea: { flex:1, overflowY:'scroll', scrollbarWidth:'none', padding:'10px 10px 16px 10px' } as React.CSSProperties,
    scrollbar: { width:16, background:'#d4d0c0', borderLeft:'1px solid #888', display:'flex', flexDirection:'column', alignItems:'center', padding:'2px 0', flexShrink:0, userSelect:'none' },
    sbBtn: { width:14, height:14, background:'#c4c0b0', border:'1px solid #888', fontSize:8, display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer' },
    sbTrack: { flex:1, width:'100%', position:'relative', margin:'2px 0' },
    sbThumb: { width:12, background:'#f0ece0', border:'1px solid #888', position:'absolute', left:2, cursor:'grab', borderRadius:0 },
    avatar: { width:36, height:36, borderRadius:'50%', background:'#c4905a', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:700, fontSize:13, color:'#5a3010', border:'2px solid #999', flexShrink:0 },
    photo: { width:'100%', height:260, border:'1px solid #aaa', marginBottom:8, overflow:'hidden', background:'#b8c8d8', display:'flex', alignItems:'center', justifyContent:'center', color:'#6a8898', fontSize:13 },
    sectionTitle: { fontSize:12, fontWeight:700, color:'#111', margin:'14px 0 4px', borderBottom:'1px solid #ddd', paddingBottom:4 },
    para: { fontSize:12, color:'#333', lineHeight:1.65, marginBottom:10 },
    divider: { border:'none', borderTop:'1px solid #e0ddd0', margin:'12px 0' },
  }

  return (
    <div style={s.outer}>
      <div style={s.window}>
        <div style={s.titlebar}>
          <div style={{ display:'flex', gap:6 }}>
            <div style={s.winbtn}>✕</div>
            <div style={s.winbtn}>&#128100;</div>
          </div>
          <span style={{ fontFamily:'Georgia,serif', fontWeight:900, fontSize:15, letterSpacing:1 }}>INSTAGRAM</span>
        </div>
        <div style={s.body}>
          <div ref={scrollAreaRef} style={s.scrollArea} onScroll={updateThumb}>

            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:8 }}>
              <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                <div style={s.avatar}>AR</div>
                <span style={{ fontWeight:700, fontSize:13 }}>abhinav.rajid</span>
              </div>
              <span style={{ fontSize:11, color:'#888' }}>just now</span>
            </div>

            <div style={s.photo}>[ replace with your photo ]</div>

            <div style={{ display:'flex', gap:16, marginBottom:8, fontSize:12, color:'#444' }}>
              <span>♡ 2,394 likes</span>
              <span>◯ 976 comments</span>
            </div>

            <p style={s.para}><strong>abhinav.rajid</strong> Full-stack dev from Hyderabad — (1) builds scalable apps with MERN &amp; Next.js, (2) obsessed with great design and speed, (3) ships things that actually work... then you, my friend, have found what they call a <em>keeper.</em></p>
            <hr style={s.divider} />

            <div style={s.sectionTitle}>About Me</div>
            <p style={s.para}>My name is Abhinav Reddy Rajid, and I'm a software engineer and full-stack developer from Hyderabad. I build scalable, high-performance applications and platforms with a passion for great design, speed, and reliability.</p>

            <div style={s.sectionTitle}>Education</div>
            <p style={s.para}>Completed my graduation at Malla Reddy College of Engineering (2021–2025). Four years of late-night labs, hackathons, and debugging sessions that shaped my thinking as an engineer.</p>

            <div style={s.sectionTitle}>Tech Stack</div>
            <p style={s.para}>I specialize in the MERN stack and work extensively with modern technologies like Next.js, Clerk, and Google Cloud. Always exploring tools that make products faster, more reliable, and easier to maintain.</p>

            <div style={s.sectionTitle}>What Drives Me</div>
            <p style={s.para}>I'm deeply motivated to grow in tech and constantly challenge myself with complex projects. My goal is to build responsive, production-grade applications that are both functional and beautifully designed.</p>

            <div style={s.sectionTitle}>Beyond Code</div>
            <p style={s.para}>Outside of coding, I love playing football ⚽, diving into tech innovation, and binge-watching The Walking Dead and One Piece ☠. Stepping away always brings me back to the keyboard with fresh energy.</p>

            <hr style={s.divider} />

            <div style={s.sectionTitle}>Currently Building</div>
            <p style={s.para}>Right now I'm deep into a full-stack SaaS platform with real-time collaboration, Next.js 14 on the frontend, serverless Google Cloud Functions on the backend, and Clerk handling auth. Every bug fixed feels like a small victory.</p>

            <div style={s.sectionTitle}>Philosophy</div>
            <p style={s.para}>Code is only as good as the problem it solves. I balance craftsmanship with pragmatism — taking pride in the details without letting perfection kill momentum. Ship, iterate, improve.</p>

            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:14, paddingTop:8, borderTop:'1px solid #ddd' }}>
              <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                <div style={s.avatar}>AR</div>
                <span style={{ fontWeight:700, fontSize:13 }}>abhinav.rajid</span>
              </div>
              <span style={{ fontSize:11, color:'#888' }}>just now</span>
            </div>
          </div>

          <div style={s.scrollbar}>
            <div style={s.sbBtn} onMouseDown={() => scroll(-1)}>▲</div>
            <div ref={trackRef} style={s.sbTrack} onClick={trackClick}>
              <div ref={thumbRef} style={{ ...s.sbThumb, height:60 }} onMouseDown={handleThumbMouseDown} />
            </div>
            <div style={s.sbBtn} onMouseDown={() => scroll(1)}>▼</div>
          </div>
        </div>
      </div>
    </div>
  )
}