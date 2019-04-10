import React, { Component } from 'react';
import todoService from '../services/todo-services';

class createTodo extends Component {

    state = {
        title: "",
        body: "",

    }
    
    handleChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        });
    }

    handleChangeBody = (event) => {
        this.setState({
            body: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.handleCreate(this.state);
        this.setState({
          title:"",
          body:""
        })
    }

    handleCreate = (data) => {
        console.log('data', data)
        todoService.createTodo(data)
          .then((result) => {
            console.log(result);
          })
          .catch(err => console.log(err));

    }



    render() {
        return (
            <div>
                createTodo
                <form onSubmit={this.handleSubmit}>
                    <h1>Create a task</h1>
                    Title
                    <input type="text" name="" value={this.state.title }onChange={this.handleChangeTitle}/>
                    Body
                    <input type="text" name="" value={this.state.Body }onChange={this.handleChangeBody}/>
                    <input type="submit" value="Create" />
                </form>
            </div>
        );
    }
}

export default createTodo;