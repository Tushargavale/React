import React from 'react';

function Base() {
  // console.log('Welcome To Home');
  return (
    // <div className="flex-grow flex items-center justify-center bg-gray-100">
    //   <h1 className="text-4xl font-bold text-gray-800">Welcome To Home</h1> 
      
    // </div>
 <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">Welcome To Home</h1>
        <p className="text-gray-600 text-center">This is a centered container for your content.</p>
   
      </div>
    </div>






  );
}

export default Base;
