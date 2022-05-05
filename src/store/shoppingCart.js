import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
}







export const shoppingCart = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);      
      state.totalQuantity += 1;
      state.totalPrice = state.products.reduce((acc, product) => {
        return acc + product.price;
      }, 0);
    },
    removeProduct: (state, action) => {
      state.products.splice(action.pay, 1); 
      console.log("esse é o action",action.payload)  
      state.totalQuantity -= 1;
      state.totalPrice = state.products.reduce((acc, product) => {
        return acc + product.price;
      }, 0);             
    },
  }
})

export const { addProduct, removeProduct } = shoppingCart.actions;

export default shoppingCart.reducer;