import { Component } from 'react';
import Counter from './Counter';
import Hello from './Hello';
import Welcome from './Welcome';

class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name='Jonh' age={8} />
        <Counter initialValue={5} increment={3} interval={500} />
      </div>
    );
  }
}

export default App;
