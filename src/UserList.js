import styles from "./UserList.module.css";

export default function UserList(props) {
  return (
    <>
      <div className={styles.users}>
        <ul>
          {props.inputs.map((input) => (
            <li key={input.id}>
              {input.username} {input.age}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
