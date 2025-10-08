import React from 'react'
import Box from '../components/Box'
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

import { DiMongodb } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { TbBrandNodejs } from "react-icons/tb";
import { FaDocker } from "react-icons/fa";
import { SiNumpy } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";


const Skill = () => {
    return (
        <div>
            <div className='h-10 w-screen flex items-center justify-center mt-10'>
                <h1 className='md:text-4xl font-bold text-3xl lg:text-4xl'>My Skills</h1>
            </div>
            <div className='w-screen flex flex-wrap lg:gap-20 items-center justify-center gap-2'>
                <Box Logo={IoLogoJavascript
                } dim={150} bg={"red"} size={40} radius={30} text={"Javascript"} />

                <Box Logo={FaReact
                } dim={150} bg={"red"} size={40} radius={30} text={"React"} />

                <Box Logo={FaNodeJs
                } dim={150} bg={"red"} size={40} radius={30} text={"Node.js"} />

                <Box Logo={DiMongodb
                } dim={150} bg={"red"} size={40} radius={30} text={"MongoDB"} />

                <Box Logo={FaPython
                } dim={150} bg={"red"} size={40} radius={30} text={"Python"} />

              

                <Box Logo={FaDocker
                } dim={150} bg={"red"} size={40} radius={30} text={"Docker"} />

                <Box Logo={SiNumpy
                } dim={150} bg={"red"} size={40} radius={30} text={"NumPy"} />
                
                <Box Logo={RiTailwindCssFill
                } dim={150} bg={"red"} size={40} radius={30} text={"Tailwind"} />

                
            </div>
        </div>
    )
}

export default Skill