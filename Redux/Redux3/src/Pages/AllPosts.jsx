import React from 'react'
import DBService from '../Appwrite/DBConfig'
import PostCard from '../Components/PostCard'
import { useState } from 'react'
import { useEffect } from 'react'
import Container from '../Components/Container/Container'


export default function AllPosts() {
    const [posts,setPosts]=useState([])
    useEffect(()=>{
        DBService.listDocument().then((posts)=>{
            if(posts)
            {
                setPosts(posts.documents)
                console.log(posts)
            }
        })
        
    },[])

  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}
