import React, { useState } from "react";
import Head from "next/head";
import ProductCard from "../../features/product/ProductCard";
import FilterSidebar from "../../features/product/ProductFilterSidebar";
import watch from "../../assets/Watche/elegant-watch-with-silver-golden-chain-isolated.jpg";
import watch2 from '../../assets/Watche/rendering-smart-home-device (1).jpg'
import watch3 from '../../assets/Watche/stylish-golden-watch-white-surface.jpg'
import watch4 from '../../assets/Watche/closeup-shot-hand-watch-with-bstrap-reflective-surface.jpg'
import watch5 from '../../assets/Watche/ChatGPT Image Aug 10, 2025, 10_35_04 PM.png'
import { FiFilter, FiX, FiChevronDown, FiSearch } from "react-icons/fi";

const products = [
  {
    id: 1,
    name: "Hermès Kelly Red Watch 20mm - Luxury Leather Strap Watch",
    price: "4000.0",
    mrp: "5120.0",
    discount: "28",
    rating: 4.6,
    reviews: 8,
    badge: "Top Seller",
    image: watch,
    inStock: true,
    fastDelivery: true,
    warranty: "2 Years",
    brand: "Hermès",
    category: "Luxury",
  },
  {
    id: 2,
    name: "Rolex Submariner Black Dial Men's Watch",
    price: "12500.0",
    mrp: "15000.0",
    discount: "17",
    rating: 4.9,
    reviews: 24,
    badge: "",
    image: watch2,
    inStock: true,
    fastDelivery: false,
    warranty: "5 Years",
    brand: "Rolex",
    category: "Sports",
  },
  {
    id: 3,
    name: "Omega Seamaster Professional 300m",
    price: "9800.0",
    mrp: "11000.0",
    discount: "11",
    rating: 4.7,
    reviews: 15,
    badge: "Popular",
    image: watch3,
    inStock: true,
    fastDelivery: true,
    warranty: "3 Years",
    brand: "Omega",
    category: "Diver",
  },
  {
    id: 4,
    name: "Tag Heuer Carrera Chronograph",
    price: "7500.0",
    mrp: "8500.0",
    discount: "12",
    rating: 4.5,
    reviews: 10,
    badge: "",
    image: watch4,
    inStock: false,
    fastDelivery: false,
    warranty: "2 Years",
    brand: "Tag Heuer",
    category: "Chronograph",
  },
  {
    id: 5,
    name: "Patek Philippe Calatrava",
    price: "45000.0",
    mrp: "50000.0",
    discount: "10",
    rating: 5.0,
    reviews: 5,
    badge: "Luxury",
    image: watch5,
    inStock: true,
    fastDelivery: true,
    warranty: "10 Years",
    brand: "Patek Philippe",
    category: "Luxury",
  },
 
];

const WatchProductPage = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortOption, setSortOption] = useState("featured");
  const [brandSearch, setBrandSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12; // Adjust as needed

  const [activeFilters, setActiveFilters] = useState({
    category: [],
    price: [],
    brand: [],
    discount: [],
    rating: [],
    availability: [],
    badges: [],
  });

  const toggleFilter = (type, value) => {
    setActiveFilters((prev) => {
      const currentFilters = [...prev[type]];
      const index = currentFilters.indexOf(value);

      if (index === -1) {
        currentFilters.push(value);
      } else {
        currentFilters.splice(index, 1);
      }

      return {
        ...prev,
        [type]: currentFilters,
      };
    });
  };

  const clearAllFilters = () => {
    setActiveFilters({
      category: [],
      price: [],
      brand: [],
      discount: [],
      rating: [],
      availability: [],
      badges: [],
    });
  };

  // Filter products based on active filters
  const filteredProducts = products.filter((product) => {
    // Category filter
    if (
      activeFilters.category.length > 0 &&
      !activeFilters.category.includes(product.category)
    ) {
      return false;
    }

    // Brand filter
    if (
      activeFilters.brand.length > 0 &&
      !activeFilters.brand.includes(product.brand)
    ) {
      return false;
    }

    // Availability filter
    if (activeFilters.availability.length > 0) {
      if (activeFilters.availability.includes("inStock") && !product.inStock) {
        return false;
      }
      if (
        activeFilters.availability.includes("fastDelivery") &&
        !product.fastDelivery
      ) {
        return false;
      }
    }

    // Rating filter
    if (activeFilters.rating.length > 0) {
      const minRating = Math.min(...activeFilters.rating);
      if (product.rating < minRating) {
        return false;
      }
    }

    // Badges filter
    if (
      activeFilters.badges.length > 0 &&
      product.badge &&
      !activeFilters.badges.includes(product.badge)
    ) {
      return false;
    }

    return true;
  });

  // Sort products based on sort option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "priceLowHigh":
        return parseFloat(a.price) - parseFloat(b.price);
      case "priceHighLow":
        return parseFloat(b.price) - parseFloat(a.price);
      case "rating":
        return b.rating - a.rating;
      case "discount":
        return parseFloat(b.discount) - parseFloat(a.discount);
      default:
        return 0;
    }
  });

  // Get unique brands for brand filter
  const brands = [...new Set(products.map((product) => product.brand))];

