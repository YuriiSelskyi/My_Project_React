import React, { Component } from "react";
import { FormGroup, InputGroup, Button, FormControl } from "react-bootstrap";

class FormInput extends Component {
	state = {
		validationState: null
	};

	submit = () => {
		const { addElement } = this.props;
		const { validationState } = this.state;

		if (this.input.value.trim()) {
			addElement(this.input.value);
			this.input.value = "";
			validationState && this.setState({ validationState: null });
		} else {
			this.setState({ validationState: "error" });
		}
	};

	render() {
		const { validationState } = this.state;

		return (
			<form
				onSubmit={e => e.preventDefault()}
				className="main-style-from-input"
			>
				<FormGroup validationState={validationState}>
					<InputGroup>
						<FormControl
							autoFocus
							type="text"
							placeholder="Task..."
							inputRef={ref => (this.input = ref)}
						/>
						<InputGroup.Button>
							<Button type="submit" onClick={this.submit}>
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
