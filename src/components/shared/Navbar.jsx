import React, { useState, useEffect, useCallback } from "react";
import {
  FaShoppingCart,
  FaUser,
  FaBars,
  FaTimes,
  FaSearch,
  FaHeart,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/montreslogo.png";
import SubNavbar from "./SubNavabar";

const Navbar = ({ onSignUpClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const popularSearches = [
    { term: "Rolex Daytona", path: "/search?q=rolex+daytona" },
    { term: "Omega Seamaster", path: "/search?q=omega+seamaster" },
    { term: "Patek Philippe", path: "/search?q=patek+philippe" },
    { term: "Audemars Piguet", path: "/search?q=audemars+piguet" },
    { term: "Luxury Watches for Men", path: "/search?q=luxury+watches+men" },
  ];

  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchFocus = useCallback(() => {
    setIsSearchFocused(true);
  }, []);

  const handleSearchBlur = useCallback(() => {
    setTimeout(() => setIsSearchFocused(false), 200);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  return (
    <>
      {/* Main Header */}
      <header
        className={`w-full bg-white sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <div className="max-w-[1536px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex justify-between items-center h-16 md:h-20 lg:h-24">
            {/* Logo & Mobile Menu */}
            <div className="flex items-center gap-3 md:gap-4">
              <button
                className="md:hidden text-gray-700"
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>

              <Link to="/" className="flex items-center" aria-label="Montres Home">
                <img
                  src={logo}
                  alt="Montres - Luxury Watches Dubai"
                  className="h-10 md:h-14 lg:h-16 w-auto object-contain"
                />
                {isClient && (
                  <meta itemProp="url" content={window.location.origin} />
                )}
              </Link>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-6 relative">
              <div
                className={`flex w-full border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm ${
                  isSearchFocused ? "ring-2 ring-[#1e518e]" : ""
                }`}
                role="search"
              >
                <input
                  type="search"
                  placeholder="Search Rolex, Omega, Patek Philippe..."
                  className="flex-grow px-4 lg:px-6 py-2 lg:py-3 text-base lg:text-lg outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={handleSearchFocus}
                  onBlur={handleSearchBlur}
                />
                <button className="bg-gradient-to-r from-[#1e518e] to-[#0061b0ee] text-white px-4 lg:px-6 flex items-center justify-center">
                  <FaSearch className="text-lg lg:text-xl" />
                </button>
              </div>

              {searchQuery && isSearchFocused && (
                <div className="absolute top-full mt-1 w-full bg-white shadow-lg rounded-lg py-2 z-30 border border-gray-200">
                  <div className="px-3 py-2 text-xs text-gray-500 font-medium">
                    Popular in UAE
                  </div>
                  {popularSearches.map((search) => (
                    <Link
                      key={search.term}
                      to={search.path}
                      className="block px-4 py-2 text-sm hover:bg-gray-50"
                      onClick={() => setIsSearchFocused(false)}
                    >
                      {search.term}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 text-gray-700">
              <Link
                to="/userAccount"
                className="hover:text-[#1e518e] transition-all"
                aria-label="Wishlist"
              >
                <FaHeart className="text-xl lg:text-2xl" />
              </Link>

              <Link
                to="/cart"
                className="flex items-center justify-center p-2 rounded-full bg-gradient-to-br bg-[#2d5582] text-white py-3 px-4 hover:bg-[#2d5587]shadow-md"
                aria-label="Shopping cart"
              >
                <FaShoppingCart className="text-xl lg:text-2xl" />
              </Link>

              <button
                onClick={onSignUpClick}
                className="bg-gradient-to-r from-[#1e518e] to-[#0061b0ee] text-white px-5 py-2 rounded-full flex items-center gap-2 text-sm lg:text-base shadow-md hover:shadow-lg"
                aria-label="Sign in or register"
              >
                <FaUser />
                <span>Sign In</span>
              </button>
            </nav>

            {/* Mobile Icons */}
            <div className="md:hidden flex items-center gap-3">
              <button
                onClick={() => setIsSearchFocused(!isSearchFocused)}
                className="text-gray-700 p-1.5"
                aria-label="Search"
              >
                <FaSearch size={18} />
              </button>

              <Link to="/userAccount" className="relative p-1.5" aria-label="Wishlist">
                <FaHeart size={18} className="text-gray-700" />
                {/* <span className="absolute -top-0.5 -right-0.5 bg-[#1e518e] text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
                  
                </span> */}
              </Link>

              <Link to="/cart" className="relative p-1.5" aria-label="Shopping cart">
                <FaShoppingCart size={18} className="text-gray-700" />
                {/* <span className="absolute -top-0.5 -right-0.5 bg-[#1e518e] text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
                  
                </span> */}
              </Link>

              <button
                onClick={onSignUpClick}
                className="bg-gradient-to-r from-[#1e518e] to-[#0061b0ee] text-white px-3 py-1.5 rounded-full flex items-center gap-1 text-xs shadow-md hover:shadow-lg"
                aria-label="Sign in"
              >
                <FaUser className="text-xs" />
                <span className="hidden xs:inline">Sign In</span>
              </button>
            </div>
          </div>

          {/* Mobile Search */}
          {isSearchFocused && (
            <div className="md:hidden mb-3 relative">
              <div className="flex w-full border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm">
                <input
                  type="search"
                  placeholder="Search luxury watches..."
                  className="flex-grow px-4 py-2 outline-none text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="bg-[#1e518e] text-white px-4 flex items-center justify-center">
                  <FaSearch size={16} />
                </button>
              </div>
              {searchQuery && (
                <div className="absolute w-full bg-white shadow-lg rounded-lg py-2 z-20 border border-gray-200 mt-1">
                  {popularSearches.map((search) => (
                    <Link
                      key={search.term}
                      to={search.path}
                      className="block px-4 py-2 text-sm hover:bg-gray-50"
                      onClick={() => setIsSearchFocused(false)}
                    >
                      {search.term}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </header>

      {/* Sub Navbar */}
      <SubNavbar
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
