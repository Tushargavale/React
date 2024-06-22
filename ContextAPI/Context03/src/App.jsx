import { useEffect, useState } from 'react'
import TodoForm from './Component/TodoForm'
import { TodoProvider } from './ContextAPI/TodoContext'
import './App.css'
import TodoItem from './Component/TodoItem'

function App() {
let n=5 
const [todos,setTodos]=useState([])

function generateRandomValue(min = 10000, max = 100000) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const addTodo=(newTodo)=>{
  setTodos((prev)=>[...todos,{key:generateRandomValue(),todo:newTodo}])
}


const updateTodo=(updatedTodo)=>{
console.log(updatedTodo)
setTodos((prev)=>prev.map((item)=>{
  if(item.key===updatedTodo.key)
    item.todo=updatedTodo.todo
  return item
}))
}



const deleteTodo=(key)=>{
   console.log(`item having key ${key}  is deleted`)

  setTodos((prev) => prev.filter((todo) => todo.key !== key))



}


useEffect(()=>{
  const todo= JSON.parse(localStorage.getItem('todos')) 
 // console.log(todo)
  if(todo && todo.length>0)
 setTodos(todo)
  },[])

  useEffect(()=>{
    const todostring=JSON.stringify(todos)
    localStorage.setItem('todos',todostring)
 //  console.log(todos)
  },[todos])



  return (
    <>
    <TodoProvider value={{todos,addTodo , deleteTodo,updateTodo}} >
    <TodoForm></TodoForm>
     {todos.map((value,index)=>
    <TodoItem todo={value}  updateTodo={updateTodo} deleteTodo={deleteTodo}
      key={index} ></TodoItem>
    )}
    </TodoProvider>


  
   </>
  )
}

export default App
