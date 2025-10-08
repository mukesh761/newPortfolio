import React, { useState } from 'react'
import { motion } from "motion/react"
import { RxHamburgerMenu } from "react-icons/rx";
import HamBurger from './HamBurger';

const Navbar = () => {
    
  return (
    <div>
        <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='h-20 bg-white flex w-screen justify-between p-5 items-center sticky top-0  '>
            <div className='left'>
                <h1 className='text-3xl font-bold'>MUKESH</h1>
            </div>

            
            <div className='right '>
                <div className='h-10 w-40 border-2   text-center shadow-[2px_5px_2px_rgba(0,0,0,1)] hover:shadow-none  hover:bg-black hover:text-white transition-all'> <h1 className='text-xl '>Resume</h1></div>
                
            </div>
    </motion.div>
    
        </div>
  )
}

export default Navbar