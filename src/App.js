import React, { Component } from 'react';
import FormInput from './FormInput';


class App extends Component {
	state = {
		list: []
	}
	add = (str) => {
		console.log(str);
		this.setState({list: [...this.state.list, str]});
		console.log(this.state.list);
		
	}
	
	render() { 
	const listItems = this.state.list.map((item, i) =>
		<li>{(i+1) + ") "}{item}</li>
	);
	return (<div>		
				<FormInput item = {this.add}/>
				<ul>{listItems}</ul>
			</div>);
	}
}

export default App;