import React from 'react';
import Square from './Square';
// function calculateWinner(squares) {
//     const lines = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6],
//     ];
//     for (let i = 0; i < lines.length; i++) {
//       const [a, b, c] = lines[i];
//       if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//         return squares[a];
//       }
//     }
//     return null;
//   }
export default class Borad extends React.Component {
    // constructor () {
    //     super()
    //     this.state = {
    //         squares: Array(9).fill(null),
    //         xIsNext: true
    //     }
    // }
    // handleClick (i) {
    //     let squares = this.state.squares.slice();
    //     squares[i] =  this.state.xIsNext ? 'x': 'o';
    //     this.setState({
    //         squares: squares,
    //         xIsNext: !this.state.xIsNext
    //     });
    // }
    renderSquare (i) {
        return <Square 
            key={i}
            value={this.props.squares[i]}
            highlight = {this.props.highlightList.indexOf(i) > -1}
            onClick={()=>this.props.onClick(i)}/>
    }
    render () {
        var list = Array(3).fill(null);
        var cols = Array(3).fill(null);
        return (
            <div className="board">
                {
                    list.map((row, i)=> {
                        return (
                            <div className="board-row" key={i}>
                                {cols.map((col, j)=> this.renderSquare(i * 3 + j))}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
