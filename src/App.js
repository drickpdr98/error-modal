import { useState } from "react";

import AddUser from "./AddUser";
import UserList from "./UserList";

function App() {
  const [userInputData, setUserInputData] = useState([]);

  const userInput = function (input) {
    setUserInputData((prev) => [...prev, input]);
  };

  return (
    <div className="App">
      <AddUser onGetUser={userInput} />
      <UserList inputs={userInputData} />
    </div>
  );
}

export default App;
