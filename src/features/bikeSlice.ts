import { createSlice } from "@reduxjs/toolkit";
import { DataState } from "../utils/types";

const initialState: DataState = {
  products: [],
  favourites: [],
  sortOption: "Position",
  order: "ASC",
  isBought: false,
};

export const bikeSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = [...action.payload];
    },

    setSortOption(state, action) {
      state.sortOption = action.payload;
    },

    changeOrder(state) {
      state.order === "ASC" ? (state.order = "DESC") : (state.order = "ASC");
    },
    resetOrder(state) {
      state.order = "ASC";
    },

    addToFavourites(state, action) {
      state.favourites.push(action.payload);
    },

    deleteFromFavourites(state, action) {
      state.favourites = state.favourites.filter(
        (item) => item.id !== action.payload
      );
    },

    setIsComfirmOrder(state) {
      state.isBought = !state.isBought;
    },
  },
});

export const {
  setProducts,
  setSortOption,
  changeOrder,
  resetOrder,
  addToFavourites,
  deleteFromFavourites,
  setIsComfirmOrder,
} = bikeSlice.actions;

export default bikeSlice.reducer;
