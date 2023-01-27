import PetsIcon from '@mui/icons-material/Pets';
import { TextField, Autocomplete, IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import { useGetDogImageByBreedQuery } from 'redux/dogApi';
import Notiflix from 'notiflix';
import './Search.css';


export default function Search() {
  const [breed, setBreed] = useState('');
  const [allBreeds, setAllBreeds] = useState([])
  const { data, isFetching } = useGetDogImageByBreedQuery(breed, {
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

  const notification = () => {
    Notiflix.Notify.info('Sorry, this button is doing nothing now');
  }

  // const handleSubmit = e => {
  //   e.preventDefault();
  // }

  return (
    <main className="searchContainer">
      <form className="searchForm" autoComplete="off">
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
          type="button"
          onClick={() => notification()}
        >
          <PetsIcon />
        </IconButton>
      </form>
      <div className="galleryBox">
        {data &&
          data.message.map(imageUrl => (
            <div className="imageWrapper">
              <img
                className="dogImage"
                src={imageUrl}
                alt="the cutest dog ever"
              />
            </div>
          ))}
      </div>
    </main>
  );
}