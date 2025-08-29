import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import BigSales from '../../assets/8005340.jpg';
import BigShpping from '../../assets/5544257.jpg';
import shoppingStore from '../../assets/cyber-monday-shopping-sales.jpg';
import EcommsersePocket from '../../assets/E-Commerce Facebook Ad.png'
import Helmet from "react-helmet";
import SubscriptionModal from "../ui/SubscriptionForm";

const EcommerceBannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying,] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef(null);
  const intervalRef = useRef(null);
  const sliderRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  // Responsive breakpoints
  const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slides = [
    {
      type: "image",
      content: BigSales,
      alt: "Luxury watches collection with discount offer",
      title: "Summer Sale 2023",
      subtitle: "Up to 40% Off Premium Watches",
      description: "Limited time offer on selected luxury timepieces. Free shipping and 2-year warranty included.",
      cta: "Shop Now",
      buttonVariant: "primary",
      textPosition: "left",
      textColor: "text-white",
      overlay: "bg-black/30"
    },
    {
      type: "image",
      content: EcommsersePocket,
      alt: "3D animation of premium chronograph watch",
      subtitle: "Exclusive Timepieces",
      description: "Discover our latest designs with cutting-edge technology and craftsmanship.",
      cta: "View Collection",
      buttonVariant: "secondary",
      textPosition: "center",
      textColor: "text-white",
      overlay: "bg-black/40"
    },
    {
      type: "image",
      content: BigShpping,
      alt: "Close-up of luxury wristwatch with leather strap",
      title: "Free Shipping",
      subtitle: "On All Orders Over AED500",
      description: "Enjoy complimentary worldwide shipping and easy returns on premium purchases.",
      buttonVariant: "outline",
      textPosition: "left",
      textColor: "text-white",
      overlay: "bg-black/20"
    },
    {
      type: "image",
      content: shoppingStore,
      alt: "Close-up of luxury wristwatch with leather strap",
      title: "New Arrivals",
      subtitle: "Discover Our Latest Collection",
      description: "Fresh designs now available with exclusive launch offers.",
      buttonVariant: "primary",
      textPosition: "right",
      textColor: "text-white",
      overlay: "bg-black/25"
    },
  ];

  // Calculate responsive height based on window width
  const getBannerHeight = () => {
    if (windowWidth < breakpoints.sm) return '40vh';
    if (windowWidth < breakpoints.md) return '45vh';
    if (windowWidth < breakpoints.lg) return '50vh';
    return '60vh'; // Increased height for desktop
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    resetAutoPlay();
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    resetAutoPlay();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    resetAutoPlay();
  };

  const resetAutoPlay = () => {
    clearInterval(intervalRef.current);
    if (isAutoPlaying && !isHovering) {
      startAutoPlay();
    }
  };

  const startAutoPlay = () => {
    intervalRef.current = setInterval(nextSlide, 5000); // Reduced interval to 5s
  };

  const stopAutoPlay = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    if (slides[currentSlide].type === "video" && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(e => console.log("Auto-play prevented:", e));
    }
  }, [currentSlide]);

  useEffect(() => {
    if (isAutoPlaying && !isHovering) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }
    
    return () => stopAutoPlay();
  }, [isAutoPlaying, isHovering]);

  const handleMouseEnter = () => {
    setIsHovering(true);
    stopAutoPlay();
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (isAutoPlaying) {
      startAutoPlay();
    }
  };

  const handleFocus = () => {
    setIsHovering(true);
    stopAutoPlay();
  };

  const handleBlur = () => {
    setIsHovering(false);
    if (isAutoPlaying) {
      startAutoPlay();
    }
  };

  const renderStructuredData = () => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Luxury Watches Collection",
      description: "Premium timepieces with exclusive offers",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: slides.map((slide, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: slide.title || slide.subtitle,
          item: `#slide-${index}`,
        })),
      },
    };

    return (
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    );
  };

  return (
    <>
      <Helmet>
        <title>Luxury Watches | Premium Timepieces & Collections</title>
        <meta
          name="description"
          content="Discover our exclusive collection of luxury watches with special offers. Free shipping on orders over $500."
        />
        <meta
          name="keywords"
          content="luxury watches, premium timepieces, watch collection, designer watches, limited edition watches"
        />
        <meta property="og:title" content="Luxury Watches Collection | Premium Timepieces" />
        <meta property="og:description" content="Explore our curated selection of high-end watches with exclusive offers." />
        <meta property="og:type" content="website" />
        {slides[currentSlide] && (
          <meta property="og:image" content={slides[currentSlide].content} />
        )}
        {renderStructuredData()}
      </Helmet>

      <section
        ref={sliderRef}
        className="relative w-full overflow-hidden bg-gray-100"
        style={{ height: getBannerHeight() }}
        aria-label="Promotional banner slider"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            id={`slide-${index}`}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? "opacity-100 z-0" : "opacity-0 z-0"
            }`}
            aria-hidden={index !== currentSlide}
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${index + 1} of ${slides.length}`}
          >
            {slide.type === "image" ? (
              <div className="relative w-full h-full">
                <img
                  src={slide.content}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchpriority={index === 0 ? "high" : "low"}
                  width="1920"
                  height="1080"
                />
                <div className={`absolute inset-0 ${slide.overlay} flex items-center ${
                  slide.textPosition === "left" ? "justify-start pl-4 sm:pl-8 md:pl-12 lg:pl-16" :
                  slide.textPosition === "right" ? "justify-end pr-4 sm:pr-8 md:pr-12 lg:pr-16" :
                  "justify-center px-4"
                }`}>
                  <div className={`max-w-2xl ${slide.textColor} ${
                    slide.textPosition === "left" ? "text-left mr-auto" :
                    slide.textPosition === "right" ? "text-right ml-auto" :
                    "text-center mx-auto"
                  }`}>
                    {slide.subtitle && (
                      <p className="text-sm sm:text-base md:text-lg text-amber-400 mb-1 sm:mb-2 animate-fadeInUp uppercase tracking-wider font-medium">
                        {slide.subtitle}
                      </p>
                    )}
                    {slide.title && (
                      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 animate-fadeInUp delay-100">
                        {slide.title}
                      </h2>
                    )}
                    {slide.description && (
                      <p className="text-xs sm:text-sm md:text-base mb-3 sm:mb-6 animate-fadeInUp delay-200 line-clamp-2">
                        {slide.description}
                      </p>
                    )}
                    {slide.cta && (
                      <button
                        className={`px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-3 rounded-md font-medium animate-fadeInUp delay-300 text-sm sm:text-base transition-colors duration-300 ${
                          slide.buttonVariant === "primary" 
                            ? "bg-amber-500 hover:bg-amber-600 text-white shadow-md hover:shadow-lg" 
                            : slide.buttonVariant === "secondary" 
                            ? "bg-transparent border-2 border-white hover:bg-white/20 text-white" 
                            : "bg-white hover:bg-gray-100 text-gray-800 border border-gray-300"
                        }`}
                      >
                        {slide.cta}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative w-full h-full">
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  aria-label={slide.alt}
                >
                  <source src={slide.content} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className={`absolute inset-0 ${slide.overlay} flex items-center ${
                  slide.textPosition === "left" ? "justify-start pl-4 sm:pl-8 md:pl-12 lg:pl-16" :
                  slide.textPosition === "right" ? "justify-end pr-4 sm:pr-8 md:pr-12 lg:pr-16" :
                  "justify-center px-4"
                }`}>
                  <div className={`max-w-2xl ${slide.textColor} ${
                    slide.textPosition === "left" ? "text-left mr-auto" :
                    slide.textPosition === "right" ? "text-right ml-auto" :
                    "text-center mx-auto"
                  }`}>
                    {slide.subtitle && (
                      <p className="text-sm sm:text-base md:text-lg text-amber-400 mb-1 sm:mb-2 animate-fadeInUp uppercase tracking-wider font-medium">
                        {slide.subtitle}
                      </p>
                    )}
                    {slide.title && (
                      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 animate-fadeInUp delay-100">
                        {slide.title}
                      </h2>
                    )}
                    {slide.description && (
                      <p className="text-xs sm:text-sm md:text-base mb-3 sm:mb-6 animate-fadeInUp delay-200 line-clamp-2">
                        {slide.description}
                      </p>
                    )}
                    {slide.cta && (
                      <button
                        className={`px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-3 rounded-md font-medium animate-fadeInUp delay-300 text-sm sm:text-base transition-colors duration-300 ${
                          slide.buttonVariant === "primary" 
                            ? "bg-amber-500 hover:bg-amber-600 text-white shadow-md hover:shadow-lg" 
                            : slide.buttonVariant === "secondary" 
                            ? "bg-transparent border-2 border-white hover:bg-white/20 text-white" 
                            : "bg-white hover:bg-gray-100 text-gray-800 border border-gray-300"
                        }`}
                      >
                        {slide.cta}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Navigation Arrows */}
        <div className="absolute inset-0 flex items-center justify-between px-2 sm:px-4 z-10">
          <button
            onClick={prevSlide}
            className="bg-white/30 hover:bg-white/50 rounded-full p-2 sm:p-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            aria-label="Previous slide"
          >
            <FaChevronLeft className="text-white text-lg sm:text-xl" />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white/30 hover:bg-white/50 rounded-full p-2 sm:p-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            aria-label="Next slide"
          >
            <FaChevronRight className="text-white text-lg sm:text-xl" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 sm:space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 ${
                index === currentSlide
                  ? "bg-amber-500 w-6 sm:w-8"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1} of ${slides.length}`}
              aria-current={index === currentSlide}
            />
          ))}
        </div>
          <SubscriptionModal triggerType="timer" delay={8000} />
      </section>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animate-fadeInUp.delay-100 {
          animation-delay: 0.15s;
        }
        .animate-fadeInUp.delay-200 {
          animation-delay: 0.3s;
        }
        .animate-fadeInUp.delay-300 {
          animation-delay: 0.45s;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default EcommerceBannerSlider;