import React, { useState } from "react";

function Counter() {
  // number 라는 상태를 만들건데 상태의 기본값은 0을 하겠다.
  // setNumber는 상태를 바꿔주는 함수
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber((prevNumer) => prevNumer + 1);
  };

  const onDecrease = () => {
    setNumber((prevNumer) => prevNumer - 1);
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
