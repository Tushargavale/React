import React from 'react'
import './Todo.css'
function Todo({disabled,value,onupdate,btnName,handleInput}) {




  return (
    <>
    
    <div className="container">
        <div className="inner">
            <input
             type="text" value={value.value}
              disabled={!value.disabled} 
              onChange={(e)=>handleInput(e,value)}
              name='value'  
              />
             <button onClick={()=>onupdate(value)} >
             {value.disabled?'update':'Edit'}
            </button>
            <button>Delete</button>
        </div>
    </div>
    
    </>
  )
}

export default Todo