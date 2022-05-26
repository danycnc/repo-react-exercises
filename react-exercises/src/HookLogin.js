import useInput from './useInput';

const HookLogin = () => {
  const { data, handleInput } = useInput();

  return (
    <div>
      <input
        name='username'
        value={data.username}
        onChange={handleInput}></input>
      <input
        name='password'
        type='password'
        value={data.password}
        onChange={handleInput}></input>
    </div>
  );
};

export default HookLogin;
