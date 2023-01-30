import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './CounterSice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { breedListApi, dogApi } from './dogApi';

export const store = configureStore({
  reducer: {
    myCounter: counterSlice.reducer,
    [dogApi.reducerPath]: dogApi.reducer,
    [breedListApi.reducerPath]: breedListApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    dogApi.middleware,
    breedListApi.middleware
  ],
});

setupListeners(store.dispatch);
