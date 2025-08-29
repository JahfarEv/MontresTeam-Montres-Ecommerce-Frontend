import React, { useState, memo } from "react";
import { FaHeart, FaCartPlus, FaStar, FaChevronLeft } from "react-icons/fa";
import { MdLocalOffer, MdOutlineSecurity } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import SimilarProduct from "./SimillarProduct";
import ReviewsRatings from "./ReviewsRatings";

const strapSizes = ["20mm", "22mm", "24mm"];
const colors = ["Black", "Silver", "Rose Gold", "Midnight Blue"];

const sample = {
  code: "WT-2024X",
  title: "Chronograph Pro Smartwatch",
  brandLine: "PRECISION TIMEWEAR COLLECTION",
  price: 249,
  oldPrice: 329,
  images: [
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1558433916-90a36b44753f?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1600&auto=format&fit=crop",
  ],
  highlights: [
    "1.4\" AMOLED Touch Display",
    "Up to 14 days battery life",
    "Water resistant up to 50m",
    "Heart rate & SpO2 monitoring",
    "Built-in GPS & NFC payments"
  ],
  details: "The Chronograph Pro combines classic watch aesthetics with modern smart features. Stainless steel case with scratch-resistant sapphire glass and interchangeable straps.",
  specs: {
    material: "Stainless Steel Case, Sapphire Glass",
    connectivity: "Bluetooth 5.2, WiFi",
    compatibility: "Android & iOS",
    warranty: "2 Years International Warranty",
    charging: "Magnetic Wireless Charging"
  },
  seller: {
    name: "TimeTech Official Store",
    feedback: "97% Positive Feedback",
    products: "1200+ Products",
    warranty: "Authenticity Guaranteed"
  },
};

const currency = (n) => `$${Number(n).toFixed(0)}`;

const Thumb = memo(function Thumb({ src, active, onClick, alt }) {
  return (
    <button
      onClick={onClick}
      className={`relative aspect-square w-16 overflow-hidden rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
        active ? "border-emerald-500 ring-emerald-500" : "border-gray-200 hover:border-gray-300"
      }`}
    >
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </button>
  );
});

const FeaturePill = ({ children }) => (
  <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700">
    {children}
  </span>
);

