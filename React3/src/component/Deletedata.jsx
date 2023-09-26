import React from "react"

function Deletedata(data)
{
    console.log(data)
    console.log('================')
    
    

  
     fetch('http://localhost:3000/delete',{method:"POST",
     body:JSON.stringify(data),
    headers:{
        "Content-Type":"application/json"
    }
    
    }).then((data)=>data.json()).then((data)=>{
         console.log(data)
         return data
     })
   
 
    
}

export default Deletedata