import React from "react";

const UserList = ({ users, onRemove, onToggle }) => {
  return users.map((user) => (
    <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />
  ));
};

const User = ({ user, onRemove, onToggle }) => {
  const { username, email, id, active } = user;
  return (
    <div>
      <b
        onClick={() => onToggle(id)}
        style={{
          color: active ? "green" : "black",
          cursor: "pointer",
        }}
      >
        {username}
      </b>
      &nbsp;
      <span>({email})</span>
      <button
        type="button"
        onClick={() => {
          onRemove(id);
        }}
      >
        삭제
      </button>
    </div>
  );
};
export default UserList;
