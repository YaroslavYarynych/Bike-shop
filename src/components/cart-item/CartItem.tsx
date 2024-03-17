/// <reference types="vite-plugin-svgr/client" />
import { motion } from "framer-motion";
import { Cart } from "../../utils/types";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {
  decreaseCartQuantity,
  deleteFromCart,
  increaseCartQuantity,
} from "../../features/cartSlice";

import DecreaseIcon from "../../assets/svg/cart/decrease-cart-icon.svg?react";
import IcreaseIcon from "../../assets/svg/cart/increase-cart-icon.svg?react";
import DeleteCartIcon from "../../assets/svg/cart/delete-cart-icon.svg?react";

import styles from "./CartIitem.module.scss";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

type Props = {
  bike: Cart;
  index: number;
};

export const CartItem: React.FC<Props> = ({ bike, index }) => {
  const cart = useAppSelector((state) => state.cartStore.cart);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleIncrease = (id: number) => {
    dispatch(increaseCartQuantity(id));
  };

  const handleDecrease = (id: number) => {
    dispatch(decreaseCartQuantity(id));
  };

  const handleDeleteFromCart = (id: number) => {
    if (cart.length === 1) {
      dispatch(deleteFromCart(id));

      navigate("/");
    } else {
      dispatch(deleteFromCart(id));
    }
  };

  return (
    <motion.div
      className={styles.cart__item_container}
      initial={{
        opacity: 0,
        y: 0,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
        },
      }}
      viewport={{ once: true }}
    >
      <div className={styles.cart__item_wrapper}>
        <div key={bike.id} className={styles.cart__item}>
          <img className={styles.cart__item__image} src={bike.image} alt="" />
          <p
            className={styles.cart__item__title}
          >{`${bike.title} ${bike.brand} ${bike.model}`}</p>
          <p className={styles.cart__item__price}>{`${bike.price} ₴`}</p>
        </div>
        <div className={styles.cart__item_quantity_container}>
          <div className={styles.cart__item_quantity_controls}>
            <DecreaseIcon
              className={classNames(styles.cart__item_quantity_btn, {
                [styles.cart__item_quantity_btn__active]: bike.quantity === 1,
              })}
              onClick={() => handleDecrease(bike.id)}
            />
            <p className={styles.cart__item_quantity_counter}>
              {bike.quantity}
            </p>
            <IcreaseIcon
              className={styles.cart__item_quantity_btn}
              onClick={() => handleIncrease(bike.id)}
            />
          </div>
        </div>
      </div>

      <DeleteCartIcon
        className={`${styles.cart__item_quantity_btn} ${styles.cart__item_icon}`}
        onClick={() => handleDeleteFromCart(bike.id)}
      />
    </motion.div>
  );
};
