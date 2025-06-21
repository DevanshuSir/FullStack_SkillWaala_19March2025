import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice/cartSlice";

export const store = configureStore({
  reducer: {
    Cart: cartReducer,
  },
});
