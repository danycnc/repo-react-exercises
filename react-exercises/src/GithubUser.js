import useGithubUser from './useGithubUser';

const GithubUser = ({ username }) => {
  const { user, loading, error } = useGithubUser(username);

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error</h1>}
      {user && (
        <h1>
          User searched:{' '}
          {`Name: ${user.name} - Login: ${user.login} - Subscribed: ${user.created_at}`}
        </h1>
      )}
    </div>
  );
};

export default GithubUser;
