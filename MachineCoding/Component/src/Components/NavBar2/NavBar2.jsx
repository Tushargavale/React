import React from 'react'
import './NavBar2.css'
import { useState } from 'react'
function NavBar2() {


  const [Auth,setAuth]=useState(true)



  let Item=[
    {
      name:"Home",
      url:'/',
      Auth:Auth
    },
    {
      name:"Profile",
      url:'/',
      Auth:Auth
    },
    {
      name:"About",
      url:'/',
      Auth:Auth
    },
    {
      name:"Contact",
      url:'/',
      Auth:Auth
    },
    {
      name:"Register",
      url:'/',
      Auth:Auth
    }
  ]


  return (
    <>
      <div className="Navbar">
        <div className="navbarcontainer container">
          <div className="profile">

          
          </div>
          <ul className="Items">
            {Item.map((value)=>{
              return <li><a href={value.url}>{value.name}</a></li>
            })}
            
          </ul>
        </div>
      </div>
    </>
  )
}

export default NavBar2



