import React from 'react';
import '../Components/Components.css'
import { FaGithub } from 'react-icons/fa';
import BlogAppli from '../assets/BlogAppli.png';
import Aiplly from '../assets/aiApply.png'

const projects = [
  {
    title: 'Ai-powered Job Application',
    image: Aiplly,
    description:
      'A sleek, modern SaaS graphic design app built with Next.js, TypeScript, and Tailwind CSS. Create and customize templates, manipulate text and shapes, and access powerful AI tools for background removal and image generation.',
    tags: [
      'nextjs', 'typescript', 'tailwindcss', 'rpc', 'stripe',
      'auth.js', 'drizzle-orm', 'hono', 'postgresql', 'ai-background-remover',
      'ai-image-generator',
    ],
    repoLink: 'https://github.com/Abhi00045/AIpply.git',
  },
  {
    title: 'Blog Platform',
    image: BlogAppli,
    description:
      'A full-stack blog publishing platform built with React.js, Node.js, Express, and MongoDB. Features include secure user auth with Clerk & JWT, rich blog CRUD, and styled UI using Tailwind CSS.',
    tags: [
      'React.js', 'Node.js', 'Express.js', 'MongoDB',
      'React Router', 'Tailwind CSS', 'Clerk', 'JWT',
      'bcrypt.js', 'dotenv', 'CORS', 'Nodemon', 'Postman',
    ],
    repoLink: 'https://github.com/Abhi00045/Blog.git',
  },
  // {
  //   title: 'Blog Platform',
  //   image: BlogAppli,
  //   description:
  //     'A full-stack blog publishing platform built with React.js, Node.js, Express, and MongoDB. Features include secure user auth with Clerk & JWT, rich blog CRUD, and styled UI using Tailwind CSS.',
  //   tags: [
  //     'React.js', 'Node.js', 'Express.js', 'MongoDB',
  //     'React Router', 'Tailwind CSS', 'Clerk', 'JWT',
  //     'bcrypt.js', 'dotenv', 'CORS', 'Nodemon', 'Postman',
  //   ],
  //   repoLink: 'https://github.com/yourusername/blog-platform',
  // },
  // {
  //   title: 'Blog Platform',
  //   image: Aiplly,
  //   description:
  //     'A full-stack blog publishing platform built with React.js, Node.js, Express, and MongoDB. Features include secure user auth with Clerk & JWT, rich blog CRUD, and styled UI using Tailwind CSS.',
  //   tags: [
  //     'React.js', 'Node.js', 'Express.js', 'MongoDB',
  //     'React Router', 'Tailwind CSS', 'Clerk', 'JWT',
  //     'bcrypt.js', 'dotenv', 'CORS', 'Nodemon', 'Postman',
  //   ],
  //   repoLink: 'https://github.com/yourusername/blog-platform',
  // },
];

const ProjectsSection = () => {
  return (
    <>
      {/* <style>{`
        .projects-section {
          padding: 40px;
          background: #f9f9f9;
        }
        .projects-title {
          font-size: 2rem;
          font-weight: bold;
          text-align: center;
          margin-bottom: 40px;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }
        .project-card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          position: relative;
          padding-bottom: 50px;
        }
        .project-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        .project-content {
          padding: 20px;
          flex: 1;
          position: relative;
        }
        .project-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 10px;
        }
        .project-description {
          font-size: 0.95rem;
          color: #555;
          margin-bottom: 15px;
        }
        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .tag {
          background: #e4e4e4;
          border-radius: 6px;
          padding: 4px 8px;
          font-size: 0.75rem;
        }
        .github-icon {
          position: absolute;
          bottom: 15px;
          right: 20px;
          color: #333;
          font-size: 1.5rem;
          transition: color 0.3s;
        }
        .github-icon:hover {
          color: #000;
        }
      `}</style> */}

      <section className="projects-section">
        <h2 className="projects-title">Projects 🗂️🚀</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span className="tag" key={i}>{tag}</span>
                  ))}
                </div>
                <a
                  href={project.repoLink}
                  className="github-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View on GitHub"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;
