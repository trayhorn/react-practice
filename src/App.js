import { Component } from 'react';
import * as React from 'react';
import './App.css';
import axios from 'axios';

const KEY = '29734383-6ec437d7a0c5df52cef54a0f';
axios.defaults.baseURL = 'https://pixabay.com/api/';


export default class App extends Component {

  state = {
    name: ''
  }

  async componentDidMount() {
    const { data } = await axios.get(`?key=${KEY}9&q=cat&image_type=photo&per_page=12`);

    console.log(data);
  }

  handleChange = evt => {
    this.setState({ name: evt.target.value });
    console.log(evt.target.value);
    console.log(this.state);
  };

  render() {
    return (
      <div className='container'>
        <h1 className='title'>Images</h1>
        <form autoComplete='off'>
          <label>
            Name
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
        </form>
      </div>
    )
  }
}