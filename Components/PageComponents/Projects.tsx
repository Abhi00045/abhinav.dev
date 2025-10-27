import React, { useState } from 'react'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { SlSocialGithub } from "react-icons/sl";

function Projects() {

    const[preview, setPreview]= useState(false);

    const projectList = [

        {
            id:1,
            image:"m/,,",
            name:"BlogBox",
            desc:"",
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
    <div>
        <h1>projects</h1>
        <div>
            {
                projectList.map((project,index)=>(
                    <div>
                        <div id="leftImage">

                        </div>
                        <div className="rightSec">
                            <div id="right-sec-upper">
                                <div id="upper-title">
                                    <p>{project.name}</p>
                                </div>
                                <div id="upper-source">
                                    <button onClick={() => setPreview(!preview)}>

                                        {preview?<FaRegEye/>:<FaRegEyeSlash/>}

                                    </button>
                                    {
                                        preview && (
                                            <div id="video">
                                                //need to create video div
                                            </div>
                                        )
                                    }
                                    <SlSocialGithub />
                                </div>
                            </div>
                            <div id="right-sec-lower">

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