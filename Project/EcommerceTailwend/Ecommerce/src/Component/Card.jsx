import React from 'react'

const Card = ({product}) => {
 return (
    <div className="w-64 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 text-sm">
      {/* Image */}
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-36 object-contain bg-gray-100 p-2"
      />

      {/* Content */}
      <div className="p-3 space-y-1">
        <h2 className="font-semibold text-gray-800 text-base truncate">{product.title}</h2>
        <p className="text-gray-500 text-xs truncate">by {product.brand}</p>

        <div className="flex justify-between items-center mt-1">
          <span className="font-bold text-blue-600">${product.price}</span>
          <span className="text-green-600 text-xs">-{product.discountPercentage}%</span>
        </div>

        <div className="flex justify-between text-xs text-gray-500">
          <span>⭐ {product.rating}</span>
          <span className={product.stock < 10 ? "text-red-500" : ""}>
            {product.availabilityStatus}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card