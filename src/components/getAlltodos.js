import React, { Component } from 'react';
import todoService from '../services/todo-services';
import WrapTodos from './WrapTodos';

class getAlltodos extends Component {

    state = {
        todos: []
    }

    componentDidMount() {
        this.getTodos();
    }

    getTodos() {
        todoService.getAllTodos()
            .then(todos => {
                this.setState({
                    todos
                })
            console.log(todos);
            })
            .catch(err => console.log(err));
    }

    handleDelete = (id) => {
        
        todoService.deleteTodo(id)
          .then(data => {
            console.log('data', data);
            const deletedTodo = data;
            const newTodo = this.state.todos.filter((todo) => {
              return todo._id !== deletedTodo._id;
            });
            this.setState({
              todos: newTodo,
            })
          })
          .catch(err => console.log(err));
    }
    

    render() {
        return (
            <div>
                <div>
                    <ul>
                        <div>
                        {this.state.todos.length > 0 && this.state.todos.map(todo => (
                            <WrapTodos
                            key={todo._id}
                            id={todo._id}
                            title={todo.title}
                            body={todo.body}
                            onDelete={this.handleDelete}
                            />
                        ))}
                        </div>
                    </ul>
                </div>
            </div>
        );
    }
}

export default getAlltodos;

