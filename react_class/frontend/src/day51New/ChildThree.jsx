import React, { useContext } from "react";
import { data } from "../App";

const ChildThree = () => {
  const userName = useContext(data);
  console.log(userName);
  return <div></div>;
};

export default ChildThree;
