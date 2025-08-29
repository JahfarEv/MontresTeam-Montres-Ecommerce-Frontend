import React, { useState, useEffect } from "react";
import {
  FaShoppingCart,
  FaUser,
  FaBars,
  FaTimes,
  FaSearch,
  FaHeart,
  FaChevronRight,
  FaChevronDown,
  FaGlobe,
  FaPhone,
  FaEnvelope,
  FaComments,
  FaQuestionCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/montreslogo.png";

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

  return (
    <>
      {/* Main Header */}
      <header
        className={`w-full bg-white sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "shadow-lg" : "shadow-md"
        }`}
        role="banner"
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20 lg:h-24">
            {/* Logo and Mobile Menu Toggle */}
            <div className="flex items-center space-x-3 md:space-x-4">
              <button
                className="md:hidden text-gray-700 mr-1"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <FaTimes size={20} />
                ) : (
                  <FaBars size={20} />
                )}
              </button>

              <Link
                to="/"
                className="flex items-center"
                aria-label="Montres Home"
              >
                <img
                  src={logo}
                  alt="Montres - Luxury Watches Dubai"
                  className="h-10 md:h-14 lg:h-16 w-auto object-contain"
                  itemProp="logo"
                />
                {isClient && (
                  <meta itemProp="url" content={window.location.origin} />
                )}
              </Link>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-4 lg:mx-6 relative">
              <div
                className={`flex w-full border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm ${
                  isSearchFocused
                    ? "ring-2 ring-[#1e518e] border-transparent"
                    : ""
                } transition-all`}
                role="search"
              >
                <input
                  type="search"
                  placeholder="Search Rolex, Omega, Patek Philippe..."
                  className="flex-grow px-6 py-4 outline-none text-lg placeholder-gray-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() =>
                    setTimeout(() => setIsSearchFocused(false), 200)
                  }
                  aria-label="Search luxury watches"
                />
                <button
                  className="bg-gradient-to-r from-[#1e518e] to-[#0061b0ee] text-white px-6 lg:px-8 flex items-center justify-center gap-2 hover:from-[#1a457a] hover:to-[#00559f] transition-all"
                  aria-label="Submit search"
                >
                  <FaSearch className="text-xl" />
                </button>
              </div>

              {searchQuery && isSearchFocused && (
                <div
                  className="absolute top-full mt-1 w-full bg-white shadow-lg rounded-lg py-2 z-30 border border-gray-200"
                  role="listbox"
                >
                  <div className="px-3 py-2 text-xs text-gray-500 font-medium">
                    Popular in UAE
                  </div>
                  {popularSearches.map((search) => (
                    <Link
                      key={search.term}
                      to={search.path}
                      className="block px-4 py-2 text-sm hover:bg-gray-50"
                      role="option"
                      aria-label={`Search for ${search.term}`}
                    >
                      {search.term}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex items-center gap-3 lg:gap-5 xl:gap-6 text-gray-700"
              aria-label="Main navigation"
            >
              <Link
                to="/wishlist"
                className="relative flex items-center justify-center p-2 text-gray-700 hover:text-[#1e518e] transition-all"
                aria-label="Wishlist"
              >
                <FaHeart className="text-xl lg:text-2xl" />
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-md border-2 border-white">
                  2
                </span>
              </Link>

              <div className="relative">
                <Link
                  to="/cart"
                  className="flex items-center justify-center p-2 rounded-full bg-gradient-to-br from-[#d4af37] to-[#f1e5ac] text-gray-800 hover:from-[#c19b2e] hover:to-[#e0d294] transition-all shadow-md hover:shadow-lg"
                  aria-label="Shopping cart"
                >
                  <FaShoppingCart className="text-xl lg:text-2xl" />
                </Link>
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center shadow-md border-2 border-white">
                  3
                </span>
              </div>

              <button
                className="ml-1 lg:ml-2 bg-gradient-to-r from-[#1e518e] to-[#0061b0ee] hover:from-[#1a457a] hover:to-[#00559f] text-white px-3 sm:px-4 lg:px-5 xl:px-6 py-1.5 sm:py-2 lg:py-2.5 rounded-full flex items-center gap-1 sm:gap-2 text-xs sm:text-sm lg:text-base transition-all shadow-md hover:shadow-lg whitespace-nowrap"
                aria-label="Sign in or register"
                onClick={onSignUpClick}
              >
                <FaUser className="text-xs sm:text-sm" />
                <span>Sign In</span>
              </button>
            </nav>

            {/* Mobile Icons */}
            <div className="md:hidden flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => setIsSearchFocused(!isSearchFocused)}
                className="text-gray-700 p-1.5"
                aria-label="Search"
              >
                <FaSearch size={18} />
              </button>

              <Link
                to="/wishlist"
                className="relative p-1.5"
                aria-label="Wishlist"
              >
                <FaHeart size={18} className="text-gray-700" />
                <span className="absolute -top-0.5 -right-0.5 bg-[#1e518e] text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
                  2
                </span>
              </Link>

              <Link
                to="/cart"
                className="relative p-1.5"
                aria-label="Shopping cart"
              >
                <FaShoppingCart size={18} className="text-gray-700" />
                <span className="absolute -top-0.5 -right-0.5 bg-[#1e518e] text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
                  3
                </span>
              </Link>

              <button
                className="bg-gradient-to-r from-[#1e518e] to-[#0061b0ee] hover:from-[#1a457a] hover:to-[#00559f] text-white px-3 py-1.5 rounded-full flex items-center gap-1 text-xs transition-all shadow-md hover:shadow-lg whitespace-nowrap"
                aria-label="Sign in"
                onClick={onSignUpClick}
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
                  aria-label="Mobile search"
                />
                <button
                  className="bg-[#1e518e] text-white px-4 flex items-center justify-center"
                  aria-label="Submit search"
                >
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

      {/* SubNavbar */}
      <SubNavbar
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

const SubNavbar = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const [dropdown, setDropdown] = useState(null);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      name: "SHOP BY BRANDS",
      subMenu: [
        { name: "Emirati Brands", path: "/brands/emirati" },
        { name: "International Luxury", path: "/brands/international" },
        { name: "Arabic Heritage", path: "/brands/heritage" },
      ],
    },
    {
      name: "EXCLUSIVE COLLECTION",
      subMenu: [
        { name: "Limited Editions", path: "/exclusive/limited" },
        { name: "Gold Plated", path: "/exclusive/gold" },
        { name: "Diamond Collection", path: "/exclusive/diamond" },
      ],
    },
    {
      name: "WATCHES",
      subMenu: [
        { name: "Luxury Watches", path: "/watches/luxury" },
        { name: "Smart Watches", path: "/watches/smart" },
        { name: "Arabic Dial", path: "/watches/arabic" },
      ],
    },
    {
      name: "CLOCKS",
      subMenu: [
        { name: "Wall Clocks", path: "/clocks/wall" },
        { name: "Desk Clocks", path: "/clocks/desk" },
        { name: "Antique Clocks", path: "/clocks/antique" },
      ],
    },
    {
      name: "LEATHERS",
      subMenu: [
        { name: "Wallets", path: "/leathers/wallets" },
        { name: "Belts", path: "/leathers/belts" },
        { name: "Arabic Designs", path: "/leathers/arabic" },
      ],
    },
    {
      name: "ACCESSORIES",
      subMenu: [
        { name: "Pens", path: "/accessories/pens" },
        { name: "Cufflinks", path: "/accessories/cufflinks" },
      ],
    },
    {
      name: "JEWELRY",
      subMenu: [
        { name: "Gold", path: "/jewelry/gold" },
        { name: "Silver", path: "/jewelry/silver" },
      ],
    },
    {
      name: "BRAND NEW",
      subMenu: [
        { name: "Latest Arrivals", path: "/brand-new/latest" },
        { name: "2024 Collection", path: "/brand-new/2024" },
      ],
    },
  ];

  return (
    <>
      {/* Desktop SubNavbar */}
      <header
        className={`w-full bg-white sticky top-24 z-30 transition-all duration-300 ${
          isScrolled ? "shadow-md" : "shadow-sm"
        } hidden md:block`}
      >
        <div className="max-w-8xl mx-auto px-6 flex justify-between items-center">
          <nav className="flex space-x-8">
            {menuItems.slice(0, 8).map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setDropdown(item.name)}
                onMouseLeave={() => setDropdown(null)}
              >
                <Link
                  to={item.path || "#"}
                  className="py-4 block text-black font-bold hover:text-amber-700 transition-colors text-lg"
                >
                  {item.name}
                  {item.subMenu && (
                    <span className="ml-1 text-amber-600"></span>
                  )}
                </Link>

                {item.subMenu && dropdown === item.name && (
                  <div className="absolute left-0 mt-0 w-56 bg-white shadow-xl rounded-b-md py-2 border-t-2 border-amber-300">
                    {item.subMenu.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="block px-4 py-3 text-black hover:bg-amber-100 border-b border-amber-200"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Help & Language */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setIsHelpOpen(!isHelpOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                <FaPhone className="text-[#1e518e]" />
                <span>Support</span>
                <FaChevronDown
                  className={`transition-transform ${
                    isHelpOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isHelpOpen && (
                <div className="absolute right-0 mt-1 w-56 bg-white shadow-lg rounded-lg py-2 z-20 border border-gray-200">
                  <a
                    href="tel:+97112345678"
                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50"
                  >
                    <FaPhone className="text-[#1e518e]" />
                    <div>
                      <div>Call Support</div>
                      <div className="text-xs text-gray-500">
                        +971 1234 5678
                      </div>
                    </div>
                  </a>
                  <Link
                    to="/contact"
                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50"
                  >
                    <FaEnvelope className="text-[#1e518e]" />
                    Contact Form
                  </Link>
                  <Link
                    to="/live-chat"
                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50"
                  >
                    <FaComments className="text-[#1e518e]" />
                    Live Chat
                  </Link>
                  <Link
                    to="/faq"
                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50"
                  >
                    <FaQuestionCircle className="text-[#1e518e]" />
                    FAQs
                  </Link>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                <FaGlobe className="text-[#1e518e]" />
                <span>English</span>
                <FaChevronDown
                  className={`transition-transform ${
                    isLanguageOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isLanguageOpen && (
                <div className="absolute right-0 mt-1 w-40 bg-white shadow-lg rounded-lg py-2 z-20 border border-gray-200">
                  <button className="w-full text-left px-4 py-2 flex items-center gap-2 hover:bg-gray-50">
                    <span>🇬🇧</span> English
                  </button>
                  <button className="w-full text-left px-4 py-2 flex items-center gap-2 hover:bg-gray-50">
                    <span>🇦🇪</span> العربية
                  </button>
                  <button className="w-full text-left px-4 py-2 flex items-center gap-2 hover:bg-gray-50">
                    <span>🇮🇳</span> हिन्दी
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 left-0 w-80 bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-lg font-bold text-gray-800">Close Menu</h2>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-gray-500 hover:text-gray-700"
            aria-label="Close menu"
          >
            <FaTimes size={20} />
          </button>
        </div>

        <div className="overflow-y-auto h-full pb-4">
          {/* Main Menu Items */}
          {menuItems.map((item) => (
            <div key={item.name} className="border-b border-gray-200">
              <button
                onClick={() =>
                  setDropdown(dropdown === item.name ? null : item.name)
                }
                className="w-full flex justify-between items-center px-4 py-4 text-left text-gray-800 hover:bg-gray-50"
              >
                <span className="font-medium">{item.name}</span>
                {item.subMenu && (
                  <span className="text-gray-400">
                    {dropdown === item.name ? (
                      <FaChevronDown size={14} />
                    ) : (
                      <FaChevronRight size={14} />
                    )}
                  </span>
                )}
              </button>

              {item.subMenu && dropdown === item.name && (
                <div className="bg-gray-50 pl-6">
                  {item.subMenu.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.path}
                      className="block px-4 py-3 text-gray-600 hover:bg-gray-100 border-t border-gray-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile Help Section */}
          <div className="border-b border-gray-200">
            <button
              onClick={() => setIsHelpOpen(!isHelpOpen)}
              className="w-full flex justify-between items-center px-4 py-4 text-left text-gray-800 hover:bg-gray-50"
            >
              <div className="flex items-center gap-3">
                <FaPhone className="text-[#1e518e]" />
                <span className="font-medium">Help & Support</span>
              </div>
              <FaChevronDown
                className={`text-gray-400 transition-transform ${
                  isHelpOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isHelpOpen && (
              <div className="bg-gray-50 pl-14">
                <a
                  href="tel:+97112345678"
                  className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 border-t border-gray-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FaPhone className="text-[#1e518e] text-sm" />
                  <span>Call Support</span>
                </a>
                <Link
                  to="/contact"
                  className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 border-t border-gray-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FaEnvelope className="text-[#1e518e] text-sm" />
                  <span>Contact Form</span>
                </Link>
                <Link
                  to="/live-chat"
                  className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 border-t border-gray-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FaComments className="text-[#1e518e] text-sm" />
                  <span>Live Chat</span>
                </Link>
                <Link
                  to="/faq"
                  className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 border-t border-gray-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FaQuestionCircle className="text-[#1e518e] text-sm" />
                  <span>FAQs</span>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Language Section */}
          <div className="border-b border-gray-200">
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="w-full flex justify-between items-center px-4 py-4 text-left text-gray-800 hover:bg-gray-50"
            >
              <div className="flex items-center gap-3">
                <FaGlobe className="text-[#1e518e]" />
                <span className="font-medium">Language</span>
              </div>
              <FaChevronDown
                className={`text-gray-400 transition-transform ${
                  isLanguageOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isLanguageOpen && (
              <div className="bg-gray-50 pl-14">
                <button
                  className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 border-t border-gray-200"
                  onClick={() => {
                    setIsLanguageOpen(false);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <span>🇬🇧</span>
                  <span>English</span>
                </button>
                <button
                  className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 border-t border-gray-200"
                  onClick={() => {
                    setIsLanguageOpen(false);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <span>🇦🇪</span>
                  <span>العربية</span>
                </button>
                <button
                  className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 border-t border-gray-200"
                  onClick={() => {
                    setIsLanguageOpen(false);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <span>🇮🇳</span>
                  <span>हिन्दी</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
