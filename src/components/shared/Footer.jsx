import React from 'react';
import Head from 'next/head';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaCcVisa, FaCcMastercard, FaClock, FaShoppingBag, FaWallet, FaGem,FaTshirt,FaLink,FaPenFancy  } from 'react-icons/fa';
import { SiPaypal, SiApplepay, SiSamsungpay, SiGooglepay } from 'react-icons/si';
import { FaWatchmanMonitoring } from "react-icons/fa6";
const Footer = () => {
  const categories = [
    { name: 'Watches', icon: <FaClock className="mr-2" /> },
    { name: 'Bags', icon: <FaShoppingBag className="mr-2" /> },
    { name: 'Wallets', icon: <FaWallet className="mr-2" /> },
    { name: 'Jewellery', icon: <FaGem className="mr-2" /> },
    { name: 'Clocks', icon: <FaClock className="mr-2" /> },
    { name: 'Pocket Watches', icon: <FaWatchmanMonitoring className="mr-2" /> },
    { name: 'Accessories', icon: <FaTshirt className="mr-2" /> },
    { name: 'Cufflinks', icon: <FaLink className="mr-2" /> },
    { name: 'Pens', icon: <FaPenFancy className="mr-2" /> }
  ];

  const quickLinks = [
    'Privacy Policy',
    'Authentication',
    'FAQ',
    'Refund Policy',
    'Terms & Conditions',
    'Warranty',
    'About Us',
    'Contact Us',
    'Request Item'
  ];

  const paymentMethods = [
    { icon: <FaCcVisa className="text-2xl text-blue-800" />, name: 'Visa' },
    { icon: <FaCcMastercard className="text-2xl text-red-600" />, name: 'Mastercard' },
    { icon: <SiPaypal className="text-2xl text-blue-600" />, name: 'PayPal' },
    { icon: <SiApplepay className="text-2xl text-black" />, name: 'Apple Pay' },
    { icon: <SiGooglepay className="text-2xl text-gray-800" />, name: 'Google Pay' },
    { icon: <SiSamsungpay className="text-2xl text-blue-800" />, name: 'Samsung Pay' },
    { icon: <span className="text-lg font-bold">COD</span>, name: 'Cash on Delivery' },
    { icon: <span className="text-lg font-bold">Bank</span>, name: 'Bank Transfer' }
  ];

  return (
    <>
      <Head>
        <link rel="canonical" href="https://montres.ae" />
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai" />
        <meta name="geo.position" content="25.2741938;55.2966051" />
        <meta name="ICBM" content="25.2741938, 55.2966051" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Montres Trading LLC",
            "image": "https://montres.ae/logo.png",
            "description": "Luxury watches and accessories retailer in Dubai",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Shop 5, Moza Plaza 1, Al Khor Street",
              "addressLocality": "Dubai",
              "addressRegion": "DU",
              "postalCode": "",
              "addressCountry": "AE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "25.2741938",
              "longitude": "55.2966051"
            },
            "telephone": "+97142671124",
            "email": "sales@montres.ae",
            "openingHours": "Mo-Su 10:00-22:00",
            "priceRange": "$$$",
            "sameAs": [
              "https://www.instagram.com/montres.ae/"
            ]
          })}
        </script>
      </Head>

      <footer className="bg-gray-100 text-gray-800">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 py-8 lg:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Contact Info Section */}
            <div>
              <h2 className="text-xl lg:text-2xl font-bold mb-4">MONTRE'S</h2>
              <div className="space-y-4">
                <h3 className="font-semibold text-lg lg:text-xl">Contact Info</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="mt-1 mr-3 text-gray-500 text-lg" />
                    <div>
                      <p className="text-base lg:text-lg">Shop 5, Moza Plaza 1, Al Khor Street,</p>
                      <p className="text-base lg:text-lg">Delta Waterfront, Dubai, UAE</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaPhoneAlt className="mr-3 text-gray-500 text-lg" />
                    <a href="tel:+97142671124" className="text-base lg:text-lg hover:text-amber-600 transition-colors">+971 4 267 1124</a>
                  </div>
                  <div className="flex items-center">
                    <FaEnvelope className="mr-3 text-gray-500 text-lg" />
                    <a href="mailto:sales@montres.ae" className="text-base lg:text-lg hover:text-amber-600 transition-colors">sales@montres.ae</a>
                  </div>
                  <div className="flex items-center">
                    <FaInstagram className="mr-3 text-gray-500 text-lg" />
                    <a href="https://instagram.com/montres.ae" target="_blank" rel="noopener noreferrer" className="text-base lg:text-lg hover:text-amber-600 transition-colors">@montres.ae</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Categories Section */}
            <div>
              <h3 className="font-semibold mb-4 text-lg lg:text-xl">Shop By Categories</h3>
              <ul className="space-y-2">
                {categories.map((item) => (
                  <li key={item.name} className="flex items-center">
                    {item.icon}
                    <a href={`/category/${item.name.toLowerCase().replace(' ', '-')}`} className="text-base lg:text-lg hover:text-amber-600 transition-colors">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links Section */}
            <div>
              <h3 className="font-semibold mb-4 text-lg lg:text-xl">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((item) => (
                  <li key={item}>
                    <a href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-base lg:text-lg hover:text-amber-600 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Payment Options Section */}
            <div>
              <h3 className="font-semibold mb-4 text-lg lg:text-xl">Payment Options</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {paymentMethods.map((method, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col items-center p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    title={method.name}
                  >
                    <div className="h-8 flex items-center justify-center">
                      {method.icon}
                    </div>
                    <span className="text-xs mt-1 text-center">{method.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Location Map Section */}
          <div className="mt-10 bg-white p-4 sm:p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-serif text-gray-800 mb-4 sm:mb-6">
              Visit Our <span className="text-amber-600">Dubai</span> Showroom
            </h3>
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:w-1/3 space-y-3">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-amber-600 mt-1 mr-3 text-lg" />
                  <p className="text-base lg:text-lg">Shop 5, Moza Plaza 1, Al Khor Street, Dubai</p>
                </div>
                <div className="flex items-center">
                  <FaPhoneAlt className="text-amber-600 mr-3 text-lg" />
                  <a href="tel:+97142671124" className="text-base lg:text-lg hover:text-amber-600 transition-colors">+971 4 267 1124</a>
                </div>
                <div className="flex items-center">
                  <FaClock className="text-amber-600 mr-3 text-lg" />
                  <p className="text-base lg:text-lg">Open Daily: 10:00 AM - 10:00 PM</p>
                </div>
              </div>
              <div className="w-full h-56 sm:h-64 lg:h-48 rounded-lg overflow-hidden border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d110942.72228082338!2d55.21420366975388!3d25.27417092315784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3e5f435ad7cce631%3A0x7bb62949cfd4ba39!2s77FW%2BMJV%20Moza%20Plaza%20-%201%20Al%20Khor%20St%20-%20Deira%20-%20Dubai!3m2!1d25.2741938!2d55.296605199999995!5e1!3m2!1sen!2sae!4v1754506903484!5m2!1sen!2sae"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Montre's Dubai Showroom Location"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="bg-gray-200 py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
              <p>© {new Date().getFullYear()} Montres Trading LLC. All Rights Reserved.</p>
              <div className="mt-2 md:mt-0">
                <span className="block md:inline-block md:mr-4">Registered in Dubai, UAE</span>
                <span>VAT Number: AE123456789</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;