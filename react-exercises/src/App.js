import { Component } from 'react';
import ClickCounter from './ClickCounter';
import ClickTracker from './ClickTracker';
import Container from './Container';
import Counter from './Counter';

import FilteredList from './FilteredList';
import GithubUser from './GithubUser';
import GithubUserList from './GithubUserList';

import DisplayLanguage from './DisplayLanguage';

import Hello from './Hello';
import HookLogin from './HookLogin';
import InteractiveWelcome from './InteractiveWelcome';
import Login from './Login';
import Sum from './Sum';
import TodoList from './TodoList';
import UncontrolledLogin from './UncontrolledLogin';
import Welcome from './Welcome';
import { LanguageContext } from './LanguageContext';

const list = [
  { name: 'daniele', id: 435, age: 27 },
  { name: 'pippo', id: 651, age: 18 },
  { name: 'pluto', id: 855, age: 15 },
  { name: 'paperino', id: 895, age: 12 },
  { name: 'topolino', id: 946, age: 35 },
  { name: 'hulk', id: 894, age: 24 },
];

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
        <select value={this.state.language} onChange={this.handleLanguage}>
          <option value='en'>English</option>
          <option value='it'>Italiano</option>
        </select>
        <LanguageContext.Provider value={this.state.language}>
          <DisplayLanguage />
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
