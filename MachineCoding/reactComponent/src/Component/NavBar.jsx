import { useState } from 'react'
import './NavBar.css'

const NavBAr=()=>{

    // let Auth=true
    const [Auth,setAuth]=useState(false)

    let Item=[
        {
            name:"Home",
            Auth:Auth
        },
        {
            name:"Menu",
            Auth:Auth
        },
        {
             name:"Profile",
             Auth:Auth
        },
        {
            name:"About",
            Auth:true
        },
        {
            name:"Contact",
            Auth:true 
        },
        {
            name:"DashBoard",
            Auth:Auth
        },
        {
            name:"Login",
            Auth:!Auth 
        },
        {
            name:"Signup",
            Auth:!Auth 
        }
    ]



    return(<>
        <div className="container">

            {Item.map((value,index)=>{
                return(<>
               {value.Auth? 
             <div className="nav">
                 <button>{value.name} </button>
             </div>:<></>
 
            
            }
                </>)
            })}

        </div>


        <button onClick={()=>setAuth(!Auth)} >changeState</button>
        
        
        </>)
}


export default NavBAr