import { useState ,useContext ,useEffect} from 'react'
import React from 'react'

import './App.css'

import Box from './component/Box'
import Box2 from './component/Box2'
import { ThemeContaxtProvider } from './Context/Theam'

function App() {
  const [thememode, setThememode] = useState('bg-yellow-600')

  const darkTheme=()=>{
    console.log('DArk Theme')
    setThememode('bg-yellow-600')
  }

  const lightTheme=()=>{
    console.log('Light Theme')
    setThememode('bg-red-600')
  }

  useEffect(() => {
    document.querySelector('#BK').classList.remove("bg-yellow-600", "bg-red-600")
    document.querySelector('#BK').classList.add(thememode)
  }, [thememode])
  
//bg-yellow-600
  

  return (
    <>
    <ThemeContaxtProvider value={{thememode,darkTheme,lightTheme}} >
 
    <Box>
      <Box2></Box2>
    </Box>

  
    </ThemeContaxtProvider>
    </>
  )
}

export default App
