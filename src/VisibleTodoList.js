import React from "react";
import SingleTodo from "./SingleTodo";


class VisibleTodoList extends React.Component {

    render() {

        return ( 
            <div>
                <h3>{this.props.visibilityFilter.replace("_", " ")}</h3>
                {this.props.visibleTodos.length > 0 ? (
                    <ul> 
                    {this.props.visibleTodos.map( todo => 
                        <SingleTodo 
                            key={todo.id}
                            id={todo.id}
                            text={todo.descriptionText}
                            isDone={todo.isDone}
                            archiveToggleTodo={this.props.archiveToggleTodo}
                            removeTodo={this.props.removeTodo} />
                        )}
                    </ul>
                ) : "NO TODOS TO SHOW!"
                }
            </div>
            )
    }

}


export default VisibleTodoList;