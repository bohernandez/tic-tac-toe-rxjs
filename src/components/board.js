import React, { Component } from 'react';
import Cell from './cell';
import _ from 'lodash';
import { CSSTransitionGroup } from 'react-transition-group';

export default class board extends Component {

    constructor(props) {
        super(props);
        this.state = {
          total: props.size,
          stepNumber: 0,
          xIsNext: true,
          squares: [...Array(props.size)].fill(null),
          message: '',
          solutions: [],
        };
    };
    componentDidMount() {
      const solutions = this.getSolutionsMatrix();
      this.setState({solutions});
      console.log(solutions);
    }

    getSolutionsMatrix() {
      const boardSize = this.props.size;
      const n = Math.sqrt(boardSize);
      const boardRange = _.range(n);
      const { squares } = this.state;
      console.log("squares", squares);

      let rows = boardRange.map(value => {
        // value * n => Display the values of the first col
        //  (value * n) + n => Take the values of the last col
        return _.range(value * n, (value * n) + n);
      });
      // console.log(rows);

      let cols = boardRange.map(value => {
        // value * n => Display the values of the first col
        //  (value * n) + n => Take the values of the last col
        return _.range(value, boardSize, n);
      });
      // console.log(cols);

      let diag = boardRange.map(value => {
        // value * n => Display the values of the first col
        //  (value * n) + n => Take the values of the last col
        return (value * n) + value;
      });
      // console.log(diag);

      let diagInv = boardRange.map(value => {
        // value * n => Display the values of the first col
        //  (value * n) + n => Take the values of the last col
        return (value * n) + (n - 1) - value;
      });
      // console.log(diagInv);

      const solutionsMatrix = [
        ...rows,
        ...cols,
        diag,
        diagInv
      ];

      return solutionsMatrix;
    }

    verifyWiner(squares) {
      const { solutions } = this.state;
      const currentPlayer = this.state.xIsNext ? 'x' : 'o';

      return solutions.find(hand => (
        hand.every(index => squares[index] === currentPlayer)
      ));
    }

    changeValue(i) {
      const currentPlayer = this.state.xIsNext ? 'x' : 'o';
      let { stepNumber, total } = this.state;
      const squares  = this.state.squares.slice();
      
      if(squares[i] === 'x' || squares[i] === 'o' ) {
        return
      }
      squares[i] = this.state.xIsNext ? 'x' : 'o';
      stepNumber++;
      let verify = this.verifyWiner(squares);

      this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext,
        stepNumber,
      });
      if (stepNumber >= total && !verify) {
        this.setState({ message: "Draw"  });  
      } else {
        this.setState({ message: verify ? currentPlayer + " Won!" : ''  });
      }
    }

    resetBoard() {
      this.setState({
        squares: [...Array(this.props.size)].fill(null),
        message: '',
        stepNumber: 0,
      });
    }

    render() {
      let container = {
        maxWidth: (Math.sqrt(this.props.size) * 156) + 30,
        height: (Math.sqrt(this.props.size) * 158) + 200,
        position: 'relative',
      }
      const { message } = this.state;
      const playerInfo = message ? message : 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      const transitionSettings = {
        transitionName: "fade",
        transitionEnterTimeout: 500,
        transitionLeaveTimeout: 500,
        transitionAppear: true,
        transitionAppearTimeout: 500,
      };
        return(
            <div className="container game-container" style={container}>
              <h1 className="title">Tic Tac Toe</h1>
              <div style={{ color: 'white' }}>{playerInfo}</div>
              <CSSTransitionGroup {...transitionSettings}> 
                {this.state.squares.map((x, i) => 
                  <Cell key={i} value={x} onClick={() => { this.changeValue(i)} }></Cell>
                )}
              </CSSTransitionGroup>
            <div className="reset" onClick={ ()=>{ this.resetBoard()} }>Reset</div>
          </div>
        );
    }
}
