import React from 'react';
import Head from 'next/head';
import { FaHeart, FaRegHeart, FaFacebook, FaTwitter, FaPinterest, FaShoppingCart, FaCog } from 'react-icons/fa';
import watch from '../../assets/Watche/ChatGPT Image Aug 10, 2025, 10_35_04 PM.png';

const Wishlist = () => {
  const wishlistItems = [
    {
      id: 1,
      name: 'Wave t-shirt',
      image: watch,
      originalPrice: 14.99,
      discountedPrice: 13.49,
      quantity: 1,
      stockStatus: 'In Stock',
      addedDate: 'June 17, 2024',
      hasDiscount: true,
      buttonType: 'addToCart',
      description: 'Comfortable wave-patterned t-shirt made from 100% organic cotton',
      category: 'Clothing'
    },
    {
      id: 2,
      name: 'T-Shirt with Logo',
      image: watch,
      price: 18.00,
      quantity: 1,
      stockStatus: 'In Stock',
      addedDate: 'June 17, 2024',
      buttonType: 'addToCart',
      description: 'Premium quality t-shirt with company logo embroidery',
      category: 'Clothing'
    },
    {
      id: 3,
      name: 'Hiking shoes',
      image: watch,
      price: 104.99,
      quantity: 1,
      stockStatus: 'In Stock',
      addedDate: 'June 17, 2024',
      buttonType: 'addToCart',
      description: 'Durable hiking shoes with waterproof membrane and anti-slip soles',
      category: 'Footwear'
    },
    {
      id: 4,
      name: 'Blue man t-shirt',
      image: watch,
      priceRange: { min: 12.99, max: 14.99 },
      quantity: 1,
      stockStatus: 'In Stock',
      addedDate: 'June 17, 2024',
      buttonType: 'selectOptions',
      description: 'Classic blue t-shirt available in multiple sizes and fits',
      category: 'Clothing'
    }
  ];

  const [likedItems, setLikedItems] = React.useState(wishlistItems.map(item => item.id));
  const [selectedImage, setSelectedImage] = React.useState(null);

  const toggleLike = (itemId) => {
    setLikedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId) 
        : [...prev, itemId]
    );
  };

  const openImageModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
  <>
    <Head>
      <title>My Wishlist | Your Store Name</title>
      <meta name="description" content="Browse and manage your wishlist items. Save your favorite products for later purchase." />
      <meta name="keywords" content="wishlist, favorites, save products, shopping list" />
      <meta property="og:title" content="My Wishlist | Your Store Name" />
      <meta property="og:description" content="Browse and manage your wishlist items" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://yourstore.com/wishlist" />
    </Head>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 font-sans">
      <h1 className="text-xl sm:text-2xl md:text-3xl mb-6 font-normal flex items-center">
        <FaHeart className="text-red-600 mr-2" />
        My wishlist
      </h1>
      
      <div className="border border-gray-200 rounded-lg overflow-x-auto">
        {/* Table Header - Hidden on mobile */}
        <div className="hidden md:grid grid-cols-12 bg-gray-100 p-4 font-bold border-b border-gray-200 gap-4">
          <div className="col-span-4">Product</div>
          <div className="col-span-2 text-right">Price</div>
          <div className="col-span-2 text-center">Stock</div>
          <div className="col-span-2 text-center">Actions</div>
          <div className="col-span-2"></div> {/* Empty column for heart icon */}
        </div>
        
        {/* Wishlist Items */}
        <div className="divide-y divide-gray-200">
          {wishlistItems.filter(item => likedItems.includes(item.id)).map((item) => (
            <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 p-4 md:p-4 gap-4 relative hover:bg-gray-50 transition-colors">
              {/* Product Info - 4 columns */}
              <div className="md:col-span-4 flex items-start space-x-4">
                <div 
                  onClick={() => openImageModal(item.image)}
                  className="w-20 h-20 flex-shrink-0 bg-gray-100 bg-cover bg-center cursor-pointer rounded-md"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div>
                  <h3 className="font-bold text-base">{item.name}</h3>
                  <p className="text-gray-500 text-sm">Added: {item.addedDate}</p>
                  <div className="md:hidden mt-2">
                    <span className={`text-sm ${item.stockStatus === 'In Stock' ? 'text-green-600' : 'text-red-600'}`}>
                      {item.stockStatus}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Price - 2 columns */}
              <div className="md:col-span-2 flex flex-col justify-center">
                <span className="md:hidden text-xs text-gray-500 mb-1">Price:</span>
                {item.hasDiscount ? (
                  <div className="flex flex-col md:items-end">
                    <span className="line-through text-gray-400 text-sm">${item.originalPrice.toFixed(2)}</span>
                    <span className="text-red-600 font-medium">${item.discountedPrice.toFixed(2)}</span>
                  </div>
                ) : item.priceRange ? (
                  <span className="text-sm md:text-right">
                    ${item.priceRange.min.toFixed(2)} - ${item.priceRange.max.toFixed(2)}
                  </span>
                ) : (
                  <span className="text-sm md:text-right">${item.price.toFixed(2)}</span>
                )}
              </div>
              
              {/* Stock Status - 2 columns (hidden on mobile) */}
              <div className="hidden md:flex md:col-span-2 items-center justify-center">
                <span className={`text-sm ${item.stockStatus === 'In Stock' ? 'text-green-600' : 'text-red-600'}`}>
                  {item.stockStatus}
                </span>
              </div>
              
              {/* Action Button - 2 columns */}
              <div className="md:col-span-2 flex items-center">
                {item.buttonType === 'addToCart' ? (
                  <button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 px-3 rounded-md text-sm flex items-center justify-center space-x-2">
                    <FaShoppingCart size={14} />
                    <span>Add to Cart</span>
                  </button>
                ) : (
                  <button className="w-full bg-white hover:bg-gray-50 text-blue-700 border border-blue-700 py-2 px-3 rounded-md text-sm flex items-center justify-center space-x-2">
                    <FaCog size={14} />
                    <span>Options</span>
                  </button>
                )}
              </div>
              
              {/* Heart icon - 2 columns */}
              <div className="md:col-span-2 flex items-center justify-end">
                <button 
                  onClick={() => toggleLike(item.id)}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  {likedItems.includes(item.id) ? 
                    <FaHeart className="text-red-500 text-lg" /> : 
                    <FaRegHeart className="text-lg" />}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bulk Actions */}
        <div className="bg-gray-100 p-4 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full sm:w-auto">
            <span className="text-sm whitespace-nowrap">Apply to selected:</span>
            <select className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full sm:w-48">
              <option>Add to cart</option>
              <option>Remove from wishlist</option>
            </select>
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md text-sm whitespace-nowrap w-full sm:w-auto">
              APPLY
            </button>
          </div>
          <button className="text-blue-700 hover:text-blue-800 text-sm whitespace-nowrap w-full sm:w-auto text-right sm:text-left">
            UPDATE WISHLIST
          </button>
        </div>
      </div>
      
      {/* Share Section */}
      <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <span className="text-sm font-medium">Share wishlist:</span>
        <div className="flex gap-4">
          <button className="text-blue-800 hover:text-blue-900 transition-colors">
            <FaFacebook size={20} />
          </button>
          <button className="text-blue-400 hover:text-blue-500 transition-colors">
            <FaTwitter size={20} />
          </button>
          <button className="text-red-600 hover:text-red-700 transition-colors">
            <FaPinterest size={20} />
          </button>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button className="border border-blue-700 text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition-colors">
          REQUEST QUOTE
        </button>
        <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-medium transition-colors">
          ADD ALL TO CART
        </button>
      </div>
    </div>

    {/* Image Modal */}
    {selectedImage && (
      <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50" onClick={closeImageModal}>
        <div className="relative max-w-full max-h-[90vh]">
          <img 
            src={selectedImage} 
            alt="Product preview" 
            className="max-w-full max-h-[90vh] object-contain"
          />
          <button 
            onClick={closeImageModal}
            className="absolute top-4 right-4 text-white text-3xl cursor-pointer bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-colors"
          >
            ×
          </button>
        </div>
      </div>
    )}
  </>
);
};

export default Wishlist;