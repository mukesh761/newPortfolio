import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Box from "./components/Box";
import Skill from "./pages/Skill";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
const App=()=>{
return (
  <div className="w-screen overflow-x-hidden">
    <div className="navbar sticky top-0 z-10">
      <Navbar />
    </div>
    <div className="home">
      <Home />
      <div className="flex items-center justify-start bg-gray-400 h-40 gap-10 p-10 ">

      <div onClick={()=>{window.location.href = "https://www.instagram.com/m_maurya___"}}>
        <Box Logo={BiLogoGmail} dim={60} bg={"red"} size={30} radius={10}/></div>
        <div  onClick={()=>{window.location.href = "https://www.linkedin.com/in/mukesh-kumar-824a82276/"}}>

      <Box Logo={FaLinkedin } dim={60} bg={"red"} size={30} radius={10}/>
        </div>
        <div onClick={()=>{window.location.href = "https://github.com/mukesh761"}}>

      <Box Logo={FaGithub } dim={60} bg={"red"} size={30} radius={10}/>
        </div>
      </div>
    </div>
    <div className="md:mt-20">
    <Skill/>

    </div>
    <div className="h-screen">
      <About/>
    </div>
    <div className="h-screen">
      <Projects/>
    </div>
    <div className="">
      
      <Contact/>
    </div>
  </div>
)
}

export default App;