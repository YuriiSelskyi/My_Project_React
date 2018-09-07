import React, { Component } from 'react';
import {FormGroup, InputGroup, Button, FormControl} from 'react-bootstrap';


class FormInput extends Component{
	constructor(props) {
		super(props);
		this.state = {
			data: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handlDataChange = this.handlDataChange.bind(this);
	}
	handlDataChange(event) {
		this.setState({data: event.target.value});
	}
	handleSubmit(event) {
		event.preventDefault();
		this.props.item(this.state.data);
	}
	
  render() {
    return (
		<form onSubmit={this.handleSubmit} className = 'root'>
			<FormGroup>
				<InputGroup>
					<FormControl 
					type="text" 
					placeholder="data"
					onChange={this.handlDataChange}/>
					<InputGroup.Button>
						<Button>Enter</Button>
					</InputGroup.Button>
				</InputGroup>
			</FormGroup>
		</form>
	);
 }
}


export default FormInput;
