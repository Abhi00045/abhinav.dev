

const SkillSet = () => {

  const Skills = [
  { id: 1, icon: RiReactjsLine, text: "ReactJs" },
  { id: 2, icon: RiNextjsLine, text: "NextJs" },
  { id: 3, icon: SiDjango, text: "Django" },
  { id: 4, icon: DiJavascript, text: "JavaScript" },
  { id: 5, icon: TbBrandTypescript, text: "TypeScript" },
  { id: 6, icon: RiTailwindCssFill, text: "Tailwind" },
//   { id: 7, icon: RiBearSmileLine, text: "Zustand" },
//   { id: 8, icon: SiReactquery, text: "Tanstack Query" },
  { id: 9, icon: SiShadcnui, text: "shadcn" },
  { id: 10, icon: TbBrandFramerMotion, text: "Motion" },
  { id: 11, icon: SiGreensock, text: "GSAP" },
  { id: 12, icon: IoLogoNodejs, text: "NodeJS" },
  { id: 13, icon: SiExpress, text: "ExpressJS" },
  { id: 14, icon: BiLogoPostgresql, text: "PostgreSQL" },
  { id: 15, icon: SiMongodb, text: "MongoDB" },
//   { id: 16, icon: SiRedis, text: "Redis" },
  { id: 17, icon: SiPrisma, text: "Prisma" },
  { id: 18, icon: SiPostman, text: "Postman" },
  { id: 19, icon: FaGitAlt, text: "Git" },
  { id: 20, icon: FaGithub, text: "GitHub" },
  { id: 21, icon: FaPython, text: "Python" },
  { id: 22, icon: RiJavaLine, text: "Java" },
//   { id: 23, icon: TbHexagonLetterC, text: "C" },
//   { id: 24, icon: TbBrandCpp, text: "C++" },
  { id: 25, icon: BsFiletypeSql, text: "SQL" },
  { id: 26, icon: FaDocker, text: "Docker" },
  { id: 27, icon: VscTerminalLinux, text: "Linux" },
  { id: 28, icon: SiVercel, text: "Vercel" },
//   { id: 29, icon: PiFigmaLogoBold, text: "Figma" },
]
  
  return (
    <div className="flex flex-col gap-2">
      <SectionTitle title="Skills & Tools" />
      <div className=" flex flex-wrap gap-1.5 ">
        {skills.map((skill) => (
          <a key={skill.id} className="skills-card">
            <skill.icon />
            {skill.text}
          </a>
        ))}
      </div>
    </div>
  )
}

export default SkillSet