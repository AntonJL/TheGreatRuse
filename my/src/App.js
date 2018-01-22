import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  goalsScored() {
    return Math.random; 
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Main Header!</h1>
        </header>
        <p className="App-intro">
          Introductory paragraph here!
        </p>
        <p className="App-main">
          Main JSX goes here!

          <br> Sam has scored {this.goalsScored()} goal(s). </br>
          <br> Anton has scored {this.goalsScored()} goal(s). </br>
          </p>
        <p className="App-end">
          This will be the footer!
        </p>
      </div>
    );
  }
}

export default App;
