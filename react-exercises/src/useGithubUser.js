import { useEffect, useState } from 'react';

const useGithubUser = (username) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { loading, error, user };
};

export default useGithubUser;
