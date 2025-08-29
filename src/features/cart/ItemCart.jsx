import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdDelete, MdArrowBack } from "react-icons/md";
import PayPal from '../../assets/images (2).png';
import Mastercard from '../../assets/mastercard-icon-lg.png';
import Visa from '../../assets/visa-logo-visa-icon-free-free-vector.jpg';
import Head from "next/head";
import watch from '../../assets/Watche/rendering-smart-home-device (1).jpg'
import cufflinks from '../../assets/Cufflinks/closeup-photo-stud-white-shirt-with-red-tie.jpg'

const DUMMY_ITEMS = [
  { 
    id: 1,
    name: "Fifa 23", 
    price: 199.00, 
    originalPrice: 249.00,
    qty: 1, 
    img:watch, 
    category: "PS5",
    inStock: true,
    deliveryEstimate: "1-3 business days"
  },
  { 
    id: 2,
    name: "PlayStation 5 Console", 
    price: 2199.00, 
    qty: 1, 
    img: cufflinks, 
    category: "Console",
    inStock: true,
    deliveryEstimate: "3-5 business days"
  },
  { 
    id: 3,
    name: "Wireless Headset", 
    price: 349.00, 
    originalPrice: 399.00,
    qty: 1, 
    img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=200&h=200&fit=crop", 
    category: "Accessories",
    inStock: false,
    deliveryEstimate: "Backordered - ships in 2 weeks"
  }
];

