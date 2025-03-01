import React from 'react'
import { useNavigate } from 'react-router-dom'
const Contact = () => {
  const navigate=useNavigate()
  return (
    <div>
        <h1>This is Contact Page</h1>
      <div className="contact-buttons">
        <button onClick={()=>navigate('info')} >Contact Info</button>
       <button onClick={()=>navigate('form')} >Contact Fomr</button>
    
    
      </div>
    </div>
  )
}

export default Contact