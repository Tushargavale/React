import React, { useRef, useState } from 'react'

import Input from './Input'
function Login() {
    let [name,setName]=useState('')

    const [user,setUser]=useState({
        userName:"",
        Password:""
    })
    const ref=useRef(['userName','Password'])

    const handler=(e)=>{
        setUser((prev)=>{
            return {...prev,[e.target.name]:e.target.value}
        })
    }
   
 



  return (
   <>
   

   <div className="LoginForm">

    <div className="title">
        <span className='title' >Login</span>
    </div>
    <div className="inputBox">
       
        <Input placeholder={'userName'} label={'userName'} name={'userName'} onchange={handler} ref={ref['userName']}value={user.userName} ></Input>
        <Input placeholder={'Password'} label={'Password'} name={'Password'} onchange={handler} ref={ref['Password']}value={user.Password} ></Input>
    
    </div>
    <div className="button">
        <button className='Login' >Login</button>
        <button className='Signup' >Signup</button>
    </div>
   </div>





   </>
  )
}

export default Login


