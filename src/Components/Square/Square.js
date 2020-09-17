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
					"border-top-width": row % 27 < 9 ? 'thick': 'thin',
					"border-right-width": row % 3 == 2 ? 'thick':'thin',
					"border-left-width": row %3 == 0 ? 'thick': 'thin',
					"border-bottom-width": row % 27 >= 18 ? 'thick':'thin',
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