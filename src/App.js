import { Component } from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';
import ModalWindow from "./components/Modal/Modal";
import TodoForm from './components/Form/Form';
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

  addTodo = () => {

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
        {this.state.showModal && (
          <ModalWindow onClose={this.toggleModal}>
            <h1>This is my first modal in React</h1>
            <Button
              variant="contained"
              onClick={this.toggleModal}
            >Close Modal</Button>
          </ModalWindow>
        )}
        <TodoForm />
        <List
          onDeleteTodo={this.deleteTodo}
          initialTodos={this.state.todos}
        />
        <Button
          variant="contained"
          style={{margin: '20px'}}
          onClick={this.toggleModal}
        >Open modal</Button>
      </div>
    )
  }
}