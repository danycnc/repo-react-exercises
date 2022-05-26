import useGithubUser from './useGithubUser';

const GithubUser = ({ username }) => {
  const { user, setUser } = useGithubUser(username);

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
