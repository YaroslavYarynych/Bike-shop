import { Header } from "./components/header/Header";
import { Outlet } from "react-router-dom";
import "./App.module.scss";
import { useEffect } from "react";
import { addFromStorage } from "./features/cartSlice";
import { addFavsFromStorage } from "./features/favouritesSlice";
import { useAppDispatch } from "./store/store";

export const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const localeCart = localStorage.getItem("cart");
    const cart = localeCart ? JSON.parse(localeCart) : [];
    const localeFavs = localStorage.getItem("favs");
    const storedFavsItems = localeFavs ? JSON.parse(localeFavs) : [];

    if (cart.length > 0) {
      dispatch(addFromStorage(cart));
    }
    if (storedFavsItems.length > 0) {
      dispatch(addFavsFromStorage(storedFavsItems));
    }
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <Outlet />
    </div>
  );
};
