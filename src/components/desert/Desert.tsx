import styles from "./Desert.module.scss";

export const Desert = () => {
  return (
    <div className={styles.desert}>
      <div className={`${styles.desert_tumbleweed} ${styles.tumbleweed}`} />
    </div>
  );
};
