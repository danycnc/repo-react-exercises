import useGithubUser from './useGithubUser';

const GithubUser = ({ username }) => {
  const { data, loading, error } = useGithubUser(username);

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error</h1>}
      {data && (
        <h1>
          User searched:{' '}
          {`Name: ${data.name} - Login: ${data.login} - Subscribed: ${data.created_at}`}
        </h1>
      )}
    </div>
  );
};

export default GithubUser;
