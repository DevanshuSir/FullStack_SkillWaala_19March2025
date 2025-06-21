import React from "react";
import Form from "./Form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Update from "./Update";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
