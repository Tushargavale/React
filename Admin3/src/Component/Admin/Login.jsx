import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import axios from "axios"
import { useNavigate } from 'react-router-dom';
function Login()
{
    let navigate=useNavigate()
    let location=useLocation()
    let Token=location.state
    useEffect(()=>{
       
        axios.get('http://localhost:3001/showAllCourses',{headers:{authentication:JSON.parse(localStorage.getItem('Token'))}}).then((resp)=>{
            console.log(resp.data)
        })
    },[])

    function viewCourses()
    {
        navigate('/ShowCourses')
    }
    function goback()
    {
        navigate('/AddNewCourse')
    }
    function update()
    {
        console.log('updated')
        navigate('/Update')
    }


    return <div> 
      
       <div className="login-form-container" style={{backgroundColor:"pink"}} >
       <input type="button" value="Logout" className='btn-login'  style={{width:"20%"}} /> <br/>
       <input type="button" value="Logout" className='btn-login' style={{width:"20%"}} />
        <h2>Welcome</h2>
       
          <input type="button" value="View Courses" className='btn-login' onClick={viewCourses} /> <br/>        
             <input type="button"  value="Add New Course"  className='btn-back' onClick={goback}   /> <br></br>
             <input type="button" value="Update Course" className='btn-login' onClick={update}  /> <br/>        
        
        
      </div>
    </div>
}
export default Login