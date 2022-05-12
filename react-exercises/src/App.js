import { Component } from 'react';
import ClickCounter from './ClickCounter';
import ClickTracker from './ClickTracker';
import Counter from './Counter';
import Hello from './Hello';
import InteractiveWelcome from './InteractiveWelcome';
import Login from './Login';
import Welcome from './Welcome';

class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name='Jonh' age={8} />
        <Counter initialValue={5} increment={3} interval={500} />
        <ClickCounter />
        <ClickTracker />
        <InteractiveWelcome />
        <Login />
      </div>
    );
  }
}

export default App;
