import React, { useState, useRef } from "react";
import CreateUser from "./CreateUser";
import UserList from "./UserList";
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

  const nextId = useRef(4); // 컴포넌트가 리렌더링 되도 기억된다.

  const onCreate = () => {
    console.log(nextId.current); // 4

    setUsers([...users, { id: nextId.current, username, email }]);
    setInputs({
      username: "",
      email: "",
    });

    nextId.current += 1; // 값을변경한다. 값이 바뀌어도 컴포넌트가 리렌더링 되지 않는다.
  };

  const onChange = (e) => {
    const { name, value } = e.target;

    setInputs({ ...inputs, [name]: value });
  };
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onCreate={onCreate}
        onChange={onChange}
      />
      <UserList users={users} />
    </>
  );
};

export default App;
