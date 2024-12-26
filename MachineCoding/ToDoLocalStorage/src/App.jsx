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
    value:'',
    disabled:false
  })

  const handler=(e)=>{
    setNewTodo((prev)=> {
      return {...prev,[e.target.name]:e.target.value}
    } )
   
  }

  const handlesubmit=()=>{
   
    
    setTodo((prev)=>{
      return [...prev,newtodo]
    })

    setNewTodo({
    
      value:'',
      disabled:false
    })

    //localStorage.setItem('todos',JSON.stringify(todo))
  }

  useEffect(()=>{

    if(todo.length)
      localStorage.setItem('todos',JSON.stringify(todo))

    console.log(todo)
  },[todo])


  const onupdate=(e,index)=>{

    console.log(todo,index)
   if(e.disabled==true)
   {
     setTodo((prev)=>{
      return prev.map((value,key)=>{
        if(key==index)
         {
          console.log(index ,'is ')
          return {...value,['disabled']:false}
         }
        return value
      })
     })
     console.log(todo)
     //localStorage.setItem('todos',JSON.stringify(todo))

   }else{
    let Tmp= todo.filter((value,ind)=>{
      if(index==ind)
      {
        value.disabled=!value.disabled
        return value
      }

      return value
    })

    setNewTodo(Tmp)
   }
   

   
    
  }

  const handleDelete=(index)=>{
    console.log(index)

    let itm=todo.filter((val,ind)=>{
      if(ind!=index)
        return val
    })

    setTodo(itm)
    
  }


  const handleInput=(e,ind)=>{
    let {name,value}=e.target 
    setTodo((prev)=>{
      return prev.map((td,key)=>{
        return key==ind?{...td,[name]:value}:td
       })
      })
  }

  return (
    <>

  <h1>This is TEST BRANCH</h1>
   <div className="cont">
   <InputTodo handler={handler} newtodo={newtodo.value}    handlesubmit={handlesubmit}  ></InputTodo>
    {todo.length?<>
    
    {todo.map((value,ind)=>{
      return <Todo value={value} handleInput={handleInput} handleDelete={handleDelete}  onupdate={onupdate} index={ind}  ></Todo>
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
