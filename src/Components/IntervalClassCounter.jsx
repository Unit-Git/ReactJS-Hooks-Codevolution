import React, { Component } from "react";

class IntervalClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    // this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    // clearInterval(this.interval);
  }

  tick = () =>
    this.setState(prevState => {
      return {
        count: prevState.count + 1,
      };
    });

  render() {
    return (
      <>
        <div className="hook-card hook-card-primary">
          <h1>Interval Class Counter</h1>
          <h3>The Count is : {this.state.count}</h3>
        </div>
      </>
    );
  }
}

export default IntervalClassCounter;
