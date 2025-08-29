import React from 'react';
import Head from 'next/head';
import Rolex from "../assets/PremimumBrands/rolex-logo-editorial-illustration-free-vector.jpg";
import Omega from "../assets/PremimumBrands/b6047a0809e6575a92443a6924e60eae.jpg";
import AudemarsPiguet from "../assets/PremimumBrands/bbdc6dc34c14f4427a5d1fe1475cd453.jpg";
import RichedMillen from "../assets/PremimumBrands/5782919d7dcd53a67171c3b81640633b.jpg";
import PatekPhilippe from "../assets/PremimumBrands/1-7f05a788.png";
import Cartier from "../assets/PremimumBrands/cartier-logo-png_seeklogo-26665.png";
import VacheronConstantin from "../assets/PremimumBrands/20211211180920-61b4e95031459.jpg";
import Hublot from "../assets/PremimumBrands/ac8cb0c703739077d236a5ffb03f9331.jpg";

const PremiumBrands = () => {
  const premiumBrands = [
    { 
      id: 1, 
      logo: Rolex, 
      alt: "Rolex Luxury Watches - Swiss Made Precision Timepieces",
      name: "Rolex",
      url: "https://www.rolex.com"
    },
    { 
      id: 2, 
      logo: Omega, 
      alt: "Omega Premium Watches - Official Olympic Timekeeper",
      name: "Omega",
      url: "https://www.omegawatches.com"
    },
    { 
      id: 3, 
      logo: AudemarsPiguet, 
      alt: "Audemars Piguet Swiss Watches - Handcrafted Luxury",
      name: "Audemars Piguet",
      url: "https://www.audemarspiguet.com"
    },
    { 
      id: 4, 
      logo: RichedMillen, 
      alt: "Richard Mille Luxury Timepieces - Innovative Engineering",
      name: "Richard Mille",
      url: "https://www.richardmille.com"
    },
    { 
      id: 5, 
      logo: PatekPhilippe, 
      alt: "Patek Philippe Exclusive Watches - Generations of Craftsmanship",
      name: "Patek Philippe",
      url: "https://www.patek.com"
    },
    { 
      id: 6, 
      logo: Cartier, 
      alt: "Cartier Luxury Watches & Jewelry - French Elegance",
      name: "Cartier",
      url: "https://www.cartier.com"
    },
    { 
      id: 7, 
      logo: VacheronConstantin, 
      alt: "Vacheron Constantin Swiss Watches - Since 1755",
      name: "Vacheron Constantin",
      url: "https://www.vacheron-constantin.com"
    },
    { 
      id: 8, 
      logo: Hublot, 
      alt: "Hublot Innovative Swiss Watches - Art of Fusion",
      name: "Hublot",
      url: "https://www.hublot.com"
    },
  ];

  return (
    <>
      <Head>
        <title>Premium Watch Brands | Luxury Swiss Timepieces | Montres Trading</title>
        <meta name="description" content="Discover the world's finest watch brands including Rolex, Patek Philippe, and Audemars Piguet. Authorized dealer of luxury Swiss timepieces in Dubai." />
        <meta name="keywords" content="luxury watches, premium watch brands, Swiss watches, Rolex, Patek Philippe, Omega, Audemars Piguet, Richard Mille" />
        <meta property="og:title" content="Premium Watch Brands | Luxury Swiss Timepieces" />
        <meta property="og:description" content="Authorized dealer of the world's finest watch brands including Rolex, Patek Philippe, and Audemars Piguet." />
        <meta property="og:image" content={Rolex} />
        <meta property="og:url" content="https://montres.com/brands" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Premium Watch Brands Collection" />
        <meta name="twitter:description" content="Explore our curated selection of the world's finest luxury watch brands" />
        <link rel="canonical" href="https://montres.com/brands" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": premiumBrands.map((brand, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Brand",
                "name": brand.name,
                "url": brand.url,
                "logo": brand.logo,
                "description": `Official ${brand.name} luxury watches available at Montres Trading`
              }
            }))
          })}
        </script>
      </Head>

      <section 
        className="py-12 sm:py-16 bg-white"
        aria-labelledby="premium-brands-heading"
        itemScope
        itemType="https://schema.org/Organization"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12 lg:mb-16">
            <h2 
              id="premium-brands-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900"
              itemProp="name"
            >
              Our Premium Brands
            </h2>
            <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We partner with the world's most prestigious watch manufacturers
            </p>
          </div>
          
          <div 
            className="overflow-hidden"
            itemProp="brand"
            itemScope
            itemType="https://schema.org/Brand"
          >
            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-6 sm:gap-8 md:gap-10">
              {premiumBrands.map((brand) => (
                <div 
                  key={brand.id}
                  className="flex items-center justify-center group"
                  itemProp="logo"
                  itemScope
                  itemType="https://schema.org/ImageObject"
                >
                  <a 
                    href={brand.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full h-full p-3 sm:p-4 transition-all duration-300 hover:scale-105"
                    aria-label={`Visit ${brand.name} official website`}
                  >
                    <div className="relative w-full h-24 sm:h-28 md:h-32 lg:h-36 flex items-center justify-center">
                      <img
                        src={brand.logo}
                        alt={brand.alt}
                        className="h-full w-auto max-w-full object-contain object-center grayscale hover:grayscale-0 transition-all duration-500 opacity-90 hover:opacity-100"
                        loading="lazy"
                        width="160"
                        height="80"
                        itemProp="url"
                      />
                      <meta itemProp="name" content={brand.name} />
                      <meta itemProp="description" content={`Official ${brand.name} logo`} />
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 text-center">
            <a
              href="/brands"
              className="inline-block px-8 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-300 text-lg hover:shadow-lg"
              aria-label="View all our premium watch brands"
            >
              Explore All Brands
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default PremiumBrands;