import React from "react";
import ChildB from "./ChildB";

const ChildA = (props) => {
  const { childa } = props;
  return (
    <div>
      <h1 className="text-5xl">Child-A</h1>
      <ChildB childb={childa} />
    </div>
  );
};

export default ChildA;
