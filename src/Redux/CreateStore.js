import { configureStore } from '@reduxjs/toolkit';
import RandomPinReducer from '../Redux/Slice/RandomPinSlice';

export const store = configureStore({
  reducer: {
    randompin: RandomPinReducer, // Register Slice to store
  },
})