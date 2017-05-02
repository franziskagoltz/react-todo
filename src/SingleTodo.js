import React from "react";


class SingleTodo extends React.Component {

    render() {
        return (
                <li>
                    <input
                        checked={this.props.isDone}
                        onChange={this.props.archiveToggleTodo(this.props.id)}
                        type="checkbox" />
                <label>{this.props.text}</label>
                <button onClick={this.props.removeTodo(this.props.id)}> Delete </button>
                </li>
            )
    }

}

export default SingleTodo;