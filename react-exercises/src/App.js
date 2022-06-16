import { Component } from 'react';
import ClickCounter from './ClickCounter';
import ClickTracker from './ClickTracker';
import Container from './Container';
import Counter from './Counter';
import DisplyLanguage from './DisplayLanguage';
import Hello from './Hello';
import InteractiveWelcome from './InteractiveWelcome';
import { LanguageContext } from './LanguageContext';
import Login from './Login';
import TodoList from './TodoList';
import UncontrolledLogin from './UncontrolledLogin';
import Welcome from './Welcome';

const onLogin = (state) => {
  return console.log(state);
};

class App extends Component {
  state = {
    language: 'en',
  };

  handleLanguage = (event) => {
    this.setState({
      language: event.target.value,
    });
  };

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
        <select value={this.state.language} onChange={this.handleLanguage}>
          <option value='en'>English</option>
          <option value='it'>Italiano</option>
        </select>
        <LanguageContext.Provider value={this.state.language}>
          <DisplyLanguage />
        </LanguageContext.Provider>

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
