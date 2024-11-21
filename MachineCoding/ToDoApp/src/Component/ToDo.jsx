
import { useState } from 'react'
import './Todo.css'
import { useEffect } from 'react'


function Todo({value,updateTodo,id,deleteTodo})
{
 
    const [disabled,setDisabled]=useState(true)
    const [updatebtn,setUpdatebtn]=useState('Edit')
    const [todo,setTodo]=useState(value.todo)

    useEffect(() => {
        setTodo(value.todo);
        console.log(value)
      }, [value.todo]);

    const edit=()=>{
        if(updatebtn==='Edit')
        {
            setUpdatebtn('Save')
          setDisabled(false)
         
        }else{
            setUpdatebtn('Edit')
            setDisabled(true)
            updateTodo(todo,value.id)
        }

    }

    const handlechange=(e)=>{
     
        setTodo(e.target.value)

   }


    return(<>
       {value?<>
       
        <div className="todo">
           <span>{id}</span>
            <input type="text" value={todo} disabled={disabled} onChange={handlechange}   />
            <button onClick={edit} >{updatebtn}</button>
            <button onClick={()=>deleteTodo(value.id)} >{'delete'}</button>
        </div>

       </>:null}
    </>)
}



export default Todo


