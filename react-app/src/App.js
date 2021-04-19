import logo from './logo.svg';
import './App.css';

import React from 'react';

function App() {
  return (
    <div>
      <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <h2>Ember app should load below</h2>
      <ember-app-list></ember-app-list>
    </div>
  );
}

export default App;
