import axios from "axios"
import { useEffect, useState } from "react"
import CourseCard from "./CourseCard"
import '../../CSS_File/LoginForm.css'
import { useNavigate } from 'react-router-dom';

axios.defaults.headers.common['authentication']=JSON.parse(localStorage.getItem('Token'))

function Update()
{
    let navigate=useNavigate()
    let [resp,setResp]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:3001/showAllCourses').then((data)=>setResp(data.data)).catch((err)=>console.log(err))
    },[])



    function fun(data){
        console.log(JSON.stringify(data.CID)+"  From Updat Forn")
        navigate('/UpdateForm',{state:data})
    }

    function deletee(data)
    {
        console.log(data.CID , "  is deleted ... ")
        axios.delete(`http://localhost:3001/deleteCourse/${data.CID}`).then((data)=>{setResp(data.data.cours)})
    }
    function back()
    {
       navigate('/Login')
    }

   
    return  <div>
         <button onClick={back} >Back</button>
        <div className="card-container" >
       
            {resp.map((d)=>{return <div>
                <CourseCard data={d} fun={fun} deletee={deletee} ></CourseCard>
            </div>})}
        </div>
    </div>




    
}

//     </div>
export default Update