import { useContext } from "react";
import { data } from "../App";

const ChildThree = () => {
  const userName = useContext(data);
  console.log(userName.userName);

  return (
    <div>
      <h1 className="text-5xl">Child_three {userName.userName} </h1>
    </div>
  );
};

export default ChildThree;
