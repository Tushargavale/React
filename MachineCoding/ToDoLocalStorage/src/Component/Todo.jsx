import React from 'react'
import './Todo.css'
function Todo({disabled,value,onupdate,btnName,handleInput,index,handleDelete}) {

console.log(value)


  return (
    <>
    
    <div className="container">
        <div className="inner">
            <input
             type="text" value={value.value}
              disabled={!value.disabled} 
              onChange={(e)=>handleInput(e,index)}
              name='value'  
              />
             <button onClick={()=>onupdate(value,index)} >
             {value.disabled?'update':'Edit'}
            </button>
            <button onClick={()=>handleDelete(index)} >Delete</button>
        </div>
    </div>
    
    </>
  )
}

export default Todo