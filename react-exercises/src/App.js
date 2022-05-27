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
import { Route, Routes } from 'react-router-dom';
import ShowGithubUser from './ShowGithubUser';

export function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Welcome name='Daniele' />} />
        <Route path='counter' element={<Counter />} />
        <Route path='users/:username' element={<ShowGithubUser />} />
      </Routes>
    </div>
  );
}
