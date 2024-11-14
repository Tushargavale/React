import React, { useEffect } from 'react';

const Pagination = ({totalPage,changePage,currentPage,data}) => {




  return (
   <>
    <div className="fixed bottom-0 left-0 w-full flex justify-center bg-white py-4 shadow-lg" >
  {data.length > 0 && (
    <div className="flex justify-center items-center space-x-2 mt-4">
      {/* Previous Button */}
      <button
        onClick={() => changePage(currentPage > 1 ? currentPage - 1 : currentPage)}
        disabled={currentPage === 1}
        className={`px-3 py-1 border rounded ${
          currentPage === 1
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-white hover:bg-gray-200 text-gray-700'
        }`}
      >
        <span>Previous</span>
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPage }, (_, index) => {
        return (
          <button
            key={index}
            onClick={() => changePage(index + 1)}
            className={`px-3 py-1 border rounded ${
              currentPage === index + 1
                ? 'bg-blue-500 text-white'
                : 'bg-white hover:bg-gray-200 text-gray-700'
            }`}
          >
            {index + 1}
          </button>
        );
      })}

      {/* Next Button */}
      <button
        onClick={() =>
          changePage(currentPage < totalPage ? currentPage + 1 : currentPage)
        }
        disabled={currentPage === totalPage}
        className={`px-3 py-1 border rounded ${
          currentPage === totalPage
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-white hover:bg-gray-200 text-gray-700'
        }`}
      >
        <span>Next</span>
      </button>
    </div>
  )}
</div>
   </>
   
  );
};

export default Pagination;
