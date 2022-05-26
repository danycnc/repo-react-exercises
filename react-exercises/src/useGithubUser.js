import { useEffect, useState } from 'react';

const useGithubUser = (username) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  return { user, setUser };
};

export default useGithubUser;