const Accordion = ({ title, children, isOpen, toggle }) => (
  <div className="border-b border-gray-200 py-4">
    <button
      onClick={toggle}
      className="flex w-full items-center justify-between text-left font-medium text-gray-900 focus:outline-none"
    >
      <span>{title}</span>
      {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
    </button>
    {isOpen && <div className="mt-3 text-sm text-gray-600">{children}</div>}
  </div>
);

export default function WatchProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("22mm");
  const [selectedColor, setSelectedColor] = useState("Black");
  const [openAccordion, setOpenAccordion] = useState("highlights");
  
  const discount = Math.round(((sample.oldPrice - sample.price) / sample.oldPrice) * 100);

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile header */}
      <div className="sticky top-0 z-10 flex items-center justify-between bg-white p-4 shadow-sm lg:hidden">
        <button className="text-gray-600">
          <FaChevronLeft size={20} />
        </button>
        <h1 className="text-lg font-semibold text-gray-900">Watch Details</h1>
        <button className="text-gray-600">
          <FaHeart size={20} />
        </button>
      </div>

      {/* Page container */}
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-4 sm:px-6 lg:px-8 lg:pt-6">
        {/* Breadcrumbs - hidden on mobile */}
        <nav aria-label="Breadcrumb" className="mb-6 hidden text-sm text-gray-500 lg:block">
          <ol className="flex items-center gap-2">
            <li className="hover:text-gray-700">Home</li>
            <span>/</span>
            <li className="hover:text-gray-700">Watches</li>
            <span>/</span>
            <li className="hover:text-gray-700">Smartwatches</li>
            <span>/</span>
            <li className="font-medium text-gray-800">{sample.title}</li>
          </ol>
        </nav>

        {/* Main card */}
        <div className="grid grid-cols-1 gap-6 rounded-3xl bg-white p-4 shadow-sm md:p-6 lg:grid-cols-2 lg:p-8">
          {/* LEFT: Gallery */}
          <section className="lg:sticky lg:top-6 lg:self-start">
            {/* Mobile product title */}
            <div className="mb-4 lg:hidden">
              <p className="text-xs font-semibold tracking-widest text-emerald-600">
                {sample.brandLine}
              </p>
              <h1 className="mt-1 text-xl font-bold text-gray-900">
                {sample.title}
              </h1>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-gray-200">
              <span className="absolute left-3 top-3 z-10">
                <FeaturePill>Model: {sample.code}</FeaturePill>
              </span>
              <img
                src={sample.images[selectedImage]}
                alt={`${sample.title} – image ${selectedImage + 1}`}
                className="aspect-square w-full object-contain p-8"
              />
            </div>

            {/* Thumbnails */}
            <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
              {sample.images.map((src, i) => (
                <Thumb
                  key={i}
                  src={src}
                  alt={`${sample.title} thumbnail ${i + 1}`}
                  active={selectedImage === i}
                  onClick={() => setSelectedImage(i)}
                />
              ))}
            </div>
          </section>

          {/* RIGHT: Details */}
          <section className="flex flex-col">
            {/* Desktop product title */}
            <div className="hidden lg:block">
              <p className="text-xs font-semibold tracking-widest text-emerald-600">
                {sample.brandLine}
              </p>
              <h1 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
                {sample.title}
              </h1>
            </div>

            {/* Pricing */}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-semibold text-gray-900">{currency(sample.price)}</span>
                <span className="text-sm text-gray-400 line-through">{currency(sample.oldPrice)}</span>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-rose-50 px-2.5 py-1 text-xs font-medium text-rose-600">
                <MdLocalOffer className="-mt-px" /> {discount}% OFF
              </span>
              <span className="text-sm text-gray-500">+ Free Shipping</span>
            </div>

            {/* Color selector */}
            <div className="mt-6">
              <p className="text-sm font-medium text-gray-800">Select Color</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`min-w-[60px] rounded-xl border px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                      selectedColor === color
                        ? "border-emerald-600 bg-emerald-50 text-emerald-700 ring-emerald-600"
                        : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                    }`}
                    aria-pressed={selectedColor === color}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size selector */}
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-800">Strap Size</p>
                <button className="text-sm font-medium text-emerald-600 hover:underline">
                  Size Guide
                </button>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {strapSizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`min-w-[60px] rounded-xl border px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                      selectedSize === sz
                        ? "border-emerald-600 bg-emerald-50 text-emerald-700 ring-emerald-600"
                        : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                    }`}
                    aria-pressed={selectedSize === sz}
                  >
                    {sz}
                  </button>
                ))}
              </div>
              <p className="mt-2 text-xs text-gray-500">Only 2 left in stock</p>
            </div>

            {/* Key features chips */}
            <div className="mt-6 flex flex-wrap gap-2">
              {sample.highlights.slice(0, 3).map((feature) => (
                <FeaturePill key={feature}>{feature}</FeaturePill>
              ))}
            </div>

            {/* CTAs - sticky on mobile */}
            <div className="sticky bottom-0 mt-6 flex flex-wrap gap-3 bg-white py-4 lg:static lg:py-0">
              <button className="flex-1 basis-[48%] items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-3 font-semibold text-gray-800 shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 lg:inline-flex lg:flex-none lg:px-5">
                <FaHeart className="hidden lg:block" /> Wishlist
              </button>
              <button className="flex-1 basis-[48%] items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 lg:inline-flex lg:flex-none lg:px-6">
                <FaCartPlus className="hidden lg:block" /> Add to Cart
              </button>
            </div>

            {/* Mobile accordions */}
            <div className="mt-6 lg:hidden">
              <Accordion 
                title="Key Features" 
                isOpen={openAccordion === "highlights"} 
                toggle={() => toggleAccordion("highlights")}
              >
                <ul className="space-y-2 pl-1">
                  {sample.highlights.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Accordion>
              
              <Accordion 
                title="Product Details" 
                isOpen={openAccordion === "details"} 
                toggle={() => toggleAccordion("details")}
              >
                <p className="leading-6">{sample.details}</p>
              </Accordion>
              
              <Accordion 
                title="Specifications" 
                isOpen={openAccordion === "specs"} 
                toggle={() => toggleAccordion("specs")}
              >
                <ul className="space-y-2">
                  {Object.entries(sample.specs).map(([key, value]) => (
                    <li key={key} className="flex justify-between">
                      <span className="font-medium text-gray-700">{key}:</span>
                      <span className="text-gray-600">{value}</span>
                    </li>
                  ))}
                </ul>
              </Accordion>
            </div>

            {/* Desktop product details */}
            <div className="mt-8 hidden space-y-6 lg:block">
              <div>
                <h3 className="text-sm font-semibold text-gray-900">Key Features</h3>
                <ul className="mt-3 space-y-2">
                  {sample.highlights.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-900">Product Details</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{sample.details}</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-900">Specifications</h3>
                <div className="mt-3 grid grid-cols-2 gap-4 text-sm">
                  {Object.entries(sample.specs).map(([key, value]) => (
                    <div key={key} className="rounded-lg bg-gray-50 p-3">
                      <p className="font-medium text-gray-700">{key}</p>
                      <p className="mt-1 text-gray-600">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Seller info */}
            <div className="mt-8 hidden lg:block">
              <h3 className="text-sm font-semibold text-gray-900">Seller Information</h3>
              <div className="mt-3 rounded-2xl border border-gray-200 p-4">
                <a href="#" className="font-medium text-emerald-700 hover:underline">
                  {sample.seller.name}
                </a>
                <ul className="mt-3 space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <FaStar className="text-amber-400" /> {sample.seller.feedback}
                  </li>
                  <li className="flex items-center gap-2">
                    <FaStar className="text-amber-400" /> {sample.seller.products}
                  </li>
                  <li className="flex items-center gap-2">
                    <MdOutlineSecurity className="text-emerald-500" /> {sample.seller.warranty}
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Trust badges */}
        <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl bg-white p-6 shadow-sm sm:grid-cols-4">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-emerald-100 p-2 text-emerald-600">
              <MdOutlineSecurity size={20} />
            </div>
            <div>
              <p className="text-xs font-medium text-gray-500">Authenticity</p>
              <p className="text-sm font-semibold">Guaranteed</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-blue-100 p-2 text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-medium text-gray-500">Returns</p>
              <p className="text-sm font-semibold">30 Days</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-purple-100 p-2 text-purple-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12 6a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V6.75A.75.75 0 0112 6zm0 12a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-medium text-gray-500">Delivery</p>
              <p className="text-sm font-semibold">2-4 Days</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-amber-100 p-2 text-amber-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-medium text-gray-500">Warranty</p>
              <p className="text-sm font-semibold">2 Years</p>
            </div>
          </div>
        </div>
      </div>
   <ReviewsRatings/>
<section className="mt-16">
  <SimilarProduct />
</section>
    </div>
  );
}