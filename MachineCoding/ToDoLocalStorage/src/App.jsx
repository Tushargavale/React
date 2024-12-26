import { useEffect, useState } from 'react'
import Todo from './Component/Todo'
import './App.css'

function App() {
  const [todo, setTodo] = useState([]) 
  useEffect(()=>{
    if(localStorage.getItem('todos')){
      const todos=localStorage.getItem('todos')
     // console.log(JSON.stringify(todos))
      let t=JSON.parse(todos)
      setTodo(t)
    }

  },[])


  const [newtodo,setNewTodo]=useState({
    id:'',
    value:'',
    disabled:false
  })

  const handler=(e)=>{
    setNewTodo((prev)=> {
      return {...prev,[e.target.name]:e.target.value,id:todo.length}
    } )
   
  }

  const handlesubmit=()=>{
   
    
    setTodo((prev)=>{
      return [...prev,newtodo]
    })

    setNewTodo({
      id:'',
      value:'',
      disabled:false
    })
  }

  useEffect(()=>{

    if(todo.length)
      localStorage.setItem('todos',JSON.stringify(todo))
  },[todo])


  const onupdate=(e)=>{

   if(e.disabled==true)
   {
     setTodo((prev)=>{
      return prev.map((value,key)=>{
        if(value.id==e.id)
          return {...value,['disabled']:false}
        return value
      })
     })
     localStorage.setItem('todos',JSON.stringify(todo))

   }else{
    let Tmp= todo.filter((value,index)=>{
      if(value.id==e.id)
      {
        value.disabled=!value.disabled
        return value
      }

      return value
    })

    setNewTodo(Tmp)
   }
   

   
    
  }


  const handleInput=(e,v)=>{
    let {name,value}=e.target
    setTodo((prev)=>{
      return prev.map((value,key)=>{
        return value.id==v.id?{...value,[e.target.name]:e.target.value}:value
       })
      })
  }

  return (
    <>

    <h1>Welcome To Bangalore</h1>
   <div className="cont">
   <InputTodo handler={handler} newtodo={newtodo.value}    handlesubmit={handlesubmit}  ></InputTodo>
    {todo.length?<>
    
    {todo.map((value)=>{
      return <Todo value={value} handleInput={handleInput}  onupdate={onupdate} ></Todo>
    })}
        
    </>:null}
   </div>
   </>
  )
}


const InputTodo=({handler,newtodo,handlesubmit})=>{
  return(<>
  <div className="Inp">
  <input className='inpt' type="text" name='value'    onChange={(e)=>handler(e)} value={newtodo} />
  <button onClick={handlesubmit} >Submit</button>
  </div>
   
  </>)
}

export default App
