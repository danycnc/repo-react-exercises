import { useEffect, useState } from 'react';
import GithubUser from './GithubUser';
import { Link, Outlet } from 'react-router-dom';

const GithubUserList = () => {
  const [user, setUser] = useState('');

  const [usernames, setUsernames] = useState([]);

  const handlInput = (event) => {
    setUser(event.target.value);
  };

  const handleClick = () => {
    setUsernames([...usernames, user]);
  };

  return (
    <div>
      <input name='user' value={user} onChange={handlInput}></input>
      <button onClick={handleClick}>Add user</button>
      {usernames.map((user, index) => (
        <li key={user + index}>
          {/* <GithubUser username={user}></GithubUser> */}
          <Link to={`/users/${user}`}>{user}</Link>
        </li>
      ))}

      <Outlet />
    </div>
  );
};

export default GithubUserList;
