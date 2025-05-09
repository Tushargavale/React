import React from 'react'

const List = ({todos}) => {
    // console.log(todos) 
   
  return (
   <>
    <div className="flex flex-col ">
      {todos.map((item)=>{
        return <>
        <div className="flex gap-3 m-2">
             <input
        value={item.todo}  
        disabled={true}
        className='w-full min-w-[70%] max-w-[80%] p-3 border bg-white'      
        type="text" />  

      <div className="flex gap-2 w-full">
  <button
    className='w-full sm:w-auto flex-1 bg-blue-400 p-2 rounded-md hover:bg-blue-500 transition-colors'
  >
    Update
  </button>
  <button
    className='w-full sm:w-auto flex-1 bg-red-400 border rounded-md p-2 hover:bg-red-500 transition-colors'
  >
    Delete
  </button>
</div>
        </div>
       



        </>
      })}   
    </div>   
   </>
  )
}

export default List