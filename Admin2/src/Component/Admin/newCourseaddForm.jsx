import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from 'react-router-dom';



function NewCourseaddForm()
{
    let token=localStorage.getItem('Token')
    const navigate = useNavigate();
    let[course,setCourse]=useState({
        Title:"",
        Description:"",
        Price:null,
        Published:false

    })

    function addcourse()
    {
        let title=document.getElementById('title').value
        let description=document.getElementById('description').value
        let price=document.getElementById('price').value
        let publishe=document.getElementById('publishe').value
        console.log(title,description,price,publishe)

        setCourse({
            Title:title,
            Description:description,
            Price:price,
            Published:publishe
        })
    }

    useEffect(()=>{
        if(course.Title)
        {
             fetch('http://localhost:3001/coursePost',{method:"POST",body:JSON.stringify(course),
            headers:{
            "Content-Type":"application/json",
            "authentication":JSON.parse(token)
            }}).then(callback1).then(callback2).catch(ER)
      }         
    },[course])

 
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


    function callback2(data)
    {
     //nevigate('/AdminHomePage',{state:{data:data}})
     console.log(`Your COurse is successfully added , ${data}`)
     navigate('/ShowAllCourses')
    }

    function Back()
    {
        navigate('/AdminHomePage')
    }
    


    return<div>


        <button onClick={Back} >Back</button><br></br><br></br>

        <form >
        <label >Title:</label>
        <input type="text" id="title" name="title" required/><br/>
        <br/>
        <label>Course Description:</label><br/>
        <textarea id="description" name="description" rows="4" cols="50" required></textarea><br/>
        <br/>
        <label >Price:</label>
        <input type="number" id="price" name="price" step="0.01" required/><br/>
        <br/>
        <label>Publisher:</label>
        <input type="text" id="publishe" name="publishe" required/><br/>
        <br/>
      
        <input type="button" value="Submit" onClick={addcourse} />
    </form>
    </div>
}

export  default NewCourseaddForm