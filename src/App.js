import './App.css';
import { useState } from 'react';
import { Button } from '@mui/material';
import Counter from './components/Counter/Counter';
import axios from 'axios';


const App = () => {
  const [counterClick, setCounterClick] = useState(false);

  const onCounterButtonClick = () => {
    if (!counterClick) {
      setCounterClick(true);
    } else {
      setCounterClick(false);
    }
  }

   async function handleSubmit(e) {
    e.preventDefault();
     const response = await axios.get(
       'https://dog.ceo/api/breeds/image/random',
     );
     console.log(response.data.message)
  }
 
  return (
    <div>
      <Button
        onClick={onCounterButtonClick}
        sx={{ margin: '20px' }}
        variant="contained"
      >
        Contained
      </Button>
      <hr />
      {counterClick && <Counter />}
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input name="search" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}


export default App;