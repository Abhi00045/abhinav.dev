'use client'
import React from 'react'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { SlSocialGithub } from "react-icons/sl";
import { IoIosLink } from "react-icons/io";
import pfp from '@/assets/pfp.jpg'

function Projects() {

    // const[preview, setPreview]= useState(false);

    const projectList = [

        {
            id:1,
            image:"https://i.pinimg.com/736x/f8/61/77/f86177a67b8ac37791b04bc1119017bc.jpg",
            name:"applAI",
            desc:"An AI-powered job portal built with the MERN stack, featuring a mock interview module and a voice assistant to assist applicants in honing their responses and submitting smarter applications.",
            source:"",
            liveLink :" "
        },
        {
            id:2,
            image:"https://i.pinimg.com/736x/a9/4d/62/a94d6233d089245688dae8f76d83f735.jpg",
            name:"BlogBox",
            desc:"A modern blogging web app developed with React, Node.js, Express, and MongoDB, providing a smooth writing and reading experience with an intuitive interface and real-time updates.",
            source:"",
            liveLink :" "
        }
        // {
        //     id:3,
        //     image:"m/,,",
        //     name:"BlogBox",
        //     desc:"",
        //     source:"",
        //     liveLink :" "
        // },
    ]

  return (
    <>
    <div className="p-3 m-2">
  <h1 className="text-3xl font-bold mb-6 text-black dark:text-white transition-colors duration-300">
    Projects
  </h1>

  <div
    className="flex flex-col gap-6 p-2 w-full"
    id="main-section"
  >
    {projectList.map((project, index) => (
      <div
        key={index}
        className="flex flex-col md:flex-row items-center md:items-start justify-between gap-4 p-4 rounded-2xl bg-white/90 dark:bg-black/15 backdrop-blur-md border border-gray-200 dark:border-gray-700 transition-transform duration-300 hover:scale-[1.02]"
      >
        {/* Left Image Section */}
        <div className="flex-shrink-0">
          <img
            src={project.image}
            alt={project.name}
            className="w-64 h-40 md:w-72 md:h-44 object-cover rounded-2xl shadow-md"
          />
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-3 w-full md:w-2/3 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h2 className="font-semibold text-xl text-blue-400">{project.name}</h2>
            <div className="flex gap-3 text-2xl mt-2 md:mt-0">
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
              >
                <SlSocialGithub />
              </a>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
              >
                <IoIosLink />
              </a>
            </div>
          </div>

          <p className="text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300">
            {project.desc}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

    </>
  )
}

export default Projects