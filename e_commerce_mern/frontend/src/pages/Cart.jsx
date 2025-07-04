import React from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaMinus, FaPlus } from "react-icons/fa";

const Cart = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-xl p-6 rounded-xl shadow-lg relative overflow-y-auto max-h-[90vh] mx-4">
        <button
          onClick={() => {
            navigate("/");
          }}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
        >
          <FaTimes />
        </button>
        <h2 className="text-2xl font-bold text-green-500 text-center mb-4">
          Your Cart 🛒
        </h2>
        <ul className="divide-y divide-gray-300">
          <li className="flex items-center gap-5 py-4">
            <img
              src="jbj"
              alt="ProductImage"
              className="w-16 h-16 object-cover rounded border"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-700">Freash Product </h3>

              <p className="text-sm text-gray-500">₹99 each</p>
              <div className="flex items-center mt-2 gap-2">
                <button className="px-2 py-1 bg-green-200 rounded hover:bg-green-400">
                  <FaMinus />
                </button>
                <span className="px-2">2</span>
                <button className="px-2 py-1 bg-green-200 rounded hover:bg-green-400">
                  <FaPlus />
                </button>
              </div>
            </div>
            <p className="font-bold text-green-500">₹198</p>
          </li>
          <li className="flex items-center gap-5 py-4">
            <img
              src="jbj"
              alt="ProductImage"
              className="w-16 h-16 object-cover rounded border"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-700">Freash Product </h3>

              <p className="text-sm text-gray-500">₹99 each</p>
              <div className="flex items-center mt-2 gap-2">
                <button className="px-2 py-1 bg-green-200 rounded hover:bg-green-400">
                  <FaMinus />
                </button>
                <span className="px-2">2</span>
                <button className="px-2 py-1 bg-green-200 rounded hover:bg-green-400">
                  <FaPlus />
                </button>
              </div>
            </div>
            <p className="font-bold text-green-500">₹198</p>
          </li>
        </ul>
        {/* Total */}
        <div className="mt-6 text-right">
          <p className="text-lg font-semibold text-gray-800">
            Total:- <span className="text-green-500">₹198</span>
          </p>
          <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-700 transition">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
