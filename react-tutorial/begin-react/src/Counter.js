import React, { useReducer } from "react";

function reducer(state, actcion) {
  switch (actcion.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      throw new Error("Unhandled action");
  }
}
const Counter = () => {
  // dispatch: 보내다. 액션을 발생시킨다. 라는 의미를 가지고 있다.
  const [number, dispatch] = useReducer(reducer, 0);
  const onIncrease = () => {
    dispatch({
      type: "INCREMENT",
    });
  };

  const onDecrease = () => {
    dispatch({
      type: "DECREMENT",
    });
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
};

export default Counter;
