import { configureStore, createReducer, createAction } from '@reduxjs/toolkit';

export const increment = createAction("myCounter/increment");
export const decrement = createAction('miCounter/decrement');

const counterReducer = createReducer(0, {
  [increment]: (state, action) => state + action.payload,
  [decrement]: (state, action) => state - action.payload,
})


export default configureStore({
  reducer: {
    myCounter: counterReducer,
  },
});


