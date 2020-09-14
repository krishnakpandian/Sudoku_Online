import React, { Component } from 'react';
import './Square.scss'
class Square extends Component {
    
	generateSquareContent = () => {
        const board = this.props.board;
		const editable = !this.props.editable;
		const row = this.props.rowIndex;
		const squareValue = (board[row]=== null) ? "":board[row];
		const solution = this.props.solution[row];
		const correct = solution == squareValue

		return (
            <>
              <div class = "box">
              <input 
                class = "square"
				style = {{
					"color": correct ? null:'red',
					"border-top-width": 'thin',
					"border-right-width": 'thin',
					"border-left-width": 'thin',
					"border-bottom-width": 'thin',
				}}
				pattern="[1-9]*"
                type  = "text"
                value = {squareValue}
                disabled = {!editable}
                onChange = {this.handleSquareValueChange}/>
              </div>
			</>
			);
	}

	handleSquareValueChange = (e) => {
		const newSquareValue = e.target.value;
		if(this.isValidInput(newSquareValue)) {
			const row = this.props.rowIndex;
			const col = this.props.colIndex;
			this.props.handleSquareChange(row, newSquareValue);			
		}
	}

	isValidInput = (i) => {
		return (i === '' || (i.length === 1 && !isNaN(i)));
	}

	render() {
		return this.generateSquareContent();
	}
}


    
export default Square;