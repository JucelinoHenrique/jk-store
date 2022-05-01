import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './loginSlice';
import productsReducer from './productsSlice';

export const store = configureStore({
  reducer: {

    login: loginReducer,
    products: productsReducer
  },
});
