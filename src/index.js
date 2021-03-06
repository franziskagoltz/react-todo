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
    addTodo = () => {
        if (this._todoInputField.value) {
            this.props.dataInterface.addTodo(this._todoInputField.value);
            this.setState({todos: this.props.dataInterface.getAllTodos()});
            this._todoInputField.value = '';
        }
    }

    archiveToggleTodo = (e) => {
        // e.target.dataset.id = grabbing the id from the DOM elements
        this.props.dataInterface.archiveToggleTodo(e.target.dataset.id);
        this.setState({todos: this.props.dataInterface.getAllTodos()})
    }

    removeTodo = (e) => {
        this.props.dataInterface.removeTodo(e.target.dataset.id);
        this.setState({todos: this.props.dataInterface.getAllTodos()})
    }

    changeVisibilityFilter = (e) => {
        this.setState({visibilityFilter: e.target.dataset.id})
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

        const visibleTodos = this.visibleTodos();

        return (
            <div>
                <h1>ToDo App Built with React</h1>
                <input type="text" placeholder="Add a New ToDo" 
                    ref={(c => this._todoInputField = c)} id="test"/>
                <button onClick={this.addTodo}> Add New Todo </button>
                <VisibleTodoList
                    visibleTodos={visibleTodos}
                    visibilityFilter = {this.state.visibilityFilter}
                    archiveToggleTodo={this.archiveToggleTodo}
                    removeTodo={this.removeTodo}/>
                <div>
                    SHOW:
                    {
                        this.visibilityFilters.map(
                            visibilityFilter =>
                                <button 
                                    key={visibilityFilter} 
                                    onClick={this.changeVisibilityFilter} 
                                    data-id={visibilityFilter}>
                                        {visibilityFilter.replace("_", " ")}
                                </button>
                        )
                    }
                </div>
            </div>
            );
    }
}


ReactDOM.render(
    <ToDoApp dataInterface={todoDataInterface}/>,
    document.getElementById("app")
    )