import React from 'react'
import {NavLink,useNavigate} from 'react-router-dom'

const NavBar = () => {

  const navigate=useNavigate()



  return (
   <>
   <div className="NavBar">

   
   <img src='../../public/image.png' alt="Logo" />
   <ul>
    <NavLink to="/"><li>Home</li></NavLink>  
    <NavLink to='/product'><li>Product</li></NavLink>
    <NavLink to="/about" ><li>About</li></NavLink>
    <NavLink to="/contact"><li>Contact</li></NavLink> 
    <NavLink to="/jobs" > <li>Jobs</li> </NavLink>
   
   
   </ul>
     <button onClick={()=>navigate('/about',{replace:true})} >Get Started</button>
   </div>
   </>
  )
}

export default NavBar