import React, { Fragment, useReducer, useState } from "react";
import styled from "styled-components";

const Title = styled.h1`
  text-decoration: 2px #333 underline;
`;

const BadgeCount = styled.div`
  padding: 0.3rem 0.4rem;
  width: max-content;
  background-color: #2266fa;
  border-radius: 4px;
  color: #f2f2f2;
  margin-inline: 0.2rem;
  margin-block: 1rem;
`;

const initState = 0;
const rootReducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      if (state > 0) {
        return state - 1;
      }
    case "reset":
      return initState;
    default:
      return state;
  }
};

function CounterOneReducer() {
  const [count, dispatch] = useReducer(rootReducer, initState);

  return (
    <Fragment>
      <Title>UseReducer</Title>
      <div>
        <BadgeCount>{count}</BadgeCount>
      </div>
      <div>
        <button
          onClick={() => dispatch("decrement")}
          className="hook-btn hook-btn-primary"
        >
          -
        </button>
        <button
          onClick={() => dispatch("reset")}
          className={`hook-btn hook-btn-primary`}
        >
          Reset
        </button>
        <button
          onClick={() => dispatch("increment")}
          className="hook-btn hook-btn-primary"
        >
          +
        </button>
      </div>
    </Fragment>
  );
}

export default CounterOneReducer;
