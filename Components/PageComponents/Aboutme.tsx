

import { image, Name, selfRole, shortBio } from '@/AbhiData/data'
import React from 'react'

function Aboutme() {
  return (
    <>
    <div className="flex flex-row items-center mt-10 mb-10 gap-4">
        <div>
            <img src='../../Assets/pfp.jpg' alt="Profile Picture" className="w-32 h-32 mx-auto"/>
        </div>
        <div className="flex flex-col align-text-top">
            <h1 className="text-3xl font-bold text-center mt-4">{Name}</h1>
            <h2 className="text-xl text-center text-gray-600 mt-2">{selfRole}</h2>
            <p className="text-center text-gray-700 mt-4 max-w-xl mx-auto px-4">{shortBio}</p>  
        </div>
    </div>
    </>
  )
}

export default Aboutme