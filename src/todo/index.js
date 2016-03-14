"use strict";

import React from "react";
import ReactDOM from "react-dom";

import NewTodo from "./new-todo";
import TodoList from "./todo-list";

export default class Todo extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: []
        };
    };

	render() {
		return <div>
            <NewTodo onAdd={this.onAdd.bind(this)} />
            <TodoList todos={this.state.todos} onRemove={this.onRemove.bind(this)} />
        </div>;
	};

    onAdd(todo) {
        var todos = this.state.todos;
        todos.push(todo);
        this.setState({
            todos: todos
        });
    };

    onRemove(todo) {
        var todos = this.state.todos;
        _.remove(todos, (t) => t.id === todo.id);
        this.setState({
            todos: todos
        });
    };
};
