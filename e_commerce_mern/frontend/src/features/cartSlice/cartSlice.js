import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const saveCart = createAsyncThunk("cart/save", async (cartData) => {
  const response = await fetch("/api/cart/save", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cartData),
  });

  return await response.json();
});

export const fetchCart = createAsyncThunk("cart/fetch", async (userId) => {
  const response = await fetch(`/api/cart/${userId}`);
  return await response.json();
});

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
        return value._id === actions.payload._id;
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
        return value._id !== actions.payload._id;
      });
    },
    carttotalPrice: (state) => {
      const { totalPrice, totalQuantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { quantity, productPrice } = cartItem;
          const itemsTotal = parseFloat(productPrice) * parseFloat(quantity);
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
    IncrementQuantity: (state, action) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item._id === action.payload._id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    DecrementQuantity: (state, action) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item._id === action.payload._id) {
          return {
            ...item,
            quantity: item.quantity > 1 ? item.quantity - 1 : 1,
          };
        }
        return item;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      console.log("fetchComplete", action.payload);
      state.cartItems = action.payload.cartItems || [];
      state.TotalPrice = action.payload.totalprice || 0;
      state.TotalQuantity = action.payload.totalQuantity || 0;
    });
    builder.addCase(saveCart.fulfilled, (state, action) => {
      console.log("Cart Save..", action.payload);
    });
  },
});

export const {
  addToCart,
  deleteCartItem,
  carttotalPrice,
  IncrementQuantity,
  DecrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
