import { configureStore, createSlice } from '@reduxjs/toolkit';

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

export default configureStore({
  reducer: {
    myCounter: counterSlice.reducer,
  }
});
