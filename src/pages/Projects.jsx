import React, { useState } from 'react'
import Project from '../components/Project'
import {motion} from 'motion/react'
import project1 from "../assets/Screenshot 2025-08-15 171231.png"

const Projects = () => {
    const [pos, setPos] = useState({x:0,y:0})
    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    };
    
    return (
        <div className='relative w-screen   '
        onMouseMove={handleMouseMove}
        >
        <div className=' w-screen bg-black absolute top-0 left-0 p-10'>
            <div className='text-white' >
                <div className='w-screen h-10 flex items-center justify-center'>
                    <h1 className='text-5xl font-semibold'>My <span className='font-bold'>Projects</span> </h1>
                </div>
                <div className="project1 w-full flex flex-col lg:flex-row items-center justify-between">
                    <motion.div className="left w-full lg:w-1/2"
                    initial={{x:-50, opacity:0}}
                    whileInView={{x:0, opacity:1}}
                    viewport={{once:true}}
                    transition={{duration:0.5}}
                    >
                        <div>
                            <img src={project1} alt="" className='w-full h-auto ' />
                        </div>
                    </motion.div>
                    <div className="right w-full lg:w-1/2 mt-6 lg:mt-0">
                        <h1 className='text-6xl font-bold'>01</h1>
                        <h1 className='font-bold text-5xl mt-5'>CodeBuddy - online code editor</h1>
                        <p className='text-gray-400 mt-5'>this is online code editor which helps to collaborate with friends</p>
                    </div>
                </div>
            </div>
        </div>
            <motion.div className=' w-screen bg-white absolute top-0 left-0 p-10'
            animate={{clipPath:`circle(50px at ${pos.x}px ${pos.y}px)`}}
            transition={{duration:0.5}}
            >
              <div className='text-black invert' >
                <div className='w-screen h-10 flex items-center justify-center'>
                    <h1 className='text-5xl font-semibold'>My <span className='font-bold'>Projects</span> </h1>
                </div>
                <div className="project1 w-full flex flex-col lg:flex-row items-center justify-between">
                    <div className="left w-full lg:w-1/2">
                        <div>
                            <img src={project1} alt="" className='w-full h-auto hover:scale-110' />
                        </div>
                    </div>
                    
                </div>
            </div> 
            </motion.div>
        </div>
    )
}

export default Projects
