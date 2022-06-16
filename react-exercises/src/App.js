import { Component } from 'react';
import ClickCounter from './ClickCounter';
import ClickTracker from './ClickTracker';
import Container from './Container';
import Counter from './Counter';
import Hello from './Hello';
import InteractiveWelcome from './InteractiveWelcome';
import Login from './Login';
import TodoList from './TodoList';
import UncontrolledLogin from './UncontrolledLogin';
import Welcome from './Welcome';

const onLogin = (state) => {
  return console.log(state);
};

class App extends Component {
  render() {
    return (
      <div>
        <TodoList
          render={(items, reset) => {
            const list = items.map((todo, index) => (
              <li key={todo + index}>
                {todo}
                <button onClick={() => reset(index)}>Delete</button>
              </li>
            ));
            return (
              <div>
                <ul>{list}</ul>
              </div>
            );
          }}></TodoList>
      </div>
    );
  }
}

export default App;
