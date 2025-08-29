import React, { useState } from "react";
import { Disclosure } from '@headlessui/react';
import { FiFilter, FiX, FiChevronDown, FiSearch, FiShoppingCart } from 'react-icons/fi';
import { FaTimes, FaChevronDown, FaChevronRight, } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FilterSidebar = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  

  const filters = [
    {
      id: 'category',
      name: 'Category',
      options: [
        { value: 'watch', label: 'Watch' },
        { value: 'sport', label: 'Sport' },
        { value: 'classic', label: 'Classic' },
      ],
    },
    {
      id: 'price',
      name: 'Price',
      options: [
        { value: '1-500', label: 'AED 1 - AED 500' },
        { value: '2501-5000', label: 'AED 2501 - AED 5000' },
        { value: '8000-90000', label: 'AED 8000 - AED 90000' },
      ],
    },
    {
      id: 'brand',
      name: 'Brand',
      options: [
        { value: 'rolex', label: 'Rolex' },
        { value: 'omega', label: 'Omega' },
        { value: 'rado', label: 'Rado' },
        { value: 'hurmen', label: 'Hurmen' },
      ],
    },
    {
      id: 'discount',
      name: 'Discount',
      options: [
        { value: '90', label: '90% or More' },
        { value: '40', label: '40% or More' },
        { value: '20', label: '20% or More' },
        { value: '60', label: '60% or More' },
      ],
    },
    {
      id: 'rating',
      name: 'Rating',
      options: [
        { value: '5', label: '★★★★★' },
        { value: '4', label: '★★★★☆ & Up' },
        { value: '3', label: '★★★☆☆ & Up' },
        { value: '2', label: '★★☆☆☆ & Up' },
      ],
    },
    {
      id: 'badges',
      name: 'Badges',
      options: [
        { value: 'deal_of_day', label: 'Deal of the Day' },
        { value: 'in_demand', label: 'In Demand' },
        { value: 'moglix_choice', label: 'Moglix Choice' },
        { value: 'same_day_dispatch', label: 'Same Day Dispatch' },
        { value: 'top_seller', label: 'Top Seller' },
      ],
    },
    {
      id: 'availability',
      name: 'Availability',
      options: [
        { value: 'in_stock', label: 'Show in stock only' },
      ],
    },
  ];

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop', subMenu: [
      { name: 'All Products', path: '/shop/all' },
      { name: 'New Arrivals', path: '/shop/new' },
      { name: 'Best Sellers', path: '/shop/bestsellers' }
    ]},
    { name: 'Collections', path: '/collections' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      {/* Mobile filter button (shown only on mobile) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-30">
        <div className="flex justify-around items-center h-16">
          <button className="flex flex-col items-center justify-center text-gray-600 hover:text-indigo-600">
            <span className="text-xs">Shop</span>
          </button>
          <button 
            onClick={() => setMobileFiltersOpen(true)}
            className="flex flex-col items-center justify-center text-indigo-600"
          >
            <FiFilter className="h-6 w-6" />
            <span className="text-xs mt-1">Filters</span>
          </button>
          <button className="flex flex-col items-center justify-center text-gray-600 hover:text-indigo-600">
            <span className="text-xs">Waitlist</span>
          </button>
          <button className="flex flex-col items-center justify-center text-gray-600 hover:text-indigo-600">
            <FiShoppingCart className="h-6 w-6" />
            <span className="text-xs mt-1">Cart</span>
          </button>
          <button className="flex flex-col items-center justify-center text-gray-600 hover:text-indigo-600">
            <span className="text-xs">My Account</span>
          </button>
        </div>
      </div>

      {/* Mobile sidebar overlay and sidebar */}
      <div className={`md:hidden fixed inset-0 z-50 ${mobileFiltersOpen ? 'block' : 'hidden'}`}>
        {/* Overlay */}
        <div 
          className="fixed inset-0 bg-opacity-40" 
          onClick={() => setMobileFiltersOpen(false)}
        />
     {/* Mobile sidebar */}
        <div 
          className={`fixed inset-y-0 left-0 w-80 bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${
            mobileFiltersOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
         <div className="flex justify-around items-center h-16">
          {/* ... your existing bottom navigation */}
          <button 
            onClick={() => setMobileFiltersOpen(true)}
            className="flex flex-col items-center justify-center text-indigo-600"
          >
            <FiFilter className="h-6 w-6" />
            <span className="text-xs mt-1">Filters</span>
          </button>
          {/* ... other buttons */}
        </div>

          {/* Filters content */}
          <div className="px-4 pb-20 overflow-y-auto h-[calc(100%-120px)]">
            {filters.map((section) => (
              <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-4">
                {({ open }) => (
                  <>
                    <h3 className="-mx-2 -my-3 flow-root">
                      <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-600 hover:text-gray-900">
                        <span className="text-lg font-bold text-gray-900">{section.name}</span>
                        <span className="ml-6 flex items-center">
                          <FiChevronDown
                            className={`${open ? '-rotate-180' : 'rotate-0'} h-6 w-6 transform transition-transform duration-200`}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </h3>
                    <Disclosure.Panel className="pt-4 pb-2">
                      <div className="space-y-3">
                        {section.id === 'brand' && (
                          <div className="relative mb-3">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                              <FiSearch className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                              type="text"
                              className="block w-full rounded-lg border-0 py-2 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-base"
                              placeholder="Search brands"
                            />
                          </div>
                        )}
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            {section.id === 'rating' ? (
                              <div className="flex items-center">
                                <input
                                  id={`filter-mobile-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  type="checkbox"
                                  className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                  className="ml-3 text-base text-gray-600"
                                >
                                  <span className="text-yellow-400 text-lg">{option.label}</span>
                                </label>
                              </div>
                            ) : (
                              <>
                                <input
                                  id={`filter-mobile-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  type="checkbox"
                                  className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                  className="ml-3 text-base text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>

          {/* Fixed buttons at bottom */}
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 flex justify-between">
            <button 
              className="px-6 py-3 text-base font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
              onClick={() => setMobileFiltersOpen(false)}
            >
              Clear all
            </button>
            <button 
              className="px-6 py-3 text-base font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
              onClick={() => setMobileFiltersOpen(false)}
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 left-0 w-80 bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${
          dropdown !== null ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-lg font-bold text-gray-800">Close Menu</h2>
          <button
            onClick={() => setDropdown(null)}
            className="p-2 text-gray-500 hover:text-gray-700"
            aria-label="Close menu"
          >
            <FaTimes size={20} />
          </button>
        </div>

        <div className="overflow-y-auto h-full pb-4">
          {/* Main Menu Items */}
          {menuItems.map((item) => (
            <div key={item.name} className="border-b border-gray-200">
              <button
                onClick={() =>
                  setDropdown(dropdown === item.name ? null : item.name)
                }
                className="w-full flex justify-between items-center px-4 py-4 text-left text-gray-800 hover:bg-gray-50"
              >
                <span className="font-medium">{item.name}</span>
                {item.subMenu && (
                  <span className="text-gray-400">
                    {dropdown === item.name ? (
                      <FaChevronDown size={14} />
                    ) : (
                      <FaChevronRight size={14} />
                    )}
                  </span>
                )}
              </button>

              {item.subMenu && dropdown === item.name && (
                <div className="bg-gray-50 pl-6">
                  {item.subMenu.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.path}
                      className="block px-4 py-3 text-gray-600 hover:bg-gray-100 border-t border-gray-200"
                      onClick={() => setDropdown(null)}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

        

        </div>
      </div>

      {/* Desktop filters */}
      <div className="hidden lg:block lg:w-80">
        <div className="sticky top-20">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200" style={{margin:"3%"}}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Filters</h2>
              <button className="text-base font-medium text-indigo-600 hover:text-indigo-500">
                Clear all
              </button>
            </div>

            {filters.map((section) => (
              <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-5">
                {({ open }) => (
                  <>
                    <h3 className="-my-3 flow-root">
                      <Disclosure.Button className="flex w-full items-center justify-between py-3 text-gray-600 hover:text-gray-900">
                        <span className="text-lg font-bold text-gray-900">{section.name}</span>
                        <span className="ml-6 flex items-center">
                          <FiChevronDown
                            className={`${open ? '-rotate-180' : 'rotate-0'} h-6 w-6 transform transition-transform duration-200`}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </h3>
                    <Disclosure.Panel className="pt-4 pb-2">
                      {section.id === 'brand' && (
                        <div className="relative mb-4">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <FiSearch className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="text"
                            className="block w-full rounded-lg border-0 py-2 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-base"
                            placeholder="Search brands"
                          />
                        </div>
                      )}
                      <div className="space-y-3">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            {section.id === 'rating' ? (
                              <div className="flex items-center">
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  type="checkbox"
                                  className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-base text-gray-600"
                                >
                                  <span className="text-yellow-400 text-lg">{option.label}</span>
                                </label>
                              </div>
                            ) : (
                              <>
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  type="checkbox"
                                  className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-base text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;