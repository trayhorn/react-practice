import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://dog.ceo/api';

export const fetchImages = createAsyncThunk('search/fetchImages', async breed => {
  try {
    const { data } = await axios.get(`/breed/${breed.join('/')}/images`);
    return data.message;
  } catch (error) {
    console.log(error.message);
  }
});

export const fetchAllBreeds = createAsyncThunk('search/fetchAllBreeds', async () => {
  try {
    const { data } = await axios.get('/breeds/list/all');
    const structuredBreeds = Object.entries(data.message).map(
      ([name, value]) => ({
        name: name.replace(/^\w/, c => c.toUpperCase()),
        value,
      }),
    );
    return structuredBreeds;
  } catch (error) {
    console.log(error.message);
  }
})



