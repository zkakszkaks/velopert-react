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
      active: true,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: false,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: false,
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

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
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
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </div>
  );
};

export default App;
