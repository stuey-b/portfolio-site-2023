import React from 'react'

type Props = {}

const Hero = (props: Props) => {
  return (
    <section className=' text-slate-900 flex justify-center items-center  bg-amber-100 h-screen'>
      <div className=' flex flex-col justify-center content-start h-1/3 w-5/6 max-w-xl px-4 space-y-8'>
        <p className='  text-rose-500 text-sm font-light'>What?... Stuart is evolving! (Duh Duh Duh DUN!)<br />Congratulations! Stuart evolved into a... </p> 
        {/* make this dynamic - tea drinker / react/python enthusiast /  */}
        <h1 className='text-6xl font-black text-indigo-800 '>Frontend <br /> Developer<span className='text-rose-500'>.</span></h1>
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