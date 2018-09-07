import React, { Component } from 'react';
import FormInput from './FormInput';

class App extends Component {
	state = {
		list: []
	}
	add = (str) => {
		console.log(str);
		this.setState({list: [...this.state.list, str]});
		const numbers = [1, 2, 3, 4, 5];
		const listItems = numbers.map((number) =>
			<li key={number.toString()}>
				{number}
			</li>);
		return (
			<ul>{listItems}</ul>
		);
		console.log(numbers);
	}
	render() {     
	return (<div>		
				<FormInput item = {this.add}/>			
			</div>);
	}
}
export default App;