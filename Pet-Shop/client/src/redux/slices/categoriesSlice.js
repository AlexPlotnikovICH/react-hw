import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// 1. Старый запрос (список всех категорий)
export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const response = await fetch('http://localhost:3333/categories/all')
    const data = await response.json()
    return data
  },
)

// 2. НОВЫЙ ЗАПРОС: Получаем товары одной конкретной категории по её ID
export const fetchCategory = createAsyncThunk(
  'categories/fetchCategory',
  async id => {
    // Запрашиваем данные по конкретному ID (например, /categories/1)
    const response = await fetch(`http://localhost:3333/categories/${id}`)
    const data = await response.json()
    return data // Сервер вернет объект: { category: {...}, data: [список товаров] }
  },
)

const initialState = {
  list: [], // Список всех категорий
  categoryTitle: '',
  categoryProducts: [], // список товаров этой категории
}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // Логика для списка всех категорий
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.list = action.payload
      })
      // Когда пришли данные одной категории
      .addCase(fetchCategory.fulfilled, (state, action) => {
        // Сервер присылает объект, где:
        // action.payload.category.title — это название ("Toys")
        // action.payload.data — это массив товаров
        state.categoryTitle = action.payload.category.title
        state.categoryProducts = action.payload.data
      })
  },
})

export default categoriesSlice.reducer
