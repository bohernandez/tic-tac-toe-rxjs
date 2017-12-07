import React, { Component } from 'react';
import Cell from './cell';

export default class board extends Component {

    constructor(props) {
        super(props);
        this.state = {
          stepNumber: 0,
          xIsNext: true
        };
    }

    render() {
        return(
            <div className="container game-container">
            <h1 className="title_princ">Tic Tac Toe</h1>
              { 
                // Every cell that will contain an X or O--> 
              }
            <Cell></Cell>
            <br/>
            <br />
            <br />
            <div className="reset" ng-click="clearBoard()">Reset</div>
          </div>
        );
    }
}
