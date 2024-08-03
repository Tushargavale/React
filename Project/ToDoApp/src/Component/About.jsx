import React from 'react'

function About() {
  return (
    <>
    
   
  <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
      <div className="w-full max-w-7xl mx-auto px-3 py-6 mt-5">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Welcome to My Blog</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example Blog Post */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* <img
              src="path/to/image.jpg"
              alt="Blog Post"
              className="w-full h-48 object-cover"
            /> */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800">Blog Post Title</h2>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
              </p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
                Read More
              </button>
            </div>
          </div>

          {/* Add more blog posts here */}
        </div>
      </div>
    </div>    
    
    </>
  )
}

export default About