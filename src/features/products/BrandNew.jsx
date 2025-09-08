import React, { useState, useMemo } from "react";

const BrandNewPage = () => {
  const [selectedCategories, setSelectedCategories] = useState({
    Watches: true,
    Jewellery: false,
    Accessories: false,
  });

  const [selectedPrices, setSelectedPrices] = useState({
    "AED 1 - AED 500": false,
    "AED 501 - AED 2000": false,
    "AED 2001 - AED 5000": false,
    "AED 5001 - *": false,
  });

  const [searchTerm, setSearchTerm] = useState("");

  const toggleCategory = (category) => {
    setSelectedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const togglePrice = (price) => {
    setSelectedPrices((prev) => ({
      ...prev,
      [price]: !prev[price],
    }));
  };

  // 🆕 Sample "Brand New" arrivals
  const products = [
    {
      id: 1,
      name: "Brand New Luxury Watch",
      price: 4200,
      category: "Watches",
      image:
        "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=400",
    },
    {
      id: 2,
      name: "Gold Ring (New Arrival)",
      price: 2800,
      category: "Jewellery",
      image:
        "https://images.unsplash.com/photo-1599643478434-1d63cf07d8d6?w=400",
    },
    {
      id: 3,
      name: "Exclusive Cufflinks",
      price: 900,
      category: "Accessories",
      image:
        "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=400",
    },
    {
      id: 4,
      name: "Silver Bracelet",
      price: 1500,
      category: "Jewellery",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400",
    },
  ];

  // Price Ranges
  const priceRanges = {
    "AED 1 - AED 500": [1, 500],
    "AED 501 - AED 2000": [501, 2000],
    "AED 2001 - AED 5000": [2001, 5000],
    "AED 5001 - *": [5001, Infinity],
  };

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      // category filter
      const activeCategories = Object.entries(selectedCategories)
        .filter(([_, checked]) => checked)
        .map(([cat]) => cat);

      const matchCategory =
        activeCategories.length === 0 ||
        activeCategories.includes(item.category);

      // price filter
      const activePrices = Object.entries(selectedPrices)
        .filter(([_, checked]) => checked)
        .map(([range]) => range);

      const matchPrice =
        activePrices.length === 0 ||
        activePrices.some((range) => {
          const [min, max] = priceRanges[range];
          return item.price >= min && item.price <= max;
        });

      // search filter
      const matchSearch = item.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return matchCategory && matchPrice && matchSearch;
    });
  }, [products, selectedCategories, selectedPrices, searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-800">Brand New</h1>
          <p className="text-gray-600">
            Showing {filteredProducts.length} Out Of {products.length} Products
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 lg:w-1/5 mb-8 md:mb-0 md:pr-6">
          {/* Categories */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Categories
            </h2>
            {Object.entries(selectedCategories).map(([category, checked]) => (
              <div key={category} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={category}
                  checked={checked}
                  onChange={() => toggleCategory(category)}
                  className="h-4 w-4 text-blue-600 rounded"
                />
                <label htmlFor={category} className="ml-2 text-gray-700">
                  {category}
                </label>
              </div>
            ))}
          </div>

          {/* Price */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Price</h2>
            {Object.entries(selectedPrices).map(([price, checked]) => (
              <div key={price} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={price}
                  checked={checked}
                  onChange={() => togglePrice(price)}
                  className="h-4 w-4 text-blue-600 rounded"
                />
                <label htmlFor={price} className="ml-2 text-gray-700">
                  {price}
                </label>
              </div>
            ))}
          </div>

          {/* Search */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Search</h2>
            <input
              type="text"
              placeholder="Enter Product Name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </aside>

        {/* Main */}
        <main className="w-full md:w-3/4 lg:w-4/5">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              New Arrivals
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((item) => (
                  <div
                    key={item.id}
                    className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all bg-gradient-to-b from-white to-gray-50"
                  >
                    <div className="h-48 bg-gray-100 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/400x400";
                        }}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-gray-800 mb-1">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 mb-3 font-semibold">
                        AED {item.price}
                      </p>
                      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors shadow-md">
                        Buy Now
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-600">No new products found.</p>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BrandNewPage;
