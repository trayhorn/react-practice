// import { useState } from "react";
import { Component } from "react";
import s from "./App.module.css";


class App extends Component {
  state = {
    contacts: [],
    name: ''
  }

  handleChange = (e) => {
    this.setState({name: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div className={s.container}>
        <form autoComplete="off">
          <label className={s.label}>
            Name
            <input
              className={s.input}
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </label>
          <button className={s.button} type="submit">Add contact</button>
        </form>
      </div>
    )
  }
}

export default App;