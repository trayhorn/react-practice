import { TextField, IconButton } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import { useState } from 'react';
import axios from 'axios';
import './Search.css';

axios.defaults.baseURL = 'https://dog.ceo/api';


export default function Search() {
  const [image, setImage] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.get('/breeds/image/random');
      setImage(response.data.message);
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <main>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Search"
          size="small"
          variant="outlined"
        />
        <IconButton aria-label="delete" type="submit">
          <PetsIcon />
        </IconButton>
      </form>
      <div className='imageWrapper'>
        <img className="dogImage" src={image} alt="" />
      </div>
    </main>
  );
}
