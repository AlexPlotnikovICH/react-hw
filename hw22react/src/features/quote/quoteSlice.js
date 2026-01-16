import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// Асинхронное действие
export const fetchRandomQuote = createAsyncThunk(
  'quote/fetchRandomQuote',
  async () => {
    const response = await axios.get('https://dummyjson.com/quotes/random')
    return response.data
  },
)

// Начальное состояние
const initialState = {
  text: '',
  author: '',
  status: 'idle',
  error: null,
}

//  Слайс, который использует initialState
const quoteSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchRandomQuote.pending, state => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchRandomQuote.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.text = action.payload.quote
        state.author = action.payload.author
      })
      .addCase(fetchRandomQuote.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export default quoteSlice.reducer
