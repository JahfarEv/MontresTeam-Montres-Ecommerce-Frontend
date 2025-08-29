import React from 'react';
import Head from 'next/head';
import watchBackground from '../../assets/Watche/ChatGPT Image Aug 10, 2025, 10_35_04 PM.png';

const WatchForm = () => {
  return (
    <>
      <Head>
        <title>Luxury Watch Repair Service Form | Montres Trading L.L.C – The Art Of Time</title>
        <meta name="description" content="Get expert watch repair services for your luxury timepiece. Fill out our form to book professional maintenance and restoration services in Dubai." />
        <meta name="keywords" content="luxury watch repair, watch service, watch maintenance, Swiss watch repair, professional watch servicing" />
        <meta property="og:title" content="Luxury Watch Repair Service Form | Montres Trading L.L.C – The Art Of Time" />
        <meta property="og:description" content="Professional watch repair services for high-end timepieces. Book your service today." />
        <meta property="og:image" content={watchBackground} />
        <meta property="og:url" content="https://montres.com/watch-repair-form" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Luxury Watch Repair Service" />
        <meta name="twitter:description" content="Expert watch repair services for your premium timepieces" />
        <meta name="twitter:image" content={watchBackground} />
        <link rel="canonical" href="https://montres.com/watch-repair-form" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Watch Repair",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Montres Trading L.L.C",
              "image": watchBackground,
              "description": "Professional luxury watch repair services"
            },
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "Dubai"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Watch Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Basic Watch Service"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Complete Overhaul"
                  }
                }
              ]
            }
          })}
        </script>
      </Head>

      <section 
        className="relative py-12 lg:py-20 px-4 sm:px-6"
        aria-label="Watch Repair Service Form"
        itemScope
        itemType="https://schema.org/Service"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={watchBackground}
            alt="Luxury watch repair background showing professional watchmaking tools"
            className="w-full h-full object-cover"
            loading="lazy"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-opacity-50"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              TELL US ABOUT YOUR WATCH
            </h1>
            <p className="text-white text-lg sm:text-xl max-w-3xl mx-auto">
              Complete the form below to schedule professional service for your luxury timepiece
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 xl:gap-16">
            {/* Form Section */}
            <div 
              className="bg-white bg-opacity-90 rounded-xl shadow-lg w-full max-w-2xl p-5 sm:p-6 lg:p-8 backdrop-blur-sm"
              itemProp="makesOffer"
              itemScope
              itemType="https://schema.org/Offer"
            >
              <form className="space-y-5 sm:space-y-6">
                <div>
                  <label htmlFor="productName" className="block text-lg font-bold text-gray-900 mb-2">
                    ENTER PRODUCT / SERVICE NAME
                  </label>
                  <input
                    type="text"
                    id="productName"
                    placeholder="Enter Product / Service Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-800"
                    required
                    itemProp="name"
                  />
                </div>

                <div>
                  <label htmlFor="productDescription" className="block text-lg font-bold text-gray-900 mb-2">
                    PRODUCT DESCRIPTION
                  </label>
                  <textarea
                    id="productDescription"
                    placeholder="Describe your watch and any issues you're experiencing"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-800"
                    required
                    itemProp="description"
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="manufactureYear" className="block text-lg font-bold text-gray-900 mb-2">
                      MANUFACTURE YEAR
                    </label>
                    <input
                      type="text"
                      id="manufactureYear"
                      placeholder="Manufacture Year"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-800"
                      itemProp="releaseDate"
                    />
                  </div>

                  <div>
                    <label htmlFor="watchType" className="block text-lg font-bold text-gray-900 mb-2">
                      WATCH TYPE
                    </label>
                    <select
                      id="watchType"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-800"
                      itemProp="category"
                    >
                      <option value="">Select Watch Type</option>
                      <option value="Mechanical">Mechanical</option>
                      <option value="Automatic">Automatic</option>
                      <option value="Quartz">Quartz</option>
                      <option value="Chronograph">Chronograph</option>
                      <option value="Diving">Diving</option>
                      <option value="Pilot">Pilot</option>
                      <option value="Smartwatch">Smartwatch</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2 sm:pt-4">
                  <button
                    type="submit"
                    className="w-full bg-blue-900 text-white font-semibold py-3 rounded-lg hover:bg-blue-800 transition-all duration-300 shadow-md hover:shadow-lg"
                    aria-label="Submit watch repair request"
                    itemProp="url"
                  >
                    BOOK SERVICE
                  </button>
                </div>
              </form>
            </div>

            {/* Service Information */}
            <div className="w-full flex-1 text-white">
              <div 
                className="bg-black bg-opacity-60 rounded-xl p-5 sm:p-6 lg:p-8 backdrop-blur-sm"
                itemProp="provider"
                itemScope
                itemType="https://schema.org/LocalBusiness"
              >
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                  Expert Watch Repair Services
                </h2>
                <p className="text-base sm:text-lg mb-6" itemProp="description">
                  Extend The Life Of Your Luxury Watch With Montres Trading L.L.C's Professional Repair Services.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        id="step1"
                        className="mt-0.5 mr-3 h-5 w-5 accent-blue-600"
                        checked={false}
                        readOnly
                      />
                    </div>
                    <label htmlFor="step1" className="text-white text-base sm:text-lg">
                      Tell Us What You Need
                    </label>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        id="step2"
                        className="mt-0.5 mr-3 h-5 w-5 accent-blue-600"
                        checked={true}
                        readOnly
                      />
                    </div>
                    <label htmlFor="step2" className="text-white text-base sm:text-lg">
                      Get Expert Repair Services
                    </label>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        id="step3"
                        className="mt-0.5 mr-3 h-5 w-5 accent-blue-600"
                        checked={true}
                        readOnly
                      />
                    </div>
                    <label htmlFor="step3" className="text-white text-base sm:text-lg">
                      Ensuring Accuracy, Durability, And Seamless Performance
                    </label>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3">Why Choose Us?</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Certified Swiss-trained watchmakers</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Genuine manufacturer parts</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>2-year service warranty</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WatchForm;