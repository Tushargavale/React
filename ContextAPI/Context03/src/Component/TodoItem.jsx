import { useEffect, useState } from "react";
import showTodo from "../ContextAPI/TodoContext";

function TodoItem({ todo ,updateTodo ,deleteTodo  }) {

    const [todos,setTodos]=useState(todo)
    const [Editable,setEditable]=useState(true)
    const [value1,setValue1]=useState('update')

    
    useEffect(()=>{
        setTodos(todo)
    },[todo])



    const isTodoEditable=()=>{

        if(!Editable)
            updateTodo(todos)


        setEditable(!Editable)
        setValue1((p)=>p=='update'?'save':'update')
        return Editable
    }


    const changeTodo=(e)=>{
        //updateTodo(todo.key, {...todo, todo: todos})
        setTodos((pr)=>({...pr,todo:e.target.value}))
    }

    const deleteThis=()=>{
        deleteTodo(todo.key)
    }
  







    return (
       <>
    
       <div>

       <div className="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between border border-gray-500 p-4   margin-top: 3px "  >
					<input className="text-base text-black-400 flex-grow outline-none px-2 border-blue-400 " type="text" 
                    
                    readOnly={Editable}
                    onChange={(e)=>changeTodo(e)}
                    value={todos.todo}
                    />

					<div className="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">
                    <button className="bg-indigo-500 text-white text-base rounded-lg px-4 py-2 font-thin" 
                    onClick={isTodoEditable}

                    >{value1}</button>
						<button className="bg-indigo-500 text-white text-base rounded-lg px-4 py-2 font-thin"  
                        
                        onClick={deleteThis}
                        >Delete</button>
					</div>
				</div>
       
                </div>
         </>






       
       
    );
}

export default TodoItem;
