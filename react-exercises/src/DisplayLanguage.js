import React from 'react';
import { LanguageContext } from './LanguageContext';
class DisplyLanguage extends React.Component {
  state = {};
  render() {
    return (
      <div>
        {' '}
        <LanguageContext.Consumer>
          {(language) => {
            return <h1>Selected language: {language}</h1>;
          }}
        </LanguageContext.Consumer>
      </div>
    );
  }
}

export default DisplyLanguage;
