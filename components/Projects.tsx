import React from 'react'

type Props = {}

const Projects = (props: Props) => {
  return (
    <section className="px-14 flex flex-col justify-center bg-teal-100 h-screen">
      <div className=" flex flex-col justify-center h-2/3 gap-4">
        <h2 className="text-4xl font-black text-slate-900">
          Projects<span className="text-pink-500">.</span>
        </h2>
        <div className=" flex flex-col justify-center">
            <div className="grid grid-cols-1">
                <h3>Project 1</h3>
                
                <button className= 'w-28 h-10 rounded border-2 font-semibold border-slate-800'>Certificate</button>
            </div>
            
        </div>
      </div>
    </section>
  )
}

export default Projects