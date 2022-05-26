import { Component } from 'react';
import ClickCounter from './ClickCounter';
import ClickTracker from './ClickTracker';
import Counter from './Counter';
import GithubUser from './GithubUser';
import Hello from './Hello';
import InteractiveWelcome from './InteractiveWelcome';
import Login from './Login';
import Sum from './Sum';
import TodoList from './TodoList';
import UncontrolledLogin from './UncontrolledLogin';
import Welcome from './Welcome';

const onLogin = (state) => {
  return console.log(state);
};

const onCounterChange = (currentValue) => {
  console.log(`Currunt valus is ${currentValue}`);
};

class App extends Component {
  render() {
    return (
      <div>
        <GithubUser username={'danycnc'} />
      </div>
    );
  }
}

export default App;
