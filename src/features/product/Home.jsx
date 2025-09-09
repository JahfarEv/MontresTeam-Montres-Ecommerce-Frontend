import React from "react";

// Image imports
import Watch1 from "../../assets/Watche/rendering-smart-home-device (1).jpg";
import Watch2 from "../../assets/Watche/stylish-golden-watch-white-surface.jpg";
import watch3 from "../../assets/Watche/rendering-smart-home-device.jpg";

import bag1 from "../../assets/HandBags/bag-hanging-from-furniture-item-indoors (1).jpg";
import bag2 from "../../assets/HandBags/black-bag-with-scarf.jpg";
import bag3 from "../../assets/HandBags/luxury-woman-handbag.jpg";

import Jewelry1 from "../../assets/Jewelry/luxury-jewellery-display.jpg";
import Jewelry2 from "../../assets/Jewelry/side-view-pair-silver-diamond-earrings-with-emerald-black-wall-black.jpg";
import Jewelry3 from "../../assets/Jewelry/view-luxurious-golden-ring-felt-jewelry-display (1).jpg";

import Clocks1 from "../../assets/Clocks/37431.jpg";
import Clocks2 from "../../assets/Clocks/8992.jpg";
import Clocks3 from "../../assets/Clocks/ec937fc8-0b61-4418-8021-c70b4f447e96.jpg";

import Cufflinks1 from "../../assets/Cufflinks/18966314.jpg";
import Cufflinks2 from "../../assets/Cufflinks/closeup-photo-stud-white-shirt-with-red-tie.jpg";
import Cufflinks3 from "../../assets/Cufflinks/high-angle-thimble-silk-arrangement.jpg";

import HomeAccessories1 from "../../assets/HomeAccessories/close-up-arrangement-modern-vases (1).jpg";
import HomeAccessories2 from "../../assets/HomeAccessories/close-up-arrangement-modern-vases.jpg";
import HomeAccessories3 from "../../assets/HomeAccessories/white-modern-vases-arrangement.jpg";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Watches",
    products: [
      { img: Watch1, price: "100.0 AED", pieces: "2 Pieces" },
      { img: Watch2, price: "100.0 AED", pieces: "2 Pieces" },
      { img: watch3, price: "100.0 AED", pieces: "2 Pieces" },
    ],
  },
  {
    title: "Bags, Wallets & Pens",
    products: [
      { img: bag1, price: "100.0 AED", pieces: "2 Pieces" },
      { img: bag2, price: "100.0 AED", pieces: "2 Pieces" },
      { img: bag3, price: "100.0 AED", pieces: "2 Pieces" },
    ],
  },
  {
    title: "Jewelry",
    products: [
      { img: Jewelry1, price: "100.0 AED", pieces: "2 Pieces" },
      { img: Jewelry2, price: "100.0 AED", pieces: "2 Pieces" },
      { img: Jewelry3, price: "100.0 AED", pieces: "2 Pieces" },
    ],
  },
  {
    title: "Clocks & Pocket Watch",
    products: [
      { img: Clocks1, price: "100.0 AED", pieces: "2 Pieces" },
      { img: Clocks2, price: "100.0 AED", pieces: "2 Pieces" },
      { img: Clocks3, price: "100.0 AED", pieces: "2 Pieces" },
    ],
  },
  {
    title: "Personal Accessories & Cufflinks",
    products: [
      { img: Cufflinks1, price: "100.0 AED", pieces: "2 Pieces" },
      { img: Cufflinks2, price: "100.0 AED", pieces: "2 Pieces" },
      { img: Cufflinks3, price: "100.0 AED", pieces: "2 Pieces" },
    ],
  },
  {
    title: "Home Accessories",
    products: [
      { img: HomeAccessories1, price: "100.0 AED", pieces: "2 Pieces" },
      { img: HomeAccessories2, price: "100.0 AED", pieces: "2 Pieces" },
      { img: HomeAccessories3, price: "100.0 AED", pieces: "2 Pieces" },
    ],
  },
];

const ProductGrid = () => {
  return (
    <div className="bg-gray-50 min-h-[100px] p-4 sm:p-6 lg:p-8">
      {/* Responsive outer grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-5"
          >
            {/* Category Title */}
            <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
              {category.title}
            </h2>

            {/* Products Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {category.products.map((product, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-full aspect-square rounded-lg overflow-hidden border border-gray-200">
                    <Link to="/DetailPage"><img
                      src={product.img}
                      alt={`${category.title} product ${i + 1}`}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    /></Link>
                  </div>
                  <p className="mt-2 text-sm font-semibold text-gray-800">
                    {product.price}
                  </p>
                  <p className="text-xs text-gray-500">{product.pieces}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
