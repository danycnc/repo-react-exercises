import { useEffect, useState } from 'react';

const GithubUser = ({ username }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div>
      <h1>User searched: {user.name}</h1>
      <h2>Login: {user.login}</h2>
      <h2>Subscribed: {user.created_at}</h2>
      <h2>Link: {user.html_url}</h2>
    </div>
  );
};

export default GithubUser;
