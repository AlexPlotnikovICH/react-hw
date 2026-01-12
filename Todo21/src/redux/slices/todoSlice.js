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
      // Redux Toolkit использует Immer, поэтому мы можем "мутировать" state напрямую
      state.items.push({
        id: Date.now(), // Уникальный ID на основе времени
        text: action.payload, // Текст задачи придет из формы
        isCompleted: false, // По умолчанию задача не выполнена
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

// Экспортируем все экшены для использования в компонентах
export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions

// Экспортируем редьюсер для store.js
export default todoSlice.reducer
