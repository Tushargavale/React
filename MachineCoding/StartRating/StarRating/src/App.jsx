import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(5)
  const starRef=useRef([])

  const Array1=[
    {
      element:1,
      value:'☆',
      fill:false
    },
    {
      element:2,
      value:'☆',
      fill:false
    },
    {
      element:3,
      value:'☆',
      fill:false
    },
    {
      element:4,
      value:'☆',
      fill:false
    },
    {
      element:5,
      value:'☆',
      fill:false
    }
  ]

const [ratingArray,setRatingArray]=useState(Array1)

 const handler = (item) => {
  const temp = ratingArray.map((star) => ({
    ...star,
    value: star.element <= item.element ? '★' : '☆',
  }));
  setRatingArray(temp);
};

  return (
    <>
       <div style={{backgroundColor:'white',display:'flex'}} className="rating">
                {ratingArray.map((item,key)=>{
               return   <h1 key={key} style={{cursor:'pointer'}} onClick={()=>handler(item)} >{item.value}</h1>
                })}
       </div>

       
    </>
  )
}

export default App
