import React, { useState } from "react";
import Logo from "../assets/Quickzy.png";
import { Link } from "react-router-dom";
import {
  FaRegUserCircle,
  FaShoppingCart,
  FaSearch,
  FaTimes,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  console.log(isOpen);

  return (
    <nav className="bg-gradient-to-r from-green-100  to-white shadow-md ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div>
            <img src={Logo} alt="" className="h-16 w-auto" />
          </div>
          {/* Menu Items  */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link className="text-gray-700 hover:text-green-600 font-semibold">
              Home
            </Link>
            <Link>
              <FaRegUserCircle className="text-2xl hover:text-green-600" />
            </Link>
            <Link>
              <FaShoppingCart className="text-2xl hover:text-green-600" />
            </Link>
            <Link>
              <FaSearch className="text-2xl hover:text-green-600" />
            </Link>
          </div>
          {/* mobile toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isOpen ? <FaTimes /> : <GiHamburgerMenu />}
            </button>
          </div>
          {/* Mobile Menu Items */}

          {isOpen && (
            <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-3 shadow-md">
              <Link className="block text-gray-700 hover:text-green-600">
                Home
              </Link>
              <Link className="block text-gray-700 hover:text-green-600">
                Search
              </Link>
              <Link className="block text-gray-700 hover:text-green-600">
                Cart
              </Link>
              <Link className="block text-gray-700 hover:text-green-600">
                User
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
