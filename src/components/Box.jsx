import { div } from 'motion/react-client';
import React, { useState,useRef } from 'react'
import { BiLogoGmail } from "react-icons/bi";
import {motion} from "motion/react"


const Box = ({dim, bg, Logo,size,radius, text}) => {
   
    const [hovering, sethovering] = useState(false)
    const boxRef=useRef()
    const logoRef=useRef()
    const [pos, setpos] = useState({x:0, y:0})
    const handleMouseMove=(e,ref)=>{
      sethovering(true)
        if(ref.current){
                const rect = e.currentTarget.getBoundingClientRect();
                setpos({
                  x:e.clientX-rect.left,
                  y:e.clientY- rect.top
                })
                
              }
    }
   
    const handleMouseLeave=()=>{
      sethovering(false)
    }

  return (
  
    <motion.div className=' relative' style={{height:`${dim}px`, width:`${dim}px`}}   onMouseMove={(e)=>{handleMouseMove(e, boxRef)
    }}
    onMouseLeave={handleMouseLeave}
    initial={{x:-50, y:0, opacity:0}}
    whileInView={{x:0, y:0, opacity:1}}
    viewport={{once:true}}
    transition={{duration:0.5}}
    
    >
        <motion.div className=' border-2 absolute top-0  bg-black left-0 flex flex-row items-center   justify-center   ' style={{ height:`${dim}px`, width:`${dim}px` }} ref={boxRef}
        
        
        animate={{
          
          clipPath:`circle(${radius}px at ${pos.x}px ${pos.y}px)`,
          opacity:hovering?1:0
            
        }}
        exit={{clipPath:`circle(0px at ${pos.x}px ${pos.y}px)`}}
        
        transition={{
          duration: 0.5,
    
         
        }}>
           
        </motion.div>
        <div className=' absolute  border-2 rounded-sm flex flex-col items-center  justify-center top-0 left-0 z-1   ' style={{height:`${dim}px`, width:`${dim}px`}}>
            

           <Logo size={size} className="hover:text-white"/>
           {text && <h1 className='text-3xl font-semibold text-black hover:text-gray-400'>{text}</h1>}
        
        </div>
        <logo/>
    </motion.div>
  )
}

export default Box