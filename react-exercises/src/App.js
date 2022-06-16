import { Component } from 'react';
import CarDetails from './CarDetails';
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

const initialData = {
  model: 'Audi',
  year: '2021',
  color: 'black',
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
        <select value={this.state.language} onChange={this.handleLanguage}>
          <option value='en'>English</option>
          <option value='it'>Italiano</option>
        </select>
        <LanguageContext.Provider value={this.state.language}>
          <DisplayLanguage />
        </LanguageContext.Provider>

        <CarDetails initialData={initialData} />
      </div>
    );
  }
}

export default App;
