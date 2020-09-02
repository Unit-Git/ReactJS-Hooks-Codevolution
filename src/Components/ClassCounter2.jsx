import React, { Component } from "react";
import { MainCounter, Input } from "../Styled-Components/HookStyled";
import styled from "styled-components";

const Title = styled.h3`
  color: #0dd8d8;
`;

export class ClassCounter2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "",
    };
  }

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("Updating");
      document.title = `Clicked ${this.state.count} times`;
    }
  }

  render() {
    return (
      <MainCounter>
        <Title>Class Counter</Title>
        <Input
          border="#0dd8d8"
          type="text"
          value={this.state.name}
          onChange={e => this.setState({ name: e.target.value })}
          fontColor="#0dd8d8"
        />

        <button
          style={{ marginTop: "1rem" }}
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
