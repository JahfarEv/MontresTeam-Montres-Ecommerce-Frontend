import React from 'react';
import luxuryWatch from '../assets/Watche/elegant-watch-with-silver-golden-chain-isolated.jpg';
import sportyWatch from '../assets/Watche/ChatGPT Image Aug 10, 2025, 10_35_04 PM.png';
import Head from 'next/head'; // Or your preferred method of adding meta tags

const AddSection = () => {
  return (
    <>
      <Head>
        <title>Luxury & Sport Watch Collections | Premium Timepieces</title>
        <meta name="description" content="Discover our exclusive collections of luxury and sport watches with limited-time discounts. Swiss-made precision timepieces for every lifestyle." />
        <meta name="keywords" content="luxury watches, sport watches, Swiss watches, premium timepieces, watch discounts" />
        <meta property="og:title" content="Luxury & Sport Watch Collections | Premium Timepieces" />
        <meta property="og:description" content="Discover our exclusive collections of luxury and sport watches with limited-time discounts." />
        <meta property="og:image" content={luxuryWatch} />
        <meta property="og:url" content="https://yourwebsite.com/collections" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Luxury & Sport Watch Collections" />
        <meta name="twitter:description" content="Premium Swiss watches with exclusive discounts" />
        <meta name="twitter:image" content={sportyWatch} />
        <link rel="canonical" href="https://yourwebsite.com/collections" />
      </Head>

      <section 
        className="bg-white"
        aria-label="Luxury and Sport Watch Collections"
        itemScope 
        itemType="https://schema.org/ItemList"
      >
        <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12 lg:py-16">
          <h1 className="sr-only">Premium Watch Collections</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {/* Luxury Collection */}
            <article 
              className="relative overflow-hidden group aspect-[4/3] md:aspect-[16/9] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              itemScope 
              itemType="https://schema.org/Product"
              itemProp="itemListElement"
            >
              <img 
                src={luxuryWatch}
                alt="Elegant silver and gold luxury watch with stainless steel chain"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                itemProp="image"
                width={800}
                height={450}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white max-w-xs sm:max-w-sm">
                <p className="text-xs sm:text-sm md:text-base tracking-widest uppercase" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                  <span itemProp="priceCurrency" content="USD">UP TO </span>
                  <span itemProp="discount">50% OFF</span>
                  <meta itemProp="price" content="999" />
                  <meta itemProp="availability" content="https://schema.org/InStock" />
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-1 sm:mt-2" itemProp="name">
                  Luxury Watch Series
                </h2>
                <p className="text-xs sm:text-sm md:text-base mt-1 sm:mt-2" itemProp="description">
                  Discover handcrafted Swiss timepieces with timeless elegance and precision engineering.
                </p>
                <a 
                  href="/shop/luxury" 
                  className="mt-3 sm:mt-4 inline-block bg-white hover:bg-gray-100 text-black px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm md:text-base font-medium rounded-md transition-colors duration-300"
                  itemProp="url"
                  aria-label="Shop Luxury Watch Collection"
                >
                  Shop Now
                </a>
              </div>
            </article>

            {/* Sport Collection */}
            <article 
              className="relative overflow-hidden group aspect-[4/3] md:aspect-[16/9] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              itemScope 
              itemType="https://schema.org/Product"
              itemProp="itemListElement"
            >
              <img 
                src={sportyWatch}
                alt="Modern black and silver sport watch with chronograph features"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                itemProp="image"
                width={800}
                height={450}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white max-w-xs sm:max-w-sm">
                <p className="text-xs sm:text-sm md:text-base tracking-widest uppercase" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                  <span itemProp="priceCurrency" content="USD">UP TO </span>
                  <span itemProp="discount">40% OFF</span>
                  <meta itemProp="price" content="799" />
                  <meta itemProp="availability" content="https://schema.org/InStock" />
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-1 sm:mt-2" itemProp="name">
                  Sport Watch Edition
                </h2>
                <p className="text-xs sm:text-sm md:text-base mt-1 sm:mt-2" itemProp="description">
                  Built for speed, accuracy, and durability — perfect for sports enthusiasts and adventurers.
                </p>
                <a 
                  href="/shop/sport" 
                  className="mt-3 sm:mt-4 inline-block bg-white hover:bg-gray-100 text-black px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm md:text-base font-medium rounded-md transition-colors duration-300"
                  itemProp="url"
                  aria-label="Shop Sport Watch Collection"
                >
                  Shop Now
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddSection;