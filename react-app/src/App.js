import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import DailyTasks from './components/daily-tasks/DailyTasks.jsx';
import WeeklyTasks from './components/weekly-tasks/WeeklyTasks.jsx';

import React from 'react';

function App() {
  return (
    <div className="App">
      <Header logo={logo} allTasks={[]} totalDoneTasks={[]}></Header>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-md-8">
            <ember-app-list></ember-app-list>
          </div>
          <div className="col-md-4">
            <DailyTasks logo={logo} allDailyTasks={[]}></DailyTasks>
            <WeeklyTasks logo={logo} allWeeklyTasks={[]}></WeeklyTasks>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
    // <div>
    //   <header className="text-center">
    //     <img src={logo} className="App-logo" alt="logo" />
    //   </header>

    //   <div className="container">
    //     <h2>Ember app should load below</h2>
    //     <ember-app-list></ember-app-list>
    //   </div>
    // </div>
  );
}

export default App;
