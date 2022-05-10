import { Component } from 'react';
import Hello from './Hello';
import Welcome from './Welcome';

class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name={'Giulia'} age={27} />
      </div>
    );
  }
}

export default App;
