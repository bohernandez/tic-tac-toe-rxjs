import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Board from './board';


class App extends Component {
  render() {
    return (
      <div>
        <Board size={25} />
      </div>
    );
  }
}

export default App;
