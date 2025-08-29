import React from "react";
import { FiShoppingCart, FiStar } from "react-icons/fi";

const ProductCard = ({ product }) => {
  return (
    <div className="group bg-white rounded-md sm:rounded-lg overflow-hidden shadow-sm sm:shadow-md hover:shadow-lg transition duration-300">
      <div className="relative w-full pb-[100%] sm:pb-[76%] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="absolute top-0 left-0 w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
          loading="lazy"
        />
        {product.badge && (
          <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-gradient-to-r from-[#b58e5f] to-[#8b6b4a] text-white text-[8px] xs:text-[10px] tracking-wide font-semibold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-sm sm:shadow-md">
            {product.badge}
          </div>
        )}
      </div>

      <div className="p-2 sm:p-3 md:p-4">
        <div className="flex items-center mb-1">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <FiStar
                key={star}
                className={`h-3 w-3 ${
                  star <= Math.round(product.rating)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }`}
                aria-hidden="true"
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
        </div>

        <h3 className="text-xs sm:text-sm md:text-base font-semibold text-[#1a1a1a] mt-1 line-clamp-2">
          {product.name}
        </h3>

        <div className="mt-1 sm:mt-2 flex justify-between items-center">
          <span className="text-xs sm:text-sm md:text-base font-bold text-[#1a1a1a]">
            {product.price} AED
          </span>
          {product.mrp && (
            <span className="text-[10px] sm:text-xs text-gray-500 line-through">
              {product.mrp} AED
            </span>
          )}
        </div>

        <button className="mt-2 sm:mt-3 w-full bg-[#8b6b4a] hover:bg-[#6a4f36] text-white py-1.5 sm:py-2 rounded text-xs sm:text-sm transition">
          View Details
        </button>
      </div>
    </div>
  );
};
export default ProductCard;