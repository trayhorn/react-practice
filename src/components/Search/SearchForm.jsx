import PetsIcon from '@mui/icons-material/Pets';
import { IconButton } from '@mui/material';
import SelectOption from './SelectOption';
import { nanoid } from '@reduxjs/toolkit';

export default function SearchForm({ allBreeds, notification, handleSelectChange, breed }) {
  return (
    <form className="searchForm" autoComplete="off">
      <select className="select" value={breed} onChange={handleSelectChange}>
        {allBreeds.map(({ name, value }) => (
          <SelectOption
            key={nanoid()}
            name={name}
            value={value}
          />
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
