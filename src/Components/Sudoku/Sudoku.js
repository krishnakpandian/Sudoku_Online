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
			  <div>
                Board
                <Square
                editable = {false}
                rowIndex = {0}
                colIndex = {0}
                correctValue = {1}
                handleSquareChange = {this.handleSquareChange}
                board= {this.state.board}
                />
              </div>
            </>
		);
	}
}

export default Sudoku;