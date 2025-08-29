import React from 'react';
import { FaStar, FaRegHeart, FaCartPlus } from 'react-icons/fa';
import { BsBoxSeam } from 'react-icons/bs';

const SimilarProduct = ({ products }) => {
  const currency = (n) => `$${Number(n).toFixed(0)}`;

  return (
    <div className="bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Similar Products</h2>
          <p className="mt-2 text-gray-600">You might also like these watches</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="group relative rounded-xl bg-white p-4 shadow-sm transition hover:shadow-md">
              {/* Badges */}
              {product.isNew && (
                <span className="absolute left-4 top-4 z-10 inline-flex items-center rounded-full bg-gradient-to-r from-emerald-600 to-emerald-800 px-2.5 py-1 text-xs font-medium text-white">
                  New
                </span>
              )}
              
              {/* Wishlist button */}
              <button className="absolute right-4 top-4 z-10 rounded-full bg-white p-2 text-gray-400 shadow-sm transition hover:text-rose-500">
                <FaRegHeart className="h-4 w-4" />
              </button>

              {/* Product image */}
              <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Product details */}
              <div className="mt-4">
                <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                  {product.name}
                </h3>
                <p className="mt-1 text-xs text-emerald-600">{product.brand}</p>

                {/* Rating */}
                <div className="mt-2 flex items-center">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`h-3.5 w-3.5 ${i < product.rating ? 'text-amber-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="ml-1 text-xs text-gray-500">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-lg font-semibold text-gray-900">
                    {currency(product.price)}
                  </span>
                  {product.oldPrice && (
                    <span className="text-xs text-gray-400 line-through">
                      {currency(product.oldPrice)}
                    </span>
                  )}
                </div>

                {/* Features */}
                <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
                  <span>{product.shipping}</span>
                  {product.fastShipping && (
                    <span className="flex items-center text-emerald-600">
                      <BsBoxSeam className="mr-1" />
                      Fast
                    </span>
                  )}
                </div>

                {/* Add to Cart button */}
                <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-700">
                  <FaCartPlus className="h-4 w-4" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

SimilarProduct.defaultProps = {
  products: [
    {
      id: 1,
      name: "Chronograph Classic Watch",
      brand: "TimeMaster",
      image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1600&auto=format&fit=crop",
      price: 199,
      oldPrice: 259,
      rating: 4,
      reviews: 128,
      shipping: "Free shipping",
      fastShipping: true,
      isNew: true
    },
    {
      id: 2,
      name: "Diver Professional 300m",
      brand: "AquaGear",
      image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=1600&auto=format&fit=crop",
      price: 349,
      oldPrice: 399,
      rating: 5,
      reviews: 87,
      shipping: "Free shipping",
      fastShipping: false
    },
    {
      id: 3,
      name: "Minimalist Slim Watch",
      brand: "Elegance",
      image: "https://images.unsplash.com/photo-1557531365-e8b22d93dbd0?q=80&w=1600&auto=format&fit=crop",
      price: 159,
      oldPrice: 0,
      rating: 4,
      reviews: 215,
      shipping: "Free shipping",
      fastShipping: true,
      isNew: true
    },
    {
      id: 4,
      name: "Smart Hybrid Watch",
      brand: "TechTime",
      image: "https://images.unsplash.com/photo-1558433916-90a36b44753f?q=80&w=1600&auto=format&fit=crop",
      price: 229,
      oldPrice: 299,
      rating: 4,
      reviews: 342,
      shipping: "Free shipping",
      fastShipping: true
    }
  ]
};

export default SimilarProduct;