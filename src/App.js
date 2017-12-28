import React, { Component } from 'react';
import logo from './logo.svg';
import SessionsList from './components/sessions_list'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSessions } from './actions/index'
import './App.css';

class App extends Component {
  componentDidMount() {
      this.props.fetchSessions();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to CodeMash Scheduler</h1>
        </header>
        <SessionsList />
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchSessions }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
