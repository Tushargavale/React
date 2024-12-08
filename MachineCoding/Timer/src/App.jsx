import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import Timer from './Timer';
import Counter from './Counter';
function App() {


  const [user,setUser]=useState({
    username:"",
    password:"",
    email:""
  })  
const Handler=(e)=>{
  // console.log(e.target.value)
  // console.log(e.target.name)
  setUser((prev)=>{
    return {...prev,[e.target.name]:e.target.value}
   })
}  

const ShowData=()=>{
 console.log(user)
}

 
  return (
    <>
   

{/* <Timer></Timer> */} 
{/* <Counter></Counter> */}

    </>
  )
}

export default App
