import React from 'react';

class ClickCounter extends React.Component {
  state = {
    count: 0,
  };

  handleClickCounter = () => {
    this.setState((state) => {
      return { count: state.count + 1 };
    });
  };

  render() {
    return (
      <div>
        <h3>This is a click counter</h3>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleClickCounter}>Count</button>
      </div>
    );
  }
}

export default ClickCounter;
