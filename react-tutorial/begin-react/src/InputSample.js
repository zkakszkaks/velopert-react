import React, { useState, useRef } from "react";

const InputSample = () => {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });

  const { name, nickname } = inputs;

  const nameInput = useRef();

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onReset = () => {
    setInputs({
      name: "",
      nickanme: "",
    });
    nameInput.current.focus();
  };

  return (
    <div>
      <input
        name="name"
        onChange={onChange}
        value={name}
        placeholder="이름"
        ref={nameInput}
      />
      <input
        name="nickname"
        onChange={onChange}
        value={nickname}
        placeholder="닉네임"
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
};

export default InputSample;
