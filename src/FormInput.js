import React, { Component } from 'react';
import {FormGroup, Tooltip, InputGroup, Button, FormControl} from 'react-bootstrap';


class FormInput extends Component{
	sumbit() {
		if(!this.testInput.value.trim()) return false;
		this.props.item(this.testInput.value);
		this.testInput.value = '';
	}

	handleSubmit(event) {
		event.preventDefault();
	}

  render() {
    return (
		<form onSubmit={this.handleSubmit} className = 'root'>
			<FormGroup>
				<InputGroup>
					<FormControl 
						type="text" 
						placeholder="data"
						inputRef={input => this.testInput = input}
					/>
					<InputGroup.Button >
						<Button type="sumbit" onClick={this.sumbit.bind(this)} >Enter</Button>
					</InputGroup.Button>
				</InputGroup>
			</FormGroup>
		</form>
	);

 }
}


export default FormInput;
