// import { IoLogoReact } from "react-icons/io5";
// import { RiNextjsLine } from "react-icons/ri";
// import { TbBrandDjango } from "react-icons/tb";
// import { RiJavascriptLine } from "react-icons/ri";
// import { TbBrandTypescript } from "react-icons/tb";
// import { RiTailwindCssFill } from "react-icons/ri";
// import { SiShadcnui } from "react-icons/si";
// import { TbBrandFramerMotion } from "react-icons/tb";
// import { SiGreensock } from "react-icons/si";
// import { IoLogoNodejs } from "react-icons/io";
// import { SiExpress } from "react-icons/si";
// import { DiMongodb } from "react-icons/di";
// import { GrGithub } from "react-icons/gr";
// import { AiOutlinePython } from "react-icons/ai";
// import { SiPostman } from "react-icons/si";
// import { FaJava } from "react-icons/fa6";
// import { DiDocker } from "react-icons/di";
// import { FaFigma } from "react-icons/fa6";

// const SkillSet = () => {

//   const Skills = [
//   { 
//     id: 1, 
//     icon: <IoLogoReact />, 
//     text: "ReactJs" 
//   },
//   { 
//     id: 2,
//     icon: <RiNextjsLine /> ,
//     text: "NextJs" 
//   },
//   { 
//     id: 3,
//     icon: <TbBrandDjango />, 
//     text: "Django" 
//   },
//   { 
//     id: 4, 
//     icon: <RiJavascriptLine />, 
//     text: "JavaScript" 
//   },
//   { 
//     id: 5, 
//     icon: <TbBrandTypescript />, 
//     text: "TypeScript" 
//   },
//   { 
//     id: 6, 
//     icon: <RiTailwindCssFill />, 
//     text: "Tailwind" 
//   },
// //   { id: 7, icon: RiBearSmileLine, text: "Zustand" },
// //   { id: 8, icon: SiReactquery, text: "Tanstack Query" },
//   {
//      id: 9,
//     icon: <SiShadcnui />, 
//     text: "shadcn" 
//     },
//   { 
//     id: 10, 
//     icon: <TbBrandFramerMotion />, 
//     text: "Motion" 
//   },
//   { 
//     id: 11, 
//     icon: <SiGreensock />, 
//     text: "GSAP" 
//   },
//   { 
//     id: 12, 
//     icon: <IoLogoNodejs />, 
//     text: "NodeJS" 
//   },
//   { 
//     id: 13, 
//     icon: <SiExpress />, 
//     text: "ExpressJS" 
//   },
//   // { id: 14, icon: BiLogoPostgresql, text: "PostgreSQL" },
//   { 
//     id: 15, 
//     icon: <DiMongodb />, 
//     text: "MongoDB" 
//   },
// //   { id: 16, icon: SiRedis, text: "Redis" },
//   // { id: 17, icon: SiPrisma, text: "Prisma" },
//   { id: 18, icon: <SiPostman />, text: "Postman" },
//   // { id: 19, icon: FaGitAlt, text: "Git" },
//   { id: 20, icon: <GrGithub />, text: "GitHub" },
//   { id: 21, icon: <AiOutlinePython />, text: "Python" },
//   { id: 22, icon: <FaJava />, text: "Java" },
// //   { id: 23, icon: TbHexagonLetterC, text: "C" },
// //   { id: 24, icon: TbBrandCpp, text: "C++" },
//   // { id: 25, icon: BsFiletypeSql, text: "SQL" },
//   { id: 26, icon: <DiDocker />, text: "Docker" },
//   // { id: 27, icon: VscTerminalLinux, text: "Linux" },
//   // { id: 28, icon: SiVercel, text: "Vercel" },
//   { id: 29, icon: <FaFigma />, text: "Figma" },
// ]
  
//   return (
//      <section id="skills" className="p-5 pl-7 m-3.5 bg-white/90 dark:bg-black/15  h-full w-full bg-white-900 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-7 border border-gray-300 inset-0 ">
//       <div className="">
//         <h2 className="text-2xl font-bold mb-6 text-black dark:text-white transition-colors duration-300">
//           Skills
//         </h2>
//           <div className="space-y-2 flex flex-row flex-wrap gap-2">
//           {Skills.map((category, Index) => ( 
//             <div key={Index} className="space-y-3 ">              
//               <div className="flex flex-wrap flex-row items-center gap-3  border border-gray-200 dark:border-white/19 p-3 rounded-lg bg-white dark:bg-transparent transition-colors duration-300 hover:bg-gray-50 dark:hover:bg-white/10 w-fit cursor-pointer">
//                 <h3 className="text-lg font-bold text-black dark:text-white transition-colors duration-300">
//                 {category.text}
//               </h3>
//                     <span className="text-2xl text-black dark:text-white transition-colors duration-300 block whitespace-nowrap">
//                       {category.icon}
//                     </span>
//                   </div>
//               </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default SkillSet

