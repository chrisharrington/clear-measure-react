import React from "react";
import ReactDOM from "react-dom";

import Counter from "./counter";
import Todo from "./todo";

import "file?name=index.html!./index.html";

class Index extends React.Component {
    render() {
        return <div>
            <Todo />
        </div>;
    }
}

ReactDOM.render(<Index />, document.querySelector("#container"));
