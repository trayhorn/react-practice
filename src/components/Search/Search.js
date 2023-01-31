// import { TextField, Autocomplete, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useGetDogImageByBreedQuery, useGetBreedListQuery } from 'redux/dogApi';
import { IconButton, Button } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import { nanoid } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';
import './Search.css';


export default function Search() {
  const [allBreeds, setAllBreeds] = useState([])
  const [breed, setBreed] = useState('');
  const [page, setPage] = useState(1);
  const [currentPageData, setCurrentPageData] = useState([]);
  const { data: breeds } = useGetBreedListQuery();
  const { data } = useGetDogImageByBreedQuery(
    breed.toLowerCase().split(' '),
    {
      skip: breed === '',
    },
  );

  const handleSetCurrentPage = images => {
    const startIndex = (page - 1) * 24;
    const endIndex = startIndex + 24;
    page === 1
      ? setCurrentPageData(images.slice(startIndex, endIndex))
      : setCurrentPageData(prev => [
          ...prev,
          ...data.message.slice(startIndex, endIndex),
        ]);
  };

  useEffect(() => {
    if (breeds) {
      setAllBreeds(
        Object.entries(breeds.message).map(([name, value]) => ({
          name: name.replace(/^\w/, c => c.toUpperCase()),
          value,
        })),
      );
    }
    if (data) {
      handleSetCurrentPage(data.message);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [breeds, data, page])

  


  const handleSelectChange = e => {
    setBreed(e.target.value);
    if (page !== 1) { setPage(1) };
  }

  const notification = () => {
    Notiflix.Notify.info('Sorry, this button is doing nothing now');
  };

  return (
    <main className="searchContainer">
      <form className="searchForm" autoComplete="off">
        <select className="select" value={breed} onChange={handleSelectChange}>
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
        {currentPageData.map(imageUrl => (
            <div key={nanoid()} className="imageWrapper">
              <img
                className="dogImage"
                src={imageUrl}
                alt="the cutest dog ever"
              />
            </div>
          ))}
      </div>
      {currentPageData.length > 0 && data.message.length > 24 && (
        <Button
          sx={{ marginTop: '20px', marginLeft: '600px' }}
          variant="contained"
          onClick={() => setPage(prev => prev + 1)}
        >
          Load more
        </Button>
      )}
    </main>
  );
}



/* <Autocomplete
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
/> */
