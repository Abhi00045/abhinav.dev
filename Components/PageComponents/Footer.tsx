

// "use client"
// import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
// // import { FaDiscord } from "react-icons/fa6";
// // import { FaRegFile } from "react-icons/fa6";
// import { FileUser } from 'lucide-react';

// export default function Footer() {

//   const SocialLinks = [
//     {
//         id:1,
//         name:"Twitter",
//         social:"https://x.com/abhilostsoul",
//         icon:<Twitter/>

//     },
//     {
//         id:2,
//         name:"Linkdin",
//         social:"https://www.linkedin.com/in/abhinavreddyrajidi-988633280/",
//         icon: <Linkedin />
//     },
//     {
//         id:3,
//         name:"Github",
//         social:"https://github.com/Abhi00045",
//         icon:<Github/>
//     },
//     {
//   id:4,
//   name: "Mail",
//   social: "mailto:contact@abhinavrajidi.tech?subject=Contact%20from%20Portfolio&body=Hi%20Abhinav,%0A%0AI%20came%20across%20your%20portfolio...",
//   icon: <Mail />
// }
// ,
//     {
//       id:5,
//       name :"Resume",
//       social:"https://drive.google.com/file/d/1FzyGWhcSEqAE6zWA3CbXfs5Tdqqrs6TG/view?usp=drive_link",
//       icon:<FileUser />
//     }
// ]


//   return (
//      <section id="contact" className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
//       <div className="bg-white/90 dark:bg-black/30 backdrop-blur-sm border border-gray-200 dark:border-white/20 rounded-2xl py-3 px-6 shadow-lg transition-colors duration-300">
//         <div className="flex items-center space-x-4">
//           <div className="flex space-x-4 items-center">
//             {SocialLinks.map((contact, index) => (              
//               <a 
//                 key={index}
//                 href={contact.social} 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors p-1 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg "
//                 title={contact.name}
//               >
//                 {contact.icon}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"
import { useState } from 'react';

