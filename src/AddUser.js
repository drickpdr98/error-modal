import { useState } from "react";
import styles from "./AddUser.module.css";
import Button from "./Button";

const intialData = {
  username: "Dravin",
  age: "23",
};

export default function AddUser({ onGetUser }) {
  const [userData, setUserData] = useState(intialData);

  const submitChangeHandler = function (event) {
    event.preventDefault();
    console.log(userData);

    // onGetUser();
    setUserData(intialData);
  };

  const inputChangeHandler = function (inputValue, value) {
    setUserData((prev) => {
      return { ...prev, inputValue: value };
    });
  };

  return (
    <form onSubmit={submitChangeHandler}>
      <div>
        <label className={styles.label}>Username</label>
        <input
          id="username"
          className={styles.input}
          type="text"
          onChange={(event) =>
            inputChangeHandler("username", event.target.value)
          }
          // value={userData.username}
        />
      </div>
      <div>
        <label className={styles.label}>Age</label>
        <input
          id="age"
          className={styles.input}
          type="number"
          onChange={(event) => inputChangeHandler("age", event.target.value)}
          // value={userData.age}
        />
      </div>
      <Button type="submit">Add User</Button>
    </form>
  );
}
