import { configureStore } from '@reduxjs/toolkit'
import resultReducer from '../features/calc/calcSlice'
export const store = configureStore({
  reducer: {
  calc:resultReducer,
  },
})