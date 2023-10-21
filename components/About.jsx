import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
          Hey there! I'm Sashika Dulaj Randeni, a passionate undergraduate at the Faculty of Computing in Sabaragamuwa University, Sri Lanka. I breathe life into the web as a full-stack developer, with a particular flair for Python and a love for web animation that adds that extra touch of magic.

On the digital playground, I craft seamless and dynamic experiences, blending functionality with a sprinkle of creativity.

When I'm not weaving through lines of code, you'll find me on the cricket field, where every match is a thrilling adventure. And in quieter moments, I'm immersed in the pages of a good book, exploring worlds beyond the screen.

          </p>
          <p className='py-2 text-gray-600'>
          Welcome to my corner of the web, where technology meets imagination. Let's create something extraordinary together!

          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
