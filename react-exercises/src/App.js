import { Component } from 'react';
import CarDetails from './CarDetails';
import ClickCounter from './ClickCounter';
import ClickTracker from './ClickTracker';
import Counter from './Counter';
import FilteredList from './FilteredList';
import GithubUser from './GithubUser';
import GithubUserList from './GithubUserList';
import Hello from './Hello';
import HookLogin from './HookLogin';
import InteractiveWelcome from './InteractiveWelcome';
import Login from './Login';
import Sum from './Sum';
import TodoList from './TodoList';
import UncontrolledLogin from './UncontrolledLogin';
import Welcome from './Welcome';

const initialData = {
  model: 'Audi',
  year: '2021',
  color: 'black',
};

class App extends Component {
  render() {
    return (
      <div>
        <CarDetails initialData={initialData} />
      </div>
    );
  }
}

export default App;
