
import React from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Header from '../components/Menu'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Certs from '../components/Certs'

type Props = {}

const Home = (props: Props) => {

  return (
    
    <div className='SnapContainer'>
      <Header />
      <Hero/>
      <About/>
      <Skills/>
      <Certs/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
     
  
  )
}

export default Home