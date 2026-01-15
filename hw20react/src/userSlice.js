import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [
    { id: 1, name: 'Иван Иванов', email: 'ivan@mail.ru' },
    { id: 2, name: 'Анна Смирнова', email: 'anna@yandex.ru' },
    { id: 3, name: 'Петр Сидоров', email: 'petr@gmail.com' },
  ],
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
})

export default usersSlice.reducer
