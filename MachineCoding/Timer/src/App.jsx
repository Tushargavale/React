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
<div className="form">
  <label>Input</label>
  <input type="text" name='username' value={user.username} onChange={(e)=>{Handler(e)}} />
  <br /><br /><br />

  <label>Password</label>
  <input type="text" name='password' value={user.password} onChange={(e)=>{Handler(e)}} /> 
  <br /><br />

  <label>Email</label>
  <input type="text" name='email' value={user.email} onChange={(e)=>{Handler(e)}} />
  <br />
  <br />
  <button onClick={ShowData} >Submit</button>

</div>
    </>
  )
}

export default App
