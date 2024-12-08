import { useCallback, useState,useMemo, useEffect } from 'react'
import Item1 from './Component/Item1'
// import './App.css'

function App() {

  const [dark,setDark]=useState()

  useEffect(()=>{
    let th=localStorage.getItem('theme')

    console.log(th)
    if(th=='false')
      setDark(true)
    else
    setDark(false)

  },[])

  const Theme={
    backgroundColor:dark?'white':'black',
    color: dark?'black':'white'
  }


  useEffect(()=>{
  //  console.log('Theme Change')
    let bd=  document.getElementsByTagName('body')[0]
    bd.style.backgroundColor=Theme.backgroundColor 
    bd.style.color=Theme.color   
  },[dark])




  
 

  return (
    <>
    <button onClick={()=>{
      setDark((pre)=>!pre)
      localStorage.setItem('theme',dark)
    }} >changeTheme</button>
    <div className="themed-container">
    <p className="themed-paragraph">"Life is a journey filled with countless twists and turns, offering both challenges and opportunities at every step. Each moment provides a chance to grow, to learn, and to discover something new about ourselves and the world around us. Whether it's the gentle rustle of leaves on a breezy day or the quiet joy of achieving a long-sought goal, every experience adds depth and meaning to our existence. Embracing change and seeking connection allow us to navigate this ever-evolving landscape with purpose and hope, making every day a chapter worth cherishing."</p>
    </div>

    </>
  )
}

export default App



function slowFunction (number){
  let sum=0
  // for(let i=0;i<100000000;i++)
  //   sum=sum+i+2 

  return sum
}