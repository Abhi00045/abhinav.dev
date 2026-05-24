

// import { image, Name, selfRole, shortBio,  } from '@/AbhiData/data'
// import {NameShort} from '@/AbhiData/data'
// import React from 'react'
// import pfp from '@/assets/pfp.jpg'
// import Image from 'next/image'

// function Aboutme() {
//   return (
//     <>
//     <div className="flex flex-row items-start mt-10 mb-10 gap-4  ">
//         <div>
//         <img src="https://s3.amazonaws.com/comicgeeks/characters/avatars/55679.jpg?t=1726374087" alt="" className='w-32 h-32 mx-auto border rounded-2xl border-none' />
//         {/* <Image
//       src="/assets/profile.jpeg"
//       alt="Profile"
//       width={300}
//       height={300}
//       className=mx-auto border rounded-2xl border-none'
//       priority
//     /> */}
//         </div>
//         <div className="flex flex-col items-start">
//             <h1 className="text-5xl text-center mt-2 px-0.5 font-bold">hi, iam {NameShort}</h1>
//             <h2 className="text-xl text-center text-white mt-2 px-0.5">{selfRole}</h2>
//             <p className="text-center text-white mt-1">{shortBio}</p>  
//         </div>
//     </div>
//     </>
//   )
// }

// export default Aboutme

"use client"

import { Name, NameShort, selfRole, shortBio } from '@/AbhiData/data'
import Image from 'next/image'
import pfp from '../../Assets/pfp.jpg'

const highlights = [
  "FULL-STACK DEVELOPER & OPEN-SOURCE BUILDER",
  "TURNING IDEAS INTO PIXEL-PERFECT PRODUCTS",
  "AVAILABLE FOR FREELANCE & COLLABORATIONS",
]

