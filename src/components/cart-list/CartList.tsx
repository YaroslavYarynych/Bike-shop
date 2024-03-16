import React from "react";
import { motion } from "framer-motion";
import { Cart } from "../../utils/types";
import { CartItem } from "../cart-item/CartItem";

import styles from "./cart-list.module.scss";

type Props = {
  list: Cart[];
  handleSubmit: () => void;
};

export const CartList: React.FC<Props> = ({ list, handleSubmit }) => {
  const totalAmount = list.reduce(
    (acc, bike) => (acc += bike.quantity * bike.price),
    0
  );

  return (
    <div className={styles.cart__list}>
      <div className={styles.cart__top_container}>
        <h1 className={styles.cart__list_title}>Shopping Cart</h1>
        <p
          className={styles.cart__total}
        >{`Total: ${totalAmount.toLocaleString("en-US")} ₴`}</p>
      </div>

      {list.map((bike, index) => (
        <CartItem bike={bike} index={index} key={index} />
      ))}

      {list.length && (
        <motion.button
          whileTap={{ scale: 0.85 }}
          className={styles.cart__order_btn}
          type="button"
          onClick={handleSubmit}
        >
          Confirm Order
        </motion.button>
      )}
    </div>
  );
};
