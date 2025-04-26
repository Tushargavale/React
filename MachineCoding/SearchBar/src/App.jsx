import { useEffect, useState } from 'react'

import './App.css'

function App() {  

  const [result,setResult]=useState([])
  const [input,setInput]=useState('')

  async function APICALL() {
      let data=await fetch(`https://dummyjson.com/recipes/search?q=${input}`)
      let resp=await data.json()
      setResult(resp.recipes)
    }

  useEffect(()=>{
    //    APICALL()
    let timer;
    timer=setTimeout(() => {
      APICALL()
    }, 1000);
    

    return ()=>clearTimeout(timer)
  },[input])
  

  return (
    <>
     <div>
      Search Bar 
      <div>
        <input type="text" style={{backgroundColor:'white' ,color:'black' , padding:'5px'}} 
        onChange={(e)=>setInput(e.target.value)}
        value={input}
        />
         <li>
            {result.map((item,key)=>{
              return <div style={{
                border:'1px solid black',
                cursor:'pointer',                
              }}
              key={key}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'lightblue'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
              onClick={()=>setInput(item.name)}              
              >{item.name}</div>
            })}
         </li>
      </div>
      </div> 
    </>
  )
}

export default App
