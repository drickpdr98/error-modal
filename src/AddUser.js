import { useState } from "react";
import styles from "./AddUser.module.css";

import Button from "./Button";
import ErrorModal from "./ErrorModal";
import Card from "./Card";

const intialData = {
  username: "",
  age: "",
  id: "",
};

export default function AddUser({ onGetUser }) {
  const [userData, setUserData] = useState(intialData);

  const [error, setError] = useState();

  const submitChangeHandler = function (event) {
    event.preventDefault();

    if (
      userData.username.trim().length <= 0 ||
      userData.age.trim().length <= 0
    ) {
      setError({
        title: "Invalid",
        message: "Please enter a valid username and age",
      });
      return;
    }

    if (Number(userData.age) < 1) {
      setError({
        title: "Invalid",
        message: "Please enter a valid  age",
      });
      return;
    }

    onGetUser(userData);

    setUserData(intialData);
  };

  const inputChangeHandler = function (inputValue, value) {
    setUserData((prev) => {
      return {
        ...prev,
        [inputValue]: value,
        id: Math.round(Math.random() * 100),
      };
    });
  };

  const errorHandler = function () {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={submitChangeHandler}>
          <label htmlFor="username" className={styles.label}>
            Username
          </label>
          <input
            id="username"
            className={styles.input}
            type="text"
            onChange={(event) =>
              inputChangeHandler("username", event.target.value)
            }
            value={userData.username}
          />
          <label htmlFor="age" className={styles.label}>
            Age
          </label>
          <input
            id="age"
            className={styles.input}
            type="number"
            onChange={(event) => inputChangeHandler("age", event.target.value)}
            value={userData.age}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}
