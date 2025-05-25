import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Links Section */}
          <div className="text-center md:text-left">
            <p className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
              <Link to="/TermsofUse" className="font-comfortaa hover:text-red-800">TermsofUse</Link>
              <span className="hidden md:inline">|</span>
              <Link to="/Privacy" className="font-comfortaa hover:text-red-800">Privacy</Link>
              <span className="hidden md:inline">|</span>
              <Link to="/ContactUs" className="font-comfortaa hover:text-red-800">ContactUs</Link>
            </p>
          </div>

          {/* Copyright Section */}
          <p className="text-center font-comfortaa text-sm md:text-base">
            Copyright &copy; 2025 BlueRays Online Tuition. <br/>All rights reserved.
          </p>

          {/* Social Media Links */}
          <ul className="flex justify-center md:justify-end space-x-2">
            <li><a href="#" className="font-comfortaa hover:text-red-800">Facebook</a></li>
            <li><a href="#" className="font-comfortaa hover:text-red-800">Twitter</a></li>
            <li><a href="#" className="font-comfortaa hover:text-red-800">Instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
