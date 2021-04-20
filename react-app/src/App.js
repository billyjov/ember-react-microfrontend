import logo from './logo.svg';
import './App.css';

import React from 'react';

function App() {
  return (
    <div>
      <header className="text-center">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div className="container">
        <h2>Ember app should load below</h2>
        <ember-app-list></ember-app-list>
      </div>
    </div>
  );
}

export default App;
