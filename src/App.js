import { Component } from 'react';
import ModalWindow from "./components/Modal/Modal";
import Form from './components/Form/Form';
import List from './components/List/List';
import initialTodos from './initialTodos.json';
import './App.css';


export default class App extends Component {

  state = {
    todos: initialTodos,
    showModal: false
  }


  toggleModal = () => {
    this.setState(prevState => {
      return { showModal: !prevState.showModal};
    })
  }

  deleteTodo = todoId => {
    this.setState(({todos}) => ({
      todos: todos.filter(todo =>
        todo.id != todoId),
    }))
    console.log(this.state.todos);
  }


  render() {
    return (
      <div className='container'>
        <Form />
        <List
          onDeleteTodo={this.deleteTodo}
          initialTodos={this.state.todos}
        />
        <button
          style={{margin: '20px'}}
          onClick={this.toggleModal}
        >Open modal</button>
        {this.state.showModal && (
          <ModalWindow>
            <h1>This is my first modal in React</h1>
            <button
              onClick={this.toggleModal}
            >Close Modal</button>
          </ModalWindow>
        )}
      </div>
    )
  }
}