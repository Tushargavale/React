

import React from 'react'
import './NavBar2.css'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
function NavBar2() {


  const [Auth,setAuth]=useState(true)



  let Item=[
    {
      name:"Home",
      url:'/',
      Auth:Auth
    },
    {
      name:"Products",
      url:'/AllProducts',
      Auth:Auth
    },
    {
      name:"Cart",
      url:'/',
      Auth:Auth
    },

  ]


  return (
    <>
      <div className="Navbar">
        <div className="navbarcontainer container">
          <div className="profile">

          
          </div>
          <ul className="Items">
            {Item.map((value)=>{
              return  <li><NavLink to={value.url} >{value.name}</NavLink></li>
            })}
            
          </ul>
        </div>
      </div>
    </>
  )
}

export default NavBar2



