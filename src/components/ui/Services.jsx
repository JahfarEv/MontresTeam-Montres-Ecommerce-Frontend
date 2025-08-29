import React from "react";
import Head from "next/head"; // or { Helmet } from 'react-helmet' if not using Next.js
import VintagePieces from "../../assets/Services/018-desk-clock.png";
import AffordableLuxury from "../../assets/Services/022-cash-r42ecoqc28j50xw6lx7t6u43pqksk63juypunm0cqc.png";
import WarrantyIcon from "../../assets/Services/Warranty-icon-Custom.png";
import ShippingIcon from "../../assets/Services/shipping-Custom.png";
import AuthenticityIcon from "../../assets/Services/Authenticity-icon-Custom.png";
import AdditionalServicesIcon from "../../assets/Services/services-icon-Custom.png";

const Services = () => {
  const services = [
    {
      icon: VintagePieces,
      title: "Vintage Watch Collection",
      description: "Unique vintage watches in pristine condition with certified authenticity.",
      alt: "Vintage luxury watches icon",
      schema: "WatchStore"
    },
    {
      icon: AffordableLuxury,
      title: "Affordable Luxury Watches",
      description: "Premium luxury watches at competitive prices with financing options.",
      alt: "Affordable luxury watches icon",
      schema: "Offer"
    },
    {
      icon: WarrantyIcon,
      title: "Extended Warranty Protection",
      description: "Comprehensive 2-year warranty on all timepieces with global coverage.",
      alt: "Watch warranty protection icon",
      schema: "WarrantyPromise"
    },
    {
      icon: ShippingIcon,
      title: "Global Express Shipping",
      description: "Free insured worldwide delivery within 3-5 business days.",
      alt: "International shipping icon",
      schema: "ShippingDeliveryTime"
    },
    {
      icon: AuthenticityIcon,
      title: "Certified Authenticity",
      description: "100% genuine watches verified by master horologists.",
      alt: "Authenticity guarantee icon",
      schema: "AuthenticityGuarantee"
    },
    {
      icon: AdditionalServicesIcon,
      title: "Professional Watch Services",
      description: "In-house servicing, repairs and customization available.",
      alt: "Watch services icon",
      schema: "Service"
    },
  ];

  const pageTitle = "Premium Watch Services | Luxury Timepiece Collections & Care";
  const pageDescription = "Explore our certified watch services including vintage collections, authenticity verification, global shipping, and professional watch maintenance.";
  const canonicalUrl = "https://yourdomain.com/watch-services";
  const previewImage = "https://yourdomain.com/images/watch-services-preview.jpg";

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={pageDescription} />
        
        {/* Google / Search Engine Tags */}
        <meta itemProp="name" content={pageTitle} />
        <meta itemProp="description" content={pageDescription} />
        <meta itemProp="image" content={previewImage} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={previewImage} />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={canonicalUrl} />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDescription} />
        <meta property="twitter:image" content={previewImage} />
        
        {/* Canonical */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Robots */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Additional SEO */}
        <meta name="keywords" content="luxury watches, vintage timepieces, watch authentication, watch warranty, global shipping, watch repair" />
        <meta name="author" content="Your Company Name" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <section 
        className="bg-white py-8 px-4 sm:px-6"
        itemScope
        itemType="https://schema.org/Service"
      >
        <div className="max-w-7xl mx-auto">
          <h1 className="sr-only">{pageTitle}</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 rounded-lg hover:shadow-lg transition-all duration-300 min-h-[180px]"
                itemScope
                itemType={`https://schema.org/${service.schema}`}
              >
                <div className="flex items-center justify-center h-20 w-20 mb-3" itemProp="logo" itemScope itemType="https://schema.org/ImageObject">
                  <img
                    src={service.icon}
                    alt={service.alt}
                    className="h-16 w-16 object-contain"
                    loading="lazy"
                    width={64}
                    height={64}
                    itemProp="url"
                  />
                  <meta itemProp="width" content="64" />
                  <meta itemProp="height" content="64" />
                </div>
                <h2 
                  className="text-lg font-semibold text-gray-900 mb-2"
                  itemProp="name"
                >
                  {service.title}
                </h2>
                <p 
                  className="text-sm text-gray-700"
                  itemProp="description"
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;