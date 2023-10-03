import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import React from "react";
import { useEffect } from "react";
function AdminHomePage()
{
    let navigate=useNavigate()
    let location=useLocation()
    let data=location.state
    let isAuthenticate=localStorage.getItem('isAuthenticate')
    let tk=localStorage.getItem('Token')
    useEffect(()=>{
        if(!isAuthenticate)
        {
          navigate('/Error',{state:{Error:"Login Again"}})
        }
    },[isAuthenticate])
   
    function show()
    {
        navigate('/ShowAllCourses')
    }

    function addnew()
    {
        navigate('/NewCourseaddForm')
    }

    function updateCourse()
    {
        navigate('/CoursesForUpdate')
    }
    console.log(data)
    console.log(`user is ${isAuthenticate}`)
    console.log(`value of Token is ${tk}`)
    return <div>
        <button onClick={show} >Show All Courses</button>
        <button onClick={addnew} >Add new Course</button>
        <button onClick={updateCourse} >Update Courses</button>

    </div>
}

export default AdminHomePage