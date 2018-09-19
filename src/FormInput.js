import React, { Component } from 'react';
//import {FormGroup, InputGroup, Button, FormControl} from 'react-bootstrap';


class FormInput extends Component{
	sumbit(event) {
		event.preventDefault();
		console.log('sumbit', this.testInput.value);
		this.props.item(this.testInput.value);
	}

  render() {
    return (
	//	<form onSubmit={this.handleSubmit} className = 'root'>
	//		<FormGroup>
	//			<InputGroup>
	//				<FormControl 
	//				type="text" 
	//				placeholder="data"
	//				ref={(input) => this.testInput = input}/>
	//				<InputGroup.Button >
	//					<Button onClick={this.sumbit.bind(this)} >Enter</Button>
	//				</InputGroup.Button>
	//			</InputGroup>
	//		</FormGroup>
	//	</form>
	//);
	//(
    	<div>
    		<input type="text" ref={(input) => this.testInput = input} />
    		<button onClick={this.sumbit.bind(this)}>Sumbit</button>
    	</div>
    	);
 }
}


export default FormInput;
