import React, { useRef, useState } from 'react'
import hero from '../assets/hero-vector.svg'
import { motion } from "motion/react"
import { style } from 'motion/react-client';


const Home = () => {
  const outlineRef = useRef();
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [outlinePos, setoutlinePos] = useState({ x: 0, y: 0 })
  const radius = 40; // px
  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const showOutline = (e) => {
    if (outlineRef.current) {
      const rect = e.target.getBoundingClientRect()
      setoutlinePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      })
      outlineRef.current.style.display = "block"
    }
  }
  return (
    <div className='w-screen flex p-10  
          bg-transparent flex-col-reverse lg:flex-row'  >
      <div className='left w-full lg:w-1/2 flex flex-col items-start justify-center mt-12 relative'>
        <motion.h1

          className='text-3xl sm:text-4xl lg:text-5xl font-bold overflow-hidden relative inline-block'>Hello, I'm  <motion.div
            initial={{ opacity: 1, width: 20 }}
            animate={{ opacity: 1, width: '' }}
            transition={{ duration: 2 }}
            className='relative block overflow-hidden align-baseline ml-2 md:h-16 h-10  w-96 ' onMouseMove={showOutline}>

            <motion.h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold absolute top-0 left-0  transition-[all_ease-in-out_0.02s]' animate={{ clipPath: `circle(30px at ${outlinePos.x}px ${outlinePos.y}px)` }} transition={{ duration: 0.5 }} ref={outlineRef}>Mukesh Maurya</motion.h1>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold absolute top-0 md:h-60 left-0' style={{ WebkitTextStroke: '1px black', color: 'transparent' }} >Mukesh Maurya</h1>
          </motion.div></motion.h1>
        <h1 className='text-5xl font-semibold'>FullStack Developer</h1>

        <p className='text-xl mt-4 text-gray-500'>A passionate web developer with a knack for creating dynamic and responsive web applications.</p>


      </div>
      <div className="right w-full lg:w-1/2 flex min-h-56 ">
        <div className='relative inline w-full h-full ' onMouseMove={handleMouseMove} ref={containerRef}>

          <img src={hero} alt="" className='absolute top-0 left-0  min-h-full   ' />
          <motion.img src={hero} alt="" className='absolute top-0 min-h-full  right-0 invert transition-colors pointer-events-none'
            animate={{
              clipPath: `circle(${radius}px at ${pos.x}px ${pos.y}px)`,
              WebkitClipPath: `circle(${radius}px at ${pos.x}px ${pos.y}px)`,
            }}
            transition={{
              duration: 0.5,

            }}
          />
        </div>
      </div>
    </div>


  )

}

export default Home