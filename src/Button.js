import styles from "./Button.module.css";

export default function Button({ type, onClick, children }) {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
