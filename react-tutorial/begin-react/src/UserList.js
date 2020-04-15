import React from "react";

const UserList = ({ users, onToggle, onRemove }) => {
  console.log(users);
  return users.map((user) => (
    <User user={user} key={user.id} onToggle={onToggle} onRemove={onRemove} />
  ));
};

const User = ({ user, onToggle, onRemove }) => {
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
};

export default UserList;
