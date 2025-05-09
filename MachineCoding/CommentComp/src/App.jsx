import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

const tempComment=[
  {
    value:'Hello',
    reply:[
      {
        value:'How Are You'
      },
      {
        value:'I m fine'
      }
    ]
  },
  {
    value:'Where is The Location',
    reply:[
      {
        value:'its in Bangalore'
      },
      {
        value:'Thanks Buddy'
      }
    ]
  }
]
  const[comments,setComments]=useState(tempComment)
  const [openreplysection,setOpenreplysection]=useState(new Array(comments.length))
  const [addnewcomment,setAddnewcomment]=useState(false)
  const [value,setValue]=useState('')
  const [commentvalue,setCommentvalue]=useState('')
  const addnewCommentHandler=(e)=>{
      if(addnewcomment && value.length>0 )
      {
         let temp=[...comments]
         let tempcomm={
          value:value,
          reply:[]
         }
         temp.push(tempcomm)
         setComments(temp)
         setValue('')
         setAddnewcomment(false)
      }else
      if(addnewcomment && value.length<=0)
        setAddnewcomment(false)
      else
      setAddnewcomment(true)
  }


  const replyHandler=(item,index)=>{

    if(commentvalue.length && openreplysection[index])
    {
      let temp=[...comments]
      temp[index].reply.push({value:commentvalue})
      setComments(temp)
      setCommentvalue('')
      setOpenreplysection(new Array(comments.length))
    }else
    if(commentvalue.length<=0 && openreplysection[index])
    {
      setOpenreplysection(new Array(comments.length))
    }else
    {
    let temp=new Array(comments.length)
    temp[index]=true
     setOpenreplysection(temp)
    }
   
    console.log(item,index)
  }

  
  return (
    <>
        {comments.map((item,index)=><ShowComment item={item} index={index} key={index}
        setCommentvalue={setCommentvalue} commentvalue={commentvalue}
        openreplysection={openreplysection} replyHandler={replyHandler} />)}
        {addnewcomment && (
           <>
              <input type="text"
              className='p-3 w-1/3 border rounded-md bg-gray-50 shadow '
              value={value}
              onChange={(e)=>setValue(e.target.value)}
              />       
          </>
       ) }
       <button
        className='border rounded-md p-3 mt-0 flex flex-row bg-green-500 text-white font-bold '
        onClick={addnewCommentHandler}
        >AddComment</button>
    </>
  )
}



function ShowComment({item,index,openreplysection,replyHandler,commentvalue,setCommentvalue}){
return(
<> 
<div className="border p-4 shadow bg-gray-50 mb-0 w-1/3">
     <div className="text-base font-medium text-gray-800 mb-2">
      {item.value}
     </div>
     {item.reply?.length>0 && (
      <div className="ml-4 border border-l border-gray-300 space-y-2">
        {item.reply.map((reply,index)=>{
         return <div
         key={index}
         className="text-sm text-gray-700 bg-white p-2 rounded border">
            {reply.value}
          </div>
        })}
      </div>
     ) }
     <div className='flex flex-row'>
      <div>
         {openreplysection[index] && <>
          <input
          value={commentvalue}
          onChange={(e)=>setCommentvalue(e.target.value)}  
          type="text" className='p-2 w-full border rounded-md bg-gray-50 shadow' />
     </> }     
      </div>
      <button
     onClick={()=>replyHandler(item,index)}
     className='border p-1 mt-1'
     >Reply</button>
     </div>
    
     
</div>
       
</>
)
}




export default App
