import React, { useEffect, useState } from "react";
import Slidebar from "./Slidebar";

const AdminDashboard = () => {
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

  return (
    <div className="flex mt-16">
      <Slidebar />
      <div className="flex-1 p-10 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Admin Dashboard 📊
        </h1>
        <div className="grid grid-cols-1">
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-semibold  text-gray-700">
              Total Products
            </h2>
            <p className="text-3xl mt-3 font-bold text-green-700">
              {products.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
