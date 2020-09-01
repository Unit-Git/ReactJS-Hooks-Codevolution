import React, { Component } from "react";

import { MainCounter } from "../Styled-Components/HookStyled";
import styled from "styled-components";

const ButtonPlus = styled.button`
  padding: 0.8rem 1rem;
  cursor: pointer;
  color: #00adbd;
  border: 2px solid #00adbd;
  transition: 0.2s all ease-in-out;

  &:hover {
    border: 2px solid #00adbd;
    background-color: #00adbd;
    color: #ececec;
    box-shadow: 0 0 0.2rem hsla(19, 84%, 0%, 0.72);
  }
`;

class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <MainCounter>
        <h2 style={{ color: "#00adbd" }}>Class Counter</h2>
        <ButtonPlus onClick={this.increment}>
          Count {this.state.count}
        </ButtonPlus>
      </MainCounter>
    );
  }
}

export default ClassCounter;
