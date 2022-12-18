import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form/Form';


export default function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeUsername = e => {
    setUsername(e.target.value);
  }

  const handleChangePassword = e => {
    setPassword(e.target.value);
  }


  return (
    <div className='container'>
      <h1>Hooks</h1>
      <form>
        <label>
          Name
          <input
            name="username"
            type="text"
            value={username}
            onChange={handleChangeUsername}
          />
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            value={password}
            onChange={handleChangePassword}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}
