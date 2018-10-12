import React, { Component } from "react";
import {
	ButtonToolbar,
	FormGroup,
	Checkbox,
	ListGroup,
	ListGroupItem,
	ButtonGroup,
	FormControl,
	InputGroup,
	Button,
	Glyphicon
} from "react-bootstrap";

class FormButton extends Component {
	state = {
		q: -1,
		values : null
	};
	clear(i) {
		const newList = [...this.props.DataList];
		newList.splice(i, 1);
		this.props.DeletedList(newList);
	}

	changeElement(i) {
		console.log(i);
		return (
			<form onSubmit={this.submit.bind(this)}>
				<input
					type="text"
					defaultValue={this.props.DataList[i].list}
					value={this.state.values}
					onChange={this.changValue.bind(this)}
				/>
				<button>change</button>
			</form>
		);
	}

	changValue(event) {
		//event.preventDefault();
		let newList = [...this.props.DataList];
		let i = this.state.q;
		newList[i].list = event.target.value;
		this.setState({ q: -1 });
		this.props.DeletedList(newList);
	}

	submit(event) {
		event.preventDefault();
		// let newList = [...this.props.DataList];
		// let i = this.state.q
		// console.log(i);
		 console.log(this.state.values);
		// newList[i].list = this.state.values;
		// this.setState({ q: -1 });
		// this.props.DeletedList(newList);
	}

	edit(i) {
		// const newList = [...this.props.DataList];
		// newList[i].list = prompt("Please change", this.props.DataList[i].list);
		// if (newList[i].list) this.props.DeletedList(newList);
		// const newList = [...this.props.DataList];
		// newList[i].changed = true;
		// this.props.DeletedList(newList);
		// this.setState({ed : !(this.state.ed)})
		this.setState({ q: i });
	}

	change(i) {
		const newList = [...this.props.DataList];
		newList[i].done = !newList[i].done;
		this.props.DeletedList(newList);
	}

	render() {
		const listItems = this.props.DataList.map((item, i) => (
			<ListGroup>
				<ListGroupItem
					bsStyle={`${this.props.DataList[i].done ? "info" : null}`}
					className="flexboksMain"
				>
					<div className="flexboksfirst">
						{this.state.q === i ? this.changeElement(i) : item.list}
					</div>
					<div className="flexbokssecond">
						<div>{`${item.time}`}</div>
						<div>
							<FormGroup>
								<Checkbox onClick={this.change.bind(this, i)} />
							</FormGroup>
						</div>
						<div>
							<ButtonToolbar>
								<ButtonGroup>
									<Button onClick={this.edit.bind(this, i)}>
										<Glyphicon glyph="glyphicon glyphicon-pencil" />
									</Button>
									<Button onClick={this.clear.bind(this, i)}>
										<Glyphicon glyph="glyphicon glyphicon-remove" />
									</Button>
								</ButtonGroup>
							</ButtonToolbar>
						</div>
					</div>
				</ListGroupItem>
			</ListGroup>
		));
		return <div className="ListsElement">{listItems}</div>;
	}
}

export default FormButton;
