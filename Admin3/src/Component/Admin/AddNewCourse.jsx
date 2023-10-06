
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddNewCourse()
{
let nevigate=useNavigate()

    let [resp,setResp]=useState()
    function submit()
    {
        let title=document.getElementById('title').value
        let description =document.getElementById('description').value
        let price=document.getElementById('price').value
        let published=document.getElementById('published').value
      
        setResp({
            Title:title,
            Description:description,
            Price:price,
            Published:published
        })
    }

    useEffect(()=>{
        if(resp)
        {
            axios.post('http://localhost:3001/coursePost',resp,{headers:{authentication:JSON.parse(localStorage.getItem('Token'))}})
            .then((resp)=>{console.log(resp.data)
            nevigate('/ShowCourses')})
        }
    },[resp])






    function back()
    {
        nevigate('/Login')
    }





    return <div>
       <h1>
        <form>
          <div className="form-group">
            <label >Title :</label>
            <input
              type="text"
              id="title"
              name="username"
              required
            />
          </div> <div className="form-group" >
          <label >Description :</label>
            <textarea id="description" name="description" rows="4" cols="50" required></textarea></div> 
          <div className="form-group">
            <label >Price</label>
            <input
              type="text"
              id="price"
              name="price"
              required
            />

          </div>

          <div className="form-group">
            <label >Published</label>
            <input
              type="text"
              id="published"
              name="published"
              required
            />

          </div>
          <input type="button" value="Submit" className='btn-login' onClick={submit} /> <br />
         <input type="button" value="back" className='btn-back' onClick={back} />
        
        </form>
        </h1>
    </div>
}
export default AddNewCourse