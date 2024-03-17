/// <reference types="vite-plugin-svgr/client" />

import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { Cart, EntityType } from "../../utils/types";
import FavIcon from "../../assets/svg/bike-item/default-fav-icon.svg?react";
import CheckedFavIcon from "../../assets/svg/bike-item/inFav-icon.svg?react";
import CartIcon from "../../assets/svg/bike-item/default-cart-icon.svg?react";
import CheckedCartIcon from "../../assets/svg/bike-item/checked-cart-icon.svg?react";

import { useAppSelector } from "../../store/store";
import {
  addToFavourites,
  deleteFromFavourites,
} from "../../features/favouritesSlice";
import { addToCart, deleteFromCart } from "../../features/cartSlice";

import styles from "./BikeItem.module.scss";

type Props = {
  item: EntityType;
  index: number;
};

export const BikeItem: React.FC<Props> = ({ item, index }) => {
  const { cart } = useAppSelector((state) => state.cartStore);
  const { favourites } = useAppSelector((state) => state.favStore);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (!cart.find((bike) => bike.id === item.id)) {
      const removeOmittedProps = (item: EntityType): Cart => {
        const { year, condition, description, category, ...rest } = item;
        return {
          ...rest,
          quantity: 1,
        };
      };

      dispatch(addToCart(removeOmittedProps(item)));
    } else {
      dispatch(deleteFromCart(item.id));
    }
  };

  const handleAddToFav = () => {
    if (!favourites.find((bike) => bike.id === item.id)) {
      dispatch(addToFavourites(item));
    } else {
      dispatch(deleteFromFavourites(item.id));
    }
  };

  const isInCart = cart.find((bike) => bike.id === item.id) || null;

  const isInFavourites = favourites.find((bike) => bike.id === item.id) || null;

  return (
    <motion.div
      className={styles.bike}
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? 0 : 0,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.7,
        },
      }}
      viewport={{ once: true }}
    >
      <img
        src={item.image}
        alt={`${item.title} ${item.brand} ${item.model}`}
        className={styles.bike__img}
      />
      <h2
        className={styles.bike__title}
      >{`${item.title} ${item.brand} ${item.model}`}</h2>
      <div className={styles.bike__container_details}>
        <div className={styles.bike__details}>
          <p className={styles.bike__details_content}>Brand</p>
          <p className={styles.bike__details_content}>{item.brand}</p>
        </div>
        <div className={styles.bike__details}>
          <p className={styles.bike__details_content}>Year</p>
          <p className={styles.bike__details_content}>{item.year}</p>
        </div>
      </div>
      <div className={`${styles.bike__btn_container} ${styles.btn}`}>
        <p
          className={styles.bike__price}
        >{`${item.price.toLocaleString("en-US")} грн`}</p>
        <div className={styles.btn__icon_container}>
          {isInCart ? (
            <CheckedCartIcon
              className={styles.bike__cart_icon}
              onClick={handleAddToCart}
            />
          ) : (
            <CartIcon
              className={styles.bike__cart_icon}
              onClick={handleAddToCart}
            />
          )}

          {isInFavourites ? (
            <CheckedFavIcon
              className={`${styles.bike__fav} ${styles.bike__fav_active}`}
              onClick={handleAddToFav}
            />
          ) : (
            <FavIcon className={styles.bike__fav} onClick={handleAddToFav} />
          )}
        </div>
      </div>
    </motion.div>
  );
};
