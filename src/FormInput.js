import React, { Component } from "react";
import { FormGroup, InputGroup, Button, FormControl } from "react-bootstrap";

class FormInput extends Component {
	state = {
		IsValid: null
	};

	Submit() {
		if (this.testInput.value.trim()) {
			this.props.AddElement(this.testInput.value);
			this.testInput.value = "";
			this.setState({
				IsValid: null
			});
		} else {
			this.setState({
				IsValid: "error"
			});
		}
	}

	HandleSubmit(event) {
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.HandleSubmit} className="MainStyleFromInput">
				<FormGroup validationState={this.state.IsValid}>
					<InputGroup>
						<FormControl
							type="text"
							placeholder="same text"
							inputRef={input => (this.testInput = input)}
						/>
						<InputGroup.Button>
							<Button
								type="Submit"
								onClick={this.Submit.bind(this)}
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
