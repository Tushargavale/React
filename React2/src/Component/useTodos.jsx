

import React, { useState } from 'react'
function useTodos()
{
  const [todo,setTodo]=React.useState([])

  React.useEffect(()=>{
    fetch('http://localhost:3000/data').then((data)=>data.json()).then((data)=>{
      console.log(data)
      setTodo(data)
    })
  },[])
  return todo;
}


export default useTodos