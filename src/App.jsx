import AboutSection from "./Components/Aboutme";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import SkillsSection from "./Components/Technologies";
// import Technologies from "./Components/Technologies";


const App = ()=>{

  return<>
  <Navbar/>
  <Hero/>
  {/* <Technologies/> */}
  <SkillsSection/>
  <AboutSection/>
  </>
}

export default App;