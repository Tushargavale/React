
import React, { useEffect, useState } from "react"
import '../style/CardComponent.css'
import { useNavigate } from 'react-router-dom';
function CoursesForUpdate()
{const navigate = useNavigate();

    let [resp,setResp]=useState([])
    let token=localStorage.getItem('Token')
        useEffect(()=>{
            fetch('http://localhost:3001/showAllCourses',{
            headers:{
              "Content-Type":"application/json",
              "authentication":JSON.parse(token)
            }}).then(callback1).then((data)=>{setResp(data)
           }).catch(ER)
            
           
        },[])
  
        function callback1(resp)
        {
          
        
            if(!resp.ok)
             throw new Error(`HTTP error! Status: ${resp.status}`);
            
             return resp.json()
        }

        function ER (error)
        {
            navigate('/Error', {state: {Error:  `Fetch Error : ${error}`}}) 
        } 

        function updateCard(obj)
        {
            console.log("Card is Updated")
            console.log(obj ,"   Is updated ")
            navigate('/cardUpdateForm', {state: obj}) 
        }


  return <div>
    <h1>You CAn Update Course Here</h1>
    {resp.map((data)=>{
       return <Card cors={data} fun={updateCard}  ></Card>
    })}
  </div>
}

function Card({cors,fun})
{
    let data=cors
    return <div onClick={()=>fun(data)} >
         <div className="card"  >
        <div className="card-title">Title: {data.Title}</div>
        <div className="card-id">ID: {data.CID}</div>
        <div className="card-description">Description: {data.Description}</div>
        <div className="card-price">Price: ${data.Price}</div>
        <div className="card-publisher">Publishe: {data.Published}</div>
      </div>
    </div>
}

export default CoursesForUpdate