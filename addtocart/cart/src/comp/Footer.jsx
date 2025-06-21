import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-16   w-full">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-center items-center">
          {/* Center */}
          <div className="flex gap-8">
            <Link className="text-gray-300 hover:text-white">Home</Link>
            <Link className="text-gray-300 hover:text-white">About</Link>
            <Link className="text-gray-300 hover:text-white">Contact Us</Link>
            <Link className="text-gray-300 hover:text-white">Query</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
