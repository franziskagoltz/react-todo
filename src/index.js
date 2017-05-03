import React from 'react';
import ReactDOM from 'react-dom';
import TodoDataInterface from "../lib/TodoDataInterface.js";
import SingleTodo from "./SingleTodo";
import VisibleTodoList from "./VisibleTodoList";


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
            visibilityFilter: "ALL_TODOS"
        };
    }

    visibleTodos = () => {
        switch(this.state.visibilityFilter) {
            case "ALL_TODOS":
                return this.state.todos;
            case "TODOS_LEFT":
                return this.state.todos.filter( todo => todo.isDone === false );
            case "COMPLETED_TODOS":
                return this.state.todos.filter( todo => todo.isDone === true );
            default:
                return this.state.todos;
        }
            
    }

    render() {
        return (
            <div>
                <h1>ToDo App Built with React</h1>
                <input type="text" placeholder="Add a New ToDo" 
                    ref={(c => this._todoInputField = c)}
                />
                
            </div>
            );
    }
}


ReactDOM.render(
    <ToDoApp dataInterface={todoDataInterface}/>,
    document.getElementById("app")
    )