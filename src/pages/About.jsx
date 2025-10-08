import React, { useState } from 'react'
import aboutme from '../assets/about-me.svg'
import { motion } from "motion/react"

const About = () => {
    const [pos, setPos] = useState({ x: 0, y: 0 })
    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect();
        setPos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };
    return (
        <div className='flex w-full mt-10 px-4 sm:px-10 items-center justify-between flex-col lg:flex-row'>
            <motion.div className='left w-full lg:w-1/2'
                onMouseMove={handleMouseMove}
                initial={{x:-50}}
                whileInView={{x:0}}
                viewport={{once:true}}
                transition={{duration:0.5}}
            >
                <div className='relative w-full h-64 sm:h-80 lg:h-[500px] overflow-hidden'>
                    <img src={aboutme} alt="" className='absolute inset-0 w-full h-full object-contain' />
                    <motion.img src={aboutme} alt="" className='absolute inset-0 w-full h-full object-contain invert'
                        animate={{ clipPath: `circle(40px at ${pos.x}px ${pos.y}px)` }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
            </motion.div>
            <motion.div className="right w-full lg:w-1/2 px-1"
            initial={{x:50 , opacity:0}}
                whileInView={{x:0 , opacity:1}}
                viewport={{once:true}}
                transition={{duration:0.5}}>
                <div>

                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-semibold break-words'>About <span className='font-bold'>Me</span></h1>
                
                <p className='mt-6 sm:mt-8 text-base sm:text-lg leading-relaxed break-words'>
                    I'm a passionate full-stack developer specializing in **React.js & Node.js**. I thrive on blending technical expertise with sleek UI/UX design to build high-performing, user-friendly applications.</p>
                <p className='mt-6 sm:mt-8 text-base sm:text-lg leading-relaxed break-words'>
                    My web development journey started in **2024**, and since then, I've continuously evolved, taking on new challenges and keeping up with the latest technologies. Today, I build **cutting-edge web applications** using **React.js, javaScript, TailwindCSS, nodeJs,  and more**.
                </p>
                <p className='mt-6 sm:mt-8 text-base sm:text-lg leading-relaxed break-words '>
                    Beyond coding, I enjoy sharing insights on **Instagram**, engaging with **Indie Hackers**, and following the journey of **early-stage startups**. Feel free to follow me on **instagram** check out my projects on **GitHub**.
                </p>
            </div>
                </motion.div>
        </div>
    )
}

export default About
