import React from 'react';
import Todo from "./Todo";
import { findIndex } from "lodash";


class TodoDataInterface extends React.Component {

    constructor() {
        super();
        this.todos = [];
    }

    addTodo(descriptionText) {
        
        const newTodo = new Todo(descriptionText);
        this.todos.push(newTodo);

        return newTodo;
    }

    archiveToggleTodo(id) {
        const todoIndex = findIndex(this.todos, (todo) => {todo.id === id});

        if (todoIndex > -1) {
            this.todos[todoIndex].isDone = !this.todos[todoIndex].isDone
        }

    }

}


export default TodoDataInterface;
