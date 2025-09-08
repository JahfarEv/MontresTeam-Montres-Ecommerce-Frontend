import React, { useState, useMemo } from "react";

const LeathersPage = () => {
  const [selectedCategories, setSelectedCategories] = useState({
    Wallets: true,
    Belts: false,
    Handbags: false,
    Jackets: false,
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

  // Sample leather products
  const leathers = [
    {
      id: 1,
      name: "Genuine Leather Wallet",
      price: 450,
      category: "Wallets",
      image:
        "https://images.unsplash.com/photo-1606813907291-449b7b7c2a02?w=400",
    },
    {
      id: 2,
      name: "Classic Black Leather Belt",
      price: 750,
      category: "Belts",
      image:
        "https://images.unsplash.com/photo-1612817159949-54bcb2bb8ffb?w=400",
    },
    {
      id: 3,
      name: "Premium Brown Handbag",
      price: 1800,
      category: "Handbags",
      image:
        "https://images.unsplash.com/photo-1600181952037-8ad6f6b6bb79?w=400",
    },
    {
      id: 4,
      name: "Luxury Leather Jacket",
      price: 3200,
      category: "Jackets",
      image:
        "https://images.unsplash.com/photo-1605733160314-4dbabb2c16f6?w=400",
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
  const filteredLeathers = useMemo(() => {
    return leathers.filter((leather) => {
      const activeCategories = Object.entries(selectedCategories)
        .filter(([_, checked]) => checked)
        .map(([cat]) => cat);

      const matchCategory =
        activeCategories.length === 0 ||
        activeCategories.includes(leather.category);

      const activePrices = Object.entries(selectedPrices)
        .filter(([_, checked]) => checked)
        .map(([range]) => range);

      const matchPrice =
        activePrices.length === 0 ||
        activePrices.some((range) => {
          const [min, max] = priceRanges[range];
          return leather.price >= min && leather.price <= max;
        });

      const matchSearch = leather.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return matchCategory && matchPrice && matchSearch;
    });
  }, [leathers, selectedCategories, selectedPrices, searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-800">Leathers</h1>
          <p className="text-gray-600">
            Showing {filteredLeathers.length} Out Of {leathers.length} Products
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
              All Leather Products
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredLeathers.length > 0 ? (
                filteredLeathers.map((leather) => (
                  <div
                    key={leather.id}
                    className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all bg-gradient-to-b from-white to-gray-50"
                  >
                    <div className="h-48 bg-gray-100 overflow-hidden">
                      <img
                        src={leather.image}
                        alt={leather.name}
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/400x400";
                        }}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-gray-800 mb-1">
                        {leather.name}
                      </h3>
                      <p className="text-gray-600 mb-3 font-semibold">
                        AED {leather.price}
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

export default LeathersPage;
