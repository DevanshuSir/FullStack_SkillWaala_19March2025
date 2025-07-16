import React, { useEffect, useState } from "react";

const Products = () => {
  const [product, setProduct] = useState([]);

  async function ProductsData() {
    try {
      const response = await fetch("/api/userproducts");
      const record = await response.json();
      if (response.ok) {
        setProduct(record.data);
      } else {
        console.log(record);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    ProductsData();
  }, []);

  return (
    <section className="py-10 px-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-600 mb-6">
        Treading Products 🔥
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-7">
        {product.map((item) => (
          <div
            key={item._id}
            className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition"
          >
            <img
              src="jvgWW"
              alt="ProductImage"
              className="w-full h-32 object-cover rounded"
            />
            <h3 className="mt-2 font-medium text-gray-700">
              {item.productName}
            </h3>
            <p className="text-green-600 font-bold">₹{item.productPrice}</p>
            <button className="mt-2 w-full bg-green-500 text-white py-1 rounded hover:bg-green-900">
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
