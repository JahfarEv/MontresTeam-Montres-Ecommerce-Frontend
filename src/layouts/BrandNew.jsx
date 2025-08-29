import React from 'react';
import { Helmet } from 'react-helmet';
import { FaShoppingBag } from 'react-icons/fa';
import handBag1 from '../assets/HandBags/bag-hanging-from-furniture-item-indoors (1).jpg';
import handBag2 from '../assets/HandBags/levitating-product-display-with-handbag.jpg'
import handBag3 from '../assets/HandBags/close-up-kitted-bag-nature.jpg'
import handBag4 from '../assets/HandBags/banner.jpg'
import handBag5 from '../assets/HandBags/cream-kitted-bag-still-life.jpg'
import handBag6 from '../assets/HandBags/texture-female-handbag-luxury-beauty.jpg'
import 'swiper/css';
import 'swiper/css/autoplay';

const BrandNew = () => {
  const newArrivals = [
    {
      id: 1,
      brand: "Coach",
      title: "Mini Hand Bag",
      price: "1,250 AED",
      oldPrice: "1,750 AED",
      discount: "28% OFF",
      image: handBag1,
      rating: 4.8,
      delivery: "Free UAE Delivery",
      quantity: "12 items"
    },

     {
      id: 1,
      brand: "Coach",
      title: "Mini Hand Bag",
      price: "1,250 AED",
      oldPrice: "1,750 AED",
      discount: "28% OFF",
      image: handBag2,
      rating: 4.8,
      delivery: "Free UAE Delivery",
      quantity: "12 items"
    },

     {
      id: 1,
      brand: "Coach",
      title: "Mini Hand Bag",
      price: "1,250 AED",
      oldPrice: "1,750 AED",
      discount: "28% OFF",
      image: handBag3,
      rating: 4.8,
      delivery: "Free UAE Delivery",
      quantity: "12 items"
    },

     {
      id: 1,
      brand: "Coach",
      title: "Mini Hand Bag",
      price: "1,250 AED",
      oldPrice: "1,750 AED",
      discount: "28% OFF",
      image: handBag4,
      rating: 4.8,
      delivery: "Free UAE Delivery",
      quantity: "12 items"
    },

     {
      id: 1,
      brand: "Coach",
      title: "Mini Hand Bag",
      price: "1,250 AED",
      oldPrice: "1,750 AED",
      discount: "28% OFF",
      image: handBag5,
      rating: 4.8,
      delivery: "Free UAE Delivery",
      quantity: "12 items"
    },

     {
      id: 1,
      brand: "Coach",
      title: "Mini Hand Bag",
      price: "1,250 AED",
      oldPrice: "1,750 AED",
      discount: "28% OFF",
      image: handBag6,
      rating: 4.8,
      delivery: "Free UAE Delivery",
      quantity: "12 items"
    },

  ];

 const duplicatedArrivals = [...newArrivals, ...newArrivals];

  return (
    <div className="bg-[#f8f5f2] min-h-[50vh] py-8"> 
      <Helmet>
        <title>Montres Trading L.L.C – The Art Of Time</title>
        <meta name="description" content="Discover our newest luxury arrivals in Dubai - Coach, Breitling, Bally, Alfred Dunhill. Authentic products with free UAE delivery and warranty." />
        <meta name="keywords" content="new luxury brands Dubai, Breitling watches UAE, Coach bags Dubai, Bally leather UAE, Alfred Dunhill Dubai" />
      </Helmet>

      <div className="w-full px-4 sm:px-6 py-8">
        <div className="mb-12">
          {/* Section Header */}
          <div className="flex justify-between items-center mb-6 px-2">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-4 relative pb-2 
              after:content-[''] after:absolute after:bottom-0 after:left-0 
              after:w-16 after:h-0.5 after:bg-[#8b6b4a]">
              Brand New Arrivals
            </h2>
            <button className="text-sm font-medium text-[#8b6b4a] hover:text-[#6a4f36] transition">
              View All →
            </button>
          </div>

          {/* Auto-scrolling Product Grid */}
          <div className="relative overflow-hidden">
            {/* Gradient fade effect on sides */}
            <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[#f8f5f2] to-transparent"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[#f8f5f2] to-transparent"></div>
            
            {/* Scrolling container */}
            <div className="animate-infinite-scroll flex w-max gap-4">
              {duplicatedArrivals.map((item, i) => (
                <div
                  key={i}
                  className="group flex-shrink-0 w-72 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
                >
                  {/* Product Image */}
                  <div className="relative w-full aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={`${item.brand} ${item.title}`}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                      loading="lazy"
                    />
                    {/* Discount Badge */}
                    {item.discount && (
                      <div className="absolute top-3 right-3 bg-gradient-to-r from-[#b58e5f] to-[#8b6b4a] text-white text-[10px] tracking-wide font-semibold px-3 py-1 rounded-full shadow-md">
                        {item.discount}
                      </div>
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="p-4">
                    <p className="text-sm text-[#8b6b4a] font-medium">
                      {item.brand}
                    </p>
                    <h3 className="text-base font-semibold text-[#1a1a1a] mt-1">
                      {item.title}
                    </h3>
                    
                    {/* Price Section */}
                    <div className="mt-2 flex justify-between items-center">
                      <span className="text-base font-bold text-[#1a1a1a]">
                        {item.price}
                      </span>
                      {item.oldPrice && (
                        <span className="text-xs text-gray-500 line-through">
                          {item.oldPrice}
                        </span>
                      )}
                    </div>

                    {/* Delivery Info */}
                    <div className="mt-2 flex items-center text-xs text-gray-500">
                      <span>{item.delivery}</span>
                    </div>

                    {/* CTA Button */}
                    <button className="mt-3 w-full bg-blue-900 hover:bg-blue-800 text-white py-2 rounded-md text-sm transition flex items-center justify-center gap-2">
                      <FaShoppingBag /> Get Price
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add this to your global CSS or CSS-in-JS */}
      <style jsx global>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 20s linear infinite;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default BrandNew;