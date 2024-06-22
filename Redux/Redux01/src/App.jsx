import { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {increment} from './Feature/CounterSlice'

function App() {
/**
 * This increment function is a basically action creater , it creae a action or we can say that it take a argument and return a acton object
 * 
 * 
 * 
 */
let Count=useSelector(state=>state.counter)
//console.log(increment(10))
const dispatch=useDispatch()  
const Fun=()=>{
//dispatch(increment(10))
dispatch({type: 'counter/increment', payload: 10})
//console.log(Count)
}


  return (
    <>
    <button onClick={Fun} >  Increse</button> 
    <br /><br />
    <h1>{JSON.stringify(Count)}</h1>
    </>
  )
}

export default App
