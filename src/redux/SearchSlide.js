import { createSlice } from "@reduxjs/toolkit";
import { fetchImage } from './operations';


export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    url: '',
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchImage.pending](state) {
      if (state.url !== '') {
        state.url = '';
      }
      state.isLoading = true;
    },
    [fetchImage.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.url = action.payload;
    },
    [fetchImage.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
