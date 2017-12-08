import React, { Component } from 'react';
import Cell from './cell';
import _ from 'lodash';

export default class board extends Component {

    constructor(props) {
        super(props);
        this.state = {
          total: props.size,
          stepNumber: 0,
          xIsNext: true,
          squares: [...Array(props.size)].fill(null),
        };
    };

    changeValue(i) {
      const squares  = this.state.squares.slice();
      
      if(squares[i] === 'x' || squares[i] === 'o' ) {
        return
      }
      squares[i] = this.state.xIsNext ? 'x' : 'o';

      this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext,
      });
    }

    resetBoard() {
      this.setState({
        squares: [...Array(this.props.size)].fill(null),
      });
    }

    verifyWiner() {
      const boardSize = this.props.size;
      const n = Math.sqrt(boardSize);
      const boardRange = _.range(n);

      let rows = boardRange.map(value => {
        // value * n => Display the values of the first col
        //  (value * n) + n => Take the values of the last col
        return _.range(value * n, (value * n) + n);
      });
      console.log(rows);

      let cols = boardRange.map(value => {
        // value * n => Display the values of the first col
        //  (value * n) + n => Take the values of the last col
        return _.range(value, boardSize, n);
      });
      console.log(cols);

      let diag = boardRange.map(value => {
        // value * n => Display the values of the first col
        //  (value * n) + n => Take the values of the last col
        return (value * n) + value;
      });
      console.log(diag);

      let diagInv = boardRange.map(value => {
        // value * n => Display the values of the first col
        //  (value * n) + n => Take the values of the last col
        return (value * n) + (n - 1) - value;
      });
      console.log(diagInv);
    }

    render() {
      const playerInfo = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        return(
            <div className="container game-container">
              <h1 className="title_princ">Tic Tac Toe</h1>
              <div style={{ color: 'white' }}>{playerInfo}</div>
              {this.state.squares.map((x, i) =>
                <Cell key={i} value={x} onClick={() => { this.changeValue(i)} }></Cell>
              )}
              <br/>
              <br />
              <br />
            <div className="reset" onClick={ ()=>{ this.resetBoard()} }>Reset</div>
            <div onClick={ ()=>{ this.verifyWiner()} }>Verify</div>
          </div>
        );
    }
}
