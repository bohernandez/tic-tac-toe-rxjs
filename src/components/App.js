import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Board from './board';


class App extends Component {
  render() {
    return (
      <div>
        <Board size={9} />

        <div className="container results-block">
            <div className="row">
                <div className="player-one col-md-6">
                    <input className="input_name" type="text" id="p1_id" ng-model="player1" ng-init="player1 = 'Player 1'" ng-click="setName1(player1)" />
                    <p id="p1_score">{ /* playerOneScore */ }</p>
                    <p id="playerOneMessage">{ /* playerOneMessage */ }</p>
                </div>

                <div className="player-two col-md-6">
                    <input className="input_name" type="text" id="p2_id" ng-model="player2" ng-init="player2 = 'Player 2'" ng-click="setName2(player2)" />
                    <p id="p1_score">{ /* playerTwoScore */ }</p>
                    <p id="playerTwoMessage">{ /* playerTwoMessage */ }</p>
                </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
