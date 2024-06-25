import { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {increment ,decrement} from './Feature/CounterSlice'
import { fetchTodo } from './Feature/CounterSlice'

function App() {

function storeDataAsync(key, value) {
    return new Promise((resolve, reject) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            resolve(true);
        } catch (error) {
            reject(error);
        }
    });
}








const [id,setId]=useState(100)
let Count=useSelector(state=>{

  return state.counter
})

const dispatch=useDispatch()  
const Fun=()=>{

dispatch(decrement())
console.log(Count)
}
useEffect(()=>{
 // dispatch(fetchTodo())

},[])






useEffect(()=>{
  const Fun=async()=>{
    //await dispatch(fetchTodo())
  }
  dispatch(fetchTodo())
},[])



const addTodo=async()=>{
  let todo={
    Task:"Playing Cricket",
    id:id+5
  }
  setId(id=>id+5)
  let Arr=[todo]
  let r=await storeDataAsync('todos',Arr)
  

}






const refresh=()=>{
  dispatch(fetchTodo())
}



  return (
    <>
    <button onClick={Fun} >  Increse</button> 
    <br /><br />
    <button onClick={addTodo} >AddNewTodo</button>
    <button onClick={refresh} >Refresh Todo</button>
    <h1>{JSON.stringify(Count)}</h1>
    </>
  )
}

export default App
