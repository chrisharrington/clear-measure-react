"use strict";

import React from "react";
import ReactDOM from "react-dom";

export default class Counter extends React.Component {
    constructor(props) {
        super();
        this.state = {
            count: props.value
        };
    };

	render() {
		return <div>
            {this.state.count}
            <br />
            <button onClick={this.onClick.bind(this)}>Increment!</button>
        </div>;
	};

    onClick() {
        this.setState({
            count: this.state.count + 1
        });
    };
};
