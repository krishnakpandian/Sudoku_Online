import React, { Component } from 'react';

class Square extends Component {

	generateSquareContent = () => {
		const editable = !this.props.editable;
		const squareValue = this.props.value !== null ? ""   : this.props.value;
		const row = this.props.rowIndex;
        const col = this.props.colIndex;
        const correct = this.props.correct;
        

		return (
            <>
              <div class = "box">
              <input 
                class = "Square"
                style = {correct}
                type  = "text"
                value = {squareValue}
                disabled = {editable}
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
			this.props.onValueChange(row, col, newSquareValue);			
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