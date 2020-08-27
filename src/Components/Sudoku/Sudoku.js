import React, {Component} from 'react';
import { makepuzzle, solvepuzzle, ratepuzzle } from "sudoku";
import Square from '../Square/Square.js';
class Sudoku extends Component {
    constructor(props) {
        super(props);
        this.state = {
            board: null,
            solution: null
        }
    }
    async componentDidMount() {
        var puzzle = makepuzzle()
        var solution = solvepuzzle(puzzle)
        await this.setState({board: puzzle, solution: solution});
        console.log(this.state.board);
        console.log(this.state.solution);
    }
    handleSquareChange(i,j) {
    }
    render() {

		return (
            <>
			  <div>
                Board
                
              </div>
            </>
		);
	}
}

export default Sudoku;