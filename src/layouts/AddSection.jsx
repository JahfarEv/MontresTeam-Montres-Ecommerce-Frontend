import React from "react";
import Wathcnew from '../assets/30193.jpg'

const WatchImages = () => {
  return (
    <div className="bg-gray-100 min-h-[100px] p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* LEFT IMAGE */}
        <div className="flex items-center justify-center">
          <img
            src={Wathcnew}
            alt="Classic Watch"
            className="w-full h-auto max-h-[70vh] object-contain drop-shadow-lg"
          />
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex items-center justify-center relative">
          <img
            src={Wathcnew}
            alt="Luxury Watch"
            className="w-full h-auto max-h-[70vh] object-contain drop-shadow-xl"
          />

          {/* Floating Gold Coin Decorations (optional) */}
          <div className="absolute top-8 left-8 w-12 h-12 bg-yellow-500 rounded-full opacity-70 blur-xl"></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-yellow-600 rounded-full opacity-60 blur-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default WatchImages;
