"use client"
import { LocalTime } from '@/utils/localTime'
import Available from '@/utils/online'
import React from 'react'

function Nav() {
  return (
    <>
   <nav className='flex justify-between'>
     <div className='flex gap-1 border-b-blue-950'>
        <p>Local Time : 
        </p><LocalTime/>
    </div>
    <div>
        <Available/>
    </div>
   </nav>
    </>
  )
}

export default Nav