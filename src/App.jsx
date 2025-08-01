import AboutSection from "./Components/Aboutme";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import ProjectsSection from "./Components/Project";
import ResumeCTA from "./Components/resume";
import SkillsSection from "./Components/Technologies";
// import Technologies from "./Components/Technologies";


const App = ()=>{

  return<>
  <Navbar/>
  <Hero/>
  {/* <Technologies/> */}
  <SkillsSection/>
  <AboutSection/>
  <ProjectsSection/>
  <ResumeCTA/>
  </>
}

export default App;