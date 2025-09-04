import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { FaCloudUploadAlt } from "react-icons/fa";

const WriteReview = ({ isOpen, onClose, onSubmit, product }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [media, setMedia] = useState([]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setRating(0);
      setHover(null);
      setFeedback("");
      setMedia([]);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleFileChange = (e) => {
    setMedia(Array.from(e.target.files));
  };

  const handleSubmit = () => {
    onSubmit({ rating, feedback, media });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-[90%] max-w-md">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Rate Our App!</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl"
          >
            ×
          </button>
        </div>

        <p className="text-sm text-gray-500 mt-2">
          Help us improve our tool to best suit your needs by rating us here!
        </p>
        <p className="text-xs text-purple-600 mt-1 italic">
          Share your shopping experience with photos & videos!
        </p>

        {/* Product Info */}
        {product && (
          <div className="flex items-center gap-4 mt-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-14 h-14 rounded"
            />
            <div>
              <p className="font-semibold">{product.name}</p>
              <p className="text-sm text-gray-500">{product.brand}</p>
            </div>
          </div>
        )}

        {/* Stars */}
        <div className="flex justify-center space-x-2 mt-4">
          {[...Array(5)].map((star, index) => {
            const currentRating = index + 1;
            return (
              <button
                key={index}
                type="button"
                onClick={() => setRating(currentRating)}
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(null)}
                className="focus:outline-none"
              >
                <FaStar
                  size={28}
                  className={`${
                    currentRating <= (hover || rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Feedback */}
        <label className="block text-sm font-medium mt-6 text-gray-700">
          Can you tell us more?
        </label>
        <textarea
          rows="3"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Add feedback"
          className="w-full mt-2 p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
        ></textarea>

        {/* Media Upload */}
        <label className="block text-sm font-medium mt-4 text-gray-700">
          Add Photo/Video
        </label>
        <div className="mt-2">
          <label
            htmlFor="fileUpload"
            className="flex flex-col items-center justify-center w-full h-28 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-purple-500 transition"
          >
            <FaCloudUploadAlt className="text-3xl text-gray-400 mb-2" />
            <span className="text-sm text-gray-500">
              Click here to add photos & videos
            </span>
            <input
              id="fileUpload"
              type="file"
              multiple
              accept="image/*,video/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        </div>

        {media.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {media.map((file, idx) => (
              <span
                key={idx}
                className="text-xs px-2 py-1 bg-gray-100 border rounded-md text-gray-700"
              >
                {file.name}
              </span>
            ))}
          </div>
        )}

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={onClose}
            className="w-1/2 mr-2 py-2 border rounded-lg text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="w-1/2 ml-2 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-purple-700 text-white hover:opacity-90"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default WriteReview;