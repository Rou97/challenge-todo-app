import axios from 'axios';

class TodoService {

    constructor() {
      this.todo = axios.create({
        baseURL: 'http://localhost:4000',
        withCredentials: true
      })
    } 

    getAllTodos() {
        return this.todo.get('/api/v1/todos')
          .then(({ data }) => data);
      }

    createTodo(body) {
        console.log('entra aqui');
        return this.todo.post('/api/v1/todos', body)
          .then(({data}) => data)
    }

    deleteTodo(id) {
        console.log('id', id)
        return this.todo.delete(`/api/v1/todos/${id}`)
        .then(({ data }) => data);
      }

}

const todoService = new TodoService();

export default todoService;