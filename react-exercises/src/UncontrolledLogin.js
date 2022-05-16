import React, { createRef } from 'react';

class UncontrolledLogin extends React.Component {
  _formRef = createRef();
  state = {
    username: '',
    password: '',
    remember: false,
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
  };

  handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const type = event.target.type;
    const checked = event.target.checked;

    this.setState({ [name]: type === 'checkbox' ? checked : value });
  };

  render() {
    return (
      <div>
        <h3>UncontrolledLogin</h3>
        <form ref={this._formRef} onSubmit={this.handleFormSubmit}>
          <div>
            Username
            <input name='username' onChange={this.handleInput}></input>
          </div>
          <div>
            Password
            <input
              name='password'
              onChange={this.handleInput}
              type='password'></input>
          </div>
          <div>
            Remember
            <input
              name='remember'
              onChange={this.handleInput}
              type='checkbox'></input>
          </div>

          <button
            disabled={(!this.state.username || !this.state.password) ?? true}
            onClick={() => this.props.currentState(this.state)}>
            Login
          </button>

          <button type='reset'>Reset</button>
        </form>
      </div>
    );
  }
}

export default UncontrolledLogin;
