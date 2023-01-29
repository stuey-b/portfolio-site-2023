import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

type Props = {}

const Hero = (props: Props) => {
  return (
    <section id='hero' className='bg-amber-100'>
        <div className='InnerSection'>
        <p className=' text-rose-500 text-sm md:text-base'>What? Stuart is evolving!<br />Congratulations! Stuart evolved into a... </p> 
        <h1 className='text-6xl lg:text-7xl font-black text-indigo-800'>Frontend <br /> Developer<span>.</span></h1>
        <p className='md:text-lg'>Hey, I&apos;m Stuart. Don&apos;t freak out..I&apos;m not a Pokemon, but I am wild enough to try and change careers in my mid 30&apos;s. Intrigued? Here&apos;s my story...</p>
        <div className='flex space-x-4'>
          <a href="/sb-cv.pdf" target="_blank"
          ><button>Resume</button>
          </a>
          <a href="#contact
          "><button>Contact</button>
          </a>
        
        
        </div>
      </div>
    </section>
   
     
  

  )
}

export default Hero