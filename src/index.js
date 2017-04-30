import React from 'react';
import ReactDOM from 'react-dom';

class ToDo extends React.Component {
    render() {
        return (
                <h1>ToDo App </h1>
            );
    }
}

ReactDOM.render(
    <ToDo />,
    document.getElementById("app")
    )