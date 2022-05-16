import React from 'react';
class Login extends React.Component {
  state = {
    username: '',
    password: '',
    remember: false,
  };

  handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const type = event.target.type;
    const checked = event.target.checked;

    this.setState({ [name]: type === 'checkbox' ? checked : value });
  };

  handleReset = () => {
    this.setState({
      username: '',
      remember: false,
      password: '',
    });
  };

  render() {
    return (
      <div>
        <div>
          Username
          <input
            onChange={this.handleInput}
            name='username'
            value={this.state.username}></input>
        </div>
        <div>
          Password
          <input
            onChange={this.handleInput}
            name='password'
            value={this.state.password}
            type='password'></input>
        </div>
        <div>
          Remember
          <input
            onChange={this.handleInput}
            name='remember'
            checked={this.state.remember}
            type='checkbox'></input>
        </div>

        <button
          disabled={(!this.state.username || !this.state.password) ?? true}>
          Login
        </button>
      </div>
    );
  }
}

export default Login;
