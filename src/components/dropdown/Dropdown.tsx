/// <reference types="vite-plugin-svgr/client" />
import { useEffect, useState } from "react";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";

import { useAppDispatch, useAppSelector } from "../../store/store";
import { resetOrder, setSortOption } from "../../features/bikeSlice";

import RightArrow from "../../assets/svg/dropdown/chevron-right.svg?react";
import "./dropdown.scss";

export const Dropdown = () => {
  const currentSortOption = useAppSelector(
    (state) => state.bikeStore.sortOption
  );
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [currentDropdown, setCurrentDropdown] = useState("All");

  const toggleDropdown = () => {
    setIsOpen((current) => !current);
  };

  useEffect(() => {
    dispatch(setSortOption(currentDropdown));
  }, [currentDropdown]);

  const handleSelect = (item: string) => {
    if (item === "All") {
      dispatch(resetOrder());
    }
    setCurrentDropdown(item);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <div
        className={classNames("dropdown__btn-container", {
          "btn__is-active": isOpen,
        })}
      >
        <div className="dropdown__user-container" onClick={toggleDropdown}>
          <p>{currentSortOption}</p>
          <RightArrow color="#fff" className="dropdown__icon" />
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.3,
              }}
              className={classNames("dropdown__content", {
                "is-active": isOpen,
              })}
            >
              {["All", "Price", "Brand", "Year"].map((item) => (
                <li
                  className={classNames("dropdown__item", {
                    "dropdown__item--disabled": currentSortOption === item,
                  })}
                  onClick={() => handleSelect(item)}
                  key={item}
                >
                  {item}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
