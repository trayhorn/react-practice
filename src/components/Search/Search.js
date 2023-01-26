import PetsIcon from '@mui/icons-material/Pets';
import {
  InputLabel,
  IconButton,
  MenuItem,
  FormControl,
  Select,
} from '@mui/material';
import { nanoid } from '@reduxjs/toolkit';
import { useEffect, useState } from 'react';
import { useGetDogImageByBreedQuery } from 'redux/dogApi';
import './Search.css';



export default function Search() {
  const [breed, setBreed] = useState('');
  const [allBreeds, setAllBreeds] = useState([])
  const { data, isFetching, refetch } = useGetDogImageByBreedQuery(breed, {
    skip: breed === '',
  });

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(r => r.json())
      .then(response =>
        setAllBreeds(
          Object.entries(response.message).map(([name, value]) => ({
            name,
            value,
          })),
        ),
      );
  }, [allBreeds])


  const handleChange = e => {
    setBreed(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    refetch();
  }

  return (
    <main>
      <form className="searchForm" autoComplete="off" onSubmit={handleSubmit}>
        <select
          value={breed}
          onChange={handleChange}
          style={{ padding: '5px', fontSize: '16px', borderRadius: '5px', width: 180 }}
        >
          {allBreeds.map(({ name }) => (
            <option key={nanoid()} value={name}>{name}</option>
          ))}
        </select>
        <IconButton aria-label="delete" type="submit" disabled={isFetching}>
          <PetsIcon />
        </IconButton>
      </form>
      {data && (
        <div className="imageWrapper">
          <img className="dogImage" src={data.message} alt="" />
        </div>
      )}
    </main>
  );
}
