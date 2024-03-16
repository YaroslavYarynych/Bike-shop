import { createSlice } from "@reduxjs/toolkit";
import { CartState } from "../utils/types";

const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cart.push(action.payload);
    },

    deleteFromCart(state, action) {
      console.log(state.cart, action.payload);
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    resetCart(state) {
      state.cart = [];
    },

    increaseCartQuantity(state, { payload }) {
      state.cart = state.cart.map((bike) =>
        bike.id === payload ? { ...bike, quantity: (bike.quantity += 1) } : bike
      );
    },

    decreaseCartQuantity(state, { payload }) {
      state.cart = state.cart.map((bike) =>
        bike.id === payload ? { ...bike, quantity: (bike.quantity -= 1) } : bike
      );
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  increaseCartQuantity,
  decreaseCartQuantity,
  resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;
