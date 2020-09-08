import React, {Component} from 'react';
import { makepuzzle, solvepuzzle } from "sudoku";
import './Sudoku.scss'
import Square from '../Square/Square.js';
class Sudoku extends Component {
    constructor(props) {
        super(props);
        this.state = {
            board: [
                ['','','','','','','','',''],
                ['','','','','','','','',''],
                ['','','','','','','','',''],
                ['','','','','','','','',''],
                ['','','','','','','','',''],
                ['','','','','','','','',''],
                ['','','','','','','','',''],
                ['','','','','','','','',''],
                ['','','','','','','','','']
            ],
            solution: [
                ['','','','','','','','',''],
                ['','','','','','','','',''],
                ['','','','','','','','',''],
                ['','','','','','','','',''],
                ['','','','','','','','',''],
                ['','','','','','','','',''],
                ['','','','','','','','',''],
                ['','','','','','','','',''],
                ['','','','','','','','','']
            ]
        }
    }
    async componentDidMount() {
        var puzzle = makepuzzle()
        var solution = solvepuzzle(puzzle)
        await this.setState({board: puzzle, solution: solution});
        console.log(this.state.board);
        console.log(this.state.solution);
    }
    handleSquareChange(i,j, value) {
        console.log(this.state)
        //let copyValues = this.state.board.slice()
        //copyValues[i][j] = value
        //this.setState({ board: copyValues});
    }
    render() {

		return (
            <>
			  <div class="sudoku-container">
                Board
                <div class="board">
                {
                    this.state.board.map( (value,row) => {
                        console.log(row%9, row)
                        return(
                            <>
                            <Square
                            editable = {false}
                            rowIndex = {row % 9}
                            colIndex = {row}
                            correctValue = {value}
                            handleSquareChange = {this.handleSquareChange}
                            board= {this.state.board}
                            />
                            </>
                        )
                    })
                }
                </div>
              </div>
            </>
		);
	}
}

export default Sudoku;