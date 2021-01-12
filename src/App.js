import React from "react";

class App extends React.Component {
  constructor(lalla) {
    super(lalla);
    console.log("Constructor called");
  }
  state = {
    count: 0,
  };
  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState({ count: this.state.count - 1 });
  };

  componentDidMount() {
    console.log("first componenet rendered");
  }

  componentDidUpdate() {
    console.log("I'm just updated!");
  }

  componentWillUnmount() {
    console.log("Good bye, Cruel world");
  }

  render() {
    console.log("I'm rendering");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
