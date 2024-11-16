// src/components/Header.js

import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-4 px-6 md:px-12 flex justify-between items-center">
      <div className="text-xl font-bold text-teal-400">NeedStation</div>
      <nav className="hidden md:flex space-x-8">
        <a href="#" className="text-gray-300 hover:text-white">Home</a>
        <a href="#" className="text-gray-300 hover:text-white">About Us</a>
        <a href="#" className="text-gray-300 hover:text-white">Services</a>
        <a href="#" className="text-gray-300 hover:text-white">Contact Us</a>
      </nav>
      <div className="hidden md:flex space-x-4">
        <button className="border border-teal-400 text-teal-400 px-4 py-1 rounded-lg hover:bg-teal-600 hover:text-white">Log in</button>
        <button className="bg-teal-500 text-white px-4 py-1 rounded-lg hover:bg-teal-600">Sign in</button>
        <button className="border border-teal-400 text-teal-400 px-4 py-1 rounded-lg hover:bg-teal-600 hover:text-white">Become a tasker</button>
      </div>
    </header>
  );
};

export default Header;