const ShoppingCart = () => {
  const totalItems = DUMMY_ITEMS.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = DUMMY_ITEMS.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const totalSavings = DUMMY_ITEMS.reduce((sum, item) => 
    sum + (item.originalPrice ? (item.originalPrice - item.price) * item.qty : 0), 0);
  const shipping = 25.00;
  const tax = subtotal * 0.05;
  const total = subtotal + shipping + tax;

  return (
    <>
      <Head>
        <title>Shopping Cart | Your Store Name</title>
        <meta name="description" content="Review and manage items in your shopping cart" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Your Shopping Cart" />
        <meta property="og:description" content="Review your items before checkout" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yourstore.com/cart" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Mobile Header - Sticky */}
        <header className="bg-white shadow-sm sticky top-0 z-10 lg:static">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <button className="lg:hidden text-gray-500 hover:text-gray-700">
                <MdArrowBack className="h-6 w-6" />
              </button>
              <h1 className="text-xl font-bold text-gray-900 lg:text-3xl">Your Cart</h1>
              <div className="lg:hidden"></div> {/* Spacer for alignment */}
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-8">
          {/* Mobile Order Summary Bar - Sticky at bottom */}
          <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 p-4 z-10">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-sm text-gray-600">Total ({totalItems} items)</div>
                <div className="text-lg font-bold">AED {total.toFixed(2)}</div>
              </div>
              <button className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg text-base font-semibold shadow-sm">
                Checkout
              </button>
            </div>
          </div>

          <div className="lg:flex lg:gap-8">
            {/* Cart Items Section */}
            <div className="lg:w-2/3">
              {/* Cart Header */}
              <div className="flex items-center justify-between my-6 lg:mb-6">
                <div className="hidden lg:flex items-center">
                  <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">
                    {totalItems}
                  </span>
                  <h2 className="text-xl font-semibold text-gray-900">Items in your cart</h2>
                </div>
                <a href="/shop" className="hidden lg:flex text-purple-600 hover:text-purple-800 items-center text-sm">
                  <MdArrowBack className="mr-1" /> Continue Shopping
                </a>
              </div>

              {/* Savings Notice - Mobile Top */}
              {totalSavings > 0 && (
                <div className="lg:hidden bg-green-50 border border-green-200 rounded-lg p-3 flex items-center mb-4">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="text-green-700 text-sm">
                    You save AED {totalSavings.toFixed(2)}
                  </span>
                </div>
              )}

              {/* Cart Items */}
              <div className="bg-white rounded-xl shadow-sm divide-y divide-gray-200">
                {DUMMY_ITEMS.map((item) => (
                  <div key={item.id} className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                      {/* Product Image - Centered on mobile */}
                      <div className="flex justify-center sm:justify-start sm:flex-shrink-0">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-32 h-32 sm:w-24 sm:h-24 object-contain rounded-lg border border-gray-200"
                          loading="lazy"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1">
                        <div className="flex flex-col h-full justify-between">
                          <div>
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                                  {item.name}
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-500 mb-1">{item.category}</p>
                              </div>
                              {/* Price on mobile - shown only for mobile */}
                              <div className="sm:hidden text-right">
                                {item.originalPrice && (
                                  <span className="text-xs line-through text-gray-400 block">
                                    AED {item.originalPrice.toFixed(2)}
                                  </span>
                                )}
                                <span className="text-base font-bold text-gray-900">
                                  AED {item.price.toFixed(2)}
                                </span>
                              </div>
                            </div>

                            {/* Stock Status */}
                            <div className="mt-1 sm:mt-2">
                              {!item.inStock ? (
                                <p className="text-xs sm:text-sm text-red-500">{item.deliveryEstimate}</p>
                              ) : (
                                <p className="text-xs sm:text-sm text-green-500">In Stock • {item.deliveryEstimate}</p>
                              )}
                            </div>
                          </div>

                          {/* Quantity Controls */}
                          <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                            <div className="flex items-center justify-between sm:justify-start">
                              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                                <button 
                                  className="px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                                  aria-label="Decrease quantity"
                                >
                                  <FaMinus size={12} />
                                </button>
                                <span className="px-3 py-2 text-center w-8 sm:w-12 font-medium text-sm sm:text-base">
                                  {item.qty}
                                </span>
                                <button 
                                  className="px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                                  aria-label="Increase quantity"
                                >
                                  <FaPlus size={12} />
                                </button>
                              </div>

                              {/* Price on desktop - shown only for desktop */}
                              <div className="hidden sm:block ml-4">
                                <span className="text-base font-semibold text-gray-900">
                                  AED {(item.price * item.qty).toFixed(2)}
                                </span>
                              </div>
                            </div>

                            <div className="flex justify-between sm:justify-end items-center">
                              {/* Price on mobile - total price */}
                              <div className="sm:hidden">
                                <span className="text-sm font-semibold text-gray-900">
                                  AED {(item.price * item.qty).toFixed(2)}
                                </span>
                              </div>
                              <button className="text-red-600 hover:text-red-800 flex items-center text-sm transition-colors">
                                <MdDelete className="mr-1" /> 
                                <span>Remove</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Savings Notice - Desktop */}
              {totalSavings > 0 && (
                <div className="hidden lg:block mt-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="text-green-700 font-medium">
                    You're saving AED {totalSavings.toFixed(2)} on this order!
                  </span>
                </div>
              )}
            </div>

            {/* Order Summary - Hidden on mobile (shown in bottom bar) */}
            <div className="hidden lg:block lg:w-1/3 mt-8 lg:mt-0">
              <div className="sticky top-8">
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="px-6 py-5 bg-gray-50 border-b">
                    <h2 className="text-xl font-bold text-gray-900">Order Summary</h2>
                  </div>

                  <div className="px-6 py-5 space-y-4">
                    {/* Order Details */}
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal ({totalItems} items)</span>
                        <span className="font-medium">AED {subtotal.toFixed(2)}</span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-gray-600">Shipping</span>
                        <span className="font-medium">AED {shipping.toFixed(2)}</span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-gray-600">Tax (estimated)</span>
                        <span className="font-medium">AED {tax.toFixed(2)}</span>
                      </div>
                    </div>

                    {/* Promo Code */}
                    <div className="pt-2">
                      <label htmlFor="promo-code" className="block text-sm font-medium text-gray-700 mb-2">
                        Have a promo code?
                      </label>
                      <div className="flex">
                        <input
                          type="text"
                          id="promo-code"
                          placeholder="Enter promo code"
                          className="flex-1 border border-gray-300 rounded-l-lg shadow-sm focus:border-purple-500 focus:ring-purple-500 text-sm py-2 px-3"
                        />
                        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-r-lg text-sm font-medium transition-colors">
                          Apply
                        </button>
                      </div>
                    </div>

                    {/* Total */}
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-gray-900">Total</span>
                        <div className="text-right">
                          <span className="text-lg font-bold text-gray-900 block">AED {total.toFixed(2)}</span>
                          <span className="text-xs text-gray-500">or 4 interest-free payments of AED {(total/4).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>

                    {/* Checkout Button */}
                    <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg text-base font-semibold shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-4">
                      Proceed to Secure Checkout
                    </button>

                    {/* Payment Methods */}
                    <div className="flex justify-center space-x-4 pt-4">
                      <img src={Visa} alt="Visa" className="h-8" loading="lazy" />
                      <img src={Mastercard} alt="Mastercard" className="h-8" loading="lazy" />
                      <img src={PayPal} alt="PayPal" className="h-8" loading="lazy" />
                    </div>

                    {/* Security Info */}
                    <div className="flex items-center text-sm text-gray-500 pt-4">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span>Secure checkout with 256-bit SSL encryption</span>
                    </div>
                  </div>
                </div>

                {/* Customer Support */}
                <div className="mt-4 bg-white rounded-xl shadow-md overflow-hidden p-5">
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-purple-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <div>
                      <h3 className="text-base font-medium text-gray-900">Need help?</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Call us at <a href="tel:+1234567890" className="text-purple-600 hover:underline">+1 (234) 567-890</a> or 
                        <a href="mailto:support@yourstore.com" className="text-purple-600 hover:underline ml-1">email us</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default ShoppingCart;