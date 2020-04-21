import React, { useReducer, useRef, useMemo, useCallback } from "react";
import CreateUser from "./CreateUser";
import UserList from "./UserList";

const countActiveUsers = (users) => {
  console.log("활성 사용자 수를 세는중...");
  return users.filter((user) => user.active).length;
};
// 첫번째. App 컴포넌트에서 사용할 초기 상태를 컴포넌트 밖에 선언해 준다.

/**
 * 어떨때 useReducer를 써야하고 useState를 써야 할까.
 * 컴포넌트에서 관리하는 값이 딱 하나고 값이 단순한 숫자 문자열 또는 불리언 값이라면은
 * 그런 경우에는 확실하게 useState로 관리하는게 편함.
 * 그런데 만약에 컴포넌트에서 관리하는 값이 여러개가 되어서
 * 상태의 구조가 복잡해 지거나
 * user를 배열에 뭘 추가해야할때도 있고 없애야 할때도 있고 그안에 있는 무언가를 바꿔야 할때도 있고
 * 그럴때는 useReducer를 편해 질 때도 있음.
 * useState, useReducer를 사용해 보고 마음에 드는 방식을 사용하면 됨.
 *
 * 세터를 한 함수에서 여러번 사용하는 일이 발생한다면 이때 부터 useReducer를 쓸가 고민을 시작함
 * setUsers(users => users.concat(user));
 * setInputs({
 *  username: '',
 *  email: ''
 * })
 *
 * 간단한거는 useState사용 좀 복잡하겠다 싶으면 useReducer사용하면됨.
 *
 *
 */
const initialState = {
  inputs: {
    username: "",
    email: "",
  },
  users: [
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: true,
    },
    {
      id: 2,
      username: "tester",
      emai: "tester@gmail.com",
      active: false,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: false,
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value,
        },
      };
    case "CREATE_USER":
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user),
      };
    case "TOGGLE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, active: !user.active } : user
        ),
      };
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };
    default:
      throw new Error("Unhandled action");
  }
}
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;
  const nextId = useRef(4);
  const { username, email } = state.inputs;

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({
      type: "CHANGE_INPUT",
      name,
      value,
    });
  }, []);

  const onCreate = useCallback(() => {
    dispatch({
      type: "CREATE_USER",
      user: {
        id: nextId.current,
        username,
        email,
      },
    });
    nextId.current += 1;
  }, [username, email]);

  const onToggle = useCallback((id) => {
    dispatch({
      type: "TOGGLE_USER",
      id,
    });
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({
      type: "REMOVE_USER",
      id,
    });
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
      <div>활성 사용자 수: {count}</div>
    </>
  );
};

export default App;
