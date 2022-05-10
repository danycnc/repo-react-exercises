import { Component } from 'react';
import Hello from './Hello';
import Welcome from './Welcome';

class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name={<strong>Giulia</strong>} />
      </div>
    );
  }
}

export default App;
