
import React ,{useContext,createContext} from "react";

const TodoContext=createContext({todos:[],addTodo:()=>{},deleteTodo:()=>{},updateTodo:()=>{}})

export const TodoProvider=TodoContext.Provider  

export default function showTodo(){
    return useContext(TodoContext)
}


