import { useEffect, useState } from 'react'

import './App.css'

function App() {  

  const [result,setResult]=useState([])
  const [input,setInput]=useState('')
  const [show,setShow]=useState(false)

  async function APICALL() {
      let data=await fetch(`https://dummyjson.com/recipes/search?q=${input}`)
      let resp=await data.json()
      setResult(resp.recipes)
    }

  useEffect(()=>{
   
    let timer;
    timer=setTimeout(() => {
      APICALL()
    }, 1000);
    

    return ()=>clearTimeout(timer)
  },[input])
  

  return (
    <>
     <div className="flex">
      <input type="text"
      value={input}
      onChange={(e)=>setInput(e.target.value)}
      placeholder='search'
      className="flex border border-gray-300 rounded-md m-auto w-1/3 mt-10 p-1 focus:outline-none focus:ring-2 focus:ring-blue-500" />
     </div>
     <div className="w-1/3 m-auto mt-1 flex flex-col gap-0 max-h-60 overflow-auto">
     {result.map((item, index) => (
     <div
      key={index}
      className="border p-2 rounded-md cursor-pointer hover:bg-blue-100"
      onClick={()=>setInput(item.name)}    >
      {item.name}
    </div>
  ))}
</div>
    </>
  )
}

export default App
