import { useState } from "react";

import AddUser from "./AddUser";
import UserList from "./UserList";

function App() {
  const [uInput, setUInput] = useState([]);

  const userInput = function (input) {};

  return (
    <div className="App">
      <AddUser onGetUser={userInput} />
      <UserList inputs={uInput} />
    </div>
  );
}

export default App;
