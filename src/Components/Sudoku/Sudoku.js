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
            ],
            errors: 0
        }
        this.handleSquareChange = this.handleSquareChange.bind(this);
    }
    async componentDidMount() {
        var puzzle = makepuzzle()
        var solution = solvepuzzle(puzzle)
        await this.setState({board: puzzle, solution: solution});
        //console.log(this.state.board);
        //console.log(this.state.solution);
    }
    handleSquareChange(i, value) {
        let copyValues = this.state.board.slice()
        copyValues[i] = value
        this.setState({ board: copyValues});
    }
    render() {

		return (
            <>
			  <div class="sudoku-container">
                Board
                <div class="board">
                {
                    this.state.board.map( (value,row) => {
                        //console.log(row%9, row)
                        return(
                            <>
                            <Square
                            editable = {false}
                            rowIndex = {row}
                            colIndex = {row}
                            correctValue = {value}
                            handleSquareChange = {this.handleSquareChange}
                            board= {this.state.board}
                            solution= {this.state.solution}
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