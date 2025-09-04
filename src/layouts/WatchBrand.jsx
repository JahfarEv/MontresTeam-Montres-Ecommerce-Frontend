import React from "react";
import { FaArrowRight } from "react-icons/fa";
import bagsOne from '../assets/beautiful-elegance-luxury-fashion-green-handbag.jpg';

const BrandNewAdded = () => {
  const products = [
    { id: 1, name: "Coach Mini Hand Bag", image: bagsOne },
    { id: 2, name: "Breitling Airwolf", image: bagsOne },
    { id: 3, name: "Bally Black Leather", image: bagsOne },
    { id: 4, name: "Breitling Callisto 200M", image: bagsOne },
    { id: 5, name: "Alfred Dunhill Business", image: bagsOne },
    { id: 6, name: "Alfred Dunhill RPM 8042", image: bagsOne },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Title */}
      <h2 className="text-xl font-bold text-gray-900 mb-6">
        Brand New Added
      </h2>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 w-[100%]">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300 "
          >
            {/* Image */}
            <div className="flex justify-center items-center p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-[180px] h-[180px] object-contain"
              />
            </div>

            {/* Product Info */}
            <div className="px-4 pb-3">
              <h3 className="text-sm font-medium text-gray-800 text-center">
                {product.name}
              </h3>
            </div>

            {/* Bottom strip */}
            <div className="border-t bg-gray-50 px-4 py-2 flex justify-center">
              <a
                href="#"
                className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition"
              >
                Get Price <FaArrowRight className="ml-1 text-xs" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandNewAdded;
