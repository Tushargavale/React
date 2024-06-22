import { useState } from 'react'
import UserContextProvider from './Context/userContextProvider'
import Login from './Component/Login'
import './App.css'
import Profile from './Component/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
    <h1>React </h1>
    <Login></Login>
    <Profile></Profile>
    </UserContextProvider>
  )
}

export default App
