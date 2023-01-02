import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <section className='px-14 flex flex-col justify-center bg-emerald-100 h-screen'>
      <h2 className='text-4xl font-black text-slate-900'>About Me<span className='text-pink-500'>.</span></h2>
      <div className='  gap-4'>
      <img className="mx-auto -mb-8" src="logo.png" alt="logo" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eaque ab in officiis dicta enim. Ab necessitatibus iusto ad accusamus deserunt eos nemo provident dolorem, exercitationem explicabo blanditiis enim voluptate maiores porro quaerat tenetur accusantium ratione laboriosam repellat atque mollitia eveniet doloribus? Itaque nam laboriosam fugit aliquam facere amet nihil nobis! Amet aliquam eaque consequuntur quod quibusdam vitae doloremque nemo animi, aliquid sequi eligendi deleniti omnis libero! Velit sit ratione fuga doloremque aspernatur laboriosam earum debitis nostrum officiis? Mollitia laboriosam ipsam cum fuga qui sed ex eos natus voluptatum cumque, repellat eum libero tempore excepturi nemo ipsum assumenda iure at nobis dolorum. Ad alias reprehenderit nam quo eius expedita fugiat totam quam, neque accusantium magni vel exercitationem sapiente eligendi, inventore repudiandae cumque vero ipsam temporibus! Unde autem consequatur repudiandae voluptatibus in velit mollitia ad, architecto ducimus odit assumenda veniam recusandae enim cumque officiis repellendus, dignissimos quod maxime dicta libero neque id! Vero nam, cum voluptatum necessitatibus perspiciatis vel provident doloremque error aliquam maxime quia iure sint in asperiores impedit! Quae possimus quo optio expedita reiciendis iste earum sapiente?</p>


      </div>
    </section>
  )
}

export default About