import React, { Fragment, useReducer } from "react";
import styled from "styled-components";
import { BadgeCount } from "./CounterOneReducer";

const Title = styled.h1`
  text-decoration: 2px #333 underline;
`;

const store = {
  count: 0,
};
const rootReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      if (state.count > 0) {
        return { count: state.count - 1 };
      }
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
};

function CounterTwoReducer() {
  const [{ count }, dispatch] = useReducer(rootReducer, store);

  return (
    <Fragment>
      <Title className="hk-text-primary">UseReducer Complex</Title>
      <BadgeCount>{count}</BadgeCount>
      <button
        className="hk-btn hk-btn-dark "
        onClick={() => dispatch({ type: "decrement" })}
      >
        -
      </button>
      <button
        className="hk-btn hk-btn-danger"
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset
      </button>
      <button
        className="hk-btn hk-btn-dark "
        onClick={() => dispatch({ type: "increment" })}
      >
        +
      </button>
    </Fragment>
  );
}

export default CounterTwoReducer;
