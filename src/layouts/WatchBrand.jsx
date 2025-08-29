import React from "react";
import Head from "next/head";
import {
  FaShoppingBag,
  FaStar,
  FaRegStar,
  FaStarHalfAlt,
  FaShoppingCart,
  FaHeart,
  FaRegHeart
} from "react-icons/fa";
import WatchBrandIm from "../assets/Watche/rendering-smart-home-device.jpg";

const WatchBrand = () => {
    const [wishlist, setWishlist] = React.useState({});
  const brandWatches = [
    {
      id: 1,
      name: "Sello Yacht Timer",
      price: 1000.0,
      oldPrice: 1200.0,
      currency: "AED",
      image: WatchBrandIm.src || WatchBrandIm,
      rating: 4.5,
      reviewCount: 128,
      brand: "Sello",
      features: ["Water resistant", "Chronograph", "Stainless steel"],
      delivery: "Free delivery in UAE",
      warranty: "2 Years UAE Warranty",
      isNew: true,
    },
    {
      id: 2,
      name: "Sello Regatta Yacht Timer",
      price: 950.0,
      oldPrice: 1100.0,
      currency: "AED",
      image: WatchBrandIm.src || WatchBrandIm,
      rating: 4.2,
      reviewCount: 86,
      brand: "Sello",
      features: ["Luminous hands", "120m water resistant", "Sapphire crystal"],
      delivery: "Free delivery in UAE",
      warranty: "2 Years UAE Warranty",
      isNew: false,
    },
    {
      id: 3,
      name: "Sello Men's Presage",
      price: 850.0,
      oldPrice: 1000.0,
      currency: "AED",
      image: WatchBrandIm.src || WatchBrandIm,
      rating: 4.7,
      reviewCount: 215,
      brand: "Sello",
      features: ["Automatic movement", "Leather strap", "Date display"],
      delivery: "Free delivery in UAE",
      warranty: "2 Years UAE Warranty",
      isNew: true,
    },
    {
      id: 4,
      name: "Sello Heritage Chrono",
      price: 1200.0,
      oldPrice: 1500.0,
      currency: "AED",
      image: WatchBrandIm.src || WatchBrandIm,
      rating: 4.8,
      reviewCount: 342,
      brand: "Sello",
      features: ["Limited edition", "Automatic", "42mm case"],
      delivery: "Free delivery in UAE",
      warranty: "2 Years UAE Warranty",
      isNew: false,
      isBestseller: true,
    },
    {
      id: 5,
      name: "Sello Diver Pro",
      price: 1100.0,
      oldPrice: 1300.0,
      currency: "AED",
      image: WatchBrandIm.src || WatchBrandIm,
      rating: 4.6,
      reviewCount: 178,
      brand: "Sello",
      features: ["300m water resistant", "Rotating bezel", "Rubber strap"],
      delivery: "Free delivery in UAE",
      warranty: "2 Years UAE Warranty",
      isNew: false,
    },
 
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(
          <FaStar key={i} className="text-yellow-400 inline-block" />
        );
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <FaStarHalfAlt key={i} className="text-yellow-400 inline-block" />
        );
      } else {
        stars.push(
          <FaRegStar key={i} className="text-yellow-400 inline-block" />
        );
      }
    }
    return stars;
  };


    const toggleWishlist = (itemId) => {
    setWishlist(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

    const Badge = ({ type, children }) => {
    const baseClasses = "text-xs font-bold px-2 py-1 rounded-md shadow-sm";
    const typeClasses = {
      sale: "bg-red-600 text-white",
      discount: "bg-blue-600 text-white",
      new: "bg-gradient-to-r from-[#b58e5f] to-[#8b6b4a] text-white",
      bestseller: "bg-purple-600 text-white",
      limited: "bg-yellow-500 text-gray-900",
    };

    return (
      <div className={`${baseClasses} ${typeClasses[type]} flex items-center justify-center`}>
        {children}
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>Sello Watches Collection | Luxury Yacht Timers in Dubai</title>
        <meta name="description" content="Discover premium Sello yacht timer watches in Dubai. Authentic luxury watches with free UAE delivery and warranty." />
      </Head>

      <div className="bg-[#f8f5f2] min-h-[50vh] py-6 sm:py-8">
        <div className="w-full px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
          <div className="mb-8 md:mb-12">
            {/* Section Header */}
            <div className="flex justify-between items-center mb-4 md:mb-6 px-1">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-3 md:mb-4 relative pb-2 
                after:content-[''] after:absolute after:bottom-0 after:left-0 
                after:w-12 sm:after:w-16 after:h-0.5 after:bg-[#8b6b4a]">
                Sello Watches
              </h2>
              <button className="text-xs sm:text-sm font-medium text-[#8b6b4a] hover:text-[#6a4f36] transition">
                View All →
              </button>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 px-1">
              {brandWatches.map((item) => (
                <div
                  key={item.id}
                  className="group bg-white rounded-md sm:rounded-lg overflow-hidden shadow-sm sm:shadow-md hover:shadow-lg transition duration-300 relative"
                >
                  {/* Product Image with Badges and Wishlist */}
                  <div className="relative w-full pb-[100%] sm:pb-[76%] overflow-hidden">
                    <img
                      src={item.image}
                      alt={`${item.brand} ${item.name}`}
                      className="absolute top-0 left-0 w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                      loading="lazy"
                    />
                    
                    {/* Badges - Top Left */}
                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex flex-col space-y-1">
                      {item.isNew && (
                        <Badge type="new">
                          <span className="text-[10px] xs:text-xs sm:text-sm tracking-wide">
                            NEW ARRIVAL
                          </span>
                        </Badge>
                      )}
                      {item.isBestseller && (
                        <Badge type="bestseller">Bestseller</Badge>
                      )}
                    </div>
                    
                    {/* Wishlist Button - Top Right */}
                    <button
                      onClick={() => toggleWishlist(item.id)}
                      className="absolute top-2 right-2 sm:top-3 sm:right-3 p-2 bg-white bg-opacity-70 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-opacity-100"
                      aria-label={wishlist[item.id] ? "Remove from wishlist" : "Add to wishlist"}
                    >
                      {wishlist[item.id] ? (
                        <FaHeart className="text-red-500" />
                      ) : (
                        <FaRegHeart className="text-gray-700 hover:text-red-500 transition-colors" />
                      )}
                    </button>
                  </div>

                  {/* Product Details */}
                  <div className="p-2 sm:p-3 md:p-4">
                    <p className="text-xs sm:text-sm text-[#8b6b4a] font-medium truncate">
                      {item.brand}
                    </p>
                    <h3 className="text-xs sm:text-sm md:text-base font-semibold text-[#1a1a1a] mt-1 line-clamp-2">
                      {item.name}
                    </h3>

                    {/* Price */}
                    <div className="mt-1 sm:mt-2 flex items-center space-x-2 sm:space-x-3">
                      <span className="text-sm sm:text-base md:text-lg font-bold text-[#1a1a1a]">
                        {item.currency} {item.price.toFixed(2)}
                      </span>
                      {item.oldPrice && (
                        <span className="text-xs sm:text-sm line-through text-gray-400">
                          {item.currency} {item.oldPrice.toFixed(2)}
                        </span>
                      )}
                    </div>

                    {/* Rating and Reviews */}
                    <div className="mt-1 sm:mt-2 flex items-center space-x-1 sm:space-x-2">
                      <div className="flex">
                        {renderStars(item.rating).map((star, i) => (
                          <span key={i} className="text-[10px] sm:text-xs">{star}</span>
                        ))}
                      </div>
                      <span className="text-[10px] sm:text-xs text-gray-600">
                        ({item.reviewCount})
                      </span>
                    </div>

                    {/* Features */}
                    <ul className="mt-1 sm:mt-2 text-[10px] sm:text-xs text-gray-700 list-disc list-inside space-y-0.5">
                      {item.features.slice(0, 2).map((feature, idx) => (
                        <li key={idx} className="truncate">{feature}</li>
                      ))}
                    </ul>

                    {/* Delivery and Warranty */}
                    <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs text-gray-600 truncate">
                      {item.delivery}
                    </p>
                    <p className="text-[10px] sm:text-xs text-gray-600 truncate">
                      {item.warranty}
                    </p>

                    {/* Add to Cart Button */}
                    <button  className="mt-2 sm:mt-3 w-full bg-blue-900 hover:bg-blue-800 text-white py-1.5 sm:py-2 rounded text-xs sm:text-sm transition flex items-center justify-center gap-1 sm:gap-2">
                      <FaShoppingCart />
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WatchBrand;