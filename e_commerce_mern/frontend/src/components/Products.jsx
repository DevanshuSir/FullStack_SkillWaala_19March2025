import React from "react";

const Products = () => {
  return (
    <section className="py-10 px-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-600 mb-6">
        Treading Products 🔥
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-7">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <div className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition">
            <img
              src="jvgWW"
              alt="ProductImage"
              className="w-full h-32 object-cover rounded"
            />
            <h3 className="mt-2 font-medium text-gray-700">
              Freash Item {item}
            </h3>
            <p className="text-green-600 font-bold">₹99</p>
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
