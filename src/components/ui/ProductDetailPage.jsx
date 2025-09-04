import React, { useState } from "react";
import { FaPlayCircle, FaHeart, FaShareAlt } from "react-icons/fa";
import {
  FaShieldAlt,
  FaHeadset,
  FaUndo,
  FaQuestionCircle,
  FaExchangeAlt,
  FaBoxOpen,
  FaThumbsDown,
} from "react-icons/fa";
import ReactImageMagnify from "react-image-magnify";
import HermsWatch from "../../assets/Watche/stylish-golden-watch-white-surface.jpg";
import thubnail from "../../assets/Watche/rendering-smart-home-device.jpg";
import advertiseVideo from "../../assets/6811913-hd_1920_1080_25fps.mp4";
import ReviewsRatings from "./ReviewsRatings";

const ProductDetailPage = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [selectedImage, setSelectedImage] = useState(HermsWatch);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);

  const images = [HermsWatch, HermsWatch, HermsWatch]; // Replace with real images

  const handleWishlistToggle = () => {
    setIsWishlisted(!isWishlisted);
    // Here you would typically make an API call to add/remove from wishlist
  };

  const handleShareClick = () => {
    setShowShareOptions(!showShareOptions);
    // For a real implementation, you might use the Web Share API if available
    if (navigator.share) {
      navigator.share({
        title: 'Hermès Kelly Red Watch',
        text: 'Check out this beautiful Hermès watch!',
        url: window.location.href,
      })
      .catch((error) => console.log('Error sharing:', error));
    }
  };

  const handleSocialShare = (platform) => {
    // Implement social sharing for different platforms
    let shareUrl = '';
    const productUrl = encodeURIComponent(window.location.href);
    const productTitle = encodeURIComponent('Hermès Kelly Red Watch');
    
    switch(platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${productUrl}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${productTitle}&url=${productUrl}`;
        break;
      case 'pinterest':
        shareUrl = `https://pinterest.com/pin/create/button/?url=${productUrl}&description=${productTitle}`;
        break;
      case 'whatsapp':
        shareUrl = `https://api.whatsapp.com/send?text=${productTitle} ${productUrl}`;
        break;
      default:
        return;
    }
    
    window.open(shareUrl, '_blank');
    setShowShareOptions(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-6 px-4">
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section - Images with Magnify */}
        <div>
          <div className="relative">
            {/* Wishlist and Share Icons */}
            <div className="absolute top-2 right-2 z-10 flex flex-col gap-2">
              <button 
                onClick={handleWishlistToggle}
                className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
              >
                <FaHeart 
                  size={20} 
                  className={isWishlisted ? "text-red-500" : "text-gray-600"} 
                />
              </button>
              
              <div className="relative">
                <button 
                  onClick={handleShareClick}
                  className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                  aria-label="Share product"
                >
                  <FaShareAlt size={20} className="text-gray-600" />
                </button>
                
                {/* Share Options Dropdown */}
                {showShareOptions && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
                    <button 
                      onClick={() => handleSocialShare('facebook')}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      Share on Facebook
                    </button>
                    <button 
                      onClick={() => handleSocialShare('twitter')}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      Share on Twitter
                    </button>
                    <button 
                      onClick={() => handleSocialShare('pinterest')}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      Share on Pinterest
                    </button>
                    <button 
                      onClick={() => handleSocialShare('whatsapp')}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      Share on WhatsApp
                    </button>
                    <button 
                      onClick={() => navigator.clipboard.writeText(window.location.href)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      Copy Link
                    </button>
                  </div>
                )}
              </div>
            </div>
            
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Hermes Watch",
                  isFluidWidth: true,
                  src: selectedImage,
                },
                largeImage: {
                  src: selectedImage,
                  width: 1200,
                  height: 1800,
                },
                enlargedImageContainerDimensions: {
                  width: "120%",
                  height: "120%",
                },
              }}
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3 mt-4">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`watch-thumbnail-${idx}`}
                onClick={() => setSelectedImage(img)}
                className={`w-20 h-20 object-cover rounded-md border cursor-pointer ${
                  selectedImage === img
                    ? "border-red-500"
                    : "hover:border-red-500"
                }`}
              />
            ))}

            {/* Video Thumbnail */}
            <div
              onClick={() => setShowVideo(true)}
              className="relative w-20 h-20 rounded-md overflow-hidden border cursor-pointer hover:border-red-500"
            >
              <img
                src={HermsWatch}
                alt="watch-video"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <FaPlayCircle size={28} className="text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Details */}
        <div>
          <h1 className="text-2xl font-semibold mb-2">
            Hermès Kelly Red Watch 20mm – Classic Imported Watch Model For Men
          </h1>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-green-600 text-white text-sm px-2 py-1 rounded">
              4.6 ★
            </span>
            <span className="text-gray-600 text-sm">(8 Reviews)</span>
          </div>

          <div className="text-3xl font-bold text-red-600 mb-2">400.00 AED</div>
          <p className="text-gray-500 mb-4">
            600.00 AED <span className="text-green-600 ml-2">28% OFF</span>
          </p>

          {/* Offers */}
          <div className="border rounded-lg p-4 mb-4 bg-green-50">
            <h2 className="font-semibold mb-2">Offers And Coupons</h2>
            <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
              <li>
                Pay Online & Get EXTRA 2.5% OFF on BELL Inverter Welding
                Machines
              </li>
              <li>Get GST Invoice And Save Up To 18% on Business Purchases</li>
              <li>
                On Min. Purchase Of Rs. 3000 Across Banks And Rs. 4500 For Bajaj
                Finserv
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-6">
            <button className="flex-1 bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800">
              ADD TO CART
            </button>
            <button className="flex-1 bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-500">
              BUY NOW
            </button>
          </div>

          {/* Delivery Details */}
          <div className="mb-6">
            <h2 className="font-semibold mb-2">Delivery Details</h2>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter Your Pincode"
                className="flex-1 border rounded-lg px-3 py-2 outline-none focus:border-red-500"
              />
              <button className="bg-blue-900 text-white px-4 rounded-lg hover:bg-blue-800">
                Check
              </button>
            </div>
          </div>

          {/* About Product */}
          <div className="mb-6">
            <h2 className="font-semibold mb-2">About This Product</h2>
            <ul className="list-disc ml-5 text-gray-700 text-sm space-y-1">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>
                Phasellus dolor dolor, dapibus in urna a, malesuada fermentum
                ex.
              </li>
              <li>
                Morbi tempor libero sit amet lectus faucibus, nec fringilla
                ligula finibus.
              </li>
            </ul>
            <button className="text-red-600 text-sm mt-2 hover:underline">
              Show All Key Features
            </button>
          </div>

          {/* Specifications */}
          <div className="mb-6">
            <h2 className="font-semibold mb-2">Product Specifications</h2>
            <table className="w-full text-sm border">
              <tbody>
                <tr className="border">
                  <td className="p-2 font-medium">Brand</td>
                  <td className="p-2">Hermes Kelly</td>
                </tr>
                <tr className="border">
                  <td className="p-2 font-medium">Dial</td>
                  <td className="p-2">Round</td>
                </tr>
                <tr className="border">
                  <td className="p-2 font-medium">Size</td>
                  <td className="p-2">45 MM</td>
                </tr>
                <tr className="border">
                  <td className="p-2 font-medium">Belt Type</td>
                  <td className="p-2">Leather</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Product Video Preview */}
          <div className="mb-6"> {/* ✅ added mb-6 */}
            <h2 className="font-semibold mb-2">Product Videos</h2>
            <div
              onClick={() => setShowVideo(true)}
              className="relative rounded-lg overflow-hidden border cursor-pointer"
            >
              <img src={thubnail} alt="product video" className="w-full" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <FaPlayCircle size={42} className="text-white" />
              </div>
            </div>
          </div>

          {/* ✅ Benefits & Return/Warranty Policy */}
          <div className="border rounded-lg p-4 mb-6 ">
            <h2 className="font-semibold mb-4">Benefits</h2>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center gap-2">
                <FaShieldAlt className="text-blue-600" />
                <span>Secure Payments</span>
              </div>
              <div className="flex items-center gap-2">
                <FaHeadset className="text-blue-600" />
                <span>365 Days Help Desk</span>
              </div>
            </div>

            <h2 className="font-semibold mb-4">Return & Warranty Policy</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <FaUndo className="text-blue-600" />
                <span>Upto 7 Days Returnable</span>
              </div>
              <div className="flex items-center gap-2">
                <FaQuestionCircle className="text-blue-600" />
                <span>Missing Product</span>
              </div>
              <div className="flex items-center gap-2">
                <FaExchangeAlt className="text-blue-600" />
                <span>Wrong Product</span>
              </div>
              <div className="flex items-center gap-2">
                <FaBoxOpen className="text-blue-600" />
                <span>Damaged Product</span>
              </div>
              <div className="flex items-center gap-2">
                <FaThumbsDown className="text-blue-600" />
                <span>Defective Product</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <ReviewsRatings/>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 relative">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded"
            >
              X
            </button>
            <video controls autoPlay className="w-full rounded-b-lg">
              <source src={advertiseVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;