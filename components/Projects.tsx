import React from 'react'

type Props = {}

const Projects = (props: Props) => {
  return (
    <section id='projects' className='bg-teal-100'>
  <div className="InnerSection">
        <h2>Projects<span>.</span></h2>
        <div className="grid grid-cols-1 gap-y-4 auto-rows-fr text-sm md:text-base">
          <div className='flex flex-col justify-center p-8 gap-y-4 bg-slate-500 rounded-tr-3xl rounded-bl-3xl'>
            <h3 className='text-lg font-bold'>Personal Website</h3>
            <p>I wanted somewhere to post my growing portfolio of web development projects and to show off my personality and design skills. I plan to incorporate Framer Motion animations in the near future.
            </p>
            <div>
              <ul className='flex gap-x-4 font-light text-sm'>
                <li>Next.js</li>
                <li>TS</li>
                <li>Tailwind CSS</li>
                {/* <li>Framer Motion</li> */}
              </ul>
            </div>
          </div>
          <div className='flex flex-col justify-center p-8 gap-y-4 bg-slate-500 rounded-tr-3xl rounded-bl-3xl'>
            <h3 className='text-lg font-bold'>Cat-a-kana: Japanese Study</h3>
            <p>Cool name ay? Learning the Japanese syllabaries can be stressful, so I created something simple that people could use on the go. A cute cat judges your score and provides encouragement.
            </p>
            <div>
              <ul className=' flex justify-start gap-x-4 font-light text-sm'>
                <li className=''>React</li>
                <li className=''>Tailwind CSS</li>
              </ul>
            </div>
          </div>
          <div className='flex flex-col justify-center p-8 gap-y-4 bg-slate-500 rounded-tr-3xl rounded-bl-3xl'>
            <h3 className='text-lg font-bold'> Organic Produce Website</h3>
            <p>I took a design from the internet and tried my best to recreate it using HTML, CSS and Javascript. I  made some tweaks to improve the desktop UI, made the site responsive and added a functioning mobile menu.
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