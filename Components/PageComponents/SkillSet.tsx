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
import React, { useState } from 'react'
import { IoLogoReact } from 'react-icons/io5'
import { RiNextjsLine, RiJavascriptLine, RiTailwindCssFill } from 'react-icons/ri'
import { TbBrandDjango, TbBrandTypescript, TbBrandFramerMotion } from 'react-icons/tb'
import { SiShadcnui, SiGreensock, SiExpress, SiPostman } from 'react-icons/si'
import { IoLogoNodejs } from 'react-icons/io'
import { DiMongodb, DiDocker } from 'react-icons/di'
import { GrGithub } from 'react-icons/gr'
import { AiOutlinePython } from 'react-icons/ai'
import { FaJava, FaFigma } from 'react-icons/fa6'

const mono = "'Courier New', Courier, monospace"

const categories = [
  {
    label: 'Frontend',
    color: '#c8d8f0',
    accent: '#4a6a9a',
    skills: [
      { id: 1,  text: 'ReactJS',    icon: <IoLogoReact /> },
      { id: 2,  text: 'NextJS',     icon: <RiNextjsLine /> },
      { id: 4,  text: 'JavaScript', icon: <RiJavascriptLine /> },
      { id: 5,  text: 'TypeScript', icon: <TbBrandTypescript /> },
      { id: 6,  text: 'Tailwind',   icon: <RiTailwindCssFill /> },
      { id: 7,  text: 'shadcn',     icon: <SiShadcnui /> },
      { id: 8,  text: 'Motion',     icon: <TbBrandFramerMotion /> },
      { id: 9,  text: 'GSAP',       icon: <SiGreensock /> },
    ],
  },
  {
    label: 'Backend',
    color: '#d0f0d8',
    accent: '#2a6a3a',
    skills: [
      { id: 10, text: 'NodeJS',    icon: <IoLogoNodejs /> },
      { id: 11, text: 'ExpressJS', icon: <SiExpress /> },
      { id: 3,  text: 'Django',    icon: <TbBrandDjango /> },
      { id: 12, text: 'MongoDB',   icon: <DiMongodb /> },
    ],
  },
  {
    label: 'Tools & Others',
    color: '#f0e8c8',
    accent: '#7a5a00',
    skills: [
      { id: 13, text: 'Postman', icon: <SiPostman /> },
      { id: 14, text: 'GitHub',  icon: <GrGithub /> },
      { id: 15, text: 'Python',  icon: <AiOutlinePython /> },
      { id: 16, text: 'Java',    icon: <FaJava /> },
      { id: 17, text: 'Docker',  icon: <DiDocker /> },
      { id: 18, text: 'Figma',   icon: <FaFigma /> },
    ],
  },
]

export default function SkillSet() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <>
      <style>{`
        .skill-chip {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 5px 10px;
          border: 1.5px solid #aaa;
          background: #fff8e8;
          font-family: ${mono};
          font-size: 11px;
          color: #222;
          cursor: default;
          transition: background 0.12s, transform 0.1s;
          white-space: nowrap;
        }
        .skill-chip:hover {
          background: #ede0c8;
          transform: translateY(-1px);
          border-color: #888;
        }
        .skill-chip .chip-icon {
          font-size: 16px;
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        .skillset-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 0;
        }
        @media (max-width: 600px) {
          .skillset-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div style={{
        background: '#f5f5dc',
        border: '1.5px solid #555',
        boxShadow: '4px 4px 0 #aaa',
        fontFamily: mono,
        width: '100%',
      }}>

        {/* Title bar with close button
        <div style={{
          background: '#f0ede0',
          borderBottom: '1px solid #aaa',
          padding: '6px 12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <span style={{
            fontFamily: 'Georgia, serif',
            fontWeight: 900,
            fontSize: 15,
            letterSpacing: 3,
            color: '#111',
            textTransform: 'uppercase',
          }}>
            ⚡ Skill Set
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

        {/* Category grid */}
        <div className="skillset-grid">
          {categories.map((cat, ci) => (
            <div
              key={cat.label}
              style={{
                borderRight: ci < categories.length - 1 ? '1px solid #ccc' : 'none',
                padding: '14px 12px',
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 7,
                marginBottom: 12,
                paddingBottom: 7,
                borderBottom: `2px solid ${cat.accent}`,
              }}>
                <div style={{
                  width: 10, height: 10,
                  background: cat.accent,
                  border: '1px solid #555',
                  flexShrink: 0,
                }} />
                <span style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 1.5,
                  color: cat.accent,
                  textTransform: 'uppercase',
                }}>
                  {cat.label}
                </span>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {cat.skills.map(skill => (
                  <div key={skill.id} className="skill-chip">
                    <span className="chip-icon">{skill.icon}</span>
                    <span>{skill.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer bar */}
        <div style={{
          borderTop: '1px solid #ccc',
          padding: '5px 12px',
          fontSize: 10,
          color: '#888',
          fontFamily: mono,
          background: '#f0ede0',
          display: 'flex',
          justifyContent: 'space-between',
        }}>
          <span>{categories.reduce((a, c) => a + c.skills.length, 0)} skills</span>
          <span>☼ STACK</span>
        </div>
      </div>
    </>
  )
}