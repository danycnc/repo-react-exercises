import React, { createRef } from 'react';
class UncontrolledLogin extends React.Component {
  _formRef = createRef();
  state = {
    username: '',
    password: '',
    remember: false,
    disabled: true,
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const remember = event.target.elements.remember.checked;

    this.setState({
      username: username,
      password: password,
      remember: remember,
      disabled: username ? false : true,
    });
  };

  render() {
    const { username, password } = this.state;
    const isEnable = username.length > 0 && password.length > 0;
    return (
      <div>
        <h3>UncontrolledLogin</h3>
        <form ref={this._formRef} onSubmit={this.handleFormSubmit}>
          <div>
            Username
            <input name='username'></input>
          </div>
          <div>
            Password
            <input name='password' type='password'></input>
          </div>
          <div>
            Remember
            <input name='remember' type='checkbox'></input>
          </div>

          <button disabled={isEnable}>Login</button>

          <button type='reset'>Reset</button>
        </form>
      </div>
    );
  }
}

export default UncontrolledLogin;
