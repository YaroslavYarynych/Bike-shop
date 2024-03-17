import { useEffect, useState } from "react";
import { ChangeEvent } from "react";
import classNames from "classnames";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";

import { useAppDispatch, useAppSelector } from "../../store/store";
import { changeOrder, setProducts } from "../../features/bikeSlice";
import { BikeList } from "../../components/bike-list/BikeList";
import { SearchBar } from "../../components/search-bar";
import { Loader } from "../../components/loader";
import { Dropdown } from "../../components/dropdown/Dropdown";

import cars from "../../utils/cars.json";

import UpArrow from "../../assets/svg/home/up-arrow-icon.svg?react";
import DownArrow from "../../assets/svg/home/down-arrow-icon.svg?react";

import styles from "./home.module.scss";
import "../../../node_modules/react-toastify/dist/ReactToastify.css";

export const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const [query, setQuery] = useState("");

  const currentSortOption = useAppSelector(
    (state) => state.bikeStore.sortOption
  );
  const { order, products, isBought } = useAppSelector(
    (state) => state.bikeStore
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event?.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(setProducts(cars));
    }, 2000);

    if (isBought) {
      toast.success(
        "Your purchase was successful. Thank you for choosing us!",
        {
          position: "bottom-right",
          className: "toast-message",
        }
      );
    }
  }, []);

  const filtered = products
    .filter((item) => {
      if (query) {
        return (
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.brand.toLowerCase().includes(query.toLowerCase()) ||
          item.model.toLowerCase().includes(query.toLowerCase())
        );
      } else {
        return item;
      }
    })
    .sort((a, b) => {
      switch (currentSortOption) {
        case "Brand":
          return order === "ASC"
            ? a.brand.localeCompare(b.brand)
            : b.brand.localeCompare(a.brand);
        case "Year":
          return order === "ASC" ? a.year - b.year : b.year - a.year;
        case "Price":
          return order === "ASC" ? a.price - b.price : b.price - a.price;
        default:
          return 0;
      }
    });

  const searchMessage =
    "Oops! It seems we don`t have any products that match your search criteria".split(
      " "
    );

  return (
    <div className={styles.home}>
      <div className={styles.home__container}>
        {!products.length ? (
          <Loader />
        ) : (
          <>
            <div className={styles.home__sort_area}>
              <SearchBar query={query} handleChange={handleChange} />
              <div className={styles.home__sort_zone}>
                <Dropdown />
                <div className={styles.arrow_container}>
                  <UpArrow
                    className={classNames(styles.arrow_up, {
                      [styles.arrow_up__active]: order === "ASC",
                    })}
                    onClick={() => dispatch(changeOrder())}
                  />
                  <DownArrow
                    className={classNames(styles.arrow_down, {
                      [styles.arrow_down__active]: order === "DESC",
                    })}
                    onClick={() => dispatch(changeOrder())}
                  />
                </div>
              </div>
            </div>
            <BikeList list={filtered} />
            <ToastContainer />
          </>
        )}

        {!filtered.length && products.length > 0 && (
          <motion.div className={styles.home__message_container}>
            {searchMessage.map((word, i) => (
              <motion.span
                className={styles.home__message}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.2,
                  delay: i / 15,
                }}
                key={i}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};
