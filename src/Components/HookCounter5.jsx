import React, { useState, useEffect } from "react";
import { MainCounter, Input } from "../Styled-Components/HookStyled";
import styled from "styled-components";

const HookButton5 = styled.button`
  padding: 0.8rem 1.2rem;
  cursor: pointer;
  color: #f2f2f2;
  font-size: 18px;
  border: none;

  background-color: #07084d;
  transition: 0.2s all ease-in-out;
  outline: none;

  &:focus,
  &:active {
    box-shadow: 0 0 0.25rem #07084d;
  }
`;

function HookCounter5() {
  const [count, setCount] = useState(4);
  const [name, setName] = useState("");

  const handlerCounter = () => {
    setCount(prevCount => prevCount + 1);
  };

  useEffect(() => {
    console.log("Updating Document title");
    document.title = `Hook Count is ${count}`;
  }, [count]);

  return (
    <MainCounter>
      <h3 style={{ color: "#07084d" }}>Working With UseEffect after render</h3>
      <Input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        fontColor="#07084d"
      ></Input>
      <br />
      <HookButton5 onClick={handlerCounter}>Counter Hook </HookButton5>
      <h4>Your Count is {count}</h4>
    </MainCounter>
  );
}

export default HookCounter5;
