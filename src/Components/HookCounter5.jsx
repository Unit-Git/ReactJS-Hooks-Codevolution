import React, { useState, useEffect } from "react";
import { MainCounter } from "../Styled-Components/HookStyled";

function HookCounter5() {
  const [count, setCount] = useState(4);

  const handlerCounter = () => {
    setCount(prevCount => prevCount + 1);
  };

  useEffect(() => {
    document.title = `Hook Count is ${count}`;
  });

  return (
    <MainCounter>
      <h3 style={{ color: "#07084d" }}>Working With UseEffect after render</h3>
      <button style={{ cursor: "pointer" }} onClick={handlerCounter}>
        Counter Hook{" "}
      </button>
      <h4>Your Count is {count}</h4>
    </MainCounter>
  );
}

export default HookCounter5;
