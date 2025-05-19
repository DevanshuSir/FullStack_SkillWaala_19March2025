import React from "react";

const Another = (props) => {
  const { shareData } = props;
  return (
    <div>
      <h1>
        Another Comp..In Card Comp {shareData[0].UserName} {shareData[0].age}
      </h1>
    </div>
  );
};

export default Another;
