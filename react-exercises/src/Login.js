import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [data, setData] = useState({
    username: '',
    password: '',
    remember: false,
  });

  const handleInput = (event) => {
    const { name, type, value, checked } = event.target;

    setData((data) => {
      return {
        ...data,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  };

  return (
    <div>
      <div>
        Username
        <input
          onChange={handleInput}
          name='username'
          value={data.username}></input>
      </div>
      <div>
        Password
        <input
          onChange={handleInput}
          name='password'
          value={data.password}
          type='password'></input>
      </div>
      <div>
        Remember
        <input
          onChange={handleInput}
          name='remember'
          value={data.remember}
          type='checkbox'></input>
      </div>

      <button
        disabled={(!data.username || !data.password) ?? true}
        onClick={() => onLogin(data)}>
        Login
      </button>
    </div>
  );
};

export default Login;
