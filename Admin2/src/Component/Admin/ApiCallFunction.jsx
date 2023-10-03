
import { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from 'react-router-dom';



import { useLocation } from "react-router-dom";


function ApiCallFunction(url,method,body)
{
    const navigate = useNavigate();

    // let [resp,setResp]=useState([])
    // useEffect(()=>{
        if(!body){
            fetch(url).then((data)=>{
                if(!data.ok)
                throw new Error(`HTTP error! Status: ${data.status}`);

                return data.json()
            }).then((data)=>{
               // setResp(data)
               return data
            }).catch((error) => {
                navigate('/Error', {state: {Error:  `Fetch Error : ${error}`}})
                console.error('Fetch error:', error);
              });
        }else{
            fetch(url,{
                method:method,
                body:body,
            headers:{
                "Content-Type":"application/json"
            }
            }).then((data)=>{
                if(!data.ok)
                throw new Error(`HTTP error! Status: ${data.status}`);

                return data.json()
            }).then((data)=>{
               // setResp(data)
               return data
            }).catch((error) => {
                navigate('/Error', {state: {Error:  `Fetch Error : ${error}`}})
                console.error('Fetch error:', error);
              });
        }

        
        

    // },[])

   

}

export default ApiCallFunction