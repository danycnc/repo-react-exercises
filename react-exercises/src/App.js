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
        <Hello />
        <Welcome name='Jonh' age={8} />
        <Counter initialValue={5} increment={3} interval={500} />
        <ClickCounter />
        <ClickTracker />
        <InteractiveWelcome />
        <Login currentState={onLogin} />
        <UncontrolledLogin currentState={onLogin} />
        <TodoList />
        <br></br>
        <Container title={<h2>Container title</h2>}>
          <p>This is a container</p>
          <Counter />
        </Container>
        <TodoList
          render={(items) => {
            items.map((name, index) => (
              <li key={name + index}>
                {name}
                {/* <button onClick={() => this.handleReset(index)}>Delete</button> */}
              </li>
            ));
            return (
              <div>
                <h3>TodoList</h3>
                {/* <input
                  name='newTodo'
                  value={this.state.newTodo}
                  onChange={this.handleInput}></input>
                <button onClick={this.handleAddTodo}>Add</button>
                <button onClick={this.handleResetAll}>Delete All</button> */}
                <ul>{items}</ul>
              </div>
            );
          }}></TodoList>
      </div>
    );
  }
}

export default App;
