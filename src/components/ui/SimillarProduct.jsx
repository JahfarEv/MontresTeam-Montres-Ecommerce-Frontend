import React from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import Services from "./Services";

const SimilarProduct = () => {
  const products = [
    {
      id: 1,
      name: "Hermès Kelly Red Watch 20mm",
      price: "4000.0 AED",
      moq: "MOQ: 100 Pieces",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop"
    },
    {
      id: 2,
      name: "Hermès Kelly Red Watch 20mm",
      price: "4000.0 AED",
      moq: "MOQ: 35 Pieces",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop"
    },
    {
      id: 3,
      name: "Hermès Kelly Red Watch 20mm",
      price: "4000.0 AED",
      moq: "MOQ: 80 Pieces",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop"
    },
    {
      id: 4,
      name: "Hermès Kelly Red Watch 20mm",
      price: "4000.0 AED",
      moq: "MOQ: 50 Pieces",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop"
    }
  ];

  return (
    <div className="bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Similar Products</h2>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300">
              {/* Product Image */}
              <div className="relative h-64 bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-4"
                />
                {/* Wishlist Button */}
                <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors">
                  <FaHeart className="text-gray-400 hover:text-red-500" />
                </button>
              </div>
              
              {/* Product Details */}
              <div className="p-4">
                <h3 className="text-gray-700 font-medium text-sm mb-2">{product.name}</h3>
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-lg font-bold text-gray-900">{product.price}</span>
                </div>
                <p className="text-sm text-gray-500 mb-4">{product.moq}</p>
                
                {/* Add to Cart Button */}
                <button className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white py-2 px-4 rounded transition-colors">
                  <FaShoppingCart className="text-sm" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* View More Button */}
        <div className="mt-10 text-center">
          <button className="inline-flex items-center px-5 py-2.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none">
            View More Products
          </button>
        </div>
      </div>
      <Services/>
    </div>
  );
};

export default SimilarProduct;