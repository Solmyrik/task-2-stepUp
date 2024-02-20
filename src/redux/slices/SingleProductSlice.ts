import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSingleProduct = createAsyncThunk(
  'product/fetchSingleProduct',
  async (id: string) => {
    console.log('ok');
    const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
    return data;
  },
);

export interface ProductState {
  product: any;
}

const initialState: ProductState = {
  product: {},
};

export const SingleProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleProduct.pending, (state, action) => {
      state.product = {};
    });
    builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
      state.product = action.payload;
      console.log(state.product);
    });
    builder.addCase(fetchSingleProduct.rejected, (state, action) => {
      state.product = {};
    });
  },
});

export const {} = SingleProductSlice.actions;

export default SingleProductSlice.reducer;
