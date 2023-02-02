// import { TextField, Autocomplete, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useGetDogImageByBreedQuery, useGetBreedListQuery } from 'redux/dogApi';
import InfiniteScroll from 'react-infinite-scroll-component';
import PetsIcon from '@mui/icons-material/Pets';
import { IconButton } from '@mui/material';
import { nanoid } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';
import './Search.css';


export default function Search() {
  const [allBreeds, setAllBreeds] = useState([])
  const [breed, setBreed] = useState('');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [currentPageData, setCurrentPageData] = useState([]);
  const { data: breeds } = useGetBreedListQuery();
  const { data } = useGetDogImageByBreedQuery(
    breed.toLowerCase().split(' '),
    {
      skip: breed === '',
    },
  );


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
      setPage(prev => prev + 1);
      setCurrentPageData(data.message.slice(0, 24));
    }
  }, [breeds, data])


  const fetchMoreData = () => {
    if (data.message.length <= currentPageData.length) {
      setHasMore(false);
      setPage(1);
      return;
    }
    const startIndex = (page - 1) * 24;
    const endIndex = startIndex + 24;
    const finalIndex =
      endIndex > data.message.length ? data.message.length : endIndex;
    setCurrentPageData(prev => [
      ...prev,
      ...data.message.slice(startIndex, finalIndex),
    ]);
    setPage(prev => prev + 1);
  };

  const handleSelectChange = e => {
    setBreed(e.target.value);
    setHasMore(true);
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
      {data && (
        <InfiniteScroll
          dataLength={currentPageData.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
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
        </InfiniteScroll>
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
