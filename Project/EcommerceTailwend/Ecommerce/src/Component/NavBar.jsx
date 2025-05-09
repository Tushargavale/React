import React from 'react'

const NavBar = () => {
  return (
<>

<div className="w-screen bg-black text-white">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between items-center py-3">
      {/* Logo or Site Title */}
      <div className="text-lg font-bold">MySite</div>

      {/* Nav Links */}
      <div className="flex flex-col md:flex-row md:items-center w-full md:w-auto  md:gap-6 mt-2 md:mt-0">
        <a href='#' className="block cursor-pointer px-4 py-2 focus:text-blue-500 focus:text-bold text-center transition text-sm sm:text-base">Home</a>
        <a href='#' className="block cursor-pointer px-4 py-2 focus:text-blue-500 text-center focus:text-bold transition text-sm sm:text-base">About</a>
        <a href='#' className="block cursor-pointer px-4 py-2 focus:text-blue-500 text-center transition focus:text-bold text-sm sm:text-base">Products</a>
      </div>
    </div>
  </div>
</div>
</>  
)
}

export default NavBar