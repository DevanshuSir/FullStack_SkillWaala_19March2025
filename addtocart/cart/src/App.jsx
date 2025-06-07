import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./comp/HomePage";
import Navbar from "./comp/Navbar";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
