import React from "react";

const CreateUser = ({ username, email, onChange, onCreate }) => {
  return (
    <div>
      <input
        name="username"
        onChange={onChange}
        value={username}
        placeholder="이름"
      />
      <input
        name="email"
        onChange={onChange}
        value={email}
        placeholder="이메일"
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
};
export default CreateUser;
