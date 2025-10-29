

import { image, Name, selfRole, shortBio } from '@/AbhiData/data'
import React from 'react'
import pfp from '@/assets/pfp.jpg'

function Aboutme() {
  return (
    <>
    <div className="flex flex-row items-start mt-10 mb-10 gap-4  ">
        <div>
        <img src="https://i.pinimg.com/736x/c3/55/b3/c355b396e473a548fbf8d67fee33495e.jpg" alt="" className='w-32 h-32 mx-auto border rounded-2xl border-none' />
        </div>
        <div className="flex flex-col items-start">
            <h1 className="text-2xl text-center mt-2 px-0.5 font-bold">{Name}</h1>
            <h2 className="text-xl text-center text-white mt-2 px-0.5">{selfRole}</h2>
            <p className="text-center text-white mt-1">{shortBio}</p>  
        </div>
    </div>
    </>
  )
}

export default Aboutme