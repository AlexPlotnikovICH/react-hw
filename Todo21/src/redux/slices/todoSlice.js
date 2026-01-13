import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    // Добавление
    addTodo: (state, action) => {
      state.items.push({
        id: Date.now(), // Уникальный ID на основе времени
        text: action.payload,
        isCompleted: false,
      })
    },
    // Удаление
    deleteTodo: (state, action) => {
      // Фильтруем массив: оставляем все, кроме того, чей ID пришел в action.payload
      state.items = state.items.filter(todo => todo.id !== action.payload)
    },
    // Переключение статуса (Complete / Undo)
    toggleTodo: (state, action) => {
      // Находим задачу по ID
      const todo = state.items.find(todo => todo.id === action.payload)
      if (todo) {
        // Переключаем флаг на противоположный
        todo.isCompleted = !todo.isCompleted
      }
    },
  },
})

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions

export default todoSlice.reducer
