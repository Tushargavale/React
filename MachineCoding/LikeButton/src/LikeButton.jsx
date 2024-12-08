import React, { useEffect } from 'react'
import './App.css'
//{isLiked ? '❤️ Liked' : '🤍 Like'}
export default function LikeButton({handleClick,handleCount,isLiked}) {


    useEffect(()=>{
        let btn=document.getElementsByClassName('LikedButton')[0]
        btn.style.backgroundColor=buttonColor.backgroundColor 
        btn.style.color=buttonColor.color
    },[isLiked])


    const buttonColor={
        backgroundColor:isLiked?'red':'white',
        color:isLiked?'white':'black'
    }


  return (
    <>
    <button className='LikedButton' onClick={handleClick} >
       <span> {isLiked ? '🤍 Liked' : '❤️ Like'} </span>
    </button>
    </>
  )
}
