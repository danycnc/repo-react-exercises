import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((response) => response.json());

const useGithubUser = (username) => {
  const { data, error, mutate } = useSWR(
    username ? `https://api.github.com/users/${username}` : null,
    fetcher
  );

  const handleRefreshUser = () => {
    mutate();
  };

  return {
    loading: !data && !error,
    error,
    data,
    onRefresh: handleRefreshUser,
  };
};

export default useGithubUser;
