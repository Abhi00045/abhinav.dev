

import React from 'react'
import Nav from '../PageComponents/topNav'
import Aboutme from '../PageComponents/Aboutme'
import Footer from '../PageComponents/Footer'
import { InfoCard } from '../PageComponents/infocard'
import SkillSet from '../PageComponents/SkillSet'
import Projects from '../PageComponents/Projects'
import { Blogs } from '../PageComponents/Blogs'
import Player from '@/utils/player'


export const HomePage = () => {
  return (
    <>
      <main>
        {/* <Nav/> */}
      <Aboutme/>
      <InfoCard/>
      <SkillSet/>
      <Projects/>
      <Blogs/>
      </main>
      <Footer/>
    </>
  )
}

