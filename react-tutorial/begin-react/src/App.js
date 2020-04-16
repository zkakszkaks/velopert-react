import React, { useState, useRef, useMemo, useCallback } from "react";
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

  const onToggle = useCallback(
    (id) => {
      setUsers(
        users.map((user) =>
          id === user.id ? { ...user, active: !user.active } : user
        )
      );
    },
    [users]
  );

  const onRemove = useCallback(
    (id) => {
      setUsers(
        users.filter((user) => {
          return user.id !== id;
        })
      );
    },
    [users]
  );

  // 디펜더시를 넣어주지 않으면
  // 최신 상태 값을 참조하는 것이 아니라
  // 컴포넌트가 처음 만들어질때의 상태 값을 참조하는 의도치 않은 일이 일어난다.
  const onCreate = useCallback(() => {
    setUsers([...users, { id: nextId.current++, ...inputs }]);
    setInputs({
      username: "",
      email: "",
    });
  }, [users, inputs]);

  const onReset = useCallback(() => {
    setInputs({
      username: "",
      email: "",
    });
    nameInput.current.focus();
  }, []);

  // onChange함수는 inputs가 바뀔때만 함수가 새로 만들어진다.
  // inputs가 바뀌지 않았다면 이전에 만든 함수를 재사용 하게 된다.
  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputs({ ...inputs, [name]: value });
    },
    [inputs]
  );

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
