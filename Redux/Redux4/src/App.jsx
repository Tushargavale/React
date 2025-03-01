import { useState } from 'react'
// import { store } from './Redux/Store'
import { reducer } from './Redux/counteSlice'
import './App.css'
import { MyCreateStore } from './Redux/Store'
function App() {
  
 

const myStore=MyCreateStore(reducer)

const [count,setCount]=useState(myStore.getState().count)



myStore.subScribe(()=>{
  let n=myStore.getState().count
  setCount(n)
})



function increse(){
  myStore.dispatch({type:'count/increseCount'})
}

function check(){
  console.log(myStore.getState())
}


  return (
    <>
      <button onClick={increse} >increse</button>
      <button onClick={check} >check</button>
      <br /><br /><br /><br />
      {count}
    </>
  )
}

export default App
