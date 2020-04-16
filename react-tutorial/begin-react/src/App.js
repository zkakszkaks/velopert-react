import React, { useState, useRef, useMemo } from "react";
import CreateUser from "./CreateUser";
import UserList from "./UserList";

const countActiveUsers = (users) => {
  console.log("활성 사용자 수를 세는중...");
  return users.filter((user) => user.active).length;
};
const App = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  const { username, email } = inputs;

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: true,
    },
    {
      id: 2,
      username: "gyseo",
      email: "gyseo20@gmail.com",
      active: false,
    },
    {
      id: 3,
      username: "단이",
      email: "단이@gmail.com",
      active: false,
    },
  ]);

  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        id === user.id ? { ...user, active: !user.active } : user
      )
    );
  };

  const onRemove = (id) => {
    setUsers(
      users.filter((user) => {
        return user.id !== id;
      })
    );
  };

  const onCreate = () => {
    setUsers([...users, { id: nextId.current++, ...inputs }]);
    setInputs({
      username: "",
      email: "",
    });
  };

  const onReset = () => {
    setInputs({
      username: "",
      email: "",
    });
    nameInput.current.focus();
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const nextId = useRef(4);

  const nameInput = useRef();

  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onCreate={onCreate}
        onReset={onReset}
        onChange={onChange}
        nameInput={nameInput}
      />
      <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
      <div>활성 사용자 수: {count}</div>
    </>
  );
};

export default App;
