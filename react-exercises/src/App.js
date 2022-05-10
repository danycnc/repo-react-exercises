import { Component } from 'react';
import Hello from './Hello';
import Welcome from './Welcome';

class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name='Jonh' age={8} />
      </div>
    );
  }
}

export default App;
