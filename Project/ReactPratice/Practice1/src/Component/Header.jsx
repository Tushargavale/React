import React from 'react'

import {Link,useNavigate} from 'react-router-dom'


function Header() {

  const navigate=useNavigate()
  const Authstate=false
//   let NavItem=[
      
//     {
//         name:'Login',
//         slug:'/Login',
//         value:!Authstate
//     },
//     {
//         name:'Signup',
//         slug:'/Signup',
//         value:!Authstate
//     },
//     {
//         name:`All blog`,
//         slug:'/AllBlogs',
//         value:Authstate
//     },
//     {
//         name:'Post',
//         slug:'/Post',
//         value:Authstate
//     },
    
    
// ]
    

let NavItem=[
  {
  name:"Home",
  slug:'/Home',
  value:true
  },
  {
    name:"About",
    slug:"/About",
    value:true 
  },
  {
    name:"Contact",
    slug:'/Contact',
    value:true
  },
  {
    name:"Login",
    slug:'/Login',
    value:!Authstate 
  },
  {
    name:"Signup",
    slug:'/Signup',
    value:!Authstate
  },
  {
    name:'Profile',
    slug:"/Profile",
    value:Authstate
    
  }








]





  return (
    <>
   
    <header className="fixed top-0 left-0 right-0 bg-blue-600 text-white shadow-md z-50">
    
        <nav className="flex items-center py-4">
          <div className="flex-shrink-0">
            <Link to="/">
              <img src="path/to/logo.png" alt="Logo" className="h-10" /> {/* Add your logo path */}
            </Link>
          </div>  


          
          <ul className="flex ml-auto space-x-6">  
              
       {
              <li>
                <button onClick={()=>navigate('/')}  className='inline-block px-6 py-2 bg-white text-blue-600 rounded-full hover:bg-blue-100 transition duration-200' >
                  About
                </button>
              </li>
            }


           

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
   
   </>
  );
}

export default Header