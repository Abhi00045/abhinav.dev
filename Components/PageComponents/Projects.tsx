'use client'
import React, { useState } from 'react'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { SlSocialGithub } from "react-icons/sl";
import pfp from '@/assets/pfp.jpg'

function Projects() {

    const[preview, setPreview]= useState(false);

    const projectList = [

        {
            id:1,
            image:"m/,,",
            name:"BlogBox",
            desc:"A Job Portal with AI Mock Interview & AI Voice Assistant using the MERN stack combines both standard web development and AI-driven features.",
            source:"",
        },
        {
            id:1,
            image:"m/,,",
            name:"BlogBox",
            desc:"",
            source:""
        },
        {
            id:1,
            image:"m/,,",
            name:"BlogBox",
            desc:"",
            source:""
        },
    ]

  return (
    <>
    <div className='p-1.5 m-1.5'>
        <h1 className='text-2xl font-bold mb-6 text-black dark:text-white transition-colors duration-300'>Projects</h1>
        <div className='flex flex-col flex-wrap gap-4 p-1.5 h-full w-full' id='main-section'>
            {
                projectList.map((project,index)=>(
                    <div className='flex flex-row justify-around gap-1.5 p-2.5 bg-white/90 dark:bg-black/15  h-full w-full bg-white-900 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-7 border border-gray-50 inset-0 w-fit cursor-pointer'>
                        <div id="leftImage" className=''>
                                    <img src={pfp as unknown as string} alt="" className='mx-auto w-32 h-32 border border-gray-200 dark:border-white/19 rounded-lg' />
                        </div>
                        <div className="p-2.5" >
                            <div id="right-sec-upper" className='flex flex-row justify-between items-center'>
                                <div id="upper-title">
                                    <h1 className='font-extralight text-2xl'>{project.name}</h1>
                                </div>
                                <div id="upper-source" className='flex flex-row gap-2.5 text-xl cursor-pointer '>
                                    <button onClick={() => setPreview(!preview)}>

                                        {preview?<FaRegEye/>:<FaRegEyeSlash/>}

                                    </button>
                                    {
                                        preview && (
                                            <div id="video" className='h-10 w-10'>
                                                
                                            </div>
                                        )
                                    }
                                    <SlSocialGithub />
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