import React, { useEffect } from "react";

const User = React.memo(function ({ user, onToggle, onRemove }) {
  console.log("User");
  const { id, username, email, active } = user;

  return (
    <div>
      <b
        onClick={() => onToggle(id)}
        style={{
          color: active ? "aqua" : "black",
        }}
      >
        {username}
      </b>{" "}
      ({email})
      <button type="button" onClick={() => onRemove(id)}>
        삭제
      </button>
    </div>
  );
});

const UserList = ({ users, onToggle, onRemove }) => {
  return users.map((user) => (
    <User user={user} key={user.id} onToggle={onToggle} onRemove={onRemove} />
  ));
};

export default React.memo(
  UserList,
  (prevProps, nextProps) => nextProps.users === prevProps.props
); // 나머지 프롭스가 고정적이라서 비교할 필요없어서 users만 가지고 리렌더링할지 않할지 판단.
// users가 같으면 리렌더링 하지 않고 다르면 리렌더링 하겠다는 의미