return (
    <>
      <Head>
        <title>Premium Watches Collection | Montres Trading L.L.C</title>
        <meta name="description" content="Shop our luxury watch collections" />
      </Head>

      <div className="bg-[#f8f5f2] min-h-screen">
        <div className="w-full px-3 sm:px-4 md:px-6 py-6 md:py-8">
          {/* Breadcrumbs */}
          <nav className="flex mb-4 md:mb-6" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2">
              <li className="inline-flex items-center">
                <a href="#" className="inline-flex items-center text-xs sm:text-sm font-medium text-gray-700 hover:text-[#8b6b4a]">
                  <svg className="w-3 h-3 mr-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>
                  Home
                </a>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                  </svg>
                  <span className="ml-1 text-xs sm:text-sm font-medium text-gray-500 md:ml-2">
                    Watches
                  </span>
                </div>
              </li>
            </ol>
          </nav>

          {/* Mobile filter button */}
          <button
            type="button"
            className="md:hidden flex items-center gap-1 mb-4 text-gray-700 text-xs sm:text-sm"
            onClick={() => setMobileFiltersOpen(true)}
          >
            <FiFilter className="h-4 w-4" />
            <span>Filters</span>
          </button>

       <div className="flex flex-col md:flex-row">
        {/* FilterSidebar - will be positioned absolutely on mobile */}
        <div className="md:w-80 md:block">
          <FilterSidebar
            activeFilters={activeFilters}
            toggleFilter={toggleFilter}
            mobileFiltersOpen={mobileFiltersOpen}
            setMobileFiltersOpen={setMobileFiltersOpen}
            brands={brands}
            brandSearch={brandSearch}
            setBrandSearch={setBrandSearch}
            clearAllFilters={clearAllFilters}
          />
        </div>

            <div className="flex-1">
              {/* Page header and sort options */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 md:mb-6">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-3 md:mb-4 relative pb-2 
                    after:content-[''] after:absolute after:bottom-0 after:left-0 
                    after:w-12 sm:after:w-16 after:h-0.5 after:bg-[#8b6b4a]">
                    Watch Collections
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {sortedProducts.length} {sortedProducts.length === 1 ? "product" : "products"}
                  </p>
                </div>

                <div className="mt-2 md:mt-0">
                  <div className="flex items-center">
                    <label htmlFor="sort" className="mr-2 text-xs sm:text-sm font-medium text-gray-700">
                      Sort by:
                    </label>
                    <select
                      id="sort"
                      className="rounded-md border border-gray-300 py-1 pl-2 pr-8 text-xs sm:text-sm focus:border-[#8b6b4a] focus:outline-none focus:ring-1 focus:ring-[#8b6b4a]"
                      value={sortOption}
                      onChange={(e) => setSortOption(e.target.value)}
                    >
                      <option value="featured">Featured</option>
                      <option value="priceLowHigh">Price: Low to High</option>
                      <option value="priceHighLow">Price: High to Low</option>
                      <option value="rating">Rating</option>
                      <option value="discount">Discount</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Active filters */}
              {Object.values(activeFilters).some((filters) => filters.length > 0) && (
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {Object.entries(activeFilters).map(([type, filters]) =>
                    filters.map((value) => (
                      <span
                        key={`${type}-${value}`}
                        className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-700"
                      >
                        {value}
                        <button
                          type="button"
                          className="ml-1 inline-flex h-3 w-3 flex-shrink-0 items-center justify-center rounded-full text-gray-400 hover:bg-gray-200 hover:text-gray-500"
                          onClick={() => toggleFilter(type, value)}
                        >
                          <FiX className="h-2.5 w-2.5" />
                        </button>
                      </span>
                    ))
                  )}
                  <button
                    onClick={clearAllFilters}
                    className="text-xs text-[#8b6b4a] hover:text-[#6a4f36]"
                  >
                    Clear all
                  </button>
                </div>
              )}

              {/* Product grid */}
              {sortedProducts.length > 0 ? (
                <>
                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
                    {sortedProducts
                      .slice(
                        (currentPage - 1) * productsPerPage,
                        currentPage * productsPerPage
                      )
                      .map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                  </div>

                  {/* Pagination */}
                  <div className="mt-6 flex items-center justify-between border-t border-gray-200 pt-4">
                    <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                      <div>
                        <p className="text-xs sm:text-sm text-gray-700">
                          Showing{" "}
                          <span className="font-medium">
                            {(currentPage - 1) * productsPerPage + 1}
                          </span>{" "}
                          to{" "}
                          <span className="font-medium">
                            {Math.min(
                              currentPage * productsPerPage,
                              sortedProducts.length
                            )}
                          </span>{" "}
                          of{" "}
                          <span className="font-medium">
                            {sortedProducts.length}
                          </span>{" "}
                          results
                        </p>
                      </div>
                      <div>
                        <nav
                          className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                          aria-label="Pagination"
                        >
                          <button
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="relative inline-flex items-center rounded-l-md px-2 py-1.5 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50"
                          >
                            <span className="sr-only">Previous</span>
                            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                            </svg>
                          </button>

                          {Array.from({
                            length: Math.ceil(sortedProducts.length / productsPerPage),
                          }).map((_, index) => {
                            const pageNumber = index + 1;
                            if (
                              pageNumber === 1 ||
                              pageNumber === Math.ceil(sortedProducts.length / productsPerPage) ||
                              (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                            ) {
                              return (
                                <button
                                  key={pageNumber}
                                  onClick={() => setCurrentPage(pageNumber)}
                                  className={`relative inline-flex items-center px-3 py-1.5 text-xs sm:text-sm font-semibold ${
                                    currentPage === pageNumber
                                      ? "bg-[#8b6b4a] text-white"
                                      : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                  } focus:z-20 focus:outline-offset-0`}
                                >
                                  {pageNumber}
                                </button>
                              );
                            }
                            if (
                              (pageNumber === currentPage - 2 && currentPage > 3) ||
                              (pageNumber === currentPage + 2 && currentPage < Math.ceil(sortedProducts.length / productsPerPage) - 2)
                            ) {
                              return (
                                <span
                                  key={pageNumber}
                                  className="relative inline-flex items-center px-3 py-1.5 text-xs sm:text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300"
                                >
                                  ...
                                </span>
                              );
                            }
                            return null;
                          })}

                          <button
                            onClick={() =>
                              setCurrentPage((prev) =>
                                Math.min(
                                  prev + 1,
                                  Math.ceil(sortedProducts.length / productsPerPage)
                                )
                              )
                            }
                            disabled={currentPage === Math.ceil(sortedProducts.length / productsPerPage)}
                            className="relative inline-flex items-center rounded-r-md px-2 py-1.5 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50"
                          >
                            <span className="sr-only">Next</span>
                            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l4.5 4.25a.75.75 0 11-1.04 1.08L11.168 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </nav>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <h3 className="text-sm sm:text-base font-medium text-gray-900">
                    No products found
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-gray-500">
                    Try adjusting your search or filter to find what you're looking for.
                  </p>
                  <button
                    onClick={clearAllFilters}
                    className="mt-3 inline-flex items-center px-3 py-1.5 border border-transparent text-xs sm:text-sm font-medium rounded-md shadow-sm text-white bg-[#8b6b4a] hover:bg-[#6a4f36] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8b6b4a]"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default WatchProductPage;
