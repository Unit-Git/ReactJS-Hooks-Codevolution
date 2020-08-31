import React, { useState } from "react";
import { MainCounter, Button } from "../Styled-Components/HookStyled.js";

function HookCounteTwo(props) {
  const initCount = 0;

  const [count, setCount] = useState(initCount);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <MainCounter flex={props.flexBasis}>
      <h2 style={{ color: "#333" }}>Count {count}</h2>
      <div>
        <Button
          onClick={() => {
            if (count > 0) setCount(count - 1);
          }}
        >
          -
        </Button>
        <Button onClick={() => setCount(initCount)}>Reset</Button>
        <Button onClick={() => setCount(count + 1)}>+</Button>
        <Button onClick={incrementFive}> + 5</Button>
      </div>
    </MainCounter>
  );
}

export default HookCounteTwo;
