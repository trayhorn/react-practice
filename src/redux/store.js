import { configureStore, createSlice } from '@reduxjs/toolkit';
import { fetchImage } from './operations';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 100,
  reducers: {
    increment(state, action) {
      return state += action.payload;
    },
    decrement(state, action) {
      return state -= action.payload;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;



const searchSlice = createSlice({
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


export default configureStore({
  reducer: {
    myCounter: counterSlice.reducer,
    search: searchSlice.reducer
  },
});
