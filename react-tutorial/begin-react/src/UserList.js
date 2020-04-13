import React from "react";

const UserList = () => {
  const users = [
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
  ];

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
