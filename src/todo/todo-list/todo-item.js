"use strict";

import React from "react";
import ReactDOM from "react-dom";

export default class TodoItem extends React.Component {
	render() {
		return <li>
            {this.props.todo.label}
            <span onClick={this.onRemove.bind(this)} style={{ marginLeft: 10, cursor: "pointer" }}>x</span>
        </li>;
	};

    onRemove() {
        this.props.onRemove(this.props.todo);
    };
};
