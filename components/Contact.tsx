import React from 'react'

type Props = {

}

const Contact = (props: Props) => {
  return (
    <section className="px-14 flex flex-col justify-center bg-red-100 h-screen">
    <div className=" flex flex-col justify-center h-2/3 gap-4">
      <h2 className="text-4xl font-black text-slate-900">
        Contact<span className="text-pink-500">.</span>
      </h2>

        <form className="flex flex-col" action="https://formsubmit.co/579966cea5135f4b6077924ca707340c" method="post">
        <label htmlFor="full-name">Your Name</label>
        <input id='full-name' name='full-name' type="text" placeholder='Enter your name' required />
        <label htmlFor="email-address">Email Address</label>
        <input id="email-address" name="email-address" type="email" placeholder='Enter your email address' required />
        <label htmlFor="message-box">Message</label>
        <textarea name="message" id="message-box" cols={10} rows={7}></textarea>
        <button type="submit">Submit</button>
       

        </form>
      </div>
  </section>
  )
}

export default Contact