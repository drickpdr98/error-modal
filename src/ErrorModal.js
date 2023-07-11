import styles from "./ErrorModal.module.css";

import Card from "./Card";
import Button from "./Button";

export default function ErrorModal({ title, message, onConfirm }) {
  return (
    <>
      <div className={styles.backdrop} onClick={onConfirm}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>{title}</header>
        <div className={styles.content}>
          <p>{message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={onConfirm}>Okay</Button>
        </footer>
      </Card>
    </>
  );
}
