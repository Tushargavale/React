import { useEffect, useState } from 'react'

import Like from '/Like.svg'
// import Like from './'   
import './App.css'
import LikeButton from './LikeButton';
function App() {
//  {isLiked ? '❤️ Liked' : '🤍 Like'}
const [isLiked,setIsLiked]=useState(false)

const handleClick=()=>{
  setIsLiked(!isLiked)
}


const handleCount=()=>{

}

return (
  <h1>
    <LikeButton handleClick={handleClick} handleCount={handleCount} isLiked={isLiked} ></LikeButton>
  </h1>
);



}

export default App
