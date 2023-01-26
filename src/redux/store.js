import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './CounterSice';
import { searchSlice } from './SearchSlide';
import { setupListeners } from '@reduxjs/toolkit/query';
import { dogApi } from './dogApi';

export const store = configureStore({
  reducer: {
    myCounter: counterSlice.reducer,
    search: searchSlice.reducer,
    [dogApi.reducerPath]: dogApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    dogApi.middleware,
  ],
});

setupListeners(store.dispatch);
