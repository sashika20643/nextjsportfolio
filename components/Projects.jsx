import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/metait.png';
import cryptoImg from '../public/assets/projects/encrypto.png'
import netflixImg from '../public/assets/projects/social-lips.png'
import twitchImg from '../public/assets/projects/moviehub.png'
import crtozio from '../public/assets/projects/crotzio.png'
import blog from '../public/assets/projects/blog.png'
import youtube from '../public/assets/projects/youtube.png'


import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Metaitopticals'
            backgroundImg={propertyImg}
            projectUrl='https://metaitoptical.com/'
            tech='Laravel/payhere/JS/Bootstrap/HTML'
          />
   <ProjectItem
            title='Crotzio'
            backgroundImg={crtozio}
            projectUrl='https://github.com/sashika20643/crotzio.git'
            tech='Laravel/Bootstrap'
          />

            <ProjectItem
            title='Movie-Hub'
            backgroundImg={twitchImg}
            projectUrl='https://github.com/sashika20643/Moviehub-react-'
            tech='React JS/OMDB API'

          />
                 <ProjectItem
            title='Reporter'
            backgroundImg={blog}
            projectUrl='https://github.com/sashika20643/blog-app.git'
            tech='Laravel/Bootstrap/Js/HTML'

          />
                <ProjectItem
            title='Social Lips'
            backgroundImg={netflixImg}
            projectUrl='https://github.com/orgs/Social-Lips/repositories'
            tech='Python/Flask/React/Mongo/Firestore/React Js/Node Js'

          />
          <ProjectItem
            title='Encrypto'
            backgroundImg={cryptoImg}
            projectUrl='https://github.com/sashika20643/encrypto-web'
            tech='Laravel/Bootstrap/Python/Flask'

          />
             <ProjectItem
            title='Ymate'
            backgroundImg={youtube}
            projectUrl='https://github.com/sashika20643/ymate'
            tech='Python/flask/pytube'

          />
       
    
        
        </div>
      </div>
    </div>
  );
};

export default Projects;
