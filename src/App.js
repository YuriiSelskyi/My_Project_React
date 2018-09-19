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
	
	clear(i) {
		console.log("asdasd", i);
		this.state.list.splice(i, 1);
		this.setState({list: [...this.state.list]})
		

	}

	render() { 
	const listItems = this.state.list.map((item, i) =>
		<div><li>{(i+1) + ") "}{item}  <button onClick={this.clear.bind(this, i)}>Delete</button></li></div>
	);
	return (<div>		
				<FormInput item = {this.add}/>
				<ul>{listItems}</ul>
			</div>);
	}
}

export default App;