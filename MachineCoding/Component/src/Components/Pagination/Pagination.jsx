import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-3 py-1 border rounded ${
            i === currentPage ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
          }`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-4">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        className="px-3 py-1 border rounded bg-white text-blue-500"
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        className="px-3 py-1 border rounded bg-white text-blue-500"
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
