
import React, { useState } from 'react'



type Props = {
  closeMenu: boolean
  showMenu: boolean


}

const Menu = (props: Props) => {

  return (

    <section className="bg-white fixed top-0 left-0 w-screen">
      <nav>
        <div className='flex flex-col text-black text-4xl font-black gap-y-8' >
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Project</a>
        <a href="#contact">Contact</a>

        </div>
        
      </nav>
      
    </section>
  )
}

export default Menu