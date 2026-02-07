

import { image, Name, selfRole, shortBio,  } from '@/AbhiData/data'
import {NameShort} from '@/AbhiData/data'
import React from 'react'
import pfp from '@/assets/pfp.jpg'
import Image from 'next/image'

function Aboutme() {
  return (
    <>
    <div className="flex flex-row items-start mt-10 mb-10 gap-4  ">
        <div>
        <img src="https://s3.amazonaws.com/comicgeeks/characters/avatars/55679.jpg?t=1726374087" alt="" className='w-32 h-32 mx-auto border rounded-2xl border-none' />
        {/* <Image
      src="/assets/profile.jpeg"
      alt="Profile"
      width={300}
      height={300}
      className=mx-auto border rounded-2xl border-none'
      priority
    /> */}
        </div>
        <div className="flex flex-col items-start">
            <h1 className="text-5xl text-center mt-2 px-0.5 font-bold">hi, iam {NameShort}</h1>
            <h2 className="text-xl text-center text-white mt-2 px-0.5">{selfRole}</h2>
            <p className="text-center text-white mt-1">{shortBio}</p>  
        </div>
    </div>
    </>
  )
}

export default Aboutme