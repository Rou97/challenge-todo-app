import React, { Component } from 'react';

class WrapTodos extends Component {
    render() {
        console.log('a', this.props);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.body}</p>
                <p>{this.props.id}</p>
                <button  onClick={() => this.props.onDelete(this.props.id) }>Delete</button>
            </div>
        );
    }
}

export default WrapTodos;