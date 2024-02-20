import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const { data } = await axios.get(
    'https://dummyjson.com/products?limit=9&skip=0&select=title,price,thumbnail',
  );
  return data;
});

export const fetchProductsSkip = createAsyncThunk(
  'products/fetchProductsSkip',
  async (skip: number) => {
    const { data } = await axios.get(
      `https://dummyjson.com/products?limit=9&skip=${skip}&select=title,price,thumbnail`,
    );
    return data;
  },
);

export const fetchProductsSearch = createAsyncThunk(
  'products/fetchProductsSearch',
  async (value: string) => {
    const { data } = await axios.get(`https://dummyjson.com/products/search?q=${value}`);
    return data;
  },
);

export const fetchProductsOfCategories = createAsyncThunk(
  'products/fetchProductsOfCategories',
  async (value: string) => {
    const { data } = await axios.get(`https://dummyjson.com/products/category/${value}`);
    return data;
  },
);

export interface ProductsState {
  products: any[];
  total: number;
}

const initialState: ProductsState = {
  products: [],
  total: 0,
};

export const ProductsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.products = [];
      state.total = 0;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload.products;
      state.total = action.payload.total;
      console.log(state.products);
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.products = [];
      state.total = 0;
    });
    builder.addCase(fetchProductsSkip.pending, (state, action) => {});
    builder.addCase(fetchProductsSkip.fulfilled, (state, action) => {
      state.products = [...state.products, ...action.payload.products];
      state.total = action.payload.total;
      console.log(state.products);
    });
    builder.addCase(fetchProductsSkip.rejected, (state, action) => {});
    builder.addCase(fetchProductsSearch.pending, (state, action) => {
      state.products = [];
      state.total = 0;
    });
    builder.addCase(fetchProductsSearch.fulfilled, (state, action) => {
      state.products = action.payload.products;
      state.total = action.payload.total;
      console.log(state.products);
    });
    builder.addCase(fetchProductsSearch.rejected, (state, action) => {
      state.products = [];
      state.total = 0;
    });
    builder.addCase(fetchProductsOfCategories.pending, (state, action) => {
      state.products = [];
      state.total = 0;
    });
    builder.addCase(fetchProductsOfCategories.fulfilled, (state, action) => {
      state.products = action.payload.products;
      state.total = action.payload.total;
    });
    builder.addCase(fetchProductsOfCategories.rejected, (state, action) => {
      state.products = [];
      state.total = 0;
    });
  },
});

export const {} = ProductsSlice.actions;

export default ProductsSlice.reducer;
