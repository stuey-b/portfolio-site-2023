import React from 'react'

type Props = {

}

const Contact = (props: Props) => {
  return (
    <section id='contact' className="">
    <div className="InnerSection">
      <h2>Contact<span className='FullStop'>.</span></h2>
        <form className="flex flex-col" action="https://formsubmit.co/579966cea5135f4b6077924ca707340c" method="post">
        <label htmlFor="full-name">Your Name</label>
        <input className='FormInput' id='full-name' name='full-name' type="text" placeholder='Enter your name' required />
        <label htmlFor="email-address">Email Address</label>
        <input className='FormInput' id="email-address" name="email-address" type="email" placeholder='Enter your email address' required />
        <label htmlFor="message-box">Message</label>
        <textarea className='FormInput h-32 ' name="message" id="message-box" cols={10} rows={7}></textarea>
        <button type="submit">Submit</button>
        </form>
      </div>
  </section>
  )
}

export default Contact