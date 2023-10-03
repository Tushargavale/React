import { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import ProductCard from "./ProductCard";
function ShowAllCourses()
{
    let [resp,setResp]=useState([])
    let token=localStorage.getItem('Token')
    console.log(token +" FROM LOCAL STORAGE ...")
    let nevigate=useNavigate()
    useEffect(()=>{
        fetch('http://localhost:3001/showAllCourses',{
        headers:{
          "Content-Type":"application/json",
          "authentication":JSON.parse(token)
        }}).then(callback1).then((data)=>setResp(data)).catch(ER)

    },[])

       
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

    function logout()
    {
      localStorage.removeItem('isAuthenticate')
      localStorage.removeItem('Token')
      nevigate('/LoginForm')
    }

    function Back()
    {
      nevigate('/AdminHomePage')
    }


    return <div>
        <h1>Your All Courses is Here....</h1>   <button onClick={logout} >Logout</button><br></br>
        <button onClick={Back} >Back</button>
        {resp.map((data)=>{          
         return <div> <ProductCard res={data} ></ProductCard></div>
        })}
        
    </div>
}

export default ShowAllCourses
