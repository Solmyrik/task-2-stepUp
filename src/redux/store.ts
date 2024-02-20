import { configureStore } from '@reduxjs/toolkit';
import CategoriesSlice from './slices/CategoriesSlice';
import ProductsSlice from './slices/ProductsSlice';
import SingleProductSlice from './slices/SingleProductSlice';

export const store = configureStore({
  reducer: {
    categories: CategoriesSlice,
    products: ProductsSlice,
    product: SingleProductSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
