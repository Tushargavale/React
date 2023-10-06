import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import '../../CSS_File/LoginForm.css'

function UpdateForm()
{
   
    let location=useLocation()
    let navigate=useNavigate()
    let data=location.state
   let [title,setTitle]=useState(data.Title)
   let [price,setPrice]=useState(data.Price)
   let [description,setDescription]=useState(data.Description)

///updateCOurse/:ID
   function submit(){
    
    axios.put(`http://localhost:3001/updateCOurse/${data.CID}`,{Title:title,Price:price,Description:description},{headers:{
        authentication:JSON.parse(localStorage.getItem('Token'))
    }}).then((resp)=>console.log(resp.data))
    navigate('/Update')
   }


 
    return <div  className="login-form-container" >
        <form >
            <div className="form-group" >
           
          
            <label htmlFor="">Title</label>
            <input type="text" value={title}  onChange={(e)=>{setTitle(e.target.value)
            console.log(title)}} /> </div>
             <div className="form-group" >
            <label htmlFor="">Description</label>
            <input type="text"value={description} onChange={(e)=>setDescription(e.target.value)} /> </div>
            <div className="form-group" >
            <label htmlFor="">Price</label>
            <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)}  /> </div>
            <input type="button" value="submit"  onClick={submit} />
        </form>
    </div>












}

export default UpdateForm