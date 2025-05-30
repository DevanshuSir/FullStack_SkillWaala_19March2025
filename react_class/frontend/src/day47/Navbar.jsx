import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ backgroundColor: "yellow", width: "100%", height: "50px" }}>
      <ul style={{ display: "flex", listStyleType: "none", gap: "20px" }}>
        <li>
          <Link to="/">Homr</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
