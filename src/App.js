import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';
import FilterProductList from './components/product/FilterProductList';


function calculateWinner (square) {
  var list = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (var i=0; i<list.length; i++) {
    const [a, b, c] = list[i];
    if (square[a] && square[a] === square[b] && square[b] === square[c]) {
      return square[a];
    }
  }
  return false;
}

function getWinnerGroup (square) {
  var list = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (var i=0; i<list.length; i++) {
    const [a, b, c] = list[i];
    if (square[a] && square[a] === square[b] && square[b] === square[c]) {
      console.log(list[i]);
      return list[i];
    }
  }
  return [];
}
class App extends Component {
  constructor () {
    super();
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      xIsNext: true,
      stepNum: 0,
      position: []
    }
  }
  handleClick (i) {
    const history = this.state.history.slice(0, this.state.stepNum + 1);
    const squares = history[history.length-1].squares.slice();
    const  position = this.state.position.slice();
    position.push([Math.floor(i / 3), i % 3]);
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'x' : 'o';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNum: this.state.stepNum + 1,
      xIsNext: !this.state.xIsNext,
      position: position
    });
  }
  moveTo (i) {
    this.setState({
      stepNum: i,
      xIsNext: i % 2 === 0
    });
  }
  render() {
    const history = this.state.history;
    const step = this.state.stepNum;
    const squares = history[step].squares;
    const winner = calculateWinner(squares);
    let highlightList = [];

    const logList = history.map((item, index) => {
      const position = this.state.position[index - 1];
      const desc = index ? `操作步数：${index}位置：(${position[0]}, ${position[1]})` : 'start';
      return (
        <li key={index}>
          <button className={step === index ? 'curStep' : ''} onClick={()=>{this.moveTo(index)}}>{desc}</button>
        </li>
      )
    })

    let status;
    if (winner) {
      status = <p>winner: {winner}</p>;
      highlightList = getWinnerGroup (squares);
    } else {
      if (step === 9) {
        status = <p>draw~</p>
      } else {
        status = <p>next player: {this.state.xIsNext ? 'x' : 'o'}</p>
      }
    }

    return (
      <div className="App">
        <FilterProductList products={PRODUCTS}/>
        {/* {status}
        <Board name="GameBoard" squares={squares} highlightList={highlightList} onClick={(i)=>this.handleClick(i)}/>
        <div className="logs">
          <p>历史记录</p>
          <ul>
            {logList}
          </ul>
        </div> */}
      </div>
    );
  }
}

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

export default App;
