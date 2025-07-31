import { Link, useNavigate } from "react-router-dom";
import {
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaRegUserCircle,
  FaHome,
  FaSearch,
} from "react-icons/fa";
import { MdContactSupport } from "react-icons/md";
import { useState } from "react";
import Logo from "../assets/Quickzy.png";
import SearchData from "./SearchData";
import toast from "react-hot-toast";
import { IoMdLogOut } from "react-icons/io";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const [showSearch, setShowSearch] = useState(false);

  const navigate = useNavigate();

  let token = localStorage.getItem("token");

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Log Out Successfully 😉 ");
    navigate("/");
  };

  return (
    <nav className="bg-gradient-to-r from-green-100 via-white to-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={Logo} alt="Logo" className="h-24 w-auto" />
          </div>

          {/* 🔍 Search Bar */}
          <div className="flex-1 mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for fruits, snacks and more"
                className="w-full bg-gray-100 rounded-full pl-4 pr-10 py-2 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                onFocus={() => {
                  setShowSearch(true);
                }}
                readOnly
              />
              <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm" />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to={"/"} className="text-gray-700 hover:text-green-600 ">
              <FaHome className="text-xl" />
            </Link>
            <Link to={"/cart"} className="text-gray-700 hover:text-green-600 ">
              <FaShoppingCart className="text-xl" />
            </Link>
            <Link
              to={"/contact"}
              className="flex items-center gap-1 text-gray-700 hover:text-green-600"
            >
              <MdContactSupport className="text-xl" />
            </Link>
            {!token ? (
              <Link
                to={"/login"}
                className="flex items-center gap-1 text-gray-700 hover:text-green-600"
              >
                <FaRegUserCircle className="text-xl" />
              </Link>
            ) : (
              <IoMdLogOut
                onClick={handleLogOut}
                className="text-2xl font-extrabold text-red-500 hover:cursor-pointer hover:text-red-800"
              />
            )}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-2xl text-green-600">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2 shadow-md">
          <Link to={"/"} className="block text-gray-700 hover:text-green-600">
            Home
          </Link>
          <Link
            to={"/cart"}
            className="block text-gray-700 hover:text-green-600"
          >
            Cart
          </Link>
          {!token ? (
            <Link
              to={"/login"}
              className="block text-gray-700 hover:text-green-600"
            >
              User
            </Link>
          ) : (
            <button
              onClick={handleLogOut}
              className="block text-red-500 font-semibold"
            >
              LogOut
            </button>
          )}
        </div>
      )}

      {showSearch && <SearchData onClose={setShowSearch} />}
    </nav>
  );
}
