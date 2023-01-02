import React from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

type Props = {}

const Home = (props: Props) => {
  return (
    <>
    <Hero/>
    <About/>
    {/* <Skills/> */}
    {/* <Projects/> */}
    {/* <Contact/> */}
    {/* <Footer/> */}
    </>
  )
}

export default Home