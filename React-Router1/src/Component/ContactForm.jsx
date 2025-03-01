import React from 'react'

const ContactForm = () => {
  return (
   <>
   <form >
    <input type="text" placeholder='Name' />
    <br /><br />
    <input type="email" placeholder='email' />
    <br />
    <br />
    <textarea name="" id="" placeholder='Message' ></textarea>
    <br />
    <br />
    <button type='submit' ></button>
    </form>
   </>
  )
}

export default ContactForm