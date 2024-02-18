import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <section className='contact container' id='#contact'>
    <div className='contact-card'>
    <div className='otherContact-details'>
          <h2 className='cnt-head'> LETS CONNECT</h2>
       
        </div>
        <form className='cnt-form'>
          <input type="text" placeholder='Name' name='from_name' />
          <input type="email" placeholder='Email Address' email='from_email' />
          <textarea placeholder="Message" name='message' id='form-msg' cols="30" rows="6"/>
          <button type='submit'>Contact</button>
        </form >
        
        
      </div>
      </section>
  )
}

export default Contact