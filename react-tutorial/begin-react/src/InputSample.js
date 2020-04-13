import React, { useState } from "react";

const InputSample = () => {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };

  const onReset = () => {
    setText("");
  };
  return (
    <>
      <div>
        <input value={text} onChange={onChange} />
        <button onClick={onReset}>초기화</button>
      </div>
      <div>
        <b>값: </b>
        {text}
      </div>
    </>
  );
};

export default InputSample;
