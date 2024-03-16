import { createSlice } from "@reduxjs/toolkit";
import { FavState } from "../utils/types";

const initialState: FavState = {
  favourites: [],
};

export const bikeSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addToFavourites(state, action) {
      state.favourites.push(action.payload);
    },

    deleteFromFavourites(state, action) {
      state.favourites = state.favourites.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addToFavourites, deleteFromFavourites } = bikeSlice.actions;

export default bikeSlice.reducer;