export default function Aboutme() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=VT323&family=Special+Elite&display=swap');

        .abhi-dialog {
          width: 900px;
          max-width: 860px;
          background: #e8ddd0;
          border-top: 2px solid #fff8f0;
          border-left: 2px solid #fff8f0;
          border-right: 3px solid #7a6a50;
          border-bottom: 3px solid #7a6a50;
          box-shadow: 5px 5px 0 #5a4a30;
          font-family: 'Special Elite', 'Courier New', monospace;
          position: relative;
        }
        .abhi-dialog::before {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg, transparent, transparent 3px,
            rgba(100,60,20,.025) 3px, rgba(100,60,20,.025) 6px
          );
          pointer-events: none;
          z-index: 10;
        }
        .abhi-titlebar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 5px 8px;
          background: #e8ddd0;
          border-bottom: 2px solid #7a6a50;
        }
        .abhi-close-btn {
          width: 22px; height: 22px;
          background: #d4c5b0;
          border-top: 2px solid #fff8f0;
          border-left: 2px solid #fff8f0;
          border-right: 2px solid #7a6a50;
          border-bottom: 2px solid #7a6a50;
          display: flex; align-items: center; justify-content: center;
          font-family: 'VT323', monospace;
          font-size: 16px; cursor: pointer; color: #2a1a00;
        }
        .abhi-close-btn:active {
          border-top: 2px solid #7a6a50; border-left: 2px solid #7a6a50;
          border-right: 2px solid #fff8f0; border-bottom: 2px solid #fff8f0;
        }
        .abhi-window-title {
          font-family: 'VT323', monospace;
          font-size: 20px; letter-spacing: 3px;
          color: #2a1a00; text-transform: uppercase;
        }
        .abhi-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        .abhi-left {
          padding: 22px 22px 16px;
          border-right: 2px solid #7a6a50;
          display: flex; flex-direction: column; gap: 14px;
        }
        .abhi-bio-text { font-size: 14.5px; line-height: 1.65; color: #1a0a00; }
        .abhi-bio-text p + p { margin-top: 10px; }
        .abhi-highlights {
          display: flex; flex-direction: column;
          border-top: 1px solid #7a6a50; margin-top: 4px;
        }
        .abhi-highlight-row {
          display: flex; align-items: flex-start; gap: 8px;
          padding: 6px 0; border-bottom: 1px solid #9a8a70;
          font-family: 'VT323', monospace; font-size: 15px;
          color: #2a1a00; font-weight: bold; line-height: 1.2;
        }
        .abhi-cta-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 7px 16px; background: #d4c5b0;
          border-top: 2px solid #fff8f0; border-left: 2px solid #fff8f0;
          border-right: 2px solid #7a6a50; border-bottom: 2px solid #7a6a50;
          font-family: 'VT323', monospace; font-size: 17px;
          letter-spacing: 1px; color: #2a1a00;
          cursor: pointer; text-decoration: none;
          width: fit-content; margin-top: 6px; border-radius: 0;
        }
        .abhi-cta-btn:active {
          border-top: 2px solid #7a6a50; border-left: 2px solid #7a6a50;
          border-right: 2px solid #fff8f0; border-bottom: 2px solid #fff8f0;
        }
        .abhi-right {
          position: relative; min-height: 420px;
          overflow: hidden; background: #1a1a2e;
        }
        .abhi-pfp {
          width: 100%; height: 100%;
          object-fit: cover; object-position: top center;
        }
        .abhi-bottombar {
          display: flex; justify-content: flex-end;
          gap: 3px; padding: 6px 8px;
          border-top: 2px solid #7a6a50; background: #e8ddd0;
        }
        .abhi-arrow-btn {
          width: 28px; height: 26px; background: #d4c5b0;
          border-top: 2px solid #fff8f0; border-left: 2px solid #fff8f0;
          border-right: 2px solid #7a6a50; border-bottom: 2px solid #7a6a50;
          display: flex; align-items: center; justify-content: center;
          font-family: 'VT323', monospace; font-size: 16px;
          cursor: pointer; color: #2a1a00; border-radius: 0;
        }
        .abhi-arrow-btn:active {
          border-top: 2px solid #7a6a50; border-left: 2px solid #7a6a50;
          border-right: 2px solid #fff8f0; border-bottom: 2px solid #fff8f0;
        }
        @media (max-width: 640px) {
          .abhi-body { grid-template-columns: 1fr; }
          .abhi-right { min-height: 260px; border-top: 2px solid #7a6a50; }
        }
      `}</style>

      <section id="aboutme" className="abhi-about-wrapper">
        <div className="abhi-dialog">
          {/* <div className="abhi-titlebar">
            <button className="abhi-close-btn">✕</button>
            <span className="abhi-window-title">{NameShort} &nbsp;/&nbsp; ABOUT</span>
          </div> */}
          <div className="abhi-body">
            <div className="abhi-left">
              <div className="abhi-bio-text">
                <p>Hey, I am <strong>{NameShort}</strong> a passionate{" "}
                  <strong>{selfRole}</strong> obsessed with shipping fast,
                  designing clean, and learning constantly.</p>
                <p>{shortBio}</p>
                <p>Whether it is a weekend side-project or a production-grade
                  app, I bring the same energy: thoughtful architecture,
                  pixel-perfect UI, and coffee-fuelled curiosity.</p>
              </div>
              {/* <div className="abhi-highlights">
                {highlights.map((h, i) => (
                  <div className="abhi-highlight-row" key={i}>
                    <span>🌴</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div> */}
              <a href="https://github.com/Abhi00045"
                target="_blank"
                rel="noopener noreferrer"
                className="abhi-cta-btn">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="1" y="1" width="10" height="10" rx="1"
                    stroke="#2a1a00" strokeWidth="1.5" fill="none"/>
                  <path d="M8 1h5v5" stroke="#2a1a00" strokeWidth="1.5"/>
                  <path d="M6 8L13 1" stroke="#2a1a00" strokeWidth="1.5"/>
                </svg>
                View My Work
              </a>
            </div>
            <div className="abhi-right">
              <Image
                src={pfp}
                alt="Profile photo"
                fill
                style={{ objectFit: 'cover', objectPosition: 'top center' }}
                priority
              />
            </div>
          </div>
          <div className="abhi-bottombar">
            <button className="abhi-arrow-btn">◀</button>
            <button className="abhi-arrow-btn">▶</button>
          </div>
        </div>
      </section>
    </>
  )
}