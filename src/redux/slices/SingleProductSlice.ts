import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUpdateProducts = createAsyncThunk(
  'product/fetchUpdateProducts',
  async ({ obj, id }: { obj: any; id: number }) => {
    const { data } = await axios.patch(`https://dummyjson.com/products/${id}`, { ...obj });
    return data;
  },
);
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
  discountPercentage: number;
}

const initialState: ProductState = {
  product: {},
  discountPercentage: 0,
};

export const SingleProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleProduct.pending, (state, action) => {
      state.product = {};
      state.discountPercentage = 0;
    });
    builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
      state.product = action.payload;
      state.discountPercentage = action.payload.discountPercentage;
    });
    builder.addCase(fetchSingleProduct.rejected, (state, action) => {
      state.product = {};
      state.discountPercentage = 0;
    });
    builder.addCase(fetchUpdateProducts.pending, (state, action) => {
      state.product = {};
    });
    builder.addCase(fetchUpdateProducts.fulfilled, (state, action) => {
      state.product = action.payload;
    });
    builder.addCase(fetchUpdateProducts.rejected, (state, action) => {
      state.product = {};
      state.discountPercentage = 0;
    });
  },
});

export const {} = SingleProductSlice.actions;

export default SingleProductSlice.reducer;
