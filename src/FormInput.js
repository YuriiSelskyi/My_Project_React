import React, { Component } from 'react';
import {FormGroup, InputGroup, Button, FormControl} from 'react-bootstrap';


class FormInput extends Component{
	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this)
	}
	//handlDataChange(event) {
	//	this.setState({data: event.target.value});
	//}
	
	handleSubmit(event) {
		event.preventDefault();
		console.log(this.textInput);

		this.props.item(this.textInput.value);

	}
	
  render() {
    return (
		<form onSubmit={this.handleSubmit} className = 'root'>
			<FormGroup>
				<InputGroup>
					<FormControl 
					type="text" 
					placeholder="data"
					ref={(input) =>{ this.textInput = input}}/>
					<InputGroup.Button >
						<Button onClick={this.handleSubmit} >Enter</Button>
					</InputGroup.Button>
				</InputGroup>
			</FormGroup>
		</form>
	);
 }
}


export default FormInput;
