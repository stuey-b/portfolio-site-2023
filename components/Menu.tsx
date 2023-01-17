import React from 'react'
import { motion, Transition,SVGMotionProps } from "framer-motion";

type Props = {}

const Menu = (props: Props) => {
  return (
    <section className="bg-slate-800">
      <nav className='flex flex-col justify-center h-2/3 text-white text-4xl font-black gap-y-8 '>
        <a href=""><h3>About</h3></a>
        <a href=""><h3>Skills</h3></a>
        <a href=""><h3>Certs</h3></a>
        <a href=""><h3>Projects</h3></a>
        <a href=""><h3>Contact</h3></a>
      </nav>
      
    </section>
  )
}

export default Menu