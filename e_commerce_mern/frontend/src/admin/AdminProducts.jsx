import React, { useEffect, useState } from "react";
import Slidebar from "./Slidebar";
import { Link } from "react-router-dom";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);

  async function getAllProducts() {
    try {
      const response = await fetch("/api/getproduct");
      const result = await response.json();
      setProducts(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  async function handleDelete(id) {
    try {
      const response = await fetch(`/api/productdelete/${id}`, {
        method: "DELETE",
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message);
        getAllProducts();
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error(error);
    }
  }

  return (
    <div className="flex mt-16">
      <Slidebar />
      <div className="flex-1 p-10 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Manage Products 📊
        </h1>
        <Link to={"/admin/add-product"}>
          <button className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition">
            <FaPlus /> Add Products
          </button>
        </Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-5">
          {products.map((items, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-4 hover:shadow-xl transition"
            >
              <img
                src={`/uploads/${items.productImage}`}
                alt="Product Image"
                className="w-full h-40 object-cover rounded-md mb-4 border"
              />
              <h3 className="text-xl font-semibold text-gray-700">
                {items.productName}
              </h3>
              <p className="text-sm text-gray-600">
                Category:- {items.productCategory}
              </p>
              <p className="text-green-500 font-bold mt-1">
                ₹{items.productPrice}
              </p>

              {items.productStatus === "In-Stock" ? (
                <p className="text-blue-500 font-semibold mt-1">
                  {items.productStatus}
                </p>
              ) : (
                <p className="text-red-500 font-semibold mt-1">
                  {items.productStatus}
                </p>
              )}

              <div className="flex flex-col sm:flex-row justify-between mt-4">
                <Link
                  to={`/admin/edit-product/${items._id}`}
                  className="flex items-center gap-2 text-blue-500 hover:text-blue-700"
                >
                  <FaEdit /> Edit
                </Link>
                <Link
                  onClick={() => {
                    handleDelete(items._id);
                  }}
                  className="flex items-center gap-2 text-red-500 hover:text-red-700"
                >
                  <FaTrash /> Delete
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
