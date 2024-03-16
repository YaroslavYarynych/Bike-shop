/// <reference types="vite-plugin-svgr/client" />
import { useNavigate } from "react-router-dom";

import { useAppSelector } from "../../store/store";

import CartIcon from "../../assets/svg/header/cart-icon.svg?react";
import FavIcon from "../../assets/svg/favourites/fav-icon.svg?react";
import Logo from "../../assets/svg/header/header-logo.svg?react";

import styles from "./Header.module.scss";

export const Header = () => {
  const { favourites } = useAppSelector((state) => state.favStore);
  const { cart } = useAppSelector((state) => state.cartStore);

  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(`${path}`);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Logo
          className={styles.header__logo}
          onClick={() => handleNavigate("/")}
        />

        <div className={styles.preferences}>
          <div className={`${styles.preferences__cart} ${styles.cart}`}>
            <CartIcon
              className={styles.cart__btn}
              onClick={() => handleNavigate("cart")}
            />
            {cart.length > 0 && (
              <span className={`${styles.amount} ${styles.total}`}>
                {cart.length}
              </span>
            )}
          </div>
          <div className={`${styles.preferences__fav} ${styles.favourites}`}>
            <FavIcon
              className={`${styles.favourites__btn}`}
              onClick={() => handleNavigate("favourites")}
            />
            {favourites.length > 0 && (
              <span className={`${styles.favourites__amount} ${styles.total}`}>
                {favourites.length}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
