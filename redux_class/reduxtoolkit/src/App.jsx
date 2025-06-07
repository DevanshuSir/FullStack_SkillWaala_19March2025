import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./features/counter/counterSlice";
import Form from "./comp/Form";

const App = () => {
  const counts = useSelector((state) => state.Counter.value);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Redux Toolkit 😍 {counts}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -Decrement
      </button>

      <Form />
    </div>
  );
};

export default App;
