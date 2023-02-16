import { useEffect, useState } from 'react';
import SearchGallery from './SearchGallery';
import SearchForm from './SearchForm';
import Notiflix from 'notiflix';
import './Search.css';
import { fetchAllBreeds, fetchImages } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';


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


  // const fetchMoreData = () => {
  //   if (data.message.length <= currentPageData.length) {
  //     setHasMore(false);
  //     setPage(1);
  //     return;
  //   }
  //   const startIndex = (page - 1) * 24;
  //   const endIndex = startIndex + 24;
  //   const finalIndex =
  //     endIndex > data.message.length ? data.message.length : endIndex;
  //   setCurrentPageData(prev => [
  //     ...prev,
  //     ...data.message.slice(startIndex, finalIndex),
  //   ]);
  //   setPage(prev => prev + 1);
  // };

  const handleSelectChange = e => {
    setBreed(e.target.value);
    // setHasMore(true);
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
        <SearchGallery
          dogImages={dogImages}
        />
      )}
    </main>
  );
}