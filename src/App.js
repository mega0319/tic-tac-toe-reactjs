import React, { Component } from 'react';
import './App.css';
import Board from './Board.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2 className="animated pulse infinite title">Welcome to Tic-Tac-Toe</h2>
        <Board />
      </div>
    );
  }
}

export default App;
