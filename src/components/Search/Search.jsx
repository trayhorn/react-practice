import Notiflix from 'notiflix';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { fetchAllBreeds, fetchImages } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import SearchGallery from './SearchGallery';
import SearchForm from './SearchForm';
import './Search.css';


export default function Search() {
  const dispatch = useDispatch();
  const allBreeds = useSelector(state => state.search.allBreeds);
  const dogImages = useSelector(state => state.search.images);
  const [breed, setBreed] = useState('');
  const [page, setPage] = useState(1);
  const [currentPageData, setCurrentPageData] = useState([]);


  useEffect(() => {
    dispatch(fetchAllBreeds());
    if (breed) {
      dispatch(fetchImages(breed.toLowerCase().split(' ')));
    }
  }, [dispatch, breed]);

  useEffect(() => {
    if (dogImages.length > 0) {
      setCurrentPageData(dogImages.slice(0, 24));
    }
  }, [dogImages]);


  const handleSelectChange = e => {
    setBreed(e.target.value);
    setPage(1);
  }

  const onButtonClick = () => {
    setPage(prev => prev + 1);
    const startIndex = (page - 1) * 24;
    const endIndex = startIndex + 24;
    setCurrentPageData(prev => [
      ...prev,
      ...dogImages.slice(startIndex, endIndex),
    ]);
  }

  const notification = () => {
    Notiflix.Notify.info('Sorry, this button is doing nothing now');
  };

  return (
    <main className="searchContainer">
      <SearchForm
        allBreeds={allBreeds}
        notification={notification}
        handleSelectChange={handleSelectChange}
        breed={breed}
      />
      {dogImages.length > 0 && (
        <>
          <SearchGallery dogImages={currentPageData} />
          {currentPageData.length !== dogImages.length && (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                variant="contained"
                sx={{ marginTop: '30px' }}
                onClick={onButtonClick}
              >
                Load more
              </Button>
            </div>
          )}
        </>
      )}
    </main>
  );
}