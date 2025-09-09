import React from "react";
import WathcOne from '../../assets/Watche/pixelcut-export-2-1.png';

const JustforyouWatch = () => {
  const productsGrid1 = [
    { id: 1, name: "Seiko Yatch Timer", image: WathcOne, price: "100.0 AED" },
    { id: 2, name: "Seiko Regatta Yatch Timer", image: WathcOne, price: "100.0 AED" },
    { id: 3, name: "Seiko Men’s Presage", image: WathcOne, price: "100.0 AED" },
  ];

  const productsGrid2 = [
    { id: 4, name: "Seiko Yatch Timer", image: WathcOne, price: "100.0 AED" },
    { id: 5, name: "Seiko Regatta Yatch Timer", image: WathcOne, price: "100.0 AED" },
    { id: 6, name: "Seiko Men’s Presage", image: WathcOne, price: "100.0 AED" },
  ];

  const renderProduct = (product) => (
    <div
      key={product.id}
      className="bg-white rounded-xl transition-shadow duration-300"
    >
      <div className="p-4 flex flex-col items-start">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-lg mb-4 w-[200px] h-[200px] object-contain"
        />
        <h3 className="text-sm font-medium text-gray-800">{product.name}</h3>
        <p className="text-sm font-semibold text-black">
          Price: {product.price}
        </p>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row gap-8 justify-center bg-gray-100 p-6">
      {/* First Section */}
      <div className="bg-white rounded-xl p-6 shadow-sm w-full lg:w-1/2">
        <h2 className="text-lg font-semibold mb-4">New Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {productsGrid1.map(renderProduct)}
        </div>
      </div>

      {/* Second Section */}
      <div className="bg-white rounded-xl p-6 shadow-sm w-full lg:w-1/2">
        <h2 className="text-lg font-semibold mb-4">Montres Trusted</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {productsGrid2.map(renderProduct)}
        </div>
      </div>
    </div>
  );
};

export default JustforyouWatch;
