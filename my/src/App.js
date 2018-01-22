import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  randomGoals(max) {
    return Math.ceil(Math.random() * Math.floor(max));
  }

  returnGoals(number) {
    if (number > 1) {
      return number+' goals'; 
    } else {
      return number+' goal'; 
    }
    
  }
  
  findWinner(samGoals, antonGoals) {
    if (samGoals > antonGoals) {
      return 'Sam';
    } else {
      return 'Anton';
    }
  }

  render() {

    const samGoals = this.randomGoals(10);
    const antonGoals = this.randomGoals(9); 

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

          <br /> Sam has scored {this.returnGoals(samGoals)}.
          <br />Anton has scored {this.returnGoals(antonGoals)}. 

          <br />The winner is {this.findWinner(samGoals, antonGoals)}!
        </p>
        <p className="App-end">
          This will be the footer!
        </p>
      </div>
    );
  }
}

export default App;
