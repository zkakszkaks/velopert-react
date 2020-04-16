import React, { useEffect } from "react";

const User = ({ user, onToggle, onRemove }) => {
  const { id, username, email, active } = user;

  useEffect(() => {
    console.log("user값이 설정 됨", user);
    return () => {
      console.log("user값이 바뀌기 전", user);
    };
  }, [user]);

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
};

const UserList = ({ users, onToggle, onRemove }) => {
  return users.map((user) => (
    <User user={user} key={user.id} onToggle={onToggle} onRemove={onRemove} />
  ));
};

export default UserList;
