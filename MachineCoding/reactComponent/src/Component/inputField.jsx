// import '../App.css'
import { useState } from 'react'
import './inputField.css'

function InputField(){
    let [editvalue,setEditvalue]=useState(true)
    let [edit,setEdit]=useState('Update')
    const editFun=()=>{
        if(editvalue==false)
            setEditvalue(true)
        else
        setEditvalue(false)

        if(edit=='Update')
            setEdit('save')
        else 
        setEdit('Update')
    }

    return(<>
  <div className="container">
        <li className='todo' >
            <input type="text" 
            
            disabled={editvalue}
            
            />
            <button onClick={editFun} >{edit}</button>
            <button>Delete</button>
        </li>
      </div>
 
    
    </>)
}



export default InputField