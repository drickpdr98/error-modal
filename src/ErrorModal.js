import styles from "./ErrorModal.module.css";

export default function ErrorModal() {
  return (
    <>
      <div className={styles.backdrop}></div>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>Username cannot be empty</h2>
          <p className={styles.contents}>Please enter a valid username</p>
        </div>
      </div>
    </>
  );
}
