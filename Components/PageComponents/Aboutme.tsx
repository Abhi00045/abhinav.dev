

import { image, Name, selfRole, shortBio } from '@/AbhiData/data'
import React from 'react'

function Aboutme() {
  return (
    <>
    <div className="flex flex-row items-start mt-10 mb-10 gap-4">
        <div>
            <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.motorsport.com%2Fdriver%2Flando-norris%2F289316%2F&psig=AOvVaw0d5z6fFdq6Jr9PqEghEymu&ust=1761595106044000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCKiH5KfTwpADFQAAAAAdAAAAABAV' alt="Profile Picture" className="w-32 h-32 mx-auto"/>
        </div>
        <div className="flex flex-col items-start">
            <h1 className="text-2xl font-medium text-center mt-2 px-0.5">{Name}</h1>
            <h2 className="text-xl text-center text-gray-600 mt-2 px-0.5">{selfRole}</h2>
            {/* <p className="text-center text-gray-700 mt-1">{shortBio}</p>   */}
        </div>
    </div>
    </>
  )
}

export default Aboutme