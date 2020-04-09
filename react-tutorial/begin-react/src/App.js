import React from "react";
import Hello from "./Hello";
import "./App.css";

function App() {
  const name = "react";
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: 24,
    padding: "1rem",
  };
  return (
    <>
      {/* 어쩌고 저쩌고 */}
      <div
        // 이런 식으로 작성하는 주석은
        style={style}
      >
        안녕하세요. {name}{" "}
      </div>
      <div className="gray-box"></div>
    </>
  );
}

export default App;
