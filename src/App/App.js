import React, { Component } from 'react';
import { connect } from 'react-redux';
import Routes from '../routes';
import './App.css';

class App extends Component { 
  render() {  
    return (
      <>
        <Routes />
      </>
    );
  }
}

const GoaApp = connect()(App);
export { GoaApp as App };