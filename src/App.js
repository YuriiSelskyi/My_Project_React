import React, { Component } from "react";
import FormInput from "./FormInput";
import FormButton from "./FormButton";

class App extends Component {
	state = {
		data: []
	};

	add = text => {
		let now = new Date(),
			hours = now.getHours(),
			minutes = now.getMinutes();
		if (hours < 10) hours = "0" + hours;
		if (minutes < 10) minutes = "0" + minutes;
		let time = `${hours}:${minutes}`;
		let allData = {
			text,
			time,
			done: false
		};
		this.setState({ data: [...this.state.data, allData] });
	};

	updateList = newList => {
		this.setState({ data: newList });
	};

	render() {
		return (
			<div>
			<div className="form-button-style">
				<FormInput addElement={this.add} />
				
					<FormButton
						dataList={this.state.data}
						updateList={this.updateList}
					/>
				</div>
			</div>
		);
	}
}

export default App;
