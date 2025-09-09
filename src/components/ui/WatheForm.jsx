import { FaUpload, FaCamera, FaChevronDown } from "react-icons/fa";
import React, { useState } from "react";
import watchBanner from '../../assets/person-doing-their-delicate-job.jpg';

export default function WatchService() {
  const [selectedService, setSelectedService] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const serviceOptions = [
    "Battery Replacement",
    "Movement Service",
    "Crystal Replacement",
    "Band Adjustment",
    "Water Resistance Testing",
    "Cleaning & Polishing",
    "Dial Repair",
    "Vintage Restoration",
  ];

  const watchTypes = [
    "Automatic",
    "Quartz",
    "Mechanical",
    "Chronograph",
    "Diver",
    "Pilot",
    "Dress",
    "Smartwatch",
    "Other",
  ];

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setSelectedImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleCameraCapture = () => {
    alert("Camera functionality would be implemented here");
  };

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const selectService = (service) => {
    setSelectedService(service);
    setIsDropdownOpen(false);
  };

  return (
    <div className="w-full min-h-[100px] flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 items-stretch">
        {/* Left: Banner Image */}
        <div className="hidden md:block">
          <img
            src={watchBanner}
            alt="Watch Banner"
            className="w-full h-full object-cover rounded-l-2xl shadow-lg"
          />
        </div>

        {/* Right: Form */}
        <div className="bg-white/95 backdrop-blur-md shadow-xl rounded-r-2xl p-6 md:p-8 border border-gray-100 flex flex-col justify-center">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-6 text-blue-800">
    EXPERT WATCH REPAIR SERVICES
          </h2>

          {/* Product Name */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-medium">
              ENTER PRODUCT / SERVICE NAME
            </label>
            <input
              type="text"
              placeholder="Enter Product / Service Name"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>

          {/* Manufacture Year + Watch Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                MANUFACTURE YEAR
              </label>
              <input
                type="number"
                min="1900"
                max={new Date().getFullYear()}
                placeholder="Year"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                WATCH TYPE
              </label>
              <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm">
                <option value="">Type</option>
                {watchTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Type of Services */}
          <div className="mb-4 relative">
            <label className="block text-gray-700 mb-2 font-medium">
              TYPE OF SERVICES
            </label>
            <div
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white cursor-pointer flex justify-between items-center text-sm"
              onClick={toggleDropdown}
            >
              <span>{selectedService || "Select Service"}</span>
              <FaChevronDown
                className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
              />
            </div>

            {isDropdownOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                {serviceOptions.map((service) => (
                  <div
                    key={service}
                    className={`p-3 hover:bg-blue-50 cursor-pointer ${selectedService === service ? "bg-blue-100" : ""}`}
                    onClick={() => selectService(service)}
                  >
                    {service}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Upload */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2 font-medium text-sm">
              UPLOAD WATCH IMAGE
            </label>
            <div className="flex flex-col sm:flex-row gap-4">
              <label className="flex-1 flex items-center justify-center px-4 py-3 bg-white border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 text-sm">
                <FaUpload className="mr-2 text-blue-600" />
                <span>Upload</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>

              <button
                type="button"
                onClick={handleCameraCapture}
                className="flex-1 flex items-center justify-center px-4 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 text-sm"
              >
                <FaCamera className="mr-2 text-blue-600" />
                <span>Camera</span>
              </button>
            </div>

            {selectedImage && (
              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-2">Selected Image:</p>
                <img
                  src={selectedImage}
                  alt="Watch preview"
                  className="h-32 object-contain border rounded"
                />
              </div>
            )}
          </div>

          <button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold transition duration-300 shadow-md text-sm">
            BOOK SERVICE
          </button>
        </div>
      </div>
    </div>
  );
}
