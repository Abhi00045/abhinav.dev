import React from 'react';
import './Components.css';
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
    SiFirebase,
  SiFigma,
  SiClerk,
} from 'react-icons/si';

const skills = [
  { icon: <SiJavascript size={24} />, name: 'JavaScript', type: 'Programming Language' },
  { icon: <SiReact size={24} />, name: 'React.js', type: 'Frontend Library' },
  { icon: <SiNextdotjs size={24} />, name: 'Next.js', type: 'Frontend Library' },
  { icon: <SiNodedotjs size={24} />, name: 'Node.js', type: 'Backend Framework' },
  { icon: <SiExpress size={24} />, name: 'Express.js', type: 'Web Framework' },
  { icon: <SiMongodb size={24} />, name: 'MongoDB', type: 'Database' },
  { icon: <SiHtml5 size={24} />, name: 'HTML', type: 'Markup Language' },
  { icon: <SiCss3 size={24} />, name: 'CSS', type: 'Style Sheet Language' },
  { icon: <SiTailwindcss size={24} />, name: 'Tailwind CSS', type: 'CSS Framework' },
   { icon: <SiFirebase size={24} />, name: 'Firebase', type: 'Backend-as-a-Service' },
  { icon: <SiClerk size={24} />, name: 'Clerk', type: 'Authentication Service' },
  { icon: <SiFigma size={24} />, name: 'Figma', type: 'UI/UX Design Tool' },
];

const SkillsSection = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2 className="skills-title">Current Technologies</h2>
        <p className="skills-subtitle">The Power behind my projects</p>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">{skill.icon}</div>
              <div>
                <h4 className="skill-name">{skill.name}</h4>
                <p className="skill-type">{skill.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
