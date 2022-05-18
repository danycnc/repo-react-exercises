import React, { createRef } from 'react';

class UncontrolledLogin extends React.Component {
  _refForm = createRef();

  state = {
    username: '',
    password: '',
    enable: false,
  };

  enableButton = () => {
    const username = this._refForm.current.elements.username.value;
    const password = this._refForm.current.elements.password.value;

    this.setState({
      username: username,
      password: password,
      enable: !!username && !!password,
    });
  };

  submitForm = (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const remember = event.target.elements.remember.cheked;

    return console.log(username, password, remember);
  };

  render() {
    return (
      <div>
        <form ref={this._refForm} onSubmit={this.submitForm}>
          Username
          <input name='username' />
          <br />
          Password
          <input name='password' onChange={this.enableButton} type='password' />
          <br />
          Remember
          <input name='remember' onChange={this.enableButton} type='checkbox' />
          <br />
          <button
            disabled={!this.state.enable}
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
