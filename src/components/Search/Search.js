// import { TextField, Autocomplete, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useGetDogImageByBreedQuery, useGetBreedListQuery } from 'redux/dogApi';
import { nanoid } from '@reduxjs/toolkit';
import PetsIcon from '@mui/icons-material/Pets';
import { IconButton } from '@mui/material';
import Notiflix from 'notiflix';
import './Search.css';


export default function Search() {
  const [breed, setBreed] = useState('');
  const [allBreeds, setAllBreeds] = useState([])
  const { data } = useGetDogImageByBreedQuery(breed.toLocaleLowerCase().split(' '), {
    skip: breed === '',
  });

  const { data: breeds } = useGetBreedListQuery();

  useEffect(() => {
    if (breeds) {
      setAllBreeds(
        Object.entries(breeds.message).map(([name, value]) => ({
          name: name.replace(/^\w/, c => c.toUpperCase()),
          value,
        })),
      );
    }
  }, [breeds])


  const notification = () => {
    Notiflix.Notify.info('Sorry, this button is doing nothing now');
  }

  return (
    <main className="searchContainer">
      <form className="searchForm" autoComplete="off">
        <select className='select' value={breed} onChange={(e) => setBreed(e.target.value)}>
          {allBreeds.map(breed => (
            <React.Fragment key={nanoid()}>
              {breed.value.length === 0 ? (
                <option>{breed.name}</option>
              ) : (
                breed.value.map(value => (
                  <option key={nanoid()}>
                    {breed.name + ' ' + value[0].toUpperCase() + value.slice(1)}
                  </option>
                ))
              )}
            </React.Fragment>
          ))}
        </select>
        {/* <Autocomplete
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
        /> */}
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
            <div key={nanoid()} className="imageWrapper">
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