'use client'
import React, { useState, useEffect } from 'react'
import { IoLogoReact } from 'react-icons/io5'
import { RiNextjsLine, RiJavascriptLine, RiTailwindCssFill } from 'react-icons/ri'
import { TbBrandDjango, TbBrandTypescript, TbBrandFramerMotion } from 'react-icons/tb'
import { SiShadcnui, SiGreensock, SiExpress, SiPostman } from 'react-icons/si'
import { IoLogoNodejs } from 'react-icons/io'
import { DiMongodb, DiDocker } from 'react-icons/di'
import { GrGithub } from 'react-icons/gr'
import { AiOutlinePython } from 'react-icons/ai'
import { FaJava, FaFigma } from 'react-icons/fa6'

const Skills = [
  { id: 1,  text: 'ReactJS',     icon: <IoLogoReact /> },
  { id: 2,  text: 'NextJS',      icon: <RiNextjsLine /> },
  { id: 3,  text: 'Django',      icon: <TbBrandDjango /> },
  { id: 4,  text: 'JavaScript',  icon: <RiJavascriptLine /> },
  { id: 5,  text: 'TypeScript',  icon: <TbBrandTypescript /> },
  { id: 6,  text: 'Tailwind',    icon: <RiTailwindCssFill /> },
  { id: 7,  text: 'shadcn',      icon: <SiShadcnui /> },
  { id: 8,  text: 'Motion',      icon: <TbBrandFramerMotion /> },
  { id: 9,  text: 'GSAP',        icon: <SiGreensock /> },
  { id: 10, text: 'NodeJS',      icon: <IoLogoNodejs /> },
  { id: 11, text: 'ExpressJS',   icon: <SiExpress /> },
  { id: 12, text: 'MongoDB',     icon: <DiMongodb /> },
  { id: 13, text: 'Postman',     icon: <SiPostman /> },
  { id: 14, text: 'GitHub',      icon: <GrGithub /> },
  { id: 15, text: 'Python',      icon: <AiOutlinePython /> },
  { id: 16, text: 'Java',        icon: <FaJava /> },
  { id: 17, text: 'Docker',      icon: <DiDocker /> },
  { id: 18, text: 'Figma',       icon: <FaFigma /> },
]

const mono = "'Courier New', Courier, monospace"

