import React ,{useEffect,useState} from 'react'
import DBService from '../Appwrite/DBConfig'
import Container from '../Components/Container/Container'
import PostCard from '../Components/PostCard'


export default function Home() {

    const [posts,setPosts]=useState([])

    useEffect(()=>{
        DBService.listDocument().then((post)=>{
            if(post)
            {
      //          console.log(post)
                setPosts(post.documents)
            }
        }  
    
    )
    },[])
    
    if(posts.length==0)
    {
        return (<>
        <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        </>)
    }

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
    // <div></div>
  )
}
