import { useState } from "react";

import AddUser from "./AddUser";
import UserList from "./UserList";

function App() {
  const [uInput, setUInput] = useState([]);

  const userInput = function (input) {
    setUInput((prev) => [...prev, input]);
  };

  return (
    <div className="App">
      <AddUser onGetUser={userInput} />
      {uInput && <UserList inputs={uInput} />}
    </div>
  );
}

export default App;
