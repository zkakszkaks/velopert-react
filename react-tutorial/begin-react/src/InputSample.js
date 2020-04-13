import React, { useState, useRef } from "react";

const InputSample = () => {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onReset = () => {
    setInputs({
      name: "",
      nickname: "",
    });
    nameInput.current.focus();
  };

  const { name, nickname } = inputs;

  const nameInput = useRef();
  return (
    <>
      <input name="name" onChange={onChange} value={name} ref={nameInput} />
      <input name="nickname" onChange={onChange} value={nickname} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값:</b>
        {name} ({nickname})
      </div>
    </>
  );
};
export default InputSample;
