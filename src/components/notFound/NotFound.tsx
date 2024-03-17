import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./not-found.module.scss";

export const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.not_found}>
      <h1 className={styles.not_found__title}>Oops! Page Not Found! </h1>
      <motion.button
        whileTap={{ scale: 0.85 }}
        onClick={() => navigate("/")}
        className={styles.not_found__btn}
      >
        Go home
      </motion.button>
    </div>
  );
};
