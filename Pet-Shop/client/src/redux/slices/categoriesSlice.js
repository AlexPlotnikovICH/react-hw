import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// 1. Асинхронный запрос на сервер за категориями
export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    // Запрос на адрес всех категорий
    const { data } = await axios.get('http://localhost:3333/categories/all')
    return data
  },
)

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    list: [],
    status: 'idle', // 'loading' | 'succeeded' | 'failed'
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCategories.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.list = action.payload
      })
      .addCase(fetchCategories.rejected, state => {
        state.status = 'failed'
      })
  },
})

export default categoriesSlice.reducer
