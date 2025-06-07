import React, { memo } from "react";

const Memo = (props) => {
  const { task } = props;

  console.log("Memo comp");

  return (
    <div>
      <h1>Learn Use Memo 😍</h1>
    </div>
  );
};

export default memo(Memo);
