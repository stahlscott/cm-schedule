import React, { Component } from 'react';
import logo from './logo.svg';
import SessionsList from './components/sessions_list'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">CodeMash Scheduler</h1>
        </header>
        <div className="sessionsList">
          <SessionsList />
        </div>
      </div>
    );
  }
}

export default App;
