import React, { Component } from 'react';
import {
	FormGroup,
	Tooltip,
	InputGroup,
	Button,
	FormControl
} from 'react-bootstrap';

class FormInput extends Component {
	state = {
		isValid: null
	};

	submit() {
		if (this.testInput.value.trim()) {
			this.props.AddElement(this.testInput.value);
			this.testInput.value = '';
			this.setState({
				isValid: null
			});
		} else {
			this.setState({
				isValid: 'error'
			});
		}
	}

	handleSubmit(event) {
		event.preventDefault();
	}

	TooltipEror() {
		return (
				<Tooltip placement="top" className="in" id="tooltip-top">
   					Tooltip top
  				</Tooltip>
			);
	}
	//{`${this.state.isValid ? this.TooltipEror : this.handleSubmit}`}
//onSubmit={this.handleSubmit} 
	render() {
		return (
			<form onSubmit={this.handleSubmit} className="root">
				<FormGroup validationState={this.state.isValid}>
					<InputGroup>
						<FormControl
							type="text"
							placeholder="same text"
							inputRef={input => (this.testInput = input)}
						/>
						<InputGroup.Button>
							<Button
								type="submit"
								onClick={this.submit.bind(this)}
							>
								Enter
							</Button>
						</InputGroup.Button>
					</InputGroup>
				</FormGroup>
			</form>
		);
	}
}

export default FormInput;
