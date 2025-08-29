import React from 'react';
import Head from 'next/head';
import ValentinoImage from '../assets/blog/9644.jpg';
import WatchesImage from '../assets/blog/watch.jpg';
import RolexImage from '../assets/blog/hand.jpg';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      category: "FRAGRANCES & BEAUTY",
      title: "Ranking the Valentino Born in Roma Collection",
      excerpt: "The Valentino Born in Roma fragrance line has become a staple in modern perfumery, offering bold, contemporary takes on both men's and women's scents.",
      image: ValentinoImage,
      alt: "Valentino perfume collection displayed on a luxury marble surface",
      slug: "valentino-born-in-roma-collection-ranking",
      date: "2025-08-15"
    },
    {
      id: 2,
      category: "WATCHES",
      title: "Why Are Watches So Expensive? The Real Reasons",
      excerpt: "Ever wondered why some watches carry price tags in the tens or even hundreds of thousands of dollars? Luxury watches are more than just tools...",
      image: WatchesImage,
      alt: "Collection of luxury watches including Rolex, Patek Philippe and Audemars Piguet",
      slug: "why-watches-are-expensive",
      date: "2025-08-10"
    },
    {
      id: 3,
      category: "ROLEX",
      title: "Rolex Batman vs. Rolex Batgirl: The Difference",
      excerpt: "If you're a watch enthusiast or luxury timepiece collector, you've likely come across the terms Rolex Batman and Rolex Batgirl...",
      image: RolexImage,
      alt: "Side by side comparison of Rolex GMT-Master II Batman and Batgirl models",
      slug: "rolex-batman-vs-batgirl",
      date: "2025-08-05"
    }
  ];

  return (
    <>
      <Head>
        <title>Luxury Lifestyle Blog | Montres Trading L.L.C</title>
        <meta name="description" content="Explore our luxury blog featuring in-depth articles on watches, fragrances, and premium lifestyle topics from industry experts." />
        <meta name="keywords" content="luxury blog, watch reviews, fragrance guide, Rolex comparison, high-end lifestyle" />
        <meta property="og:title" content="Luxury Lifestyle Blog | Montres Trading L.L.C" />
        <meta property="og:description" content="Expert insights on luxury watches, fragrances and premium lifestyle" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://montres.com/blog" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Luxury Lifestyle Blog" />
        <meta name="twitter:description" content="Discover expert articles on luxury watches and fragrances" />
        <link rel="canonical" href="https://montres.com/blog" />
        
        {/* Structured data for blog */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "headline": "Luxury Lifestyle Blog",
            "description": "Expert articles on luxury watches, fragrances and premium lifestyle",
            "publisher": {
              "@type": "Organization",
              "name": "Montres Trading L.L.C",
              "logo": {
                "@type": "ImageObject",
                "url": "https://montres.com/logo.png"
              }
            },
            "blogPosts": blogPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "datePublished": post.date,
              "image": post.image,
              "author": {
                "@type": "Person",
                "name": "Montres Editorial Team"
              }
            }))
          })}
        </script>
      </Head>

      <section 
        className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 max-w-7xl mx-auto"
        aria-label="Latest blog posts"
        itemScope
        itemType="https://schema.org/Blog"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-0" itemProp="name">
            Latest Blog Posts
          </h1>
          <a 
            href="/blog" 
            className="px-6 py-2.5 sm:px-8 sm:py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors text-base sm:text-lg"
            aria-label="View all blog posts"
          >
            View All Blog Posts
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
              itemScope
              itemType="https://schema.org/BlogPosting"
              itemProp="blogPost"
            >
              <div className="h-60 sm:h-72 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={600}
                  height={400}
                  itemProp="image"
                />
              </div>
              <div className="p-5 sm:p-6">
                <span className="text-xs sm:text-sm font-bold tracking-widest text-gray-500 uppercase" itemProp="genre">
                  {post.category}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-2 sm:mt-3 mb-3 sm:mb-4 leading-tight" itemProp="headline">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 sm:mb-6 line-clamp-2 sm:line-clamp-3" itemProp="description">
                  {post.excerpt}
                </p>
                <a 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-base sm:text-lg"
                  aria-label={`Read more about ${post.title}`}
                  itemProp="url"
                >
                  Read more
                  <svg 
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M14 5l7 7m0 0l-7 7m7-7H3" 
                    />
                  </svg>
                </a>
                <meta itemProp="datePublished" content={post.date} />
                <meta itemProp="author" content="Montres Editorial Team" />
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;