import React from 'react';
import './Components.css';
import BlogAppli from '../assets/BlogAppli.png'  
// import ecommerceImg from '../assets/ecommerce.png';
// import videoToolImg from '../assets/video.png';
// import lmsAppImg from '../assets/lms.png';

const projects = [
  {
    title: 'Ai-powered Job Application',
    image: designAppImg,
    description:
      'A sleek, modern SaaS graphic design app built with Next.js, TypeScript, and Tailwind CSS. Create and customize templates, manipulate text and shapes, and access powerful AI tools for background removal and image generation.',
    tags: [
      'nextjs', 'typescript', 'tailwindcss', 'rpc', 'stripe',
      'auth.js', 'drizzle-orm', 'hono', 'postgresql', 'ai-background-remover',
      'ai-image-generator', 'shadcn-ui', 'react-query', 'zustand', 'subscription',
    ],
  },
  {
  title: 'Blog Platform',
  image: BlogAppli,
  description:
    'A full-stack blog publishing platform built with React.js, Node.js, Express, and MongoDB. Features include secure user auth with Clerk & JWT, rich blog CRUD, and styled UI using Tailwind CSS.',
  tags: [
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'React Router',
    'Tailwind CSS',
    'Clerk',
    'JWT',
    'bcrypt.js',
    'dotenv',
    'CORS',
    'Nodemon',
    'Postman',
  ],
},
,
  {
    title: 'Bookstore',
    image: videoToolImg,
    description:
      'A platform for encoding/transcoding videos using FFmpeg with real-time UI feedback, file upload progress, and custom presets. Built with React, Node.js, and WebSockets.',
    tags: [
      'React', 'Node.js', 'WebSocket', 'ffmpeg', 'express',
      'video-processing', 'progress-bar', 'buffer-streaming',
    ],
  },
  {
    title: 'E-commerce',
    image: lmsAppImg,
    description:
      'A Learning Management System (LMS) with user/student roles, course creation, lecture uploads, quizzes, and authentication. Built using MERN and integrated with Cloudinary and JWT.',
    tags: [
      'MERN', 'Cloudinary', 'JWT', 'CourseBuilder', 'React Router',
      'MongoDB', 'Express.js', 'Node.js', 'responsive-design',
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span className="tag" key={i}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
