import React from 'react'

export default function Input() {
  
 const Add=()=>{
  console.log('Fun is added for fun')
 } 
  





  
  return (
   <>
    <div className="flex w-full items-center space-x-2 md:w-1/3">
      <input
        className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        type="email"
        placeholder="Email"
      ></input>
      <button
        type="button"
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Subscribe
      </button>
    </div>
   </>
  )
}
