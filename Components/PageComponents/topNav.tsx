"use client"
import { LocalTime } from '@/utils/localTime'
import Available from '@/utils/online'
import React from 'react'

function Nav() {
  return (
    <>
   <nav className='flex justify-between p-1.5'>
     <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          background: '#d4c5b0',
          borderTop:    '2px solid #fff8f0',
          borderLeft:   '2px solid #fff8f0',
          borderRight:  '2px solid #7a6a50',
          borderBottom: '2px solid #7a6a50',
          padding: '2px 10px',
          boxSizing: 'border-box',
        }}>
        <p>Local Time : 
        </p><LocalTime/>
    </div>
    <div  >
        <Available/>
    </div>
   </nav>
    </>
  )
}

export default Nav