import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';


const resume = () => {
  const cv =  'https://drive.google.com/file/d/10gjvGjXlx_xxun3QsihA-Ljrp5m4KQDE/view?usp=share_link';
  return (
    <>
      <Head>
        <title>Sashika | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Sashika Dulaj</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/clint-briley-50056920a/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/sashika20643'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Proven Leadership <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
       I'm Sashika Dulaj Randeni, a passionate undergraduate at the Faculty of Computing in Sabaragamuwa University, Sri Lanka. I breathe life into the web as a full-stack developer, with a particular flair for Python and a love for web animation that adds that extra touch of magic.

On the digital playground, I craft seamless and dynamic experiences, blending functionality with a sprinkle of creativity. My code is the paintbrush, and the internet is my canvas.

When I'm not weaving through lines of code, you'll find me on the cricket field, where every match is a thrilling adventure. And in quieter moments, I'm immersed in the pages of a good book, exploring worlds beyond the screen.

Welcome to my corner of the web, where technology meets imagination. Let's create something extraordinary together!
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>PHP
            <span className='px-2'>|</span>Python
            <span className='px-2'>|</span>Laravel
            <span className='px-2'>|</span>flask
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>Bootstrap
            <span className='px-2'>|</span>Flutter
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> Firebase
            <span className='px-2'>|</span> RESTAPI
          </p>
 
        </div>

 <div className='flex-row w-full justify-items-center align-content-center text-center'><a href={cv}  className='text-center py-3 rounded-lg bg-blue text-gray-600 font-bold text-base pl-10 pr-10 cursor-pointer'>Download</a></div>
      </div>
    </>
  );
};

export default resume;
