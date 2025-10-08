import React, { useState } from 'react'
import { motion } from 'motion/react'
import Box from '../components/Box'
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import emailjs from '@emailjs/browser';


const Contact = () => {

    const [name, setname] = useState("")
    const [email, setemail] = useState('')
    const [message, setmessage] = useState('')
    const [website, setwebsite] = useState("")


    const [pos, setPos] = useState({ x: 0, y: 0 })
    const [hovering, sethovering] = useState(false)
    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        sethovering(true)
        setPos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };
    const handleMouseLeave = () => {
        sethovering(false)
    }

    const sendEmail=(e)=>{
        e.preventDefault()
        console.log('sending email')
        const data={
            name,
            email,
            website,
            message
        }
        try {
            emailjs
          .send('service_kj6r0lf', 'template_6z9w6wh', data, {
            publicKey: '2AMdjiq2o4hgha18Q',
          })
            
        } catch (error) {
            console.log({error})
        }
      
    }
    return (
        <div>
            <div className='h-10 w-screen flex items-center justify-center '>
                <h1 className='text-5xl font-bold'>Contact Me</h1>
            </div>
            <div className='w-screen flex flex-col lg:flex-row items-start justify-center px-4 sm:px-8'>
                <div className="left  w-full lg:w-1/2 flex flex-col items-center justify-center gap-6 py-10 ">
                    {/* Spotlight effect container */}
                    <div className="relative w-3/4">
                        <div className="absolute inset-0 rounded-lg pointer-events-none bg-gradient-radial from-white/30 via-white/10 to-transparent opacity-60"></div>
                        
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e)=>{setname(e.target.value)}}
                            className="relative z-10 w-full p-3 mb-4 rounded-lg border border-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-white bg-transparent"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e)=>{setemail(e.target.value)}}
                            className="relative z-10 w-full p-3 mb-4 rounded-lg border border-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-white bg-transparent"
                        />
                        <input
                            type="text"
                            placeholder="Your website (if exists)*"
                            value={website}
                            onChange={(e)=>{setwebsite(e.target.value)}}
                            className="relative z-10 w-full p-3 rounded-lg border border-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-white bg-transparent"
                        />
                        <textarea name="" id="" cols="30"
                        value={message}
                            onChange={(e)=>{setmessage(e.target.value)}}
                         rows="10" placeholder='Your message' className="relative z-10 w-full p-3 rounded-lg border border-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-white bg-transparent mt-5 "></textarea>
                         

                    </div>
                    <div className='flex items-center justify-center gap-5'>


                        <div className='relative h-10 w-48 border-2' onMouseMove={handleMouseMove}
                            onMouseLeave={(e) => { sethovering(false) }}
                            onClick={sendEmail}
                        >
                            <div className='bg-black absolute top-0 left-0 h-10 w-48 text-center pt-1 text-xl font-semibold   text-white'>
                                Get in Touch
                            </div>
                            <motion.div className='bg-white absolute top-0 left-0 h-10 w-48 opacity-0 '
                                animate={{ clipPath: `circle(18px at  ${pos.x}px ${pos.y}px)`, opacity: hovering ? 1 : 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}

                            ></motion.div>
                        </div>
                        <div onClick={()=>{window.location.href = "https://www.instagram.com/m_maurya___"}}>

                        <Box Logo={BiLogoGmail} dim={40} bg={"red"} size={25} radius={10} />
                        </div>

                        <div onClick={()=>{window.location.href = "https://www.linkedin.com/in/mukesh-kumar-824a82276/"}}>

                        <Box Logo={FaLinkedin} dim={40} bg={"red"} size={25} radius={10} />
                        </div>
                        <div onClick={()=>{window.location.href = "https://github.com/mukesh761"}}>

                        <Box Logo={FaGithub} dim={40} bg={"red"} size={25} radius={10} />
                        </div>
                            
                    </div>
                </div>
                <div className="right w-full lg:w-1/2 relative mt-12 px-1">
                <div className='relative bg-white text-black'>
                    <h1 className='font-semibold text-4xl sm:text-5xl leading-tight break-words'>Let's talk about </h1>
                    <h1 className='font-bold text-4xl sm:text-5xl leading-tight break-words'>Something speacial . </h1>
                    <p className='font-semibold mt-5 text-gray-500 break-words'>I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>
                    <div className='mt-4'>
                        <h1 className='text-3xl sm:text-4xl font-semibold break-words'>mukesh737462@gmail.com</h1>
                    </div>
                    <div className='text-3xl sm:text-4xl font-semibold break-words'>+91 8210179679</div>
                </div>
                <div className='hidden lg:block absolute top-0 left-0 bg-white text-black'></div>

                </div>
            </div>
        </div>
    )
}

export default Contact