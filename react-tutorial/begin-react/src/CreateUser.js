import React from "react";

const CreateUser = ({
  username,
  email,
  onChange,
  onCreate,
  onReset,
  nameInput,
}) => {
  return (
    <div>
      <input
        name="username"
        onChange={onChange}
        value={username}
        placeholder="username"
        ref={nameInput}
      />
      <input
        name="email"
        onChange={onChange}
        value={email}
        placeholder="email"
      />
      <button onClick={onCreate}>등록</button>
      <button onClick={onReset}>초기화</button>
    </div>
  );
};
export default CreateUser;
