import React from "react";
import {useNavigate ,Link  } from 'react-router-dom'



export const Header=()=>{
const navigate=useNavigate()
const Authenticated=false

const NavItem=[
    {
        name:"Home",
        slug:'/',
        value:true
    },
    {
        name:'Contact',
        slug:'/Contact',
        value:true
    },
    {
        name:'Login',
        slug:'/Login',
        value:!Authenticated
    },
    {
        name:'Signup',
        slug:'/Signup',
        value:!Authenticated
    },
    {
        name:'Profile',
        slug:'/Profile',
        value:Authenticated
    }
]

    return(<>
    <header className="fixed top-0 left-0 right-0 bg-blue-600 text-white shadow-md z-50">
    
    <nav className="flex items-center py-4">
      <div className="flex-shrink-0">
        <Link to="/">
          <img src="path/to/logo.png" alt="Logo" className="h-10" /> {/* Add your logo path */}
        </Link>
      </div>  


      
      <ul className="flex ml-auto space-x-6">  
          
      

        {
          NavItem.map((item)=>
            item.value? (
              <li key={item.name} >
                <button
                onClick={()=>navigate(item.slug)}
                className="inline-block px-6 py-2 bg-white text-blue-600 rounded-full hover:bg-blue-100 transition duration-200"
                >

                  {item.name}

                </button>
               
              </li>
            ): null
          )
        }
      </ul>
    </nav>
 
</header>

    </>)
}
