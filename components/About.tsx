import React from 'react'
import Image from 'next/image'

type Props = {}

const About = (props: Props) => {
  return (
    <section className='px-14 flex flex-col justify-center bg-emerald-100 h-screen'>
      <div className='flex flex-col justify-center h-2/3'>
      <h2 className='text-4xl font-black text-slate-900'>About Me<span className='text-pink-500'>.</span></h2>
      <div className='gap-4'>
        <Image className='-mt-12 -mb-16'
        src="/logo.png"
        alt='logo'
        width={512}
        height={512}
        />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eaque ab in officiis dicta enim. Ab necessitatibus iusto ad accusamus deserunt eos nemo provident dolorem, exercitationem explicabo blanditiis enim voluptate maiores porro quaerat tenetur accusantium ratione laboriosam repellat atque mollitia eveniet doloribus? Itaque nam laboriosam fugit aliquam facere amet nihil nobis! Amet aliquam eaque consequuntur quod quibusdam vitae doloremque nemo animi, aliquid sequi eligendi deleniti omnis libero! Velit sit ratione fuga doloremque aspernatur laboriosam earum debitis nostrum officiis? Mollitia laboriosam ipsam cum fuga qui sed ex eos natus voluptatum cumque, repellat eum libero tempore excepturi nemo ipsum assumenda iure at nobis dolorum. Ad alias reprehenderit nam quo eius expedita fugiat totam quam, neque accusantium </p>
      </div>

      </div>
      
    </section>
  )
}

export default About