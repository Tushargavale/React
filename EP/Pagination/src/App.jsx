import { useEffect, useState} from 'react'
import axios from 'axios'
import './App.css'
import Pagination from './Pagination'
import ProductGrid from './productCart'
import ProductCard from './productCart'
function App() {

  
  const [data,setData]=useState([])
  const [currentPage,setCurrentPage]=useState(1)
  const [postperpage,setPostperPage]=useState(12)
  const [totalPage,setTotalPage]=useState(0)
  // const totalPage=10

  useEffect(()=>{

   async function fetchData(){
      try{
        const post =await axios.get('http://localhost:8081/api/v1/ecommerce/products',{
          params: {
            page: currentPage,   // Query parameter for page
            limit: postperpage  // Query parameter for limit
          }
        })
       setData(post.data.data.products)
       setCurrentPage(post.data.data.page)
       setTotalPage(Math.ceil((post.data.data.totalProducts)/postperpage))
         console.log(post.data)

      }catch(err)
      {
        
        console.log(err)
      }
    }


    fetchData()
    


  },[currentPage])



  const viewPorduct=(data)=>{
    console.log(data)
  }


  const changePage=(page)=>{
    setCurrentPage(page)
  }

  useEffect(()=>{
    console.log(data)
  },[data])
  
  useEffect(()=>{
    console.log(currentPage)
  },[currentPage])



  return (
    <>
  <ProductGrid products={data} viewPorduct={viewPorduct} ></ProductGrid>
<Pagination   changePage={changePage} totalPage={totalPage} currentPage={currentPage} data={data}  ></Pagination>
    </>
  )
}

export default App

