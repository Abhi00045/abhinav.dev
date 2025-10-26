

import React from 'react'
import Nav from '../PageComponents/topNav'
import Aboutme from '../PageComponents/Aboutme'
import Footer from '../PageComponents/Footer'
import { InfoCard } from '../PageComponents/infocard'

export const HomePage = () => {
  return (
    <>
      <main>
        <Nav/>
      <Aboutme/>
      <InfoCard/>
      </main>
      <Footer/>
    </>
  )
}

