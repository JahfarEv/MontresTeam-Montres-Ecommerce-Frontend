import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import avatar from '../../assets/man-avatar_16905682.png'

const CustomerReviews = () => {
  const testimonials = [
    {
      name: "Ahmed Al Maktoum",
      location: "Dubai",
      rating: 5,
      comment: "The Rolex I purchased came with full papers and was delivered to my office in DIFC the next day. Excellent service!",
      image: avatar,
      product: "Rolex Submariner",
      date: "15 March 2023"
    },
    {
      name: "Fatima Al Qasimi",
      location: "Abu Dhabi",
      rating: 5,
      comment: "Authentic Chanel bag with perfect packaging. The personal shopping assistant was extremely helpful.",
      image: avatar,
      product: "Chanel Classic Flap Bag",
      date: "2 April 2023"
    },
    {
      name: "Rajesh Patel",
      location: "Sharjah",
      rating: 4,
      comment: "Great collection of luxury watches. Would love to see more Patek Philippe models in stock.",
      image:avatar,
      product: "Patek Philippe Nautilus",
      date: "28 May 2023"
    },
    {
      name: "Yasmin Al Fardan",
      location: "Dubai",
      rating: 5,
      comment: "Exceptional service! My Hermès Birkin arrived in perfect condition with all authenticity certificates.",
      image: avatar,
      product: "Hermès Birkin Bag",
      date: "10 June 2023"
    },
    {
      name: "Omar Khan",
      location: "Abu Dhabi",
      rating: 5,
      comment: "Fast delivery and excellent packaging. The Audemars Piguet watch was exactly as described.",
      image: avatar,
      product: "Audemars Piguet Royal Oak",
      date: "22 July 2023"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);
  const averageRating = (testimonials.reduce((sum, item) => sum + item.rating, 0) / testimonials.length).toFixed(1);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex(prev => (prev + 1) % (testimonials.length - 2));
      }
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  // Handle scroll to current index
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: currentIndex * (carouselRef.current.offsetWidth / 3),
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % (testimonials.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + (testimonials.length - 2)) % (testimonials.length - 2));
  };

  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": averageRating,
              "reviewCount": testimonials.length,
              "bestRating": "5",
              "worstRating": "1"
            },
            "review": testimonials.map(testimonial => ({
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": testimonial.rating,
                "bestRating": "5",
                "worstRating": "1"
              },
              "author": {
                "@type": "Person",
                "name": testimonial.name
              },
              "datePublished": testimonial.date,
              "reviewBody": testimonial.comment,
              "itemReviewed": {
                "@type": "Product",
                "name": testimonial.product
              }
            }))
          })}
        </script>
      </Head>

      <section 
        className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
        aria-labelledby="customer-reviews-heading"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 id="customer-reviews-heading" className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by UAE's Luxury Shoppers
            </h2>
            <div className="flex justify-center items-center">
              <div className="flex items-center bg-white px-6 py-2 rounded-full shadow-sm">
                <div className="flex mr-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-6 h-6 ${i < Math.floor(averageRating) ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-lg font-semibold text-gray-800">
                  {averageRating} out of 5 ({testimonials.length} reviews)
                </span>
              </div>
            </div>
          </div>

          {/* Carousel container */}
          <div className="relative">
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300 focus:outline-none"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div 
              ref={carouselRef}
              className="flex overflow-x-hidden scroll-smooth space-x-6 py-4 px-2"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 w-full md:w-1/3 px-2 transition-transform duration-300"
                  style={{ minWidth: 'calc(33.333% - 1rem)' }}
                >
                  <div 
                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full"
                    itemScope
                    itemType="https://schema.org/Review"
                  >
                    <div className="flex items-center mb-6">
                      <img
                        src={testimonial.image}
                        alt={`${testimonial.name}, satisfied customer from ${testimonial.location}`}
                        className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-gold-200"
                        loading="lazy"
                      />
                      <div>
                        <h3 className="font-bold text-lg text-gray-900" itemProp="author">{testimonial.name}</h3>
                        <div className="flex items-center">
                          <span className="text-sm text-gray-500">{testimonial.location}</span>
                          <span className="mx-2 text-gray-300">•</span>
                          <span className="text-sm text-gray-500" itemProp="datePublished">{testimonial.date}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex mb-4" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                      <meta itemProp="ratingValue" content={testimonial.rating.toString()} />
                      <meta itemProp="bestRating" content="5" />
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    
                    <blockquote className="mb-6">
                      <p className="text-gray-700 italic leading-relaxed" itemProp="reviewBody">
                        "{testimonial.comment}"
                      </p>
                    </blockquote>
                    
                    <div className="text-sm text-gray-500">
                      <span itemProp="itemReviewed" itemScope itemType="https://schema.org/Product">
                        <span itemProp="name">{testimonial.product}</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300 focus:outline-none"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Indicator dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.slice(0, testimonials.length - 2).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-gray-900' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomerReviews;