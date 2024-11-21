import { useState } from 'react'

import './App.css'

import Todo from './Component/ToDo'
import { useEffect } from 'react'


function App() {

  let [id,setId]=useState(1)
  let [todos,setTodos]=useState([])
  let [task,setTask]=useState()

  const addTodo=()=>{
    let todo=document.getElementById('todo').value
    if(!todo)
    {
      alert('Add a Todo')
    }else{
     let newTodo={
      id,
      todo
     }
      setTodos((old)=>{
        return [...old,newTodo]
      })

      setId(id+1)
    }

    document.getElementById('todo').value=""
  }

  const updateTodo=(todo,id)=>{

//    console.log(todo,id)
     setTodos((prev)=>{
     return prev.map((value,key)=>{
       return value.id==id?{...value,todo}:value
      })
     })
  } 


  const deleteTodo=(id)=>{
   // console.log(id)

   setTodos((prev) => prev.filter((val) => val.id !== id));



  }

  useEffect(()=>{
    if(todos.length>0)
      console.log(todos)
  },[todos])
  

  return (
    <>
    
      <div className="addTodo">
      <input id='todo' type="text" />
      <button onClick={addTodo}   >AddTodo</button>
      {todos.length?<>{
        todos.map((value,index)=>{
            return <Todo value={value} key={index} id={index+1} updateTodo={updateTodo} deleteTodo={deleteTodo} setTodos={setTodos}  ></Todo>
        })
      }</>:<></>}
    </div> 

    
   
   
    </>
  )
}

export default App










// function addTodo(){
//   let todo=document.getElementById('todo').value
//   if(!todo)
//     alert('Plese add Todo')
//   else{

//     let li=document.createElement('li')
//     let newTodo=document.createElement('input')
//     newTodo.value=todo
//     let update=document.createElement('button')
//     let Delete=document.createElement('button')

// newTodo.disabled=true
// update.textContent='update'
// Delete.textContent='Delete'
// li.appendChild(newTodo)
// li.appendChild(update)
// li.appendChild(Delete)
// let ul=document.getElementById('ul') 
// ul.append(li)




// document.getElementById('todo').value=""


//   }

// }