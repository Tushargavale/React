import { useState ,useEffect } from 'react'
import Navbar from './Component/Navbar'
import Blog from './Component/Blog'
import { changeTheme } from './Feature/ThemeSlice'
import {useDispatch,useSelector} from 'react-redux'
import './App.css'

function App() {

const dispatch=useDispatch()

const theam=useSelector((state)=>state.Theme.theame)
//console.log(T)

useEffect(()=>{
     document.querySelector('#BK').classList.remove("bg-white", "bg-black")
    document.querySelector('#BK').classList.add(theam)
      if(theam=='bg-black')
        {
          document.querySelector('#BK').classList.remove('text-black')
          
          document.querySelector('#BK').classList.add('text-white')

        }
        else{
         document.querySelector('#BK').classList.remove('text-white')
          document.querySelector('#BK').classList.add('text-black')
        }



},[theam])





const fun=()=>{
  dispatch(changeTheme())
}



  

  return (
    <>
    <Navbar theam={theam} fun={fun} ></Navbar>
   <Blog></Blog>
    </>
  )
}

export default App
