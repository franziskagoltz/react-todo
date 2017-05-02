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

    removeTodo(id) {
        const todoIndex = findIndex(this.todos, (todo) => {todo.id === id});

        if (todoIndex > -1) {
            this.todos.splice(todoIndex, 1);
        }
    }

    getAllTodos() {
        return this.todos.map( todo => todo )
    }

}


export default TodoDataInterface;
