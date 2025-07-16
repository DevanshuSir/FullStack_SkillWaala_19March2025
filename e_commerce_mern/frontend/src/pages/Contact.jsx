import React, { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const [query, setQuery] = useState({
    userName: "",
    userEmail: "",
    userQuery: "",
  });

  function handleChange(e) {
    setQuery({ ...query, [e.target.name]: e.target.value });
  }

  async function handleForm(e) {
    e.preventDefault();
    try {
      const response = await fetch("/api/userquery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(query),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message);
        setQuery({
          userName: "",
          userEmail: "",
          userQuery: "",
        });
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error(error);
    }
  }

  return (
    <div className="max-w-3xl mx-auto mt-24 p-6 bg-white rounded-xl shadow-xl">
      <h2 className="text-2xl font-bold text-green-500 mb-4 text-center">
        Query Form
      </h2>
      <form action="" onSubmit={handleForm}>
        <label htmlFor="" className="block text-gray-700 font-medium mb-1">
          Your Name
        </label>
        <input
          type="text"
          name="userName"
          id=""
          value={query.userName}
          onChange={handleChange}
          placeholder="Your Name..."
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
        />
        <label htmlFor="" className="block text-gray-700 font-medium mb-1">
          Your Email
        </label>
        <input
          type="Your Email..."
          name="userEmail"
          id=""
          value={query.userEmail}
          onChange={handleChange}
          placeholder="e.g Freash Fruits"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
        />
        <label htmlFor="" className="block text-gray-700 font-medium mb-1">
          Your Query...
        </label>
        <textarea
          name="userQuery"
          id=""
          value={query.userQuery}
          onChange={handleChange}
          placeholder=" Your Query..."
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
        ></textarea>
        <button className="w-full bg-green-500 py-2 text-white rounded mt-3 hover:bg-green-700 transition">
          Submit Query 📧
        </button>
      </form>
    </div>
  );
};

export default Contact;
