import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const [user, setUser] = useState({ userId: 12345, userName: "dev" });

  function handlInecrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  function hnadleUser() {
    setUser({ ...user, userName: "Devanshu" });
  }

  return (
    <div>
      <h1>Counter Application</h1>

      <h2>{count}</h2>
      <button onClick={handlInecrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>

      <h1>
        {user.userId} Name:- {user.userName}
      </h1>
      <button onClick={hnadleUser}>Update</button>
    </div>
  );
};

export default Counter;
