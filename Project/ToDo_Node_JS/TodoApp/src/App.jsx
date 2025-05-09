import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './List'
function App() {

  const temp=[
  {
    "id": 1,
    "todo": "start React"
  },
  {
    "id": 2,
    "todo": "Start NodeJS"
  },
  {
    "id": 3,
    "todo": "Learn SQL"
  }
]

  const [todos,setTodos]=useState(temp)

  

  return (
    <>
      <div
      className='bg-gray-100 w-full  sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12 mx-auto p-4 mt-5'
      >

        <div className="flex gap-3 mb-4 ">
         <input
         className='p-2 border border-gray-200  focus:border-blue-500 
         transition duration-300
         w-[70%] rounded-md focus:ring-2 focus:ring-blue-500 '
         type="text" />
         <button
         className='border border-blue-500 bg-blue-500 w-[150px] flex-1 text-white rounded-md p-2 hover:bg-blue-600 hover:shadow-md'
         >Add</button>
          
        </div>

        <List todos={todos} ></List>
        
        </div> 
    </>
  )
}

export default App
