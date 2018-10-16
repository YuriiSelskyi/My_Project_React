import React, { Component } from "react";
import {
	ButtonToolbar,
	FormGroup,
	Checkbox,
	ListGroup,
	ListGroupItem,
	ButtonGroup,
	Button,
	Glyphicon
} from "react-bootstrap";

class FormButton extends Component {
	state = {
		editedElement: null,
		value: null
	};

	removeElement = index => {
		const { dataList, updateList } = this.props;
		const newList = [...dataList];

		newList.splice(index, 1);
		updateList(newList);
	};

	changeElement = text => {
		return (
			<form onSubmit={e => e.preventDefault()}>
				<input
					autoFocus
					type="text"
					ref={ref => (this.input = ref)}
					defaultValue={text}
				/>
				<button role="button" type="submit" onClick={this.submit}>
					Save
				</button>
			</form>
		);
	};

	submit = event => {
		event.preventDefault();

		const newList = [...this.props.dataList];

		newList[this.state.editedElement].text = this.input.value;
		this.setState({ editedElement: null });
		this.props.updateList(newList);
	};

	edit = editedElement => {
		this.setState({ editedElement });
	};

	change = index => {
		const newList = [...this.props.dataList];
		newList[index].done = !newList[index].done;
		this.props.updateList(newList);
	};

	render() {
		const listItems = this.props.dataList.map((item, index) => (
			<ListGroup>
				<ListGroupItem bsStyle={item.done ? "success" : null} className="style">
<div className="checkbox-style">
							<FormGroup>
								<Checkbox
									checked={item.done}
									onClick={() => this.change(index)}
								/>
							</FormGroup>
						</div>
					<div className="flexbox-main">

						<div className="list">
							{this.state.editedElement === index
								? this.changeElement(item.text)
								: item.text}
						</div>
						<div className="time-style">{item.time}</div>
					</div>
					<div className="flexbox-second">
						
						<div>
							<ButtonToolbar>
								<ButtonGroup>
									<Button onClick={() => this.edit(index)}>
										<Glyphicon glyph="glyphicon glyphicon-pencil" />
									</Button>
									<Button
										onClick={() =>
											this.removeElement(index)
										}
									>
										<Glyphicon glyph="glyphicon glyphicon-remove" />
									</Button>
								</ButtonGroup>
							</ButtonToolbar>
						</div>
					</div>
				</ListGroupItem>
			</ListGroup>
		));
		return <div className="lists-element">{listItems}</div>;
	}
}

export default FormButton;
