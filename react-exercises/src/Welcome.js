import React from 'react';

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome, {this.props.name || 'Daniele'}!</p>
      </div>
    );
  }
}

export default Welcome;
