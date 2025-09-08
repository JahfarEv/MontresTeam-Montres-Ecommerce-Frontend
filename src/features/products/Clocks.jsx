import React, { useState, useMemo } from "react";

const ClocksPage = () => {
  const [selectedCategories, setSelectedCategories] = useState({
    "Wall Clock": true,
    "Table Clock": false,
    "Alarm Clock": false,
  });

  const [selectedPrices, setSelectedPrices] = useState({
    "AED 1 - AED 500": false,
    "AED 501 - AED 1500": false,
    "AED 1501 - AED 5000": false,
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

  // Sample clock data
  const clocks = [
    {
      id: 1,
      name: "Vintage Wooden Wall Clock",
      price: 950,
      category: "Wall Clock",
      image:
        "https://images.unsplash.com/photo-1503602642458-232111445657?w=400",
    },
    {
      id: 2,
      name: "Luxury Golden Alarm Clock",
      price: 1250,
      category: "Alarm Clock",
      image:
        "https://images.unsplash.com/photo-1520697222862-3b3f8e68f9a5?w=400",
    },
    {
      id: 3,
      name: "Classic Desk Table Clock",
      price: 600,
      category: "Table Clock",
      image:
        "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=400",
    },
    {
      id: 4,
      name: "Minimalist Wall Clock",
      price: 1500,
      category: "Wall Clock",
      image:
        "https://images.unsplash.com/photo-1616486338812-3c3fbc1e7f0e?w=400",
    },
  ];

  // Price ranges
  const priceRanges = {
    "AED 1 - AED 500": [1, 500],
    "AED 501 - AED 1500": [501, 1500],
    "AED 1501 - AED 5000": [1501, 5000],
    "AED 5001 - *": [5001, Infinity],
  };

  // Filter logic
  const filteredClocks = useMemo(() => {
    return clocks.filter((clock) => {
      const activeCategories = Object.entries(selectedCategories)
        .filter(([_, checked]) => checked)
        .map(([cat]) => cat);

      const matchCategory =
        activeCategories.length === 0 ||
        activeCategories.includes(clock.category);

      const activePrices = Object.entries(selectedPrices)
        .filter(([_, checked]) => checked)
        .map(([range]) => range);

      const matchPrice =
        activePrices.length === 0 ||
        activePrices.some((range) => {
          const [min, max] = priceRanges[range];
          return clock.price >= min && clock.price <= max;
        });

      const matchSearch = clock.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return matchCategory && matchPrice && matchSearch;
    });
  }, [clocks, selectedCategories, selectedPrices, searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-800">Clocks</h1>
          <p className="text-gray-600">
            Showing {filteredClocks.length} Out Of {clocks.length} Products
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

        {/* Main Content */}
        <main className="w-full md:w-3/4 lg:w-4/5">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              All Clocks
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredClocks.length > 0 ? (
                filteredClocks.map((clock) => (
                  <div
                    key={clock.id}
                    className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all bg-gradient-to-b from-white to-gray-50"
                  >
                    <div className="h-48 bg-gray-100 overflow-hidden">
                      <img
                        src={clock.image}
                        alt={clock.name}
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/400x400";
                        }}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-gray-800 mb-1">
                        {clock.name}
                      </h3>
                      <p className="text-gray-600 mb-3 font-semibold">
                        AED {clock.price}
                      </p>
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

export default ClocksPage;
