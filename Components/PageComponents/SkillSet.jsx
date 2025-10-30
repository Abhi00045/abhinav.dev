import { IoLogoReact } from "react-icons/io5";
import { RiNextjsLine } from "react-icons/ri";
import { TbBrandDjango } from "react-icons/tb";
import { RiJavascriptLine } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiGreensock } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { GrGithub } from "react-icons/gr";
import { AiOutlinePython } from "react-icons/ai";
import { SiPostman } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { DiDocker } from "react-icons/di";
import { FaFigma } from "react-icons/fa6";

const SkillSet = () => {

  const Skills = [
  { 
    id: 1, 
    icon: <IoLogoReact />, 
    text: "ReactJs" 
  },
  { 
    id: 2,
    icon: <RiNextjsLine /> ,
    text: "NextJs" 
  },
  { 
    id: 3,
    icon: <TbBrandDjango />, 
    text: "Django" 
  },
  { 
    id: 4, 
    icon: <RiJavascriptLine />, 
    text: "JavaScript" 
  },
  { 
    id: 5, 
    icon: <TbBrandTypescript />, 
    text: "TypeScript" 
  },
  { 
    id: 6, 
    icon: <RiTailwindCssFill />, 
    text: "Tailwind" 
  },
//   { id: 7, icon: RiBearSmileLine, text: "Zustand" },
//   { id: 8, icon: SiReactquery, text: "Tanstack Query" },
  {
     id: 9,
    icon: <SiShadcnui />, 
    text: "shadcn" 
    },
  { 
    id: 10, 
    icon: <TbBrandFramerMotion />, 
    text: "Motion" 
  },
  { 
    id: 11, 
    icon: <SiGreensock />, 
    text: "GSAP" 
  },
  { 
    id: 12, 
    icon: <IoLogoNodejs />, 
    text: "NodeJS" 
  },
  { 
    id: 13, 
    icon: <SiExpress />, 
    text: "ExpressJS" 
  },
  // { id: 14, icon: BiLogoPostgresql, text: "PostgreSQL" },
  { 
    id: 15, 
    icon: <DiMongodb />, 
    text: "MongoDB" 
  },
//   { id: 16, icon: SiRedis, text: "Redis" },
  // { id: 17, icon: SiPrisma, text: "Prisma" },
  { id: 18, icon: <SiPostman />, text: "Postman" },
  // { id: 19, icon: FaGitAlt, text: "Git" },
  { id: 20, icon: <GrGithub />, text: "GitHub" },
  { id: 21, icon: <AiOutlinePython />, text: "Python" },
  { id: 22, icon: <FaJava />, text: "Java" },
//   { id: 23, icon: TbHexagonLetterC, text: "C" },
//   { id: 24, icon: TbBrandCpp, text: "C++" },
  // { id: 25, icon: BsFiletypeSql, text: "SQL" },
  { id: 26, icon: <DiDocker />, text: "Docker" },
  // { id: 27, icon: VscTerminalLinux, text: "Linux" },
  // { id: 28, icon: SiVercel, text: "Vercel" },
  { id: 29, icon: <FaFigma />, text: "Figma" },
]
  
  return (
     <section id="skills" className="p-5 pl-7 m-3.5 bg-white/90 dark:bg-black/15  h-full w-full bg-white-900 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-7 border border-gray-300 inset-0 ">
      <div className="">
        <h2 className="text-2xl font-bold mb-6 text-black dark:text-white transition-colors duration-300">
          Skills
        </h2>
          <div className="space-y-2 flex flex-row flex-wrap gap-2">
          {Skills.map((category, Index) => ( 
            <div key={Index} className="space-y-3 ">              
              <div className="flex flex-wrap flex-row items-center gap-3  border border-gray-200 dark:border-white/19 p-3 rounded-lg bg-white dark:bg-transparent transition-colors duration-300 hover:bg-gray-50 dark:hover:bg-white/10 w-fit cursor-pointer">
                <h3 className="text-lg font-bold text-black dark:text-white transition-colors duration-300">
                {category.text}
              </h3>
                    <span className="text-2xl text-black dark:text-white transition-colors duration-300 block whitespace-nowrap">
                      {category.icon}
                    </span>
                  </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillSet