import React, { Component } from 'react';
import {ButtonToolbar, FormGroup, Checkbox, ListGroup, ListGroupItem, ButtonGroup, Button, Glyphicon} from 'react-bootstrap';

class FormButton extends Component {

	clear(i) {
		const newList = [...this.props.DataList];
		newList.splice(i, 1);
		this.props.DeletedList(newList);
	}

	edit(item, i){
		const newList = [...this.props.DataList];
		newList[i].list = prompt("Please change", this.props.DataList[i].list);
		if(newList[i].list)
			this.props.DeletedList(newList);
	}

	change(i) {
		const newList = [...this.props.DataList];
		newList[i].done = !(newList[i].done);
		this.props.DeletedList(newList);
	}

  render() {
  	const listItems = this.props.DataList.map((item, i) => 
			<div>
				<ListGroup>
  					<ListGroupItem bsStyle={`${this.props.DataList[i].done ? "info" : null}`}>
  						{`${item.list}`}
  						<div className="ButtonsStyle">{`${item.time}`}
							<ButtonToolbar>
								<ButtonGroup>
									<FormGroup>
										<Checkbox onClick={this.change.bind(this, i)}>
										</Checkbox> 
									</FormGroup>
									<Button onClick={this.edit.bind(this, item, i)}>
										<Glyphicon glyph="glyphicon glyphicon-pencil" />
									</Button>
									<Button onClick={this.clear.bind(this, i)}>
										<Glyphicon glyph="glyphicon glyphicon-remove" />
									</Button>
								</ButtonGroup>
							</ButtonToolbar>
							</div>
  					</ListGroupItem>
				</ListGroup>	
			</div>
		);
    return (
    	<div className="root">
    		{listItems}
    	</div>
    );
 }
}


export default FormButton;
