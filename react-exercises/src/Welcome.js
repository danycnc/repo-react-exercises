import React from 'react';
import Age from './Age';

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome, {this.props.name || 'Daniele'}!</p>
        {console.log(this.props.name)}

        {/* {this.props.name === 'Jonh' &&
          this.props.age > 18 &&
          this.props.age < 65 && <Age age={this.props.age} />} */}

        <Age age={this.props.age} />
      </div>
    );
  }
}

export default Welcome;
