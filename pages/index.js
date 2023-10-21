import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Sashika | Front-End Developer</title>
        <meta name="description" content="👋 Hey there, I'm Sashika Dulaj, a passionate student in the Computing Faculty at Sabaragamuwa University, Sri Lanka. 🌐 As a web developer and Python enthusiast, I thrive on creative problem-solving and interactive design. Join me on my journey of turning ideas into digital reality! 💻✨ #CodeDreamCreate" />
        <link rel="icon" href="/fav.png" />
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}
