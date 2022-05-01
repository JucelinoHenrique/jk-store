import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './login.js';
import productsReducer from './products';
import shoppingCartReducer from './shoppingCart';

export const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer,
    login: loginReducer,
    products: productsReducer
  },
});
