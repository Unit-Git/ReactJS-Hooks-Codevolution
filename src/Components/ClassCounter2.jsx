import React, { Component } from "react";
import { MainCounter } from "../Styled-Components/HookStyled";
import styled from "styled-components";

const Title = styled.h3`
  color: #0dd8d8;
`;

export class ClassCounter2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }

  componentDidUpdate(prevProps, prevState) {
    document.title = `Clicked ${this.state.count} times`;
  }

  render() {
    return (
      <MainCounter>
        <Title>Class Counter</Title>
        <button
          onClick={() =>
            this.setState(prevState => {
              return {
                count: prevState.count + 1,
              };
            })
          }
        >
          Counter title
        </button>
      </MainCounter>
    );
  }
}

export default ClassCounter2;
