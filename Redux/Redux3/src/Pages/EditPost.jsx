import React, { useEffect } from 'react'
import Container from '../Components/Container/Container'
import PostForm from '../Components/Post-Form/Post-Form'
import DBService from '../Appwrite/DBConfig'
import {useParams ,useNavigate } from 'react-router-dom'
import { useState } from 'react'


function EditPost() {
    const navigate=useNavigate()
    const [post,setPost]=useState(null)
    const {slug} =useParams()
    useEffect(()=>{
        if(slug)
        {
            DBService.getDocument(slug).then((post)=>{
                if(post)
                {
                    setPost(post)
                    console.log(post)
                }
            })
        }else{
            navigate('/')
        }
    },[slug,navigate])

  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost