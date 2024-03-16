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
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    deleteFromCart(state, action) {
      console.log(state.cart, action.payload);
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    resetCart(state) {
      state.cart = [];
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    addFromStorage(state, action) {
      state.cart = [...action.payload];
    },

    increaseCartQuantity(state, { payload }) {
      state.cart = state.cart.map((bike) =>
        bike.id === payload ? { ...bike, quantity: (bike.quantity += 1) } : bike
      );
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    decreaseCartQuantity(state, { payload }) {
      state.cart = state.cart.map((bike) =>
        bike.id === payload ? { ...bike, quantity: (bike.quantity -= 1) } : bike
      );
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  increaseCartQuantity,
  decreaseCartQuantity,
  resetCart,
  addFromStorage,
} = cartSlice.actions;

export default cartSlice.reducer;
