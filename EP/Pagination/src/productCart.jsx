
import React from 'react';

export const ProductCard = ({ name, price, stock, mainImage, subImages, addToCart }) => {
  return (
    <div className="border border-gray-300 rounded-lg shadow-md p-4">
      {/* Main Image */}
      <div className="w-full h-48 bg-gray-100 rounded-md overflow-hidden">
        <img
          src={mainImage.url}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="mt-4">
        <h2 className="text-lg font-bold text-gray-900">{name}</h2>
        <p className="text-gray-700 mt-1">${price}</p>
        <p className={`text-sm mt-1 ${stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
          {stock > 0 ? `${stock} in stock` : 'Out of stock'}
        </p>
      </div>

      {/* Sub Images */}
      <div className="flex mt-4 space-x-2">
        {subImages.map((subImage, index) => (
          <div key={index} className="w-12 h-12 bg-gray-100 rounded-md overflow-hidden">
            <img
              src={subImage.url}
              alt={`Sub image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={addToCart}
        className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

const ProductGrid = ({ products ,viewPorduct }) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          price={product.price}
          stock={product.stock}
          mainImage={product.mainImage}
          subImages={product.subImages}
          addToCart={product.addToCart}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
