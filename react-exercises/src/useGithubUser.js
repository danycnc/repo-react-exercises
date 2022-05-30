import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((response) => response.json());

const useGithubUser = (username) => {
  const { data, error } = useSWR(
    username ? `https://api.github.com/users/${username}` : null,
    fetcher
  );

  return { loading: !data && !error, error, data };
};

export default useGithubUser;
