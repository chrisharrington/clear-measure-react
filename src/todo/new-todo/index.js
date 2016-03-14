"use strict";

import React from "react";
import ReactDOM from "react-dom";
import TodoModel from "../todo-model";

export default class NewTodo extends React.Component {
	constructor() {
		super();
		this.state = {
			value: ""
		};
	};

	render() {
		return <div>
			<input type="text" value={this.state.value} onChange={this.onChange.bind(this)} />
			<button onClick={this.onAdd.bind(this)}>Add!</button>
		</div>;
	};

	onChange(e) {
		this.setState({
			value: e.target.value
		});
	};

	onAdd() {
		this.props.onAdd(new TodoModel(this.state.value));
	};
};
