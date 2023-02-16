import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './CounterSice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { searchSlice } from './SearchSlide';

export const store = configureStore({
  reducer: {
    myCounter: counterSlice.reducer,
    search: searchSlice.reducer,
  },
});

setupListeners(store.dispatch);
