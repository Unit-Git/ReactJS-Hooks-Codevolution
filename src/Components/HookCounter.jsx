import React, { useState } from "react";
import { MainCounter } from "../Styled-Components/HookStyled.js";
import styled from "styled-components";

const HookButtonPlus = styled.button`
  padding: 0.8rem 1rem;
  cursor: pointer;
  color: ${(props) => (props.sub === false ? "#f2f2f2" : "#f3f3f3")};
  border: 2px solid ${(props) => (props.sub === false ? "#c90e37" : "#333")};
  background-color: ${(props) => (props.sub === false ? "#c90e37" : "#343434")};
  transition: 0.2s all ease-in-out;
  outline: none;

  &:hover {
    border: 2px solid
      ${(props) => (props.sub === false ? "#c90e37" : "#403f3f")};
    background-color: ${(props) =>
      props.sub === false ? "#c90e37" : "#403f3f"};
    color: #ececec;
    box-shadow: 0 0 0.2rem hsla(19, 84%, 0%, 0.72);
  }

  /* &:active,
  &:focus {
    border: 3px solid red;
  } */
`;

function HookCounter(props) {
  const [sub, setCount] = useState(false);

  return (
    <MainCounter flex={props.flexBasis}>
      <h2 style={{ color: sub === false ? "#c90e37" : "#333" }}>
        {sub === false ? "Subscribe now" : "You Was Subscription"}
      </h2>
      <HookButtonPlus
        sub={sub}
        onClick={() => {
          if (sub === false) {
            setCount(true);
          }

          if (sub === true) {
            setCount(false);
          }
        }}
      >
        {sub === false ? "Subscribe" : "Unsubcrbe"}
      </HookButtonPlus>
    </MainCounter>
  );
}

export default HookCounter;
