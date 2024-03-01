import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchQuiz = createAsyncThunk('quiz/fetchQuiz', async () => {
  const { data } = await axios.get(
    'https://dummyjson.com/products?limit=100&skip=0&select=title,rating,category,price,thumbnail',
  );
  return data;
});

export type QuizProduct = {
  id: number;
  title: string;
  rating: number;
  category: string;
  price: number;
  thumbnail: string;
};

export interface QuizState {
  products: QuizProduct[]; // Array of Product objects
}
const initialState: QuizState = {
  products: [],
};

export const QuizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchQuiz.pending, (state, action) => {
      state.products = [];
    });
    builder.addCase(fetchQuiz.fulfilled, (state, action) => {
      state.products = action.payload.products;
    });
    builder.addCase(fetchQuiz.rejected, (state, action) => {
      state.products = [];
    });
  },
});

export const {} = QuizSlice.actions;

export default QuizSlice.reducer;
