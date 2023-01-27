import PetsIcon from '@mui/icons-material/Pets';
import { TextField, Autocomplete, IconButton } from '@mui/material';
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
            name: name.replace(/^\w/, c => c.toUpperCase()),
            value,
          })),
        ),
      );
  }, [])

  const handleSubmit = e => {
    e.preventDefault();
    refetch();
  }

  return (
    <main className="searchContainer">
      <form className="searchForm" autoComplete="off" onSubmit={handleSubmit}>
        <Autocomplete
          value={breed.name}
          onChange={(_, newValue) => {
            setBreed(newValue.name);
          }}
          getOptionLabel={breed => breed.name}
          isOptionEqualToValue={(option, value) => option.name === value.name}
          disablePortal
          id="combo-box-demo"
          options={allBreeds}
          sx={{ width: 250 }}
          renderInput={params => {
            return <TextField {...params} label="Breed" />;
          }}
        />
        <IconButton
          sx={{ marginLeft: '15px' }}
          aria-label="delete"
          type="submit"
          disabled={isFetching}
        >
          <PetsIcon />
        </IconButton>
      </form>
      {data && (
        <div className="imageWrapper">
          <img
            className="dogImage"
            src={data.message}
            alt="the cutest dog ever"
          />
        </div>
      )}
    </main>
  );
}