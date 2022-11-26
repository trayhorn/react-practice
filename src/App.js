import { useState } from 'react';
import './App.css';


export default function App() {
  const [name, setName] = useState('');
  


  const nameChange = event => {
    setName(event.target.value);
  }

  return (
    <div className='container'>
      <h1>Hooks</h1>
      <form autoComplete='off'>
        <label>
          <span>Name</span>
          <input
            type='text'
            name='username'
            onChange={nameChange}
            value={name}
          />
        </label>
        <br />
        <label>
          <span>Number</span>
          <input type='phone' name='number'/>
        </label>
      </form>
    </div>
  )
}