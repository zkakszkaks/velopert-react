import React, { useState, useRef } from "react";
import CreateUser from "./CreateUser";
import UserList from "./UserList";
const App = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmal.com",
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
    },
  ]);

  const onChange = (e) => {
    const { name, value } = e.target;

    setInputs({ ...inputs, [name]: value });
  };

  const onCreate = () => {
    setUsers([...users, { id: nextId.current++, ...inputs }]);
    setInputs({
      username: "",
      email: "",
    });
  };

  const { username, email } = inputs;
  const nameInput = useRef();
  const nextId = useRef(4);

  const onReset = () => {
    setInputs({ username: "", email: "" });
    nameInput.current.focus();
  };
  return (
    <div>
      <CreateUser
        onCreate={onCreate}
        onChange={onChange}
        username={username}
        email={email}
        onReset={onReset}
        nameInput={nameInput}
      />
      <UserList users={users} />
    </div>
  );
};

export default App;
