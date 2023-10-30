import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaHackerrank, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { motion, spring } from "framer-motion"

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
<motion.div
initial={{
  x:-200,
}}
animate={{
  x:0
}}
transition={{
 
  duration:1,
  type:"spring",
  stiffness:120
}}

>


          <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I&#39;m <span className='text-[#5651e5]'> Sashika</span>
          </h1>
          </motion.div>

          <motion.div
initial={{
  x:200,
}}
animate={{
  x:0
}}
transition={{
 
  duration:1,
  type:"spring",
  stiffness:120
  
}}

>
          <h1 className='py-2 text-gray-700'>A Fullstack Web Developer</h1>
          </motion.div>
          <motion.div
initial={{
  y:10,
  opacity:0
}}
animate={{
  y:0,
  opacity:1,
}}
transition={{
 
  duration:1,
  delay:.5
}}

>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
          👋 Hey there, I'm Sashika Dulaj, a passionate student in the Computing Faculty at Sabaragamuwa University, Sri Lanka. 🌐 As a web developer and Python enthusiast, I thrive on creative problem-solving and interactive design. Join me on my journey of turning ideas into digital reality! 💻✨ #CodeDreamCreate
          </p>
         
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
          <motion.div
whileTap={{
  rotate:30
}}
transition={{
 
  duration:.2,

}}

>
            <a
              href='https://www.linkedin.com/in/sashika-dulaj-684b8a203'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            </motion.div>
            <a
              href='https://www.youtube.com/@codemonster8240'
              target='_blank'
              rel='noreferrer'
            >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaYoutube />
              </div>
            </a>
            <a
              href='https://github.com/sashika20643'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <a
              href='https://www.hackerrank.com/profile/codemonster20643'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaHackerrank />
              </div>
            </a>

            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Main;
