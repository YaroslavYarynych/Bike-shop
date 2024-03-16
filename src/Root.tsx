import { Route, HashRouter as Router, Routes } from "react-router-dom";

import { App } from "./App";
import { Home } from "./pages/home";
import { NotFoundPage } from "./components/notFound";
import { Cart } from "./pages/cart/Cart";
import { Favourites } from "./pages/favourites/Favourites";

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="favourites" element={<Favourites />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
