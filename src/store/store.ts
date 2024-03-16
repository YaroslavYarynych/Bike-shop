import { configureStore } from "@reduxjs/toolkit";
import bikeSlice from "../features/bikeSlice";
import cartSlice from "../features/cartSlice";
import favouritesSlice from "../features/favouritesSlice";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    bikeStore: bikeSlice,
    cartStore: cartSlice,
    favStore: favouritesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
