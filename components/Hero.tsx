"use client"

import React from 'react'

type Props = {

}

const Hero = (props: Props) => {
  return (
    <section id='hero' className=''>
        <div className='InnerSection'>
        
        <p className=' text-xs md:text-base'>What? Stuart is evolving!<br />Congratulations! Stuart evolved into a... </p>
        <h1>Web <br /> Developer<span className='FullStop'>.</span></h1>
        <p className=' text-xs md:text-lg xl:max-w-4xl'>Hey, I&apos;m Stuart. Don&apos;t freak out..I&apos;m not a Pokemon, but I am wild enough to try and change careers in my mid 30&apos;s. Intrigued? Here&apos;s my story...</p>
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