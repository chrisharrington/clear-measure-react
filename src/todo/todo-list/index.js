"use strict";

import React from "react";
import ReactDOM from "react-dom";
import _ from "lodash";

import Todo from "./todo-item";

export default class TodoList extends React.Component {
	render() {
		return <ul>
			{_.map(this.props.todos, (t) => <Todo key={t.id} todo={t} onRemove={this.props.onRemove} /> )}
		</ul>;
	};
};
