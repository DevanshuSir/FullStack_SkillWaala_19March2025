import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./comp/HomePage";
import Navbar from "./comp/Navbar";
import Footer from "./comp/Footer";
import Cart from "./comp/Cart";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
