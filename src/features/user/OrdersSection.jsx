import React, { useState } from "react";
import { FaBox, FaTruck, FaCheckCircle, FaMapMarkerAlt } from "react-icons/fa";

// Product images
import watch from "../../assets/Watche/rendering-smart-home-device (1).jpg";
import bag from "../../assets/HandBags/close-up-kitted-bag-nature.jpg";
import jewelry from "../../assets/Clocks/8992.jpg";

function OrdersSection() {


  const orders = [
    {
      id: 1,
      name: "Hermès Kelly Red Watch 20mm",
      price: 4000,
      date: "13:45, Jun 10, 2025",
      image: watch,
      status: "Delivered",
      tracking: "TRK123456789",
    },
    {
      id: 2,
      name: "Hermès Handbag",
      price: 2500,
      date: "09:30, Jun 5, 2025",
      image: bag,
      status: "In Transit",
      tracking: "TRK987654321",
    },
    {
      id: 3,
      name: "Luxury Jewelry Set",
      price: 5800,
      date: "14:15, May 28, 2025",
      image: jewelry,
      status: "Processing",
      tracking: "TRK456789123",
    },
  ];

  // Timeline steps
  const timelineSteps = [
    { label: "Processing", icon: <FaBox className="text-yellow-500 text-lg" /> },
    { label: "In Transit", icon: <FaTruck className="text-blue-500 text-lg" /> },
    { label: "Delivered", icon: <FaCheckCircle className="text-green-500 text-lg" /> },
  ];

  // Get current step index
  const getCurrentStep = (status) => {
    switch (status) {
      case "Processing":
        return 0;
      case "In Transit":
        return 1;
      case "Delivered":
        return 2;
      default:
        return 0;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Orders</h1>

        {/* Orders List */}
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {orders.map((order) => {
              const currentStep = getCurrentStep(order.status);

              return (
                <li key={order.id} className="px-4 py-6 sm:px-6">
                  {/* Order Header */}
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-indigo-600 truncate">
                      Order #{order.id}
                    </p>
                    <p className="text-sm text-gray-500">
                      Tracking: {order.tracking}
                    </p>
                  </div>

                  {/* Product Info */}
                  <div className="mt-4 flex flex-col sm:flex-row sm:justify-between">
                    <div className="flex items-center">
                      <img
                        className="h-20 w-20 object-cover rounded-md mr-4"
                        src={order.image}
                        alt={order.name}
                      />
                      <div>
                        <p className="text-lg font-semibold text-gray-900">
                          {order.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          Ordered on {order.date}
                        </p>
                        <p className="text-lg font-bold text-gray-900 mt-1">
                          ${order.price.toLocaleString()}
                        </p>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="mt-4 sm:mt-0 flex sm:flex-col sm:items-end">
                      <button className="text-indigo-600 hover:text-indigo-900 mb-2">
                        View Details
                      </button>
                      <button className="text-indigo-600 hover:text-indigo-900 mb-2">
                        Buy Again
                      </button>
                      <button
                        onClick={() => setSelectedOrder(order)}
                        className="flex items-center text-sm bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700 transition"
                      >
                        <FaMapMarkerAlt className="mr-2" />
                        Track Live
                      </button>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="mt-6">
                    <div className="flex items-center justify-between relative">
                      {timelineSteps.map((step, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-center relative w-1/3"
                        >
                          {/* Line Connector */}
                          {index < timelineSteps.length - 1 && (
                            <div
                              className={`absolute top-2 left-1/2 h-1 w-full -translate-x-1/2 ${
                                index < currentStep ? "bg-indigo-600" : "bg-gray-300"
                              }`}
                              style={{ zIndex: 0 }}
                            ></div>
                          )}

                          {/* Step Circle */}
                          <div
                            className={`rounded-full p-2 z-10 ${
                              index <= currentStep ? "bg-indigo-600" : "bg-gray-200"
                            }`}
                          >
                            {step.icon}
                          </div>

                          {/* Step Label */}
                          <p
                            className={`mt-2 text-sm ${
                              index <= currentStep
                                ? "text-indigo-600 font-semibold"
                                : "text-gray-400"
                            }`}
                          >
                            {step.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

       
      </div>
    </div>
  );
}

export default OrdersSection;
