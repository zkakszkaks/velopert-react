import React, { useContext } from "react";
import { UserDispatch } from "./App";

const User = React.memo(function ({ user }) {
  console.log("User");
  const { id, username, email, active } = user;
  const dispatch = useContext(UserDispatch);

  return (
    <div>
      <b
        onClick={() => dispatch({ type: "TOGGLE_USER", id })}
        style={{
          color: active ? "aqua" : "black",
        }}
      >
        {username}
      </b>{" "}
      ({email})
      <button
        type="button"
        onClick={() => dispatch({ type: "REMOVE_USER", id })}
      >
        삭제
      </button>
    </div>
  );
});

const UserList = ({ users }) => {
  return users.map((user) => <User user={user} key={user.id} />);
};

export default React.memo(
  UserList,
  (prevProps, nextProps) => nextProps.users === prevProps.props
); // 나머지 프롭스가 고정적이라서 비교할 필요없어서 users만 가지고 리렌더링할지 않할지 판단.
// users가 같으면 리렌더링 하지 않고 다르면 리렌더링 하겠다는 의미
