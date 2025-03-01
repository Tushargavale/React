import { useEffect, useState } from 'react'
import Test from './Components/NavBar/Test'
import './App.css'
import NavBar2 from './Components/NavBar2/NavBar2' 
import Pagination from './Components/Pagination/Pagination'

import Pagn from './Components/Pagination/Pagn' 

import Login from './Components/Login/Login'
function App() {
  

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(()=>{console.log(currentPage)},[currentPage])

  return (
   <>
  
    <NavBar2></NavBar2>
  
  
    <Login></Login>
  
   </>
  )
}

export default App
