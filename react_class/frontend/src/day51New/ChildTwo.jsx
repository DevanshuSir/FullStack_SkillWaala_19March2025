import React, { useContext } from "react";
import ChildThree from "./ChildThree";
import { data } from "../App";

const ChildTwo = () => {
  const user = useContext(data);
  return (
    <div>
      <h1 className="text-5xl">Child_two {user.userName}</h1>
      <ChildThree />
    </div>
  );
};

export default ChildTwo;
