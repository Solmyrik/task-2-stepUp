import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllCategories = createAsyncThunk('categories/fetchAllCategories', async () => {
  const { data } = await axios.get('https://dummyjson.com/products/categories');
  return data;
});

export interface CategoriesState {
  categories: string[];
}

const initialState: CategoriesState = {
  categories: [],
};

export const CategoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllCategories.pending, (state, action) => {
      state.categories = [];
    });
    builder.addCase(fetchAllCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
      console.log(state.categories);
    });
    builder.addCase(fetchAllCategories.rejected, (state, action) => {
      state.categories = [];
    });
  },
});

export const {} = CategoriesSlice.actions;

export default CategoriesSlice.reducer;
