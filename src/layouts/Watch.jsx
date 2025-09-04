import React from "react";
import Watch1 from '../assets/Watche/stylish-golden-watch-white-surface.jpg'

// ✅ Font Awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const products = [
  { id: 1, name: "Hermès Kelly Red Watch 20mm –", price: "4000.0 AED", info: "MOQ : 100 Pieces", image: Watch1 },
  { id: 2, name: "Hermès Kelly Red Watch 20mm –", price: "4000.0 AED", info: "MOQ : 35 Pieces", image: Watch1 },
  { id: 3, name: "Hermès Kelly Red Watch 20mm –", price: "4000.0 AED", info: "MOQ : 80 Pieces", image: Watch1 },
  { id: 4, name: "Hermès Kelly Red Watch 20mm –", price: "4000.0 AED", info: "MOQ : 50 Pieces", image: Watch1 },
  { id: 5, name: "Hermès Kelly Red Watch 20mm –", price: "4000.0 AED", info: "Sell : 120 Pieces", image: Watch1 },
  { id: 6, name: "Hermès Kelly Red Watch 20mm –", price: "4000.0 AED", info: "Sell : 120 Pieces", image: Watch1 },
  { id: 7, name: "Hermès Kelly Red Watch 20mm –", price: "4000.0 AED", info: "Sell : 120 Pieces", image: Watch1 },
  { id: 8, name: "Hermès Kelly Red Watch 20mm –", price: "4000.0 AED", info: "Sell : 120 Pieces", image: Watch1 },
  { id: 9, name: "Hermès Kelly Red Watch 20mm –", price: "4000.0 AED", info: "Sell : 120 Pieces", image: Watch1 },
  { id: 10, name: "Hermès Kelly Red Watch 20mm –", price: "4000.0 AED", info: "Sell : 120 Pieces", image: Watch1 },
  { id: 11, name: "Hermès Kelly Red Watch 20mm –", price: "4000.0 AED", info: "Sell : 120 Pieces", image: Watch1 },
  { id: 12, name: "Hermès Kelly Red Watch 20mm –", price: "4000.0 AED", info: "Sell : 120 Pieces", image: Watch1 },
];

const Watch = () => {
  return (
    <div className="bg-gray-100 py-10">
      <h2 className="text-center text-2xl font-semibold mb-8">Just For You</h2>
      
      <div className="max-w-7xl mx-auto grid gap-6 px-4 
                      grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" style={{width:"100%"}}>
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow hover:shadow-lg p-4 flex flex-col relative"
          >
            {/* Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-52 object-contain mb-4"
            />

            {/* Name */}
            <h3 className="text-sm text-gray-700 mb-1">{product.name}</h3>

            {/* Price */}
            <p className="text-lg font-bold text-gray-900">{product.price}</p>

            {/* Info (aligned left) */}
            <p className="text-sm text-gray-500 mb-3 text-left">{product.info}</p>

            {/* Cart Icon Button (bottom-right) */}
           
            
              <FontAwesomeIcon icon={faCartShopping} />
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watch;
