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
    <>
      <input
        name="username"
        placeholder="계정명"
        value={username}
        onChange={onChange}
        ref={nameInput}
      />
      <input
        name="email"
        placeholder="이메일"
        value={email}
        onChange={onChange}
      />
      <button type="button" onClick={onCreate}>
        등록
      </button>
      <button type="reset" onClick={onReset}>
        초기화
      </button>
    </>
  );
};

export default CreateUser;
