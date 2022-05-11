import React from 'react';

class ClickTracker extends React.Component {
  state = {
    lastBtn: '',
  };

  handleButtonTracker = (event) => {
    const currentBtn = event.target.name;

    return this.setState({ lastBtn: currentBtn });
  };

  render() {
    return (
      <div>
        <br />
        <button name='button-1' onClick={this.handleButtonTracker}>
          Button 1
        </button>
        <button name='button-2' onClick={this.handleButtonTracker}>
          Button 2
        </button>
        <button name='button-3' onClick={this.handleButtonTracker}>
          Button 3
        </button>
        <h1>{this.state.lastBtn}</h1>
      </div>
    );
  }
}

export default ClickTracker;
