import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  function handleLogOut() {
    navigate("/login");
  }

  return (
    <div
      style={{
        backgroundColor: "green",
        color: "white",
        width: "100%",
        height: "50px",
      }}
    >
      <h1>
        Footer <button onClick={handleLogOut}>LogOut</button>
      </h1>
    </div>
  );
};

export default Footer;
