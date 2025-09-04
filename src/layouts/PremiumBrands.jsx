import React from "react";
import Rolex from "../assets/PremimumBrands/rolex-logo-editorial-illustration-free-vector.jpg";
import Omega from "../assets/PremimumBrands/b6047a0809e6575a92443a6924e60eae.jpg";
import AudemarsPiguet from "../assets/PremimumBrands/bbdc6dc34c14f4427a5d1fe1475cd453.jpg";
import RichedMillen from "../assets/PremimumBrands/5782919d7dcd53a67171c3b81640633b.jpg";
import PatekPhilippe from "../assets/PremimumBrands/1-7f05a788.png";
import Cartier from "../assets/PremimumBrands/cartier-logo-png_seeklogo-26665.png";

const PremiumBrands = () => {
  const premiumBrands = [
    { id: 1, logo: Rolex, alt: "Rolex" },
    { id: 2, logo: Omega, alt: "Omega" },
    { id: 3, logo: AudemarsPiguet, alt: "Audemars Piguet" },
    { id: 4, logo: RichedMillen, alt: "Richard Mille" },
    { id: 5, logo: PatekPhilippe, alt: "Patek Philippe" },
    { id: 6, logo: Cartier, alt: "Cartier" },
  ];

  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-lg font-bold text-gray-900 mb-6">
          Explore Products From Premium Brands
        </h2>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {premiumBrands.map((brand) => (
            <div
              key={brand.id}
              className="flex items-center justify-center border rounded-md bg-white hover:shadow-md transition p-6 sm:p-8"
            >
              <img
                src={brand.logo}
                alt={brand.alt}
                className="w-24 sm:w-28 md:w-32 lg:w-36 h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumBrands;
