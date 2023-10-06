import axios from "axios";
import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import '../../CSS_File/LoginForm.css'
import { useNavigate } from 'react-router-dom';

function ShowCourses()
{
   let navigate=useNavigate()
    let [courses,setCourses] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3001/showAllCourses',{headers:{authentication:JSON.parse(localStorage.getItem('Token'))}}).then((resp)=>{
            console.log(resp.data)
            setCourses(resp.data)
        })
    },[])

    function back()
    {
       navigate('/Login')
    }
    return <div   >
      <button onClick={back} >Back</button>
        <div className="card-container" > 
        {courses.map((entry)=>{
            return <div  > <CourseCard data={entry}  > </CourseCard>
            
             </div> 
            
        })}</div>
    </div>

}


export default ShowCourses