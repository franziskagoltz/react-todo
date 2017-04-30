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

}


export default TodoDataInterface;
