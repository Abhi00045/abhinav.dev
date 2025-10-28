

import React from 'react'
import Nav from '../PageComponents/topNav'
import Aboutme from '../PageComponents/Aboutme'
import Footer from '../PageComponents/Footer'
import { InfoCard } from '../PageComponents/infocard'
import SkillSet from '../PageComponents/SkillSet'
import Projects from '../PageComponents/Projects'

export const HomePage = () => {
  return (
    <>
      <main>
        <Nav/>
      <Aboutme/>
      <InfoCard/>
      <SkillSet/>
      <Projects/>
      </main>
      <Footer/>
    </>
  )
}

