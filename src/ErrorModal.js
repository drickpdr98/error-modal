import styles from "./ErrorModal.module.css";

import Card from "./Card";
import Button from "./Button";

export default function ErrorModal() {
  return (
    <>
      <div className={styles.backdrop}></div>
      <Card className={styles.modal}>
        <header className={styles.header}></header>
        <div className={styles.content}>
          <p>Please enter a valid username</p>
        </div>
        <footer className={styles.actions}>
          <Button>Okay</Button>
        </footer>
      </Card>
    </>
  );
}
