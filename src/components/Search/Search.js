import PetsIcon from '@mui/icons-material/Pets';
import { TextField, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import './Search.css';
import { fetchImage } from 'redux/operations';
import { getImage } from 'redux/selectors';




export default function Search() {
  const dispatch = useDispatch();
  const imageURL = useSelector(state => state.search.url);

  const { url, isLoading, error } = useSelector(getImage);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(fetchImage());
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
      {isLoading && <p>Loading image...</p>}
      {error && <p>{error}</p>}
      {url !== '' && (
        <div className="imageWrapper">
          <img className="dogImage" src={imageURL} alt="" />
        </div>
      )}
    </main>
  );
}
