import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  TotalPrice: 0,
  TotalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, actions) => {
      const find = state.cartItems.findIndex((value) => {
        return value.id === actions.payload.id;
      });

      // console.log(find);

      if (find != -1) {
        state.cartItems[find] = {
          ...state.cartItems[find],
          quantity: state.cartItems[find].quantity + 1,
        };
      } else {
        state.cartItems.push({ ...actions.payload, quantity: 1 });
      }
    },
    deleteCartItem: (state, actions) => {
      state.cartItems = state.cartItems.filter((value) => {
        return value.id !== actions.payload.id;
      });
    },
    carttotalPrice: (state) => {
      const { totalPrice, totalQuantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { quantity, price } = cartItem;
          const itemsTotal = parseFloat(price) * parseFloat(quantity);
          cartTotal.totalPrice += itemsTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      state.TotalPrice = totalPrice.toFixed(2);
      state.TotalQuantity = totalQuantity;
    },
  },
});

export const { addToCart, deleteCartItem, carttotalPrice } = cartSlice.actions;
export default cartSlice.reducer;
