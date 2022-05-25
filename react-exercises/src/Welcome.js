import React from 'react';
import Age from './Age';

const Welcome = ({ name, age }) => {
  return (
    <div className='welcome'>
      <p>Welcome, {name || 'Daniele'}!</p>

      {/* {this.props.name === 'Jonh' &&
    this.props.age > 18 &&
    this.props.age < 65 && <Age age={this.props.age} />} */}

      <Age age={age} />
    </div>
  );
};

export default Welcome;
