import { useState } from 'react'
import useDebounce from './useDebounce'
import { useEffect } from 'react'

function App() {
 const [windowsize,setWindowsize]=useState({
  width:window.innerWidth,
  height:window.innerHeight
 }) 

 const Handler=()=>{
  setWindowsize({
  width:window.innerWidth,
  height:window.innerHeight
  })
 }

 const debounceFun=useDebounce(Handler,500)

 useEffect(()=>{
  window.addEventListener('resize',debounceFun)

  return ()=>window.addEventListener('resize',debounceFun)
 },[])




  return (
    <>
       <h1>{`Width is : ${windowsize.width}`}</h1> 
    </>
  )
}

export default App
