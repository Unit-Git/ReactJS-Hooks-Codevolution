import React, { useState } from "react";
import { MainCounter } from "../Styled-Components/HookStyled.js";
import styled from "styled-components";

const Input = styled.input`
  padding: 0.4rem 0.5rem;
  outline: none;
  border: 2px solid hsl(90, 1%, 31%);
  background-color: transparent;

  &:focus {
    border: 2px solid #333;
    box-shadow: 0 0 0.2rem #333;
  }
`;

const FormHook = styled.form`
  display: flex;
  flex-direction: column;

  & > input {
    margin-top: 0.8rem;
  }
`;

function HookCounter3(props) {
  const dataUnit = {
    name: "",
    distric: "",
  };
  const [unit, setUnits] = useState(dataUnit);

  return (
    <MainCounter flex={props.flexBasis}>
      <h2>Hooks 3</h2>
      <div>
        <FormHook action="">
          <Input
            placeholder="Unit Name"
            onChange={e => setUnits({ ...unit, name: e.target.value })}
          />
          <Input
            placeholder="District"
            onChange={e => setUnits({ ...unit, distric: e.target.value })}
          />
        </FormHook>
      </div>
      <div>
        <h3>Unit : {unit.name}</h3>
        <h3>District : {unit.distric}</h3>
        <hr />
        <h4>{JSON.stringify(unit)}</h4>
      </div>
    </MainCounter>
  );
}

export default HookCounter3;
