import React from "react";
import ChildD from "./ChildD";

const ChildC = (props) => {
  const { childc } = props;
  return (
    <div>
      <h1 className="text-5xl">Child-C</h1>
      <ChildD childd={childc} />
    </div>
  );
};

export default ChildC;
