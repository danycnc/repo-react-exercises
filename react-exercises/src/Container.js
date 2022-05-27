import React from 'react';
class Container extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.title}</div>
        <div className='container-content'>{this.props.children}</div>
      </div>
    );
  }
}

export default Container;
