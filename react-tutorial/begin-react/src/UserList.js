import React from "react";

const UserList = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
};

const User = ({ user }) => {
  return (
    <div>
      <b>{user.username}</b> ({user.email})
    </div>
  );
};
export default UserList;
