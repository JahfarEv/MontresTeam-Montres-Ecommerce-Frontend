import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import montreslogo from "../../assets/montreslogo.png";
import visa from "../../assets/visa-logo-visa-icon-free-free-vector.jpg";
import master from "../../assets/mastercard-icon-lg.png";
import paypl from "../../assets/images (2).png";
import amex from "../../assets/images (3).png";

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-gray-300 px-6 py-12 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + Contact Info */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <img
              src={montreslogo}
              alt="Montres Logo"
              className="h-14 filter brightness-0 invert" // makes logo white
            />
          </div>

          <h3 className="text-lg font-semibold mb-3 text-white">
            Contact Info
          </h3>
          <p className="text-base mb-2 leading-relaxed">
            <span className="font-medium">Address:</span> Shop 5, Moza Plaza 1,
            Al Khor Street, Deira Waterfront, Dubai, UAE
          </p>
          <p className="text-base mb-2 flex items-center gap-2">
            <MdPhone className="text-lg" /> +97142671124
          </p>
          <p className="text-base mb-2 flex items-center gap-2">
            <FaWhatsapp className="text-lg" /> +97142671124
          </p>
          <p className="text-base mb-2 flex items-center gap-2">
            <MdEmail className="text-lg" /> sales@montres.ae
          </p>
          <p className="text-base flex items-center gap-2">
            <FaInstagram className="text-lg" /> @montres.ae
          </p>
        </div>

        {/* Shop Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">
            Shop By Categories
          </h3>
          <ul className="space-y-2 text-base">
            <li>Watch</li>
            <li>Bags</li>
            <li>Wallets</li>
            <li>Jewellery</li>
            <li>Clocks</li>
            <li>Pocket Watch</li>
            <li>Personal Accessories</li>
            <li>Cufflinks</li>
            <li>Pens</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Quick Links</h3>
          <ul className="space-y-2 text-base">
            <li>Privacy Policy</li>
            <li>Authentication & Watch Grading</li>
            <li>Frequently Asked Questions (FAQ)</li>
            <li>Refund And Returns Policy</li>
            <li>Terms And Conditions</li>
            <li>Warranty Policy</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Request Item</li>
          </ul>
        </div>

        {/* Google Map */}
        <div className="w-full h-56 sm:h-64 lg:h-48 rounded-lg overflow-hidden border border-gray-600">
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

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p className="text-gray-400 text-center md:text-left text-base">
          All rights reserved by{" "}
          <span className="text-blue-400 font-medium">
            Montres Trading L.L.C – The Art Of Time
          </span>{" "}
          © 2025.
        </p>
        <div className="flex gap-4">
          <img src={visa} alt="Visa" className="h-7" />
          <img src={amex} alt="Amex" className="h-7" />
          <img src={master} alt="Mastercard" className="h-7" />
          <img src={paypl} alt="Paypal" className="h-7" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
