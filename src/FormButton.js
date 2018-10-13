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
					value={this.state.Values}
					defaultValue={this.props.DataList[IndexElementInMap].list}
					onChange={this.ChangValue.bind(this)}
				/>
				<button type="button" onClick={this.Submit.bind(this)}>change</button>
			</form>
		);
	}

	ChangValue(event) {
		this.setState({Values: event.target.value});
	}

	Submit(event) {
		event.preventDefault();
		const NewList = [...this.props.DataList];
		NewList[this.state.IndexElement].list = this.state.Values;
		this.setState({IndexElement: -1, Values: null})
		this.props.DeletedList(NewList);
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
					
					<div className="List">{this.state.IndexElement === IndexElementInMap ? this.ChangeElement(IndexElementInMap) : AllList.list}</div>

					
					<div className="FlexboxSecond">
						<div className="TimeStyle">{`${AllList.time}`}</div>
						<div className="CheckboxStyle">
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