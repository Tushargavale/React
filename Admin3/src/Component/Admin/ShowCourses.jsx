import axios from "axios";
import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import '../../CSS_File/LoginForm.css'
function ShowCourses()
{
   
    let [courses,setCourses] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3001/showAllCourses',{headers:{authentication:JSON.parse(localStorage.getItem('Token'))}}).then((resp)=>{
            console.log(resp.data)
            setCourses(resp.data)
        })
    },[])

    return <div   >
        <h1>All</h1>
        <div className="card-container" >
        {courses.map((entry)=>{
            return   <CourseCard data={entry} ></CourseCard> 
        
        })}</div>
    </div>

}

export default ShowCourses