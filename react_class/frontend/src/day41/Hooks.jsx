import React from "react";
import { useState } from "react";

// useState Hook

const Hooks = () => {
  const [value, setValue] = useState("Dev");
  const [heart, setHeart] = useState("❤️");

  //   let userName = "Devanshu";

  //   function handleValue() {
  //     console.log("Hello Button..!");
  //     userName = "Manny";
  //   }

  function handleValue() {
    setValue("Manny");
  }

  function handleHeart() {
    setHeart("💚");
  }

  return (
    <div>
      <h1>Hello Hoooks Comp</h1>

      <h2>{value}</h2>
      <button onClick={handleValue}>Click To Update</button>

      <h1 onClick={handleHeart}>{heart}</h1>
    </div>
  );
};

export default Hooks;
