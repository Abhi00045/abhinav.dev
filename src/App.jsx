import AboutSection from "./Components/Aboutme";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import ProjectsSection from "./Components/Project";
import ResumeCTA from "./Components/resume";
import SkillsSection from "./Components/Technologies";
// import Technologies from "./Components/Technologies";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useEffect } from "react";
import bat from './assets/bat.gif'


const App = ()=>{

    const mainRef = useRef(null);
  const cursor = useRef(null);

  useGSAP(() => {
    const mainElement = mainRef.current;
    const cursorElement = cursor.current;
     //this is mandotory for current changes
    const handleMouseMove = (dets) => {
      // const xGet = dets.x
      // const yGet = dets.y
      // console.log(xGet);
      
      gsap.to(cursorElement,{
        x: dets.x,
        y: dets.y,
        duration:3,
        ease:'power3.out'   
      })
    };
    mainElement.addEventListener("mousemove", handleMouseMove); //similar to js 
  }, []);

  return<>
  <div
      ref={mainRef}
      id="mainRef"
      className="h-screen w-screen" //this is porbably main totally works with useRef
    >
        <img src={bat} ref={cursor} className="w-20 fixed" alt="" />
        <Navbar/>
  <Hero/>
  {/* <Technologies/> */}
  <SkillsSection/>
  <AboutSection/>
  <ProjectsSection/>
  <ResumeCTA/>
    </div>
  </>
}

export default App;