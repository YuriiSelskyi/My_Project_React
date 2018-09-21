import React, { Component } from 'react';
import FormInput from './FormInput';


class App extends Component {
	state = {
		list: []
	}
	add = (str) => {
		let now = new Date(),
			Hours = now.getHours(),
			Minutes = now.getMinutes();
		if(Hours < 10 ) Hours = "0" + Hours;
		if(Minutes < 10 ) Minutes = "0" + Minutes;
		str = str + " " + "(" + Hours + ":" + Minutes + ")";
		this.setState({list: [...this.state.list, str]});
	}
	
	clear(i) {
		const newList = [...this.state.list];
		newList.splice(i, 1);
		this.setState({list: newList})
	}

	edit(item, i){
		console.log(item, i);
		const newList = [...this.state.list];
		newList.splice(i, 1, prompt("Please change", this.state.list[i]));
		this.setState({list: newList});
	}

	render() { 

		const listItems = this.state.list.map((item, i) => 
			<div class="marg">{`${i+1}. ${item} `} 
				<button type="button" class="btn btn-default righ" aria-label="Left Align" onClick={this.edit.bind(this, item, i)}>
  					<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
				</button> 
				<button type="button" class="btn btn-default righ" aria-label="Left Align" onClick={this.clear.bind(this, i)}>
  					<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
				</button>
				
			</div>
		);
		return (
			<div>		
				<FormInput item = {this.add}/>
				<div className = 'root'>
					{listItems}
				</div>			
			</div>
		);
	}
}

export default App;