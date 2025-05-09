import React from 'react'
import Contact from '../Pages/Contact'
import { Outlet } from 'react-router-dom'
const ContactLayout = () => {
  return (
<>
    <Contact></Contact>
    <Outlet/>
</> 
  )
}

export default ContactLayout