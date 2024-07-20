import React from 'react'
import {useNavigate} from 'react-router-dom'
function AddPost() {

const navigate=useNavigate()
  function startLearning(){
    navigate('/learn')
  }


  return (
    <>
    
     <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">in The user account</h1>
        <p className="text-gray-600 text-center">Please Add The Post</p>
       
      </div>
    {/* </div> */}

    <button
      onClick={startLearning}
      className={`px-3 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out `}
    >
      start Learning
    </button>
 </div>
    
    </>
  )
}

export default AddPost