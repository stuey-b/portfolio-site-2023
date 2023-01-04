import React from 'react'
import About from '../components/About'
import Certs from '../components/Certs'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Header from '../components/Header'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

type Props = {}

const Home = (props: Props) => {
  return (
    <>
      <Header />
      {/* <Hero/>
      <About/>
      <Skills/>
      <Certs/>
      <Projects/>
      <Contact/> */}
      <Footer/>
    </>
  )
}

export default Home