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
            initial: [
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
            page: 0,
            errors: 0
        }
        this.handleSquareChange = this.handleSquareChange.bind(this);
        this.submitBoard = this.submitBoard.bind(this);
    }
    async componentDidMount() {
        var temppuzzle = makepuzzle()
        var tempsolution = solvepuzzle(temppuzzle)
        
        var puzzle = temppuzzle.map((item)  => { 
            if (item != null){
                return item + 1
            }
            return null; 
        });
        var solution = tempsolution.map((item)  => { 
            if (item != null){
                return item + 1
            }
            return null; 
        });
        await this.setState({board: puzzle, solution: solution, initial: puzzle});
        //console.log(this.state.board);
        //console.log(this.state.solution);
    }
    handleSquareChange(i, value) {
        let copyValues = this.state.board.slice()
        copyValues[i] = value
        this.setState({ board: copyValues});
    }

    submitBoard() {
        console.log(this.state.board)
        console.log(this.state.solution)
        for (var i =0; i < 81; i++) {
            if (this.state.board[i] != this.state.solution[i]) {
                console.log('You Lose')
                return
            }
        }
        console.log('You Win')
    }

    render() {

		return (
            <>
			  <div class="sudoku-container">
                Board
                <div class="board">
                { this.state.board !== this.state.solution ?
                    this.state.board.map( (value,row) => {
                        //console.log(row%9, row)
                        return(
                            <>
                            <Square
                            editable = {false}
                            rowIndex = {row}
                            correctValue = {value}
                            editable = {this.state.initial[row] !== null}
                            handleSquareChange = {this.handleSquareChange}
                            board= {this.state.board}
                            solution= {this.state.solution}
                            />
                            </>
                        )
                    })
                    :
                    <div class="finished"> You Won</div>
                }
                <button onClick = {this.submitBoard}> Submit Board</button>


                </div>
              </div>
            </>
		);
	}
}

export default Sudoku;