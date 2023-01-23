// import { fetchingInProgress, fetchingSuccess, fetchingError } from './store';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://dog.ceo/api';

export const fetchImage = createAsyncThunk(
  'search/fetchImage',
  async () => {
    const { data } = await axios.get('/breeds/image/random');
    return data.message;
  },
);

// export const fetchDogImage = () => async dispatch => {
//   try {
//     dispatch(fetchingInProgress());
//     const { data } = await axios.get('/breeds/image/random');
//     dispatch(fetchingSuccess(data.message));
//   } catch (error) {
//     console.log(error.message);
//     dispatch(fetchingError(error));
//   }
// };


