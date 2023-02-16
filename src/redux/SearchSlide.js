import { createSlice } from "@reduxjs/toolkit";
import { fetchImages, fetchAllBreeds } from './operations';


export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    allBreeds: [],
    images: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchAllBreeds.fulfilled](state, action) {
      state.allBreeds = action.payload;
    },
    [fetchImages.fulfilled](state, action) {
      state.images = action.payload;
    },
    // [fetchImages.pending](state) {
    //   state.isLoading = true;
    // },
    // [fetchImages.rejected](state, action) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
});
