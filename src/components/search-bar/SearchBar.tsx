import { ChangeEventHandler } from "react";
import styles from "./SearchBar.module.scss";

type Props = {
  query: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
};

export const SearchBar: React.FC<Props> = ({ query, handleChange }) => (
  <div className={styles.home_input__container}>
    <input
      id={styles.home_input__search}
      type="text"
      placeholder="Search bikery"
      value={query}
      onChange={handleChange}
    />
  </div>
);