const sections = [
  {
    id: "aboutme",
    label: "Aboutme",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="4" width="20" height="24" rx="1" fill="#c8d8e8" stroke="#444" strokeWidth="1.5"/>
        <rect x="9" y="7" width="14" height="10" rx="1" fill="#a8c0d8" stroke="#555" strokeWidth="1"/>
        <circle cx="16" cy="11" r="3" fill="#e8c8a0" stroke="#555" strokeWidth="1"/>
        <rect x="10" y="20" width="12" height="1.5" rx="0.5" fill="#777"/>
        <rect x="11" y="23" width="10" height="1.5" rx="0.5" fill="#999"/>
      </svg>
    ),
  },
  {
    id: "infocard",
    label: "InfoCard",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="8" width="26" height="18" rx="1" fill="#fffff0" stroke="#444" strokeWidth="1.5"/>
        <rect x="3" y="8" width="26" height="5" rx="1" fill="#c0d0e8" stroke="#444" strokeWidth="1.5"/>
        <rect x="7" y="17" width="14" height="1.5" rx="0.5" fill="#888"/>
        <rect x="7" y="20" width="10" height="1.5" rx="0.5" fill="#aaa"/>
        <circle cx="23" cy="19.5" r="3.5" fill="#e8d8a0" stroke="#555" strokeWidth="1"/>
        <text x="22" y="21.5" fontSize="5" fill="#555" fontFamily="monospace">i</text>
      </svg>
    ),
  },
  {
    id: "Expirence",
    label: "Xpirence",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="13" width="24" height="15" rx="1" fill="#d4b896" stroke="#444" strokeWidth="1.5"/>
        <rect x="11" y="10" width="10" height="5" rx="1" fill="#c8a870" stroke="#444" strokeWidth="1.5"/>
        <rect x="4" y="19" width="24" height="2" fill="#b89060"/>
        <rect x="14" y="18" width="4" height="4" rx="0.5" fill="#e8d0a8" stroke="#555" strokeWidth="1"/>
      </svg>
    ),
  },
  {
    id: "skillset",
    label: "SkillSet",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="5" fill="#d0d0d0" stroke="#444" strokeWidth="1.5"/>
        <circle cx="16" cy="16" r="2" fill="#888" stroke="#333" strokeWidth="1"/>
        {[0,45,90,135,180,225,270,315].map((angle, i) => (
          <rect key={i} x="15" y="4" width="2" height="4" rx="1" fill="#b0b0b0" stroke="#555" strokeWidth="0.5" transform={`rotate(${angle} 16 16)`} />
        ))}
      </svg>
    ),
  },
  {
    id: "projects",
    label: "Projects",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 11 L3 26 L29 26 L29 11 Z" fill="#f0d080" stroke="#444" strokeWidth="1.5"/>
        <path d="M3 11 L3 8 L12 8 L14 11 Z" fill="#e8c060" stroke="#444" strokeWidth="1.5"/>
        <text x="9" y="22" fontSize="8" fill="#7b5800" fontFamily="monospace" fontWeight="bold">&lt;/&gt;</text>
      </svg>
    ),
  },
  {
    id: "Writings",
    label: "Blogs",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="7" y="4" width="18" height="24" rx="1" fill="#f8f0e0" stroke="#444" strokeWidth="1.5"/>
        <rect x="7" y="4" width="3" height="24" rx="0" fill="#c8a0c0" stroke="#444" strokeWidth="1"/>
        <rect x="13" y="9" width="10" height="1.5" rx="0.5" fill="#777"/>
        <rect x="13" y="13" width="10" height="1.5" rx="0.5" fill="#999"/>
        <rect x="13" y="17" width="7" height="1.5" rx="0.5" fill="#999"/>
        <rect x="13" y="21" width="8" height="1.5" rx="0.5" fill="#bbb"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const [active, setActive] = useState<string | null>(null);
  const [pressed, setPressed] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setActive(id);
    // Call the pop function exposed by HomePage
    if (typeof window !== 'undefined' && (window as any).__popSection) {
      (window as any).__popSection(id)
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

        .retro-footer-bar {
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 9999;
          background: #d4c5b0;
          border-top: 2px solid #fff8f0;
          border-left: 2px solid #fff8f0;
          border-right: 2px solid #7a6a50;
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
          border-top: 2px solid #fff8f0;
          border-left: 2px solid #fff8f0;
          border-right: 2px solid #7a6a50;
          border-bottom: 2px solid #7a6a50;
          box-shadow: inset 1px 1px 0px #e8d8c0;
          transition: none;
          user-select: none;
          position: relative;
        }

        .retro-nav-btn:hover {
          background: #c8baa4;
        }

        .retro-nav-btn.pressed,
        .retro-nav-btn:active {
          border-top: 2px solid #7a6a50;
          border-left: 2px solid #7a6a50;
          border-right: 2px solid #fff8f0;
          border-bottom: 2px solid #fff8f0;
          box-shadow: inset 1px 1px 2px #5a4a30;
          background: #c0b09c;
          padding-top: 7px;
          padding-left: 11px;
        }

        .retro-nav-btn.active-section {
          background: #bfb09a;
          border-top: 2px solid #7a6a50;
          border-left: 2px solid #7a6a50;
          border-right: 2px solid #fff8f0;
          border-bottom: 2px solid #fff8f0;
          box-shadow: inset 2px 2px 3px #5a4a30;
        }

        .retro-nav-btn .btn-label {
          font-size: 14px;
          color: #2a1a00;
          letter-spacing: 0.5px;
          line-height: 1;
          text-shadow: 1px 1px 0px rgba(255,255,255,0.4);
        }

        .retro-nav-btn.active-section .btn-label {
          color: #1a0a00;
        }

        .retro-nav-btn.active-section::after {
          content: '';
          position: absolute;
          inset: 2px;
          border: 1px dotted #5a4a30;
          pointer-events: none;
        }

        .retro-footer-bar::before {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(180,120,100,0.04) 2px,
            rgba(180,120,100,0.04) 4px
          );
          pointer-events: none;
        }

        .retro-footer-outer {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 9998;
          display: flex;
          justify-content: center;
          pointer-events: none;
        }
      `}</style>

      <div className="retro-footer-outer" />

      <nav className="retro-footer-bar" role="navigation" aria-label="Page sections">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`retro-nav-btn ${active === section.id ? "active-section" : ""} ${pressed === section.id ? "pressed" : ""}`}
            onClick={() => handleClick(section.id)}
            onMouseDown={() => setPressed(section.id)}
            onMouseUp={() => setPressed(null)}
            onMouseLeave={() => setPressed(null)}
            title={`Go to ${section.label}`}
            aria-label={section.label}
          >
            {section.icon}
            <span className="btn-label">{section.label}</span>
          </button>
        ))}
      </nav>
    </>
  );
}