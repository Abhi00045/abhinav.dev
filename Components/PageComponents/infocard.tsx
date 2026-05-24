import React, { useRef, useEffect, useCallback } from 'react'
import Abhi from '../../Assets/Abhi.jpg'
import Image from 'next/image'

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
      area.scrollTop = Math.max(0, Math.min(scrollRange,
        dragStartScrollTop.current + (dy / maxTop) * scrollRange))
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
    area.scrollTop = (clickY / rect.height) * (area.scrollHeight - area.clientHeight)
  }

  return (
    <div style={{
      width: '100%',
      background: '#f0ebe0',
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box',
    }}>
      <div style={{ display: 'flex', flexDirection: 'row', height: 420 }}>

        {/* Scroll area */}
        <div
          ref={scrollAreaRef}
          onScroll={updateThumb}
          style={{
            flex: 1,
            overflowY: 'scroll',
            scrollbarWidth: 'none',
            padding: '18px 20px 20px 20px',
            boxSizing: 'border-box',
          } as React.CSSProperties}
        >
          {/* Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 16,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{
                width: 38, height: 38,
                borderRadius: '50%',
                background: '#c4905a',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 700, fontSize: 13,
                color: '#5a3010',
                border: '2px solid #a09080',
                flexShrink: 0,
                fontFamily: "'VT323', monospace",
                letterSpacing: 1,
              }}>AR</div>
              <span style={{
                fontFamily: "'VT323', monospace",
                fontSize: 18,
                color: '#2a1a00',
                letterSpacing: 1,
              }}>abhinav.rajid</span>
            </div>
            <span style={{
              fontFamily: "'VT323', monospace",
              fontSize: 15,
              color: '#a09080',
              letterSpacing: 1,
            }}>just now</span>
          </div>

          {/* Photo placeholder */}
          <div style={{
            width: '80%',
            // height: 500,
            border: '1.5px solid #b0a090',
            marginBottom: 14,
            overflow: 'hidden',
            background: '#d8cfc0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#8a7a6a',
            fontFamily: "'VT323', monospace",
            fontSize: 15,
            letterSpacing: 1,
            boxSizing: 'border-box',
          }}>
            <Image
                src={Abhi}
                alt="Profile photo"
                priority
              />
           </div>

          {/* Single paragraph */}
          <p style={{
            margin: 0,
            fontFamily: "'Special Elite', 'Courier New', Courier, monospace",
            fontSize: 14,
            color: '#2a1a00',
            lineHeight: 1.85,
            letterSpacing: 0.3,
          }}>
            My name is <strong>Abhinav Reddy Rajidi</strong> a software engineer and
            Software Engineer from Hyderabad building scalable, high-performance
            applications with a passion for great design, speed, and reliability.
            <br />
            <br />
            Graduated from Malla Reddy College of Engineering (2021–2025), four years
            of late nights, hackathons, and debugging sessions that shaped me into the
            engineer I am today. I'm deeply motivated to grow in tech and constantly
            challenge myself with complex, real world problems.
            <br />
            <br /> My goal is simple: build
            things that are fast, responsive, and beautifully designed. Outside the
            editor, you'll find me on the football pitch ⚽, deep in tech rabbit holes,
            or lost somewhere between The Walking Dead and One Piece ☠.
          </p>
        </div>

        {/* Custom scrollbar */}
        <div style={{
          width: 16,
          background: '#d4c5b0',
          borderLeft: '1.5px solid #a09080',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '2px 0',
          flexShrink: 0,
          userSelect: 'none',
        }}>
          <div
            onMouseDown={() => scroll(-1)}
            style={{
              width: 14, height: 14,
              background: '#c8bca8',
              borderTop:    '1.5px solid #fff8f0',
              borderLeft:   '1.5px solid #fff8f0',
              borderRight:  '1.5px solid #7a6a50',
              borderBottom: '1.5px solid #7a6a50',
              fontSize: 8,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer',
              color: '#2a1a00',
            }}
          >▲</div>

          <div
            ref={trackRef}
            onClick={trackClick}
            style={{ flex: 1, width: '100%', position: 'relative', margin: '2px 0' }}
          >
            <div
              ref={thumbRef}
              onMouseDown={handleThumbMouseDown}
              style={{
                width: 12,
                background: '#c8bca8',
                border: '1px solid #7a6a50',
                position: 'absolute',
                left: 2,
                cursor: 'grab',
                height: 60,
              }}
            />
          </div>

          <div
            onMouseDown={() => scroll(1)}
            style={{
              width: 14, height: 14,
              background: '#c8bca8',
              borderTop:    '1.5px solid #fff8f0',
              borderLeft:   '1.5px solid #fff8f0',
              borderRight:  '1.5px solid #7a6a50',
              borderBottom: '1.5px solid #7a6a50',
              fontSize: 8,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer',
              color: '#2a1a00',
            }}
          >▼</div>
        </div>

      </div>
    </div>
  )
}