import React from "react"
import { useEffect } from "react";
import { useState } from "react"
import { useNavigate } from 'react-router-dom';
// import ApiCall from "../ApiCall";
import ApiCallFunction from "./ApiCallFunction";


function LoginForm()
{
  let nevigate=useNavigate()
   let [user,setUser]=useState({
    ID:"",
    Pass:""
   })
  
   

   function submit()
   {
      let id=document.getElementById('username').value
      let pass=document.getElementById('password').value
      console.log(id,pass)
      setUser({
        ID:id,
        Pass:pass
      })
     
   }

 

     useEffect(()=>{
        if(user.ID && user.Pass)
        {
           

            fetch('http://localhost:3001/adminlogin',{method:"POST",body:JSON.stringify(user),
          headers:{
            "Content-Type":"application/json"
          }}).then(callback1).then(callback2).catch(ER)
      


        }         
       
     },[user])
   

     
function callback1(resp)
{
  

    if(!resp.ok)
     throw new Error(`HTTP error! Status: ${resp.status}`);
    
     return resp.json()
}

function ER (error)
{
 
  nevigate('/Error', {state: {Error:  `Fetch Error : ${error}`}})
 
}


function callback2(data)
{
  localStorage.setItem('Token',JSON.stringify(data.Token))
  localStorage.setItem('isAuthenticate',true)
  nevigate('/AdminHomePage',{state:{data:data}})
}






    return <div>
      <h2>Login</h2>
      <form >
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
           
           
            required
          /><br></br><br></br>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
           
            required
          /><br></br><br></br>
        </div>
       
        <input type="button" onClick={submit} value={"login"} />

      
      </form>
    </div>
   
}




export default LoginForm

