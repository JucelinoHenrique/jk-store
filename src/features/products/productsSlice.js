import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
  "produtcs/getProducts",
  async (dispath, getState) => {
    return await fetch("https://fakestoreapi.com/products").then((res) =>
      res.json()
    );
  }
);

const productsSlice = createSlice({
  name: "produtcs",
  initialState: {
    products: [],
    status: null,
  },
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.status = "loading";
    },
    [getProducts.fulfilled]: (state, action) => {
      state.status = "success";
      state.products = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default productsSlice.reducer;
