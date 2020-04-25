import React, { Component } from "react";

class Counter extends Component {
  // constructor(props) {
  //   super(props);
  //   this.handleIncrease = this.handleIncrease.bind(this);
  //   this.handleDecrease = this.handleDecrease.bind(this);
  // }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     counter: 0,
  //   };
  // }

  state = {
    counter: 0,
  };
  handleIncrease = () => {
    console.log(this);
    console.log("increase");
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  handleDecrease = () => {
    console.log("decrease");
    this.setState({
      counter: this.state.counter - 1,
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
      </div>
    );
  }
}
export default Counter;
// function reducer(state, actcion) {
//   switch (actcion.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     default:
//       throw new Error("Unhandled action");
//   }
// }
// const Counter = () => {
//   // dispatch: 보내다. 액션을 발생시킨다. 라는 의미를 가지고 있다.
//   const [number, dispatch] = useReducer(reducer, 0);
//   const onIncrease = () => {
//     dispatch({
//       type: "INCREMENT",
//     });
//   };

//   const onDecrease = () => {
//     dispatch({
//       type: "DECREMENT",
//     });
//   };
//   return (
//     <div>
//       <h1>{number}</h1>
//       <button onClick={onIncrease}>+1</button>
//       <button onClick={onDecrease}>-1</button>
//     </div>
//   );
// };
