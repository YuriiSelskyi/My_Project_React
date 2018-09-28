import React, { Component } from 'react';
import FormInput from './FormInput';
import FormButton from './FormButton';
//import {ButtonToolbar, ButtonGroup, Button, Glyphicon} from 'react-bootstrap';

class App extends Component {
	state = {
		data : []
	}
	
	add = (str) => {
		let now = new Date(),
			Hours = now.getHours(),
			Minutes = now.getMinutes();
		if(Hours < 10 ) Hours = "0" + Hours;
		if(Minutes < 10 ) Minutes = "0" + Minutes;
		let timeCounter = "(" + Hours + ":" + Minutes + ")";
		let AllData = { 
			list : str,
			time : timeCounter, 
			done : false
		}
		this.setState({data: [...this.state.data, AllData]});
		console.log(this.state.data);
	}
	
	clear(newList) {
		console.log(newList);
		this.setState({data: newList});
	}

	render() { 
		return (
			<div>		
				<FormInput AddElement={this.add.bind()} />
				<FormButton DataList={this.state.data} DeletedList={this.clear.bind(this)} />
			</div>
		);
	}
}

export default App;