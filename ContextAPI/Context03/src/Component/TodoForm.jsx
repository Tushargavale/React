import { useState } from "react";
import { useContext } from "react";
import TodoContext from "../ContextAPI/TodoContext";
import showTodo from "../ContextAPI/TodoContext"
function TodoForm() {
    
    const [todo,setTodo]=useState()
    const {todos,addTodo} =showTodo()

    const handlesubmit=(e)=>{
       // e.preventdefault()
        e.preventDefault();
        document.getElementById('input').value=""
        
    }
   

    return (
        <form  className="flex margin: 10px  " onSubmit={handlesubmit} >
            <input
            id="input"
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                onChange={(e)=>setTodo(e.target.value)}
            />
            <button type="submit" onClick={()=>addTodo(todo)} className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

