import { useState ,useEffect } from 'react'
import Navbar from './Component/Navbar'
import Blog from './Component/Blog'
import { changeTheme } from './Feature/ThemeSlice'
import {useDispatch,useSelector} from 'react-redux'
import Login from './Component/Login'
import { getTheme } from './Feature/ThemeSlice'
import { Routr } from './Component/Routr'
import './App.css'
import { setUser ,logoutUser } from './Feature/UserSlice'
import { useNavigate } from 'react-router-dom'
import { VerifyUser } from './Feature/UserSlice'
function App() {
const dispatch=useDispatch()

const navigation=useNavigate()


const FUN=()=>{
  localStorage.removeItem('user')
  dispatch(logoutUser())
 
      navigation('/')


}

  

  return (
    <>
   <button onClick={FUN} >Logout</button>
   <br /><br /><br />
   <Routr></Routr>
    </>
  )
}

export default App

// const dispatch=useDispatch()

// const theam=useSelector((state)=>state.Theme.theame)
// //console.log(T)



// const fun=()=>{
//   dispatch(changeTheme())
//   dispatch(getTheme())
// }

// useEffect(()=>{
//      document.querySelector('#BK').classList.remove("bg-white", "bg-black")
//     document.querySelector('#BK').classList.add(theam)
//       if(theam=='bg-black')
//         {
//           document.querySelector('#BK').classList.remove('text-black')
          
//           document.querySelector('#BK').classList.add('text-white')

//         }
//         else{
//          document.querySelector('#BK').classList.remove('text-white')
//           document.querySelector('#BK').classList.add('text-black')
//         }



// },[theam])


