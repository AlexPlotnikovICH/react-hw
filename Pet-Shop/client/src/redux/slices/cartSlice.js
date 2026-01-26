import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [], // Здесь хранятся товары
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // 1. Добавить товар
    addToCart(state, action) {
      const product = action.payload
      const existingProduct = state.list.find(item => item.id === product.id)

      if (existingProduct) {
        existingProduct.count += product.count
      } else {
        state.list.push(product)
      }
    },

    // 2. Удалить товар (по ID)
    deleteFromCart(state, action) {
      state.list = state.list.filter(item => item.id !== action.payload)
    },

    // 3. Увеличить количество (+1)
    increaseCount(state, action) {
      const item = state.list.find(item => item.id === action.payload)
      if (item) {
        item.count++
      }
    },

    // 4. Уменьшить количество (-1)
    decreaseCount(state, action) {
      const item = state.list.find(item => item.id === action.payload)
      if (item) {
        if (item.count > 1) {
          item.count--
        } else {
          // Если было 1 и нажали минус -> удаляем товар
          state.list = state.list.filter(p => p.id !== action.payload)
        }
      }
    },

    // 5. Очистить корзину (после заказа)
    clearCart(state) {
      state.list = []
    },
  },
})

export const {
  addToCart,
  deleteFromCart,
  increaseCount,
  decreaseCount,
  clearCart,
} = cartSlice.actions

export default cartSlice.reducer
