import React from 'react';
import ReactDOM from 'react-dom';
import TodoDataInterface from "../lib/TodoDataInterface.js";
import SingleTodo from "./SingleTodo";


class ToDoApp extends React.Component {
    render() {
        return (
            <div>
                <h1>ToDo App</h1>
            </div>
            );
    }
}

const todoDataInterface = new TodoDataInterface();
console.log(todoDataInterface);

const singleTodo = new SingleTodo();
console.log(singleTodo);

ReactDOM.render(
    <ToDoApp />,
    document.getElementById("app")
    )