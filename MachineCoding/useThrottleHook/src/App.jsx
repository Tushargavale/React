import { useCallback, useEffect, useState } from 'react'
import useThrottle from './useThrottle'
import isOnline from './useOnline'
import './App.css'

function App() {
  
 const [size,setSize]=useState({
  width:window.innerWidth
 })
  

  const foo=useCallback((a)=>{
    setSize({
       width:window.innerWidth
    })   
   
  },[])

   let fn=useThrottle(foo,500)
    useEffect(()=>{
   window.addEventListener('resize',fn)
   
   return ()=>window.removeEventListener('resize',fn)
  },[])
  

  return (
    <>
     <h1>{size.width}</h1>
    </>
  )
}

export default App
 