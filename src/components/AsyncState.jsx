import React, { Component } from 'react';

class AsyncState extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  render() {
    return <div>{this.state.counter}</div>;
  }

  componentDidMount() {
    this.setState((prevState, props) => ({ counter: prevState.counter + 1 }));
    this.setState((prevState, props) => ({ counter: prevState.counter + 1 }));
    this.setState((prevState, props) => ({ counter: prevState.counter + 1 }));
  }
}

export default AsyncState;
