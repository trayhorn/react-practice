import { TextField, IconButton } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import { useState } from 'react';
import axios from 'axios';

export default function Sarch() {
  const [image, setImage] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await axios.get(
      'https://dog.ceo/api/breeds/image/random',
    );
    setImage(response.data.message);
  }

  return (
    <>
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
      <img className="dogImage" src={image} alt="" />
    </>
  );
}
