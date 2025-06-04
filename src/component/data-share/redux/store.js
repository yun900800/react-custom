import { configureStore, createReducer } from '@reduxjs/toolkit';

// Reducer
const counterReducer = createReducer({ count: 0 }, {
  INCREMENT: (state) => { state.count += 1 },
  DECREMENT: (state) => { state.count -= 1 }
});

const store = configureStore({
  reducer: counterReducer
});

export default store;
