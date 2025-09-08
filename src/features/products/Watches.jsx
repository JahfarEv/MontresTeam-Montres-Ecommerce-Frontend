import React, { useState, useMemo } from 'react';

const WatchesPage = () => {
  const [selectedCategories, setSelectedCategories] = useState({
    "Watch": true,
    "Sport": false,
    "Classic": false
  });

  const [selectedPrices, setSelectedPrices] = useState({
    "AED 1 - AED 500": false,
    "AED 2501 - AED 5000": false,
    "AED 5001 - AED 10000": false,
    "AED 10001 - *": false
  });

  const [searchTerm, setSearchTerm] = useState("");

  const toggleCategory = (category) => {
    setSelectedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const togglePrice = (price) => {
    setSelectedPrices(prev => ({
      ...prev,
      [price]: !prev[price]
    }));
  };

  // Sample watch data with categories + prices
  const watches = [
    {
      id: 1,
      name: "Hotmês Kelly Red Watch 20mm",
      price: 1250,
      category: "Watch",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"
    },
    {
      id: 2,
      name: "Luxury Chronograph Silver",
      price: 3800,
      category: "Watch",
      image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=400"
    },
    {
      id: 3,
      name: "Classic Leather Brown Watch",
      price: 2200,
      category: "Classic",
      image: "https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=400"
    },
    {
      id: 4,
      name: "Sport Black Digital",
      price: 950,
      category: "Sport",
      image: "https://images.unsplash.com/photo-1523170335258-f8ed6f5a6ab8?w=400"
    },
    {
      id: 5,
      name: "Elegant Rose Gold Mesh",
      price: 4500,
      category: "Classic",
      image: "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=400"
    },
    {
      id: 6,
      name: "Diver's Professional Watch",
      price: 6200,
      category: "Sport",
      image: "https://images.unsplash.com/photo-1565440962783-f87efdea99fd?w=400"
    }
  ];

  // Price ranges logic
  const priceRanges = {
    "AED 1 - AED 500": [1, 500],
    "AED 2501 - AED 5000": [2501, 5000],
    "AED 5001 - AED 10000": [5001, 10000],
    "AED 10001 - *": [10001, Infinity]
  };

  // Filtered Watches
  const filteredWatches = useMemo(() => {
    return watches.filter(watch => {
      // 🔹 Category filter
      const activeCategories = Object.entries(selectedCategories)
        .filter(([_, checked]) => checked)
        .map(([cat]) => cat);

      const matchCategory = activeCategories.length === 0 || activeCategories.includes(watch.category);

      // 🔹 Price filter
      const activePrices = Object.entries(selectedPrices)
        .filter(([_, checked]) => checked)
        .map(([range]) => range);

      const matchPrice =
        activePrices.length === 0 ||
        activePrices.some(range => {
          const [min, max] = priceRanges[range];
          return watch.price >= min && watch.price <= max;
        });

      // 🔹 Search filter
      const matchSearch =
        watch.name.toLowerCase().includes(searchTerm.toLowerCase());

      return matchCategory && matchPrice && matchSearch;
    });
  }, [watches, selectedCategories, selectedPrices, searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-800">Watches</h1>
          <p className="text-gray-600">
            Showing {filteredWatches.length} Out Of {watches.length} Products
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 lg:w-1/5 mb-8 md:mb-0 md:pr-6">
          {/* Categories */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Categories</h2>
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

        {/* Main Content */}
        <main className="w-full md:w-3/4 lg:w-4/5">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">All Watches</h2>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredWatches.length > 0 ? (
                filteredWatches.map((watch) => (
                  <div
                    key={watch.id}
                    className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all bg-gradient-to-b from-white to-gray-50"
                  >
                    <div className="h-48 bg-gray-100 overflow-hidden">
                      <img
                        src={watch.image}
                        alt={watch.name}
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/400x400";
                        }}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-gray-800 mb-1">{watch.name}</h3>
                      <p className="text-gray-600 mb-3 font-semibold">AED {watch.price}</p>
                      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors shadow-md">
                        Buy Now
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-600">No products found.</p>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default WatchesPage;
