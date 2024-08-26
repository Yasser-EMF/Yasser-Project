import React from 'react';
import logo from '../assets/Logo.webp';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center md:flex-row justify-between">
        {/* Logo */}
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src={logo}
            alt="MyStore Logo"
            className="w-24 h-auto mr-4"
          />
        </div>
        {/* Copyright */}
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} MyStore. All rights reserved.
        </p>
        {/* Social Media Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-500 transition"
            aria-label="Facebook"
          >
            <FaFacebook size={24} />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-500 transition"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
