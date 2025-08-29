import React from 'react';
import Head from 'next/head';
import { FaCartPlus, FaHeart, FaStar,
  FaRegHeart } from 'react-icons/fa';

import { BsBoxSeam } from 'react-icons/bs';
import WatchBrandIm from '../../assets/Watche/elegant-watch-with-silver-golden-chain-isolated.jpg';

const JustforyouWatch = () => {
const [wishlist, setWishlist] = React.useState({});

    const toggleWishlist = (productId) => {
    setWishlist(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };
  const brandWatches = [
    {
      id: 1,
      name: "Sello Yacht Timer",
      price: "1,000.00 AED",
      originalPrice: "1,200.00 AED",
      image: WatchBrandIm.src || WatchBrandIm,
      rating: 4.5,
      reviewCount: 128,
      brand: "Sello",
      info: "MOQ: 100 Pieces",
      features: ["Water resistant", "Chronograph", "Stainless steel"],
      isNew: true,
      isFastShipping: true
    },
    {
      id: 2,
      name: "Sello Regatta Yacht Timer",
      price: "950.00 AED",
      originalPrice: "1,100.00 AED",
      image: WatchBrandIm.src || WatchBrandIm,
      rating: 4.2,
      reviewCount: 86,
      brand: "Sello",
      info: "MOQ: 35 Pieces",
      features: ["Luminous hands", "120m water resistant", "Sapphire crystal"],
      isNew: false,
      isFastShipping: false
    },
    {
      id: 3,
      name: "Sello Men's Presage",
      price: "850.00 AED",
      originalPrice: "1,000.00 AED",
      image: WatchBrandIm.src || WatchBrandIm,
      rating: 4.7,
      reviewCount: 215,
      brand: "Sello",
      info: "MOQ: 80 Pieces",
      features: ["Automatic movement", "Leather strap", "Date display"],
      isNew: true,
      isFastShipping: true
    },
    {
      id: 4,
      name: "Sello Heritage Chrono",
      price: "1,200.00 AED",
      originalPrice: "1,500.00 AED",
      image: WatchBrandIm.src || WatchBrandIm,
      rating: 4.8,
      reviewCount: 342,
      brand: "Sello",
      info: "Sold: 120 Pieces",
      features: ["Limited edition", "Automatic", "42mm case"],
      isNew: false,
      isBestseller: true,
      isFastShipping: false
    },
    {
      id: 5,
      name: "Sello Diver Pro",
      price: "1,100.00 AED",
      originalPrice: "1,300.00 AED",
      image: WatchBrandIm.src || WatchBrandIm,
      rating: 4.6,
      reviewCount: 178,
      brand: "Sello",
      info: "MOQ: 50 Pieces",
      features: ["300m water resistant", "Rotating bezel", "Rubber strap"],
      isNew: false,
      isFastShipping: true
    }
  ];

  // Generate structured data for all products
  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": brandWatches.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": product.name,
        "image": product.image,
        "description": `${product.brand} ${product.name} - ${product.features.join(', ')}`,
        "brand": {
          "@type": "Brand",
          "name": product.brand
        },
        "offers": {
          "@type": "Offer",
          "price": product.price.replace(/[^0-9.]/g, ''),
          "priceCurrency": "AED",
          "priceValidUntil": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          "availability": "https://schema.org/InStock",
          "url": `https://www.yourluxurystore.ae/products/${product.id}`
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": product.rating,
          "reviewCount": product.reviewCount
        }
      }
    }))
  };

  return (
    <>
      <Head>
        <title>Premium Sello Watches Collection | Luxury Timepieces in UAE</title>
        <meta name="description" content="Discover exclusive Sello watches just for you. Luxury yacht timers, chronographs, and diving watches with free UAE shipping and warranty. Best prices on premium timepieces." />
        <meta name="keywords" content="Sello watches, luxury watches UAE, yacht timer, diving watches, chronograph watches, premium timepieces Dubai" />
        
        {/* Google / Search Engine Tags */}
        <meta itemProp="name" content="Premium Sello Watches Collection | Luxury Timepieces in UAE" />
        <meta itemProp="description" content="Discover exclusive Sello watches just for you. Luxury yacht timers, chronographs, and diving watches with free UAE shipping and warranty." />
        <meta itemProp="image" content={WatchBrandIm.src || WatchBrandIm} />
        
        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://www.yourluxurystore.ae/just-for-you" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Premium Sello Watches Collection | Luxury Timepieces in UAE" />
        <meta property="og:description" content="Discover exclusive Sello watches just for you. Luxury yacht timers, chronographs, and diving watches with free UAE shipping and warranty." />
        <meta property="og:image" content={WatchBrandIm.src || WatchBrandIm} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Premium Sello Watches Collection | Luxury Timepieces in UAE" />
        <meta name="twitter:description" content="Discover exclusive Sello watches just for you. Luxury yacht timers, chronographs, and diving watches with free UAE shipping and warranty." />
        <meta name="twitter:image" content={WatchBrandIm.src || WatchBrandIm} />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.yourluxurystore.ae/just-for-you" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productStructuredData) }}
        />
      </Head>

     <div className="bg-[#f8f5f2] min-h-[50vh] py-6 sm:py-8">
        <div className="w-full px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
          <div className="mb-8 md:mb-12">
            {/* Section Header */}
            <div className="flex justify-between items-center mb-4 md:mb-6 px-1">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-3 md:mb-4 relative pb-2 
                after:content-[''] after:absolute after:bottom-0 after:left-0 
                after:w-12 sm:after:w-16 after:h-0.5 after:bg-[#8b6b4a]">
                Just For You
              </h2>
              <button className="text-xs sm:text-sm font-medium text-[#8b6b4a] hover:text-[#6a4f36] transition">
                View All →
              </button>
            </div>

            {/* Grid Layout - Responsive columns */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 px-1">
              {brandWatches.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-md sm:rounded-lg overflow-hidden shadow-sm sm:shadow-md hover:shadow-lg transition duration-300 relative"
                >
                  {/* Product Image with responsive aspect ratio */}
                  <div className="relative w-full pb-[100%] sm:pb-[76%] overflow-hidden">
                    <img
                      src={product.image}
                      alt={`${product.brand} ${product.name} - ${product.features.join(', ')}`}
                      className="absolute top-0 left-0 w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                      loading="lazy"
                    />
                    
                    {/* Badges - Top Left */}
                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex flex-col space-y-1">
                      {product.isNew && (
                        <div className="bg-gradient-to-r from-[#b58e5f] to-[#8b6b4a] text-white text-[10px] xs:text-xs sm:text-sm tracking-wide font-semibold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
                          NEW ARRIVAL
                        </div>
                      )}
                      {product.isBestseller && (
                        <div className="bg-purple-600 text-white text-[10px] xs:text-xs sm:text-sm tracking-wide font-semibold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-md">
                          BESTSELLER
                        </div>
                      )}
                    </div>
                    
                    {/* Wishlist Button - Top Right */}
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className="absolute top-2 right-2 sm:top-3 sm:right-3 p-2 bg-white bg-opacity-70 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-opacity-100"
                      aria-label={wishlist[product.id] ? "Remove from wishlist" : "Add to wishlist"}
                    >
                      {wishlist[product.id] ? (
                        <FaHeart className="text-red-500" size={14} />
                      ) : (
                        <FaRegHeart className="text-gray-700 hover:text-red-500 transition-colors" size={14} />
                      )}
                    </button>
                    
                    {/* Fast Shipping Badge - Bottom Left */}
                    {product.isFastShipping && (
                      <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 bg-green-600 text-white text-[10px] xs:text-xs font-semibold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-sm flex items-center">
                        <BsBoxSeam className="mr-1" size={10} />
                        <span>FAST SHIPPING</span>
                      </div>
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="p-2 sm:p-3 md:p-4">
                    <p className="text-xs sm:text-sm text-[#8b6b4a] font-medium truncate">
                      {product.brand}
                    </p>
                    <h3 className="text-xs sm:text-sm md:text-base font-semibold text-[#1a1a1a] mt-1 line-clamp-2">
                      {product.name}
                    </h3>
                    
                    {/* Rating */}
                    <div className="flex items-center mt-1 sm:mt-2">
                      <div className="flex text-[#FFD700]">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={i < Math.floor(product.rating) ? 'fill-current' : 'fill-current opacity-30'}
                            size={12}
                          />
                        ))}
                      </div>
                      <span className="text-[10px] sm:text-xs text-gray-500 ml-1">
                        ({product.rating})
                      </span>
                    </div>

                    {/* Price */}
                    <div className="mt-1 sm:mt-2 flex justify-between items-center">
                      <span className="text-sm sm:text-base font-bold text-[#1a1a1a]">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-[10px] sm:text-xs text-gray-500 line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>

                    {/* Info */}
                    <div className="mt-1 sm:mt-2 text-[10px] sm:text-xs text-gray-500 truncate">
                      {product.info}
                    </div>

                    {/* Add to Cart Button */}
                    <button 
                       className="mt-2 sm:mt-3 w-full bg-blue-900 hover:bg-blue-800 text-white py-1.5 sm:py-2 rounded text-xs sm:text-sm transition flex items-center justify-center gap-1 sm:gap-2"
                      aria-label={`Add ${product.name} to cart`}
                      >
                      <FaCartPlus size={12} /> 
                      <span>Add to Cart</span>
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

export default JustforyouWatch;