import React, { Component } from "react";
import FormInput from "./FormInput";
import FormButton from "./FormButton";

class App extends Component {
	state = {
		data: []
	};

	Add = str => {
		let Now = new Date(),
			Hours = Now.getHours(),
			Minutes = Now.getMinutes();
		if (Hours < 10) Hours = "0" + Hours;
		if (Minutes < 10) Minutes = "0" + Minutes;
		let TimeCounter = "(" + Hours + ":" + Minutes + ")";
		let AllData = {
			list: str,
			time: TimeCounter,
			done: false,
			changed: false
		};
		this.setState({ data: [...this.state.data, AllData] });
	};

	Clear(NewList) {
		this.setState({ data: NewList });
	}

	render() {
		return (
			<div>
				<FormInput AddElement={this.Add.bind()} />
				<FormButton
					DataList={this.state.data}
					DeletedList={this.Clear.bind(this)}
				/>
			</div>
		);
	}
}

export default App;
