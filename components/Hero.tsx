import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

type Props = {}

const Hero = (props: Props) => {
  return (
    <section id='hero' className='bg-amber-100'>
        <div className='InnerSection'>
        <p className=' text-rose-500 text-sm '>What? Stuart is evolving!<i> ~ DUH DUH DUN DUNN! ~</i> <br />Congratulations! Stuart evolved into a... </p> 
        {/* make this dynamic - tea drinker / react/python enthusiast /  */}
        <h1 className='text-6xl font-black text-indigo-800'>Frontend <br /> Developer<span>.</span></h1>
        <p className=''>Hey, I&apos;m Stuart. Don&apos;t freak out..I&apos;m not a Pokemon, but I am wild enough to try and change careers in my mid 30&apos;s. I spent 2022 studying python and web development, now I&apos;m ready to embrace my final evolution as a developer. React, I choose you! </p>
        <div className='flex space-x-4'>
        <button className='bg-transparent w-28 h-10 rounded border-2 font-semibold border-rose-500 text-indigo-800' >Resume</button>
        <button className='bg-transparent w-28 h-10 rounded border-2 font-semibold border-rose-500 text-indigo-800' >Contact</button>
        </div>
      </div>
    </section>
   
     
  

  )
}

export default Hero