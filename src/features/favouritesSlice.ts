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
      localStorage.setItem("favs", JSON.stringify(state.favourites));
    },

    deleteFromFavourites(state, action) {
      state.favourites = state.favourites.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("favs", JSON.stringify(state.favourites));
    },

    addFavsFromStorage(state, action) {
      state.favourites = [...action.payload];
    },
  },
});

export const { addToFavourites, deleteFromFavourites, addFavsFromStorage } =
  bikeSlice.actions;

export default bikeSlice.reducer;
