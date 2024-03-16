import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { Desert } from "../desert/Desert";

import styles from "./EmptyMessage.module.scss";

type Props = {
  title: string;
  content: string;
};

export const EmptyMessage: React.FC<Props> = ({ title, content }) => {
  const navigate = useNavigate();

  const text = title.split(" ");

  return (
    <div className={styles.empty_message}>
      <motion.div className={styles.empty_message__title}>
        {text.map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: i / 5,
            }}
            key={i}
          >
            {el}
          </motion.span>
        ))}
      </motion.div>
      <motion.button
        whileTap={{ scale: 0.85 }}
        onClick={() => navigate("/")}
        type="button"
        className={styles.empty_message__add_btn}
      >
        {content}
      </motion.button>
      <Desert />
    </div>
  );
};
