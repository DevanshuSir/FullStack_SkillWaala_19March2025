import React from "react";
import Logo from "../assets/Quickzy.png";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-100 via-white to-white mt-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-16 md:gap-32 text-gray-700">
        <div>
          <img src={Logo} alt="" className="h-24 mb-3" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
            voluptas!
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Link</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link className="hover:text-green-500">Home</Link>
            </li>
            <li>
              <Link className="hover:text-green-500">About</Link>
            </li>
            <li>
              <Link className="hover:text-green-500">Contact</Link>
            </li>
            <li>
              <Link className="hover:text-green-500">T&C</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow us</h3>
          <div className=" flex space-x-2 text-xl">
            <Link className="hover:text-blue-600">
              <FaFacebook />
            </Link>

            <Link className="hover:text-pink-500">
              <FaInstagram />
            </Link>

            <Link className="hover:text-blue-500">
              <FaTwitter />
            </Link>

            <Link className="hover:text-green-600">
              <FaWhatsapp />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 py-4 border-t border-gray-300">
        © {new Date().getFullYear()} Copyright By Devanshu sir 😍
      </div>
    </footer>
  );
};

export default Footer;
