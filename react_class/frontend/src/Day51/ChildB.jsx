import React from "react";
import ChildC from "./ChildC";

const ChildB = (props) => {
  const { childb } = props;
  return (
    <div>
      <h1 className="text-5xl">Child-B </h1>
      <ChildC childc={childb} />
    </div>
  );
};

export default ChildB;
