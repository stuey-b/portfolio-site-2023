import React from 'react'

type Props = {}

const Projects = (props: Props) => {
  return (
    <section id='projects' className='bg-teal-100'>
  <div className="InnerSection">
        <h2>Projects<span>.</span></h2>
        <div className="grid grid-cols-1 gap-y-4 text-sm">
          <div className='flex flex-col just p-8 gap-y-4 bg-slate-500 rounded-tr-3xl rounded-bl-3xl'>
            <h3 className='text-lg font-bold'>Personal Website</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae inventore sint nulla saepe vel optio suscipit illo, facilis veniam, nemo ab perspiciatis earum totam similique error praesentium sunt odio natus!
            </p>
            <div>
              <ul className='flex gap-x-4 font-light text-sm'>
                <li>Next.js</li>
                <li>TS</li>
                <li>Tailwind</li>
                <li>Framer Motion</li>
              </ul>
            </div>
          </div>
          <div className='flex flex-col p-8 gap-y-4 bg-slate-500 rounded-tr-3xl rounded-bl-3xl'>
            <h3 className='text-lg font-bold'>Cat-a-kana: Japanese Study</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae inventore sint nulla saepe vel optio suscipit illo, facilis veniam, nemo ab perspiciatis earum totam similique error praesentium sunt odio natus!
            </p>
            <div>
              <ul className=' flex justify-start gap-x-4 font-light text-sm'>
                <li className=''>React</li>
                <li className=''>Tailwind</li>
              </ul>
            </div>
          </div>
          <div className='flex flex-col p-8 gap-y-4 bg-slate-500 rounded-tr-3xl rounded-bl-3xl'>
            <h3 className='text-lg font-bold'> Organic Website</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae inventore sint nulla saepe vel optio suscipit illo, facilis veniam, nemo ab perspiciatis earum totam similique error praesentium sunt odio natus!
            </p>
            <div>
              <ul className=' flex justify-start gap-x-4 font-light text-sm'>
                <li className=''>HTML</li>
                <li className=''>CSS</li>
                <li className=''>JS</li>
              </ul>
            </div>
          </div>
        
       

 
        </div>
      </div>
    </section>
 
      
 
  )
}

export default Projects