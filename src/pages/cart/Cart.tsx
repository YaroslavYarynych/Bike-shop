import { useNavigate } from "react-router-dom";

import { CartList } from "../../components/cart-list/CartList";
import { EmptyMessage } from "../../components/empty-message/EmptyMessage";
import { setIsComfirmOrder } from "../../features/bikeSlice";
import { resetCart } from "../../features/cartSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";

import "./cart.scss";

export const Cart = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const bikesFromCart = useAppSelector((state) => state.cartStore.cart);
  const localeCart = localStorage.getItem("cart");

  const storedCartItems = localeCart ? JSON.parse(localeCart) : [];

  const handleSubmit = () => {
    dispatch(setIsComfirmOrder());
    navigate("/");
    dispatch(resetCart());

    setTimeout(() => {
      dispatch(setIsComfirmOrder());
    }, 5000);
  };

  return (
    <div className="cart-container">
      {!bikesFromCart.length && !storedCartItems.length ? (
        <EmptyMessage
          title="Your Bikery Cart is empty"
          content="Choose a bike"
        />
      ) : (
        <CartList list={bikesFromCart} handleSubmit={handleSubmit} />
      )}
    </div>
  );
};
