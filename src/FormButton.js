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
		IndexElement: -1,
		Values: null
	};
	Clear(IndexElementInMap) {
		const NewList = [...this.props.DataList];
		NewList.splice(IndexElementInMap, 1);
		this.props.DeletedList(NewList);
	}

	ChangeElement(IndexElementInMap) {
		return (
			<form onSubmit={this.Submit.bind(this)}>
				<input
					type="text"
					defaultValue={this.props.DataList[IndexElementInMap].list}
					value={this.state.Values}
					onChange={this.ChangValue.bind(this)}
				/>
				<button>change</button>
			</form>
		);
	}

	ChangValue(event) {
		let NewList = [...this.props.DataList];
		NewList[this.state.IndexElement].list = event.target.value;
		this.setState({IndexElement: -1 });
		this.props.DeletedList(NewList);
	}

	Submit(event) {
		event.preventDefault();
	}

	Edit(IndexElementInMap) {
		this.setState({IndexElement: IndexElementInMap});
	}

	Change(IndexElementInMap) {
		const NewList = [...this.props.DataList];
		NewList[IndexElementInMap].done = !NewList[IndexElementInMap].done;
		this.props.DeletedList(NewList);
	}

	render() {
		const listItems = this.props.DataList.map((AllList, IndexElementInMap) => (
			<ListGroup>
				<ListGroupItem
					bsStyle={`${this.props.DataList[IndexElementInMap].done ? "info" : null}`}
					className="FlexboxMain;"
				>
					<div className="FlexboxFirst">
						{this.state.IndexElement === IndexElementInMap ? this.ChangeElement(IndexElementInMap) : AllList.list}
					</div>
					<div className="FlexboxSecond">
						<div>{`${AllList.time}`}</div>
						<div>
							<FormGroup>
								<Checkbox onClick={this.Change.bind(this, IndexElementInMap)} />
							</FormGroup>
						</div>
						<div>
							<ButtonToolbar>
								<ButtonGroup>
									<Button onClick={this.Edit.bind(this, IndexElementInMap)}>
										<Glyphicon glyph="glyphicon glyphicon-pencil" />
									</Button>
									<Button onClick={this.Clear.bind(this, IndexElementInMap)}>
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