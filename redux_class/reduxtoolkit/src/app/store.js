import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    Counter: counterReducer,
    User: userReducer,
  },
});
