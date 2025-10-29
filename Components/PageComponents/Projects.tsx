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
    <div className='p-1.5 m-1.5'>
        <h1 className='text-2xl font-bold mb-6 text-black dark:text-white transition-colors duration-300'>Projects</h1>
        <div className='flex flex-col flex-wrap gap-4 p-1.5 h-full w-full' id='main-section'>
            {
                projectList.map((project,index)=>(
                    <div key={index} className='flex flex-row justify-around gap-1.5 p-2.5 bg-white/90 dark:bg-black/15  h-full bg-white-900 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-7 border border-gray-50 inset-0 w-fit'>
                        <div id="leftImage" className=''>
                                    <img src={project.image} alt="" className='mx-auto w-60 h-32 border border-none rounded-2xl' />
                        </div>
                        <div className="p-2.5 flex flex-col gap-1.5" >
                            <div id="right-sec-upper" className='flex flex-row justify-between items-center'>
                                <div id="upper-title">
                                    <h1 className='font-extralight text-2xl text-blue-200'>{project.name}</h1>
                                </div>
                                <div id="upper-source" className='flex flex-row gap-2.5 text-xl cursor-pointer '>
                                    {/* <button onClick={() => setPreview(!preview)}>

                                        {preview?<FaRegEye/>:<FaRegEyeSlash/>}

                                    </button>
                                    {
                                        preview && (
                                            <div id="video" className=''>
                                                
                                            </div>
                                        )
                                    } */}
                                    <a href={project.source}><SlSocialGithub /></a>
                                <a href={project.liveLink}><IoIosLink /></a>
                                </div>
                            </div>
                            <div id="right-sec-lower" className='text-base'>
                                <p>{project.desc}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
    </>
  )
}

export default Projects