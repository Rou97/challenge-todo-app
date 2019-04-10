import React, { Component } from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'
import getAllTodos from './components/getAlltodos';
import getTodo from './components/getTodo';
import createTodo from './components/createTodo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>

          <Switch>

            <Route exact path="/todos" component={getAllTodos} />
            <Route exact path="/todo/:id" component={getTodo} />
            <Route exact path="/create" component={createTodo} />

          </Switch>

        </Router>
      </div>
    );
  }
}

export default App;
