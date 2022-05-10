import React from 'react';

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome, {this.props.name || 'Daniele'}!</p>
        <p>Your age is {this.props.age}</p>
      </div>
    );
  }
}

export default Welcome;
