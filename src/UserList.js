import styles from "./UserList.module.css";

import Card from "./Card";

export default function UserList(props) {
  return (
    <Card className={styles.users}>
      <ul>
        {props.inputs.map((input) => (
          <li key={input.id}>
            {input.username} {input.age}
          </li>
        ))}
      </ul>
    </Card>
  );
}
