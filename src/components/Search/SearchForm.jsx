import React from 'react';
import PetsIcon from '@mui/icons-material/Pets';
import { IconButton } from '@mui/material';
import { nanoid } from '@reduxjs/toolkit';


export default function SearchForm({ allBreeds, notification, handleSelectChange, breed }) {
  return (
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
  );
}
