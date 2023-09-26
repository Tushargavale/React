

import React,{useState} from "react";

function Todo()
{
    const [todo,setTodo]=React.useState([])
   React.useEffect(()=>{
    setInterval(()=>{

        fetch('http://localhost:3000/data').then((data)=>data.json()).then((data)=>{
        console.log(data)
        setTodo(data)
    })
    },500)
    
   },[])

   return todo
}


export default Todo