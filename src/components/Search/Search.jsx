import { useEffect, useState } from 'react';
import { useGetDogImageByBreedQuery, useGetBreedListQuery } from 'redux/dogApi';
import SearchGallery from './SearchGallery';
import SearchForm from './SearchForm';
import Notiflix from 'notiflix';
import './Search.css';


export default function Search() {
  const [allBreeds, setAllBreeds] = useState([]);
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
      <SearchForm
        allBreeds={allBreeds}
        notification={notification}
        handleSelectChange={handleSelectChange}
        breed={breed}
      />
      {data && (
        <SearchGallery
          fetchMoreData={fetchMoreData}
          hasMore={hasMore}
          currentPageData={currentPageData}
        />
      )}
    </main>
  );
}