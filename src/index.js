import React from 'react';
import ReactDOM from 'react-dom';
import TodoDataInterface from "../lib/TodoDataInterface.js";
import SingleTodo from "./SingleTodo";


const todoDataInterface = new TodoDataInterface();
console.log(todoDataInterface);

const singleTodo = new SingleTodo();
console.log(singleTodo);


class ToDoApp extends React.Component {

    constructor(props) {
        super(props);
        this.visibilityFilters = ["ALL_TODOS", "TODOS_LEFT", "COMPLETED_TODOS"];
        this.state = {
            todos: this.props.dataInterface.getAllTodos(),
            visibilityFilters: "ALL_TODOS"
        };
    }

    render() {
        return (
            <div>
                <h1>ToDo App</h1>
            </div>
            );
    }
}


ReactDOM.render(
    <ToDoApp dataInterface={todoDataInterface}/>,
    document.getElementById("app")
    )