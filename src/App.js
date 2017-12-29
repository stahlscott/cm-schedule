import React, { Component } from 'react';
// import logo from './logo.svg';
import SessionsList from './components/sessions_list'
import { RaisedButton } from 'material-ui';
import './App.css';
import { appTokenKey } from './config/fire';
import { logout } from './helpers/auth';

class App extends Component {
  constructor(props) {
      super(props);
      this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
      logout().then(function () {
          localStorage.removeItem(appTokenKey);
          this.props.history.push("/login");
          console.log("user signed out from firebase");
      }.bind(this));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <RaisedButton className='pull-right'
            backgroundColor="#a4c639"
            labelColor="#ffffff"
            label="Sign Out"
            onClick={this.handleLogout}
          />
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
