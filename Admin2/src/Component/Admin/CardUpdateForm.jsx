
import { useLocation } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';



function CardUpdateForm()
{
    const location = useLocation();
    let nevigate=useNavigate()
    let token=localStorage.getItem('Token')
    let data=location.state
    let [resp,setResp]=useState({
        Title:"",
        Description:"",
        Price:null,
        Published:null
    })

          
function submit()
{
    console.log('SUBMITTED')
    let title=document.getElementById('title').value
    let description=document.getElementById('description').value
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

    if(resp.Title)
    {
        console.log(resp)
        console.log(data.CID)
        fetch(`http://localhost:3001/updateCOurse/${data.CID}` ,{method:"PUT",body:JSON.stringify(resp),
        headers:{
          "Content-Type":"application/json",
          "authentication":JSON.parse(token)
        }}).then(callback1).then(callback2).catch(ER)
    }
},[resp])


     
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


function callback2(data)
{
console.log(data)
  nevigate('/AdminHomePage')
}













    return <div>
<h1>Fill the Field you want to update..</h1>

<ProductCard res={data} ></ProductCard>


        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            id="title"
          
           
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
          id="description"
            
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            id="price"
          
           
          />
        </div>
        <div>
          <label>Published:</label>
          <input
            type="text"
            name="published"
            id="published"
           
          
          />
        </div>
        <button onClick={submit}>Submit</button>
      </div>

   
    
}

export default CardUpdateForm