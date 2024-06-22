
import React from "react"
import { useState ,useContext } from "react"
import userContextProvider from "../Context/userContext"

function Login() {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    const {setUser}=useContext(userContextProvider)


    const handlesubmit=(e)=>{
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="username" /> <br /><br />
        <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" /> <br /><br />
        <button onClick={handlesubmit} >Submit</button>
    </div>
  )
}

export default Login
