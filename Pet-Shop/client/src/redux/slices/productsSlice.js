import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// 1. Асинхронное действие: Запрос на сервер
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetch('http://localhost:3333/products/all');
    const data = await response.json();
    return data;
  }
);

// 2. Slice
const productsSlice = createSlice({
  name: 'products',
  initialState: {
    list: [],
    status: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = 'success';
      state.list = action.payload;
    });
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.status = 'failed';
    });
  }
});

export default productsSlice.reducer;