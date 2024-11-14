

const Pagination=({currentPage,changePage,totalPages})=>{


    return(<>
    
    <div className="flex justify-center items-center space-x-4 py-4">
  {/* Previous Button */}
  <span>
    <button
      className={`px-4 py-2 rounded-md text-white ${
        currentPage === 1
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-blue-500 hover:bg-blue-600"
      }`}
      disabled={currentPage === 1}
      onClick={() => changePage(currentPage - 1)}
    >
      Previous
    </button>
  </span>

  {/* Page Numbers */}
  <span className="space-x-2">
    {Array.from({ length: totalPages }, (_, index) => {
      return (
        <button
          key={index}
          className={`px-3 py-2 rounded-md ${
            currentPage === index + 1
              ? "bg-blue-700 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
          onClick={() => changePage(index + 1)}
        >
          {index + 1}
        </button>
      );
    })}
  </span>

  {/* Next Button */}
  <span>
    <button
      className={`px-4 py-2 rounded-md text-white ${
        currentPage === totalPages
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-blue-500 hover:bg-blue-600"
      }`}
      disabled={currentPage === totalPages}
      onClick={() => changePage(currentPage + 1)}
    >
      Next
    </button>
  </span>
</div>
    
    </>)
}

export default Pagination