export default function SkillSet() {
  const [visible, setVisible] = useState(true)
  const [activeTab, setActiveTab] = useState<'general' | 'skills'>('general')
  const [volume, setVolume] = useState(60)
  const [displayMode, setDisplayMode] = useState<'normal' | 'invert'>('normal')
  const [selectedSkills, setSelectedSkills] = useState<number[]>([])
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  const toggleSkill = (id: number) =>
    setSelectedSkills(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])

  const fmt = (n: number) => String(n).padStart(2, '0')
  const dateStr = `${fmt(time.getDate())}/${fmt(time.getMonth() + 1)}/${String(time.getFullYear()).slice(2)}`
  const timeStr = time.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' })

  if (!visible) return null

  const s = {
    tab: (active: boolean): React.CSSProperties => ({
      flex: 1, padding: '8px 0', textAlign: 'center', fontSize: 12, fontWeight: 700,
      letterSpacing: 1, cursor: 'pointer', border: '1px solid #aaa', fontFamily: mono,
      background: active ? '#f5f5dc' : '#e0ddc8', color: active ? '#111' : '#555',
      borderBottom: active ? '1px solid #f5f5dc' : '1px solid #aaa',
      marginBottom: active ? -1 : 0, zIndex: active ? 1 : 0, position: 'relative',
    }),
    box: { border: '1.5px solid #888', padding: '10px 12px', background: '#fff8e8' } as React.CSSProperties,
    boxTitle: { fontSize: 10, color: '#666', marginTop: 8, fontFamily: mono } as React.CSSProperties,
    modeBtn: (on: boolean): React.CSSProperties => ({
      flex: 1, padding: '8px 0', border: '1.5px solid #888', fontSize: 13, fontWeight: 700,
      cursor: 'pointer', fontFamily: mono, textAlign: 'center',
      background: on ? '#111' : '#f5f5dc', color: on ? '#f5f5dc' : '#111',
    }),
    skillBtn: (selected: boolean): React.CSSProperties => ({
      border: '1.5px solid #888', padding: '5px 10px',
      background: selected ? '#111' : '#fff8e8',
      color: selected ? '#f5f5dc' : '#111',
      fontSize: 11, fontFamily: mono, cursor: 'pointer',
      display: 'flex', alignItems: 'center', gap: 6,
    }),
  }

  return (
    // <div style={{ display: 'flex', justifyContent: 'center', padding: '32px 16px', background: '#f5c6c6', fontFamily: mono }}>
      <div style={{ width: 580, background: '#f5f5dc', border: '1.5px solid #555', boxShadow: '4px 4px 0 #aaa', display: 'flex', flexDirection: 'column' }}>

        {/* Titlebar */}
        <div style={{ background: '#f0ede0', borderBottom: '1px solid #aaa', padding: '5px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
          <div style={{ width: 14, height: 14, border: '1px solid #888', background: '#e8e4d8', fontSize: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
            onClick={() => setVisible(false)}>✕</div>
          <span style={{ fontFamily: 'Georgia, serif', fontWeight: 900, fontSize: 16, letterSpacing: 2, color: '#111' }}>SETTINGS</span>
        </div>

        {/* Tabs */}
        {/* <div style={{ display: 'flex', borderBottom: '1px solid #aaa' }}>
          <div style={s.tab(activeTab === 'general')} onClick={() => setActiveTab('general')}>GENERAL</div>
          <div style={s.tab(activeTab === 'skills')} onClick={() => setActiveTab('skills')}>SKILLS</div>
        </div> */}

        {/* General Tab
        {activeTab === 'general' && (
          <div style={{ padding: '18px 16px 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            <div style={s.box}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span>🔊</span>
                <input type="range" min={0} max={100} value={volume}
                  onChange={e => setVolume(Number(e.target.value))}
                  style={{ flex: 1, height: 14, cursor: 'pointer' }} />
                <span style={{ fontSize: 10, minWidth: 24, color: '#555', fontFamily: mono }}>{volume}</span>
              </div>
              <div style={s.boxTitle}>Speaker Volume</div>
            </div>

            <div style={s.box}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span>📅</span>
                  <span style={{ fontSize: 12, fontWeight: 700, fontFamily: mono }}>{dateStr}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span>🕐</span>
                  <span style={{ fontSize: 12, fontWeight: 700, fontFamily: mono }}>{timeStr}</span>
                </div>
              </div>
              <div style={s.boxTitle}>Date &amp; Time</div>
            </div>

            <div style={s.box}>
              <div style={{ display: 'flex', gap: 0 }}>
                <button style={s.modeBtn(displayMode === 'normal')} onClick={() => setDisplayMode('normal')}>Normal</button>
                <button style={s.modeBtn(displayMode === 'invert')} onClick={() => setDisplayMode('invert')}>Invert</button>
              </div>
              <div style={s.boxTitle}>Display Mode</div>
            </div>

            <div style={s.box}>
              <div style={{ fontSize: 11, color: '#555', lineHeight: 1.7, fontFamily: mono }}>
                <div>👤 abhinav.rajid</div>
                <div>🌍 Hyderabad, IN</div>
                <div>🎓 MRCE 2025</div>
              </div>
              <div style={s.boxTitle}>User Info</div>
            </div>
          </div>
        )} */}

        {/* Skills Tab */}
        {activeTab === 'skills' && (
          <div style={{ padding: '18px 16px 24px', display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {Skills.map(skill => (
              <button key={skill.id} style={s.skillBtn(selectedSkills.includes(skill.id))}
                onClick={() => toggleSkill(skill.id)}>
                <span style={{ fontSize: 16, display: 'flex', alignItems: 'center' }}>{skill.icon}</span>
                <span>{skill.text}</span>
              </button>
            ))}
          </div>
        )}

        {/* Footer */}
        {/* <div style={{ borderTop: '1px solid #aaa', padding: '12px 16px', textAlign: 'right', fontSize: 11, color: '#666', background: '#f0ede0', fontFamily: mono, lineHeight: 1.7 }}>
          Abhinav Reddy Rajid — Portfolio OS Version 1.0<br />
          Full Stack Developer · Hyderabad · MRCE 2025
        </div> */}
      </div>
    // </div>
  )
}