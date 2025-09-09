import React, { useState, useEffect, useCallback } from "react";
import {
  FaTimes,
  FaChevronRight,
  FaChevronDown,
  FaGlobe,
  FaPhone,
  FaEnvelope,
  FaComments,
  FaQuestionCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const SubNavbar = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const [dropdown, setDropdown] = useState(null);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
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

  const toggleDropdown = useCallback(
    (name) => setDropdown((prev) => (prev === name ? null : name)),
    []
  );

  const toggleHelp = useCallback(() => setIsHelpOpen((prev) => !prev), []);
  const toggleLanguage = useCallback(
    () => setIsLanguageOpen((prev) => !prev),
    []
  );
  const closeMobileMenu = useCallback(
    () => setIsMobileMenuOpen(false),
    [setIsMobileMenuOpen]
  );

  return (
    <>
      {/* Desktop SubNavbar */}
      <header
        className={`w-full bg-white sticky top-16 md:top-24 z-30 transition-all duration-300 ${
          isScrolled ? "shadow-md" : "shadow-sm"
        } hidden md:block`}
      >
        <div className="max-w-[1536px] mx-auto px-4 md:px-8 lg:px-12 flex justify-between items-center h-14 lg:h-16">
          {/* Main Menu */}
          <nav className="flex items-center gap-6 lg:gap-8 h-full">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative group h-full flex items-center"
                onMouseEnter={() => setDropdown(item.name)}
                onMouseLeave={() => setDropdown(null)}
              >
                <Link
                  to={item.path || "#"}
                  className="block text-gray-800 font-semibold hover:text-amber-700 transition-colors text-sm lg:text-base whitespace-nowrap"
                >
                  {item.name}
                </Link>

                {item.subMenu && dropdown === item.name && (
                  <div className="absolute left-0 top-full mt-0 w-56 bg-white shadow-xl rounded-b-md py-2 border-t-2 border-amber-300">
                    {item.subMenu.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="block px-4 py-2 text-gray-800 hover:bg-amber-50 text-sm border-b border-gray-100"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Help & Language */}
          <div className="flex items-center gap-6">
            {/* Help */}
            <div className="relative">
              <button
                onClick={toggleHelp}
                className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-gray-100 text-sm"
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
                <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-2 z-20 border border-gray-200">
                  <a
                    href="tel:+97112345678"
                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-sm"
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
                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-sm"
                  >
                    <FaEnvelope className="text-[#1e518e]" />
                    Contact Form
                  </Link>
                  <Link
                    to="/live-chat"
                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-sm"
                  >
                    <FaComments className="text-[#1e518e]" />
                    Live Chat
                  </Link>
                  <Link
                    to="/faq"
                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-sm"
                  >
                    <FaQuestionCircle className="text-[#1e518e]" />
                    FAQs
                  </Link>
                </div>
              )}
            </div>

            {/* Language */}
            <div className="relative">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-gray-100 text-sm"
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
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2 z-20 border border-gray-200">
                  <button className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-50 text-sm">
                    <span>🇬🇧</span> English
                  </button>
                  <button className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-50 text-sm">
                    <span>🇦🇪</span> العربية
                  </button>
                  <button className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-50 text-sm">
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
        className={`fixed inset-y-0 left-0 w-full bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        {/* Mobile Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-base font-bold text-gray-800">Menu</h2>
          <button
            onClick={closeMobileMenu}
            className="p-2 text-gray-500 hover:text-gray-700"
            aria-label="Close menu"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Mobile Items */}
        <div className="overflow-y-auto h-full pb-6">
          {menuItems.map((item) => (
            <div key={item.name} className="border-b border-gray-200">
              <button
                onClick={() => toggleDropdown(item.name)}
                className="w-full flex justify-between items-center px-4 py-3 text-left text-gray-800 hover:bg-gray-50"
              >
                <span className="font-medium text-sm">{item.name}</span>
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
                <div className="bg-gray-50">
                  {item.subMenu.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.path}
                      className="block px-6 py-2 text-gray-600 hover:bg-gray-100 text-sm"
                      onClick={closeMobileMenu}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile Help */}
          <div className="border-b border-gray-200">
            <button
              onClick={toggleHelp}
              className="w-full flex justify-between items-center px-4 py-3 text-left text-gray-800 hover:bg-gray-50"
            >
              <div className="flex items-center gap-3">
                <FaPhone className="text-[#1e518e]" />
                <span className="font-medium text-sm">Help & Support</span>
              </div>
              <FaChevronDown
                className={`text-gray-400 transition-transform ${
                  isHelpOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isHelpOpen && (
              <div className="bg-gray-50">
                <a
                  href="tel:+97112345678"
                  className="flex items-center gap-3 px-6 py-2 text-gray-600 hover:bg-gray-100 text-sm"
                  onClick={closeMobileMenu}
                >
                  <FaPhone className="text-[#1e518e]" />
                  Call Support
                </a>
                <Link
                  to="/contact"
                  className="flex items-center gap-3 px-6 py-2 text-gray-600 hover:bg-gray-100 text-sm"
                  onClick={closeMobileMenu}
                >
                  <FaEnvelope className="text-[#1e518e]" />
                  Contact Form
                </Link>
                <Link
                  to="/live-chat"
                  className="flex items-center gap-3 px-6 py-2 text-gray-600 hover:bg-gray-100 text-sm"
                  onClick={closeMobileMenu}
                >
                  <FaComments className="text-[#1e518e]" />
                  Live Chat
                </Link>
                <Link
                  to="/faq"
                  className="flex items-center gap-3 px-6 py-2 text-gray-600 hover:bg-gray-100 text-sm"
                  onClick={closeMobileMenu}
                >
                  <FaQuestionCircle className="text-[#1e518e]" />
                  FAQs
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Language */}
          <div className="border-b border-gray-200">
            <button
              onClick={toggleLanguage}
              className="w-full flex justify-between items-center px-4 py-3 text-left text-gray-800 hover:bg-gray-50"
            >
              <div className="flex items-center gap-3">
                <FaGlobe className="text-[#1e518e]" />
                <span className="font-medium text-sm">Language</span>
              </div>
              <FaChevronDown
                className={`text-gray-400 transition-transform ${
                  isLanguageOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isLanguageOpen && (
              <div className="bg-gray-50">
                <button
                  className="w-full flex items-center gap-3 px-6 py-2 text-gray-600 hover:bg-gray-100 text-sm"
                  onClick={() => {
                    setIsLanguageOpen(false);
                    closeMobileMenu();
                  }}
                >
                  🇬🇧 English
                </button>
                <button
                  className="w-full flex items-center gap-3 px-6 py-2 text-gray-600 hover:bg-gray-100 text-sm"
                  onClick={() => {
                    setIsLanguageOpen(false);
                    closeMobileMenu();
                  }}
                >
                  🇦🇪 العربية
                </button>
                <button
                  className="w-full flex items-center gap-3 px-6 py-2 text-gray-600 hover:bg-gray-100 text-sm"
                  onClick={() => {
                    setIsLanguageOpen(false);
                    closeMobileMenu();
                  }}
                >
                  🇮🇳 हिन्दी
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SubNavbar;